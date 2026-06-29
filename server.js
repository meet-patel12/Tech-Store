const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB via Compass'))
    .catch(err => console.error('MongoDB connection error:', err));


// ==========================================
// SCHEMAS & MODELS
// ==========================================

// ── User Schema ──
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// ── Product Schema ──
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

const Product = mongoose.model('Product', productSchema);

// ── Order Schema ──
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    items: [{
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'confirmed', enum: ['confirmed', 'processing', 'shipped', 'delivered', 'cancelled'] },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);


// ==========================================
// API ROUTES — AUTHENTICATION
// ==========================================

// ── Register (Sign Up) ──
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ message: 'An account with this email already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword
        });

        const savedUser = await user.save();

        res.status(201).json({
            message: 'Account created successfully',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                createdAt: savedUser.createdAt
            }
        });

    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
});

// ── Login ──
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
});


// ==========================================
// API ROUTES — PRODUCTS
// ==========================================

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// ==========================================
// API ROUTES — ORDERS
// ==========================================

// ── Place Order (Checkout) ──
app.post('/api/orders', async (req, res) => {
    try {
        const { userId, userName, userEmail, items, totalAmount } = req.body;

        // Validation
        if (!userId || !items || items.length === 0) {
            return res.status(400).json({ message: 'User ID and cart items are required' });
        }

        const order = new Order({
            userId,
            userName,
            userEmail,
            items,
            totalAmount,
            status: 'confirmed'
        });

        const savedOrder = await order.save();

        res.status(201).json({
            message: 'Order placed successfully!',
            order: savedOrder
        });

    } catch (error) {
        console.error('Order error:', error);
        res.status(500).json({ message: 'Failed to place order. Please try again.' });
    }
});

// ── Get Orders for a User ──
app.get('/api/orders/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ── Get All Orders (admin) ──
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));