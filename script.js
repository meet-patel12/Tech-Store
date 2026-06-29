// all the products data is stored here in an array
// each product has id, name, price, image, description etc
const products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        price: 5499,
        displayPrice: "₹5,499",
        image: "assets/images/AULA F87 Wireless Mechanical Keyboard.jpeg",
        description: "AULA F87 Wireless Mechanical Keyboard with hot-swappable pre-lubed switches, 75% layout, and customizable RGB backlighting. Perfect for gaming and productivity.",
        highlights: ["Hot-swappable switches", "75% compact layout", "RGB backlighting", "Wireless connectivity", "Pre-lubed for smooth typing"]
    },
    {
        id: 2,
        name: "Gaming Mouse",
        price: 799,
        displayPrice: "₹799",
        image: "assets/images/EVOFOX Phantom 2 RGB Gaming Mouse 🎮✨ _ Clean Gaming & Desk Setup Essential.jpeg",
        description: "EVOFOX Phantom 2 RGB Gaming Mouse with precision sensor, ergonomic design, and vibrant RGB lighting. A must-have for every gaming setup.",
        highlights: ["High-precision sensor", "Ergonomic design", "RGB lighting effects", "6 programmable buttons", "Adjustable DPI"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 4999,
        displayPrice: "₹4,999",
        image: "assets/images/JBL Tune 720BT - Wireless.jpeg",
        description: "JBL Tune 720BT Wireless Over-Ear Headphones with powerful JBL Pure Bass sound, 76-hour battery life, and lightweight comfort for all-day listening.",
        highlights: ["JBL Pure Bass sound", "76-hour battery life", "Bluetooth 5.3", "Lightweight & foldable", "Multi-point connection"]
    },
    {
        id: 4,
        name: "USB-C Hub",
        price: 1499,
        displayPrice: "₹1,499",
        image: "assets/images/usbc_hub_1780912382944.png",
        description: "Compact USB-C Hub with multiple ports including HDMI, USB 3.0, SD card reader, and power delivery. Expand your laptop's connectivity instantly.",
        highlights: ["4K HDMI output", "USB 3.0 ports", "SD/microSD card reader", "100W Power Delivery", "Plug & Play"]
    },
    {
        id: 5,
        name: "4K Monitor",
        price: 24999,
        displayPrice: "₹24,999",
        image: "assets/images/4K Monitor.jpeg",
        description: "Ultra-sharp 4K UHD Monitor with IPS panel, thin bezels, and vibrant color accuracy. Ideal for content creation, coding, and immersive entertainment.",
        highlights: ["4K UHD resolution", "IPS panel technology", "Ultra-thin bezels", "99% sRGB coverage", "Eye-care technology"]
    },
    {
        id: 6,
        name: "HD Webcam",
        price: 2999,
        displayPrice: "₹2,999",
        image: "assets/images/Nulaxy C902 Webcam 1080P, Web Camera PC con Micrófono de Privacidad para Videollamadas, Clase___.jpeg",
        description: "Nulaxy C902 Full HD 1080P Webcam with built-in microphone and privacy cover. Crystal-clear video for calls, streaming, and remote work.",
        highlights: ["1080P Full HD", "Built-in microphone", "Privacy cover included", "Auto light correction", "Wide-angle lens"]
    },
    {
        id: 7,
        name: "Wireless Charger",
        price: 999,
        displayPrice: "₹999",
        image: "assets/images/MagSafe Power Bank 10800mAh Magnetic Power Bank Portable USB C Battery Charger B705.jpeg",
        description: "MagSafe Magnetic Power Bank with 10800mAh capacity, USB-C charging, and slim portable design. Keep your devices powered on the go.",
        highlights: ["10800mAh capacity", "MagSafe compatible", "USB-C fast charging", "Slim portable design", "LED battery indicator"]
    },
    {
        id: 8,
        name: "LED Desk Lamp",
        price: 1299,
        displayPrice: "₹1,299",
        image: "assets/images/LED Desk Lamp for Study & Home Office Setup.jpeg",
        description: "Modern LED Desk Lamp with adjustable brightness levels, color temperature modes, and flexible gooseneck design for study and home office.",
        highlights: ["Adjustable brightness", "Multiple color temperatures", "Flexible gooseneck", "USB charging port", "Eye-friendly LED"]
    },
    {
        id: 9,
        name: "Laptop Stand",
        price: 1199,
        displayPrice: "₹1,199",
        image: "assets/images/Adjustable Laptop Stand with Heat-Vent for Home Office & Gaming Setup.jpeg",
        description: "Adjustable Laptop Stand with heat-vent design for improved airflow. Ergonomic height adjustment to reduce neck and back strain.",
        highlights: ["Adjustable height & angle", "Heat-vent design", "Ergonomic posture support", "Sturdy aluminum build", "Fits up to 17\" laptops"]
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        price: 2499,
        displayPrice: "₹2,499",
        image: "assets/images/5 Things To Consider Before Buying A Wireless Bluetooth Speaker.jpeg",
        description: "Portable Wireless Bluetooth Speaker with powerful bass, 360° surround sound, waterproof design, and long battery life for outdoor adventures.",
        highlights: ["360° surround sound", "IPX7 waterproof", "20-hour battery life", "Built-in microphone", "Compact & portable"]
    },
    {
        id: 11,
        name: "SSD 1TB",
        price: 26790,
        displayPrice: "₹26,790",
        image: "assets/images/Samsung 990 PRO NVMe M_2 SSD , 1 TB, PCIe 4.0, 7.450 MB_s Lesen, 6.900 MB_s Schreiben, Interne SSD .jpeg",
        description: "Samsung 990 PRO NVMe M.2 SSD with 1TB storage, PCIe 4.0 interface, up to 7,450 MB/s read speed. Blazing-fast performance for gaming and creative work.",
        highlights: ["1TB storage capacity", "PCIe 4.0 NVMe", "7,450 MB/s read speed", "6,900 MB/s write speed", "Samsung V-NAND technology"]
    },
    {
        id: 12,
        name: "Mechanical Numpad",
        price: 1999,
        displayPrice: "₹1,999",
        image: "assets/images/Glorious _ _ Numpad Prebuilt _ Black Slate _ Best Buy.jpeg",
        description: "Glorious Mechanical Numpad (Prebuilt) in Black Slate. Hot-swappable switches with premium build quality for data entry and productivity.",
        highlights: ["Hot-swappable switches", "Premium aluminum frame", "USB-C connection", "RGB per-key lighting", "N-key rollover"]
    },
    {
        id: 13,
        name: "RGB Mouse Pad",
        price: 899,
        displayPrice: "₹899",
        image: "assets/images/RGB Extended Gaming Mouse Pad with USB Hub for Ultimate Setup Flexibility.jpeg",
        description: "Extended RGB Gaming Mouse Pad with built-in USB Hub. Smooth micro-weave surface, non-slip rubber base, and 14 lighting modes for the ultimate desk setup.",
        highlights: ["Extended size (800×300mm)", "Built-in USB Hub", "14 RGB lighting modes", "Micro-weave surface", "Non-slip rubber base"]
    }
];

