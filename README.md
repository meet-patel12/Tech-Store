# 🛒 The Tech Heaven

> **Premium Tech Gear E-Commerce Store** — A sleek, modern online store for keyboards, mice, monitors, audio gear, and more.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages](#-pages)
- [Design System](#-design-system)
- [API Endpoints](#-api-endpoints)
- [Product Catalog](#-product-catalog)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**The Tech Heaven** is a fully responsive e-commerce web application designed for tech enthusiasts. It features a curated collection of 13 premium tech products — from mechanical keyboards and gaming mice to 4K monitors and NVMe SSDs. The UI is built with a **dark teal/emerald** design theme that delivers a premium, modern shopping experience.

---

## ✨ Features

### 🎨 Frontend
- **Dark Teal/Emerald Theme** — Sleek dark UI with vibrant `#2DD4A8` teal accents
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — Card fade-ins, hover effects, micro-interactions, and transitions
- **Product Search** — Real-time search/filter on the products page
- **Product Detail Pages** — Dynamic detail view with ratings, offers, highlights, and description
- **Shopping Cart** — Persistent cart with quantity controls, item removal, and total calculation
- **Cart Badge** — Live item count badge on the navigation cart link
- **Custom Scrollbar** — Styled WebKit scrollbar matching the theme
- **Accessibility** — Focus-visible indicators, reduced-motion support, semantic HTML
- **SEO Optimized** — Proper meta descriptions, title tags, and heading hierarchy

### 🔧 Backend
- **Express.js REST API** — Product CRUD operations
- **MongoDB Integration** — Product data storage via Mongoose
- **CORS Enabled** — Cross-origin resource sharing support
- **Environment Variables** — Secure configuration via `.env` file

---

## 🛠 Tech Stack

| Layer       | Technology                                      |
| ----------- | ----------------------------------------------- |
| **Frontend** | HTML5, CSS3 (Vanilla), JavaScript (ES6+)       |
| **Backend**  | Node.js, Express.js                            |
| **Database** | MongoDB (via Mongoose ODM)                     |
| **Fonts**    | Google Fonts — Inter (body), Outfit (headings) |
| **Tooling**  | dotenv, cors                                   |

---

## 📁 Project Structure

```
the-tech-heaven/
├── assets/
│   └── images/                  # Product images (13 products)
│       ├── AULA F87 Wireless Mechanical Keyboard.jpeg
│       ├── EVOFOX Phantom 2 RGB Gaming Mouse ....jpeg
│       ├── JBL Tune 720BT - Wireless.jpeg
│       ├── 4K Monitor.jpeg
│       ├── usbc_hub_1780912382944.png
│       ├── Nulaxy C902 Webcam 1080P....jpeg
│       ├── MagSafe Power Bank....jpeg
│       ├── LED Desk Lamp....jpeg
│       ├── Adjustable Laptop Stand....jpeg
│       ├── 5 Things To Consider Before Buying....jpeg
│       ├── Samsung 990 PRO NVMe M.2 SSD....jpeg
│       ├── Glorious Numpad Prebuilt....jpeg
│       └── RGB Extended Gaming Mouse Pad....jpeg
│
├── index.html                   # Home page — welcome hero + CTA
├── product.html                 # Product listing page with search
├── product-detail.html          # Dynamic product detail page
├── cart.html                    # Shopping cart page
│
├── style.css                    # Complete design system + all styles
├── script.js                    # Product data, cart logic, rendering
│
├── server.js                    # Express.js backend + MongoDB API
├── package.json                 # Node.js dependencies & scripts
├── .env                         # Environment variables (MONGO_URI, PORT)
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- A modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/the-tech-heaven.git
   cd the-tech-heaven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/techheaven
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

5. **Open the frontend**

   Simply open `index.html` in your browser, or serve it using a local server:
   ```bash
   npx serve .
   ```

> **Note:** The frontend works independently with the product data hardcoded in `script.js`. The backend API is optional and can be used for dynamic product management.

---

## 📄 Pages

### 🏠 Home (`index.html`)
- Welcome hero section with tagline
- Call-to-action button linking to the product catalog
- Animated entrance effects

### 🛍 Products (`product.html`)
- Vertical product card list (Flipkart-style horizontal layout)
- Each card shows: image, name, price, description preview, highlight tags
- Real-time search filter by product name
- "Add to Cart" button with visual feedback
- Click-through to product detail page

### 📦 Product Detail (`product-detail.html`)
- Dynamic rendering based on URL query parameter (`?id=1`)
- Full product image with zoom-on-hover
- Star rating display
- Price with MRP strikethrough and discount percentage
- Available offers section
- Product highlights list
- Full description
- "Add to Cart" and "Buy Now" action buttons
- Breadcrumb navigation

### 🛒 Cart (`cart.html`)
- List of cart items with quantity controls (+/−)
- Individual item removal
- Order total calculation
- "Clear Cart" and "Proceed to Checkout" buttons
- Persistent cart data via `localStorage`

---

## 🎨 Design System

### Color Palette (Dark Teal / Emerald Theme)

| Token              | Color                                                        | Hex       |
| ------------------- | ------------------------------------------------------------ | --------- |
| **Primary**         | ![#2DD4A8](https://via.placeholder.com/12/2DD4A8/2DD4A8.png) Bright Teal   | `#2DD4A8` |
| **Primary Dark**    | ![#1A9E80](https://via.placeholder.com/12/1A9E80/1A9E80.png) Deep Teal     | `#1A9E80` |
| **Background**      | ![#0A0A0A](https://via.placeholder.com/12/0A0A0A/0A0A0A.png) Pure Black    | `#0A0A0A` |
| **Surface**         | ![#151518](https://via.placeholder.com/12/151518/151518.png) Near Black    | `#151518` |
| **Surface Light**   | ![#2B2B30](https://via.placeholder.com/12/2B2B30/2B2B30.png) Dark Charcoal | `#2B2B30` |
| **Card**            | ![#1C1C22](https://via.placeholder.com/12/1C1C22/1C1C22.png) Charcoal      | `#1C1C22` |
| **Border**          | ![#3A3A42](https://via.placeholder.com/12/3A3A42/3A3A42.png) Dark Gray     | `#3A3A42` |
| **Text**            | ![#E8E8EC](https://via.placeholder.com/12/E8E8EC/E8E8EC.png) Soft White    | `#E8E8EC` |
| **Text Muted**      | ![#8A8A96](https://via.placeholder.com/12/8A8A96/8A8A96.png) Dim Gray      | `#8A8A96` |
| **Danger**          | ![#FF4D5A](https://via.placeholder.com/12/FF4D5A/FF4D5A.png) Neon Red      | `#FF4D5A` |

### Typography

| Usage     | Font Family            | Weights          |
| --------- | ---------------------- | ---------------- |
| Body      | Inter                  | 400, 500, 600, 700 |
| Headings  | Outfit                 | 600, 700, 800    |

### Spacing Scale

```
xs: 0.25rem  |  sm: 0.5rem  |  md: 1rem  |  lg: 1.5rem
xl: 2rem     |  2xl: 3rem   |  3xl: 4rem
```

### Border Radius

```
sm: 6px  |  md: 12px  |  lg: 20px  |  xl: 28px  |  full: 50%
```

---

## 🔌 API Endpoints

The backend provides a REST API for product management:

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| `GET`  | `/api/products`   | Fetch all products      |
| `POST` | `/api/products`   | Add a new product       |

### Example: Add a Product

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gaming Headset",
    "price": 3499,
    "description": "Premium wireless gaming headset",
    "image": "assets/images/headset.jpeg"
  }'
```

---

## 📦 Product Catalog

The store features **13 products** with data defined in `script.js`:

| #  | Product                | Price      |
| -- | ---------------------- | ---------- |
| 1  | Mechanical Keyboard    | ₹5,499     |
| 2  | Gaming Mouse           | ₹799       |
| 3  | Headphones (JBL 720BT) | ₹4,999    |
| 4  | USB-C Hub              | ₹1,499     |
| 5  | 4K Monitor             | ₹24,999    |
| 6  | HD Webcam              | ₹2,999     |
| 7  | Wireless Charger       | ₹999       |
| 8  | LED Desk Lamp          | ₹1,299     |
| 9  | Laptop Stand           | ₹1,199     |
| 10 | Bluetooth Speaker      | ₹2,499     |
| 11 | SSD 1TB (Samsung 990)  | ₹26,790    |
| 12 | Mechanical Numpad      | ₹1,999     |
| 13 | RGB Mouse Pad          | ₹899       |

---

## 🖼 Screenshots

> _Add screenshots of your running application here._

<!--
![Home Page](screenshots/home.png)
![Products Page](screenshots/products.png)
![Product Detail](screenshots/detail.png)
![Cart Page](screenshots/cart.png)
-->

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>The Tech Heaven Team</strong>
</p>
