const products = [
  {
    id: 1,
    title: "Noise-canceling wireless headphones",
    category: "electronics",
    price: 5999,
    mrp: 8999,
    rating: 4.6,
    reviews: 1284,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Smart LED desk lamp with dimmer",
    category: "home",
    price: 1499,
    mrp: 2499,
    rating: 4.3,
    reviews: 873,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Everyday cotton overshirt",
    category: "fashion",
    price: 1299,
    mrp: 2199,
    rating: 4.1,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Bestselling paperback collection",
    category: "books",
    price: 749,
    mrp: 1199,
    rating: 4.8,
    reviews: 2301,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Compact mechanical keyboard",
    category: "electronics",
    price: 3499,
    mrp: 5299,
    rating: 4.5,
    reviews: 967,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Ceramic dinnerware set",
    category: "home",
    price: 2199,
    mrp: 3499,
    rating: 4.2,
    reviews: 388,
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Running shoes with cushioned sole",
    category: "fitness",
    price: 2799,
    mrp: 4599,
    rating: 4.4,
    reviews: 1405,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Stainless steel water bottle",
    category: "fitness",
    price: 699,
    mrp: 999,
    rating: 4.7,
    reviews: 3118,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
  }
];

const categories = [
  { key: "all", label: "All" },
  { key: "electronics", label: "Electronics" },
  { key: "home", label: "Home" },
  { key: "fashion", label: "Fashion" },
  { key: "books", label: "Books" },
  { key: "fitness", label: "Fitness" }
];

const productGrid = document.querySelector("#productGrid");
const filterChips = document.querySelector("#filterChips");
const emptyState = document.querySelector("#emptyState");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const sortSelect = document.querySelector("#sortSelect");
const cartButton = document.querySelector("#cartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const toast = ey = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function saveCart() {
  localStorage.setItem("amazona-cart", JSON.stringify(cart));
}

function getProduct(id) {
  return products.find((product) => product.id === Number(id));
}

function showToast(message) {
  toast.textContdocument.querySelector("#toast");
const menuButton = document.querySelector("#menuButton");
const sideMenu = document.querySelector("#sideMenu");
const closeMenu = document.querySelector("#closeMenu");

let activeCategory = "all";
let searchTerm = "";
let cart = JSON.parse(localStorage.getItem("amazona-cart") || "[]");

const monent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function renderChips() {
  filterChips.innerHTML = categories.map((category) => {
    const activeClass = category.key === activeCategory ? " active" : "";
    return `<button class="chip${activeClass}" type="button" data-category="${category.key}">${category.label}</button>`;
  }).join("");
}

function filteredProducts() {
  const term = searchTerm.trim().toLowerCase();
  let list = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = !term || `${product.title} ${product.category}`.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "price-low") {
    list = [...list].sort((a, b) => a.price - b.price);
  }

  if (sortSelect.value === "price-high") {
    list = [...list].sort((a, b) => b.price - a.price);
  }

  if (sortSelect.value === "rating") {
    list = [...list].sort((a, b) => b.rating - a.rating);
  }
  return list;
}
function renderProducts() {
  const list = filteredProducts();
  emptyState.style.display = list.length ? "none" : "block";

  productGrid.innerHTML = list.map((product) => {
    const stars = "★".repeat(Math.round(product.rating)) + "☆".repeat(5 - Math.round(product.rating));
    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

    return `
      <article class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <div class="rating">
          <span>${stars}</span>
          <span>${product.rating} (${product.reviews.toLocaleString("en-IN")})</span>
        </div>
        <div class="price">${money.format(product.price)}</div>
        <div class="mrp">M.R.P. <s>${money.format(product.mrp)}</s> (${discount}% off)</div>
        <div class="delivery">FREE delivery by tomorrow</div>
        <button type="button" data-add="${product.id}">Add to Cart</button>
      </article>
    `;
  }).join("");
}
function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}
function renderCart() {
  updateCartBadge();
  if (!cart.length) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    cartTotal.textContent = money.format(0);
    return;
  }
  cartItems.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}">
        <div>
          <h3>${product.title}</h3>
          <strong>${money.format(product.price)}</strong>
          <div class="qty-row">
            <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity">-</button>
            <span>Qty: ${item.quantity}</span>
            <button type="button" data-increase="${product.id}" aria-label="Increase quantity">+</button>
            <button class="remove-btn" type="button" data-remove="${product.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + product.price * item.quantity;
  }, 0);

  cartTotal.textContent = money.format(total);
}

function addToCart(id) {
  const product = getProduct(id);
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.title} added to cart`);
}

function setQuantity(id, nextQuantity) {
  if (nextQuantity <= 0) {
    cart = cart.filter((item) => item.id !== Number(id));
  } else {
    cart = cart.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, quantity: nextQuantity };
      }
      return item;
    });
  }

  saveCart();
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openMenu() {
  sideMenu.classList.add("open");
  sideMenu.setAttribute("aria-hidden", "false");
}

function closeSideMenu() {
  sideMenu.classList.remove("open");
  sideMenu.setAttribute("aria-hidden", "true");
}

filterChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  categorySelect.value = activeCategory;
  renderChips();
  renderProducts();
});

document.querySelectorAll("[data-filter-link]").forEach((link) => {
  link.addEventListener("click", () => {
    activeCategory = link.dataset.filterLink;
    categorySelect.value = activeCategory;
    renderChips();
    renderProducts();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  activeCategory = categorySelect.value;
  searchTerm = searchInput.value;
  renderChips();
  renderProducts();
});
searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value;
  renderProducts();
});

categorySelect.addEventListener("change", () => {
  activeCategory = categorySelect.value;
  renderChips();
  renderProducts();
});

sortSelect.addEventListener("change", renderProducts);

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) {
    const item = cart.find((cartItem) => cartItem.id === Number(increase.dataset.increase));
    setQuantity(item.id, item.quantity + 1);
  }

  if (decrease) {
    const item = cart.find((cartItem) => cartItem.id === Number(decrease.dataset.decrease));
    setQuantity(item.id, item.quantity - 1);
  }

  if (remove) {
    setQuantity(remove.dataset.remove, 0);
  }
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCartDrawer();
});

checkoutButton.addEventListener("click", () => {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }
  showToast("Checkout demo: order flow is ready to connect");
});

menuButton.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeSideMenu);
sideMenu.addEventListener("click", (event) => {
  if (event.target === sideMenu || event.target.tagName === "A") closeSideMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
    closeSideMenu();
  }
});

renderChips();
renderProducts();
renderCart();