// making products global so other files can also use it
window.products = products;

// this function adds the rupee sign and comma formatting to price
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// getting cart data from localStorage (if nothing is there, use empty array)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// this function shows the number of items in cart on the navbar badge
function updateCartBadge() {
    const cartLinks = document.querySelectorAll('a[href="cart.html"]');
    cartLinks.forEach(link => {
        // first remove old badge if its already there
        const existingBadge = link.querySelector('.cart-badge');
        if (existingBadge) existingBadge.remove();

        if (cart.length > 0) {
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.textContent = cart.length;
            link.style.position = 'relative';
            link.appendChild(badge);
        }
    });
}

// function to add product to cart and show a small animation on button
function addToCart(name, price, button) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // changing button text to show item was added (looks cool)
    if (button) {
        const originalText = button.textContent;
        button.textContent = '✓ Added!';
        button.style.backgroundColor = '#2DD4A8';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 1000);
    }

    updateCartBadge();
}

// when page finishes loading, run all this stuff
document.addEventListener('DOMContentLoaded', () => {

    // smooth scroll to top when clicking home link
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // if we are on product page then show all the products
    const productList = document.getElementById('product-list');
    if (productList) {
        renderProductList(productList);
    }

    // search bar - filters products when user types something
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.product-card');

            cards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // if we are on product detail page then render that product's info
    const detailContainer = document.getElementById('product-detail');
    if (detailContainer) {
        renderProductDetail(detailContainer);
    }

    // adding click event to all add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price, button);
        });
    });

    // if we are on cart page then show cart items
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        displayCart();
    }

    // update the cart badge number every time page loads
    updateCartBadge();

    // check if user is logged in and show their initial on header
    updateHeaderLoginState();
});


// this function creates all the product cards and puts them on the page
function renderProductList(container) {
    container.innerHTML = '';

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.06}s`;

        card.innerHTML = `
            <a href="product-detail.html?id=${product.id}" class="product-card-link">
                <div class="product-card-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-card-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.displayPrice}</p>
                    <p class="product-card-desc">${product.description.substring(0, 100)}...</p>
                    <ul class="product-card-highlights">
                        ${product.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
            </a>
            <div class="product-card-actions">
                <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        `;

        // when user clicks add to cart on this card
        const btn = card.querySelector('.add-to-cart');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(product.name, product.price, btn);
        });

        container.appendChild(card);
    });
}


// this function renders the full product detail page with all info
function renderProductDetail(container) {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = `
            <div class="detail-not-found">
                <h2>Product not found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="product.html" class="cta-button">← Back to Products</a>
            </div>
        `;
        return;
    }

    // changing the browser tab title to show product name
    document.title = `${product.name} — The Tech Heaven`;

    container.innerHTML = `
        <div class="detail-breadcrumb">
            <a href="index.html">Home</a> <span>›</span>
            <a href="product.html">Products</a> <span>›</span>
            <span class="current">${product.name}</span>
        </div>

        <div class="detail-layout">
            <div class="detail-image-section">
                <div class="detail-image-main">
                    <img src="${product.image}" alt="${product.name}" id="detail-main-img">
                </div>
            </div>

            <div class="detail-info-section">
                <h1 class="detail-title">${product.name}</h1>
                
                <div class="detail-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="rating-count">4.2 (1,247 ratings)</span>
                </div>

                <div class="detail-price-box">
                    <span class="detail-price">${product.displayPrice}</span>
                    <span class="detail-mrp">₹${Math.round(product.price * 1.4).toLocaleString('en-IN')}</span>
                    <span class="detail-discount">40% off</span>
                </div>

                <div class="detail-offers">
                    <h4>Available Offers</h4>
                    <ul>
                        <li>🏷️ Bank Offer: 10% off on HDFC Credit Card</li>
                        <li>🏷️ Partner Offer: Extra ₹500 off on exchange</li>
                        <li>🚚 Free Delivery on orders above ₹499</li>
                    </ul>
                </div>

                <div class="detail-highlights">
                    <h4>Highlights</h4>
                    <ul>
                        ${product.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>

                <p class="detail-description">${product.description}</p>

                <div class="detail-actions">
                    <button class="add-to-cart-detail" id="detail-add-to-cart">
                        🛒 Add to Cart
                    </button>
                    <button class="buy-now-btn" id="detail-buy-now">
                        ⚡ Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;

    // add to cart button click handler
    const addBtn = document.getElementById('detail-add-to-cart');
    addBtn.addEventListener('click', () => {
        addToCart(product.name, product.price, addBtn);
    });

    // buy now button - adds to cart and then takes user to cart page directly
    const buyBtn = document.getElementById('detail-buy-now');
    buyBtn.addEventListener('click', () => {
        addToCart(product.name, product.price, null);
        window.location.href = 'cart.html';
    });
}


// this function shows all the items in the cart on the cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        document.getElementById('cart-total').innerText = '0.00';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `  
            <p><strong>${item.name}</strong> — ₹${item.price.toLocaleString('en-IN')} × ${item.quantity || 1} = ₹${itemTotal.toLocaleString('en-IN')}</p>
            <div class="cart-item-actions">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span class="qty-display">${item.quantity || 1}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('cart-total').innerText = total.toLocaleString('en-IN');
}

// cart buttons - increase quantity, decrease quantity, remove item, clear cart

// plus minus button for changing how many items user wants
window.changeQty = function (index, delta) {
    if (!cart[index]) return;
    cart[index].quantity = (cart[index].quantity || 1) + delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartBadge();
};

// removes one item from cart when user clicks remove
window.removeItem = function (index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartBadge();
};

// clear cart button - removes everything from cart
const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartBadge();
    });
}


// base url for API calls (gets the current website url automatically)
const API_BASE = window.location.origin;


// ========== LOGIN AND SIGNUP PAGE CODE ==========

// this shows those small popup messages at top right corner
function showToast(message, type = 'success') {
    // remove old toast if already showing
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// checks if email format is correct using regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// checks how strong the password is (weak, medium, strong)
function getPasswordStrength(password) {
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { level: 'weak', label: 'Weak password' };
    if (score <= 3) return { level: 'medium', label: 'Fair password' };
    return { level: 'strong', label: 'Strong password' };
}

// shows error message below input field
function showError(errorId, message) {
    const el = document.getElementById(errorId);
    if (!el) return;
    if (message) el.textContent = message;
    el.classList.add('visible');
}

function hideError(errorId) {
    const el = document.getElementById(errorId);
    if (el) el.classList.remove('visible');
}

// adds red or green border to input box depending on if its valid or not
function setInputState(input, state) {
    input.classList.remove('input-error', 'input-success');
    if (state === 'error') input.classList.add('input-error');
    if (state === 'success') input.classList.add('input-success');
}

// toggle to show/hide password when clicking the eye icon
function initPasswordToggle(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    if (!toggle || !input) return;

    toggle.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';

        const eyeIcon = toggle.querySelector('.eye-icon');
        const eyeOffIcon = toggle.querySelector('.eye-off-icon');
        if (eyeIcon && eyeOffIcon) {
            eyeIcon.style.display = isPassword ? 'none' : 'block';
            eyeOffIcon.style.display = isPassword ? 'block' : 'none';
        }
    });
}

// shows loading spinner on button while waiting for server response
function setButtonLoading(btn, loading) {
    if (loading) {
        btn.classList.add('loading');
    } else {
        btn.classList.remove('loading');
    }
}

// gets the logged in user info from localStorage
function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('techheaven_current_user'));
    } catch {
        return null;
    }
}

// if user is logged in, show their first letter instead of login icon
function updateHeaderLoginState() {
    const loginBtn = document.querySelector('.header-login-btn');
    if (!loginBtn) return;

    const user = getCurrentUser();
    if (!user || !user.name) return; // Not logged in

    // getting first letter of user's name for the avatar circle
    const initial = user.name.charAt(0).toUpperCase();

    // replacing the login icon with the user's initial letter
    loginBtn.innerHTML = `<span class="header-user-initial">${initial}</span>`;
    loginBtn.classList.add('logged-in');
    loginBtn.href = '#';
    loginBtn.title = `Signed in as ${user.name}`;

    // creating the dropdown that shows when clicking on avatar
    const dropdown = document.createElement('div');
    dropdown.className = 'header-user-dropdown';
    dropdown.innerHTML = `
        <div class="dropdown-user-info">
            <div class="dropdown-avatar">${initial}</div>
            <div class="dropdown-details">
                <span class="dropdown-name">${user.name}</span>
                <span class="dropdown-email">${user.email}</span>
            </div>
        </div>
        <div class="dropdown-divider"></div>
        <button class="dropdown-logout-btn" id="header-logout-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
        </button>
    `;

    loginBtn.parentElement.style.position = 'relative';
    loginBtn.parentElement.appendChild(dropdown);

    // show/hide dropdown when clicking on the avatar button
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    // close the dropdown if user clicks anywhere else on page
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && e.target !== loginBtn) {
            dropdown.classList.remove('active');
        }
    });

    // logout button - clears user data and goes back to login page
    const logoutBtn = document.getElementById('header-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            localStorage.removeItem('techheaven_current_user');
            showToast('You have been signed out.', 'info');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        });
    }
}

// setting up everything on the login page when it loads
document.addEventListener('DOMContentLoaded', () => {
    const loginWrapper = document.getElementById('login-form-wrapper');
    const signupWrapper = document.getElementById('signup-form-wrapper');
    if (!loginWrapper) return; // Not on login page

    // switching between login form and signup form
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginWrapper.classList.add('hidden');
            signupWrapper.classList.add('active');
            document.title = 'Create Account — The Tech Heaven';
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            signupWrapper.classList.remove('active');
            loginWrapper.classList.remove('hidden');
            document.title = 'Login — The Tech Heaven';
        });
    }

    // setting up the eye icon for all password fields
    initPasswordToggle('login-password-toggle', 'login-password');
    initPasswordToggle('signup-password-toggle', 'signup-password');
    initPasswordToggle('signup-confirm-toggle', 'signup-confirm');

    // password strength bar that changes color as user types
    const signupPasswordInput = document.getElementById('signup-password');
    const strengthBar = document.getElementById('signup-strength-bar');
    const strengthLabel = document.getElementById('signup-strength-label');

    if (signupPasswordInput && strengthBar && strengthLabel) {
        signupPasswordInput.addEventListener('input', () => {
            const val = signupPasswordInput.value;
            if (!val) {
                strengthBar.className = 'password-strength-bar';
                strengthLabel.className = 'password-strength-label';
                strengthLabel.textContent = '';
                return;
            }
            const strength = getPasswordStrength(val);
            strengthBar.className = `password-strength-bar ${strength.level}`;
            strengthLabel.className = `password-strength-label ${strength.level}`;
            strengthLabel.textContent = strength.label;
        });
    }

    // removing the red error when user starts typing again
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');

    if (loginEmail) {
        loginEmail.addEventListener('input', () => {
            hideError('login-email-error');
            setInputState(loginEmail, loginEmail.value && isValidEmail(loginEmail.value) ? 'success' : '');
        });
    }

    if (loginPassword) {
        loginPassword.addEventListener('input', () => {
            hideError('login-password-error');
            setInputState(loginPassword, loginPassword.value.length >= 6 ? 'success' : '');
        });
    }

    const signupName = document.getElementById('signup-name');
    const signupEmail = document.getElementById('signup-email');
    const signupConfirm = document.getElementById('signup-confirm');

    if (signupName) {
        signupName.addEventListener('input', () => {
            hideError('signup-name-error');
            setInputState(signupName, signupName.value.trim().length >= 2 ? 'success' : '');
        });
    }

    if (signupEmail) {
        signupEmail.addEventListener('input', () => {
            hideError('signup-email-error');
            setInputState(signupEmail, signupEmail.value && isValidEmail(signupEmail.value) ? 'success' : '');
        });
    }

    if (signupPasswordInput) {
        signupPasswordInput.addEventListener('input', () => {
            hideError('signup-password-error');
            setInputState(signupPasswordInput, signupPasswordInput.value.length >= 6 ? 'success' : '');
        });
    }

    if (signupConfirm && signupPasswordInput) {
        signupConfirm.addEventListener('input', () => {
            hideError('signup-confirm-error');
            setInputState(signupConfirm,
                signupConfirm.value && signupConfirm.value === signupPasswordInput.value ? 'success' : '');
        });
    }

    // when user submits the login form
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-submit-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let valid = true;

            // checking if email is valid
            if (!loginEmail.value || !isValidEmail(loginEmail.value)) {
                showError('login-email-error');
                setInputState(loginEmail, 'error');
                valid = false;
            }

            // checking if password is at least 6 characters
            if (!loginPassword.value || loginPassword.value.length < 6) {
                showError('login-password-error');
                setInputState(loginPassword, 'error');
                valid = false;
            }

            if (!valid) return;

            // sending login data to server
            setButtonLoading(loginBtn, true);

            try {
                const response = await fetch(`${API_BASE}/api/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: loginEmail.value,
                        password: loginPassword.value
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    // saving user info so they stay logged in
                    localStorage.setItem('techheaven_current_user', JSON.stringify({
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email,
                        loggedInAt: Date.now()
                    }));

                    showToast(`Welcome back, ${data.user.name}!`, 'success');
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1200);
                } else {
                    showToast(data.message || 'Login failed. Please try again.', 'error');
                    setInputState(loginPassword, 'error');
                }
            } catch (error) {
                console.error('Login error:', error);
                showToast('Network error. Make sure the server is running.', 'error');
            }

            setButtonLoading(loginBtn, false);
        });
    }

    // when user submits the signup form
    const signupForm = document.getElementById('signup-form');
    const signupBtn = document.getElementById('signup-submit-btn');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let valid = true;

            // checking if name is entered properly
            if (!signupName.value.trim() || signupName.value.trim().length < 2) {
                showError('signup-name-error');
                setInputState(signupName, 'error');
                valid = false;
            }

            // checking email
            if (!signupEmail.value || !isValidEmail(signupEmail.value)) {
                showError('signup-email-error');
                setInputState(signupEmail, 'error');
                valid = false;
            }

            // checking password length
            if (!signupPasswordInput.value || signupPasswordInput.value.length < 6) {
                showError('signup-password-error');
                setInputState(signupPasswordInput, 'error');
                valid = false;
            }

            // making sure both passwords match
            if (signupConfirm.value !== signupPasswordInput.value) {
                showError('signup-confirm-error');
                setInputState(signupConfirm, 'error');
                valid = false;
            }

            if (!valid) return;

            // sending signup data to the server
            setButtonLoading(signupBtn, true);

            try {
                const response = await fetch(`${API_BASE}/api/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: signupName.value.trim(),
                        email: signupEmail.value,
                        password: signupPasswordInput.value
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    // automatically logging in user after signup
                    localStorage.setItem('techheaven_current_user', JSON.stringify({
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email,
                        loggedInAt: Date.now()
                    }));

                    showToast('Account created successfully! Welcome aboard! 🎉', 'success');
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    showToast(data.message || 'Registration failed. Please try again.', 'error');
                    if (data.message && data.message.includes('already exists')) {
                        setInputState(signupEmail, 'error');
                    }
                }
            } catch (error) {
                console.error('Register error:', error);
                showToast('Network error. Make sure the server is running.', 'error');
            }

            setButtonLoading(signupBtn, false);
        });
    }

    // forgot password link handler
    const forgotLink = document.getElementById('forgot-password-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginEmail.value && isValidEmail(loginEmail.value)) {
                showToast(`Password reset link sent to ${loginEmail.value}`, 'info');
            } else {
                showToast('Please enter your email address first.', 'error');
                loginEmail.focus();
                setInputState(loginEmail, 'error');
            }
        });
    }

    // google and github login buttons (not working yet, just shows a message)
    const googleBtn = document.getElementById('google-login-btn');
    const githubBtn = document.getElementById('github-login-btn');

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            showToast('Google sign-in coming soon!', 'info');
        });
    }

    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            showToast('GitHub sign-in coming soon!', 'info');
        });
    }
});


// checkout button - saves the order to database
document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (!checkoutBtn) return; // Not on cart page

    checkoutBtn.addEventListener('click', async () => {
        // dont allow checkout if cart is empty
        if (cart.length === 0) {
            showToast('Your cart is empty. Add some products first!', 'error');
            return;
        }

        // user must be logged in to checkout
        const currentUser = getCurrentUser();
        if (!currentUser || !currentUser.id) {
            showToast('Please sign in to complete your purchase.', 'error');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
            return;
        }

        // adding up all item prices to get total amount
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

        // creating a clean array of items to send to server
        const items = cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1
        }));

        // disabling button so user cant click it again while its processing
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Processing...';

        try {
            const response = await fetch(`${API_BASE}/api/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: currentUser.id,
                    userName: currentUser.name,
                    userEmail: currentUser.email,
                    items: items,
                    totalAmount: totalAmount
                })
            });

            const data = await response.json();

            if (response.ok) {
                // order placed successfully so clear the cart
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
                updateCartBadge();

                showToast(`Order placed! Total: ₹${totalAmount.toLocaleString('en-IN')} 🎉`, 'success');
            } else {
                showToast(data.message || 'Failed to place order. Try again.', 'error');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            showToast('Network error. Make sure the server is running.', 'error');
        }

        checkoutBtn.disabled = false;
        checkoutBtn.textContent = 'Proceed to Checkout';
    });
});