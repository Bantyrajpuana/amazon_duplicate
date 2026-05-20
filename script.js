

const products = [
  {
    id: 1,
    title: "Noise-canceling wireless headphones",
    category: "electronics",
    price: 5999,
    mrp: 8999,
    rating: 4.6,
    reviews: 1284,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    link: "https://www.boat-lifestyle.com/products/boat-rockerz-512-anc?variant=42114899312738&country=IN&currency=INR&srsltid=AfmBOooe3tlC2sSczKdjpjXPagS8zh85I0GH_OC4HLR_5VNZqgy85ZoIg48"
  },
  {
    id: 2,
    title: "Smart LED desk lamp with dimmer",
    category: "home",
    price: 1499,
    mrp: 2499,
    rating: 4.3,
    reviews: 873,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    link: "https://www.amazon.in/YORWAN-Function-Rectangle-Flexible-Gooseneck/dp/B0D66L9R7X"
  },
  {
    id: 3,
    title: "Everyday cotton overshirt",
    category: "fashion",
    price: 1299,
    mrp: 2199,
    rating: 4.1,
    reviews: 421,
    link: "https://www.amazon.in/Everday-Cotton-Overshirt/dp/B0D66L9R7X",
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
    link: "https://www.amazon.in/Bestselling-Paperback-Collection/dp/B0D66L9R7X",
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
    link: "https://www.amazon.in/Compact-Mechanical-Keyboard/dp/B0D66L9R7X",
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
    link: "https://www.amazon.in/Campus-North-Plus-Running-Shoes/dp/B08PRWPS27/ref=sr_1_6?dib=eyJ2IjoiMSJ9.z7NRh4bSvxUhU3TxaPYyn81lv7pXx4Ns7hxmiETYavBOzBaKdnn9XucTS7RzYmzv5BEszJ4WMGlsGhb0dYUw7uD4vZuxZyDIXaEfWwH3flTe3yy6ifIFOz2dHHTAEMV3ewdwPoRaFinD3JZ3VrPX6GdJymbO6OSnBcRG5jYmWBlkEZIZZ1VNswhxtyElT7OV9HhOYQEotKK_Se0iVI7XRUl0baHGC9PSQig39WYWli7-N_bPYNvtszWoZ5K3Kswhceyq3vKmer8jI-Rk7ujL7Gvq1jI47PA3hrIipdCE1Ls._rulQXsr88fuj6sur-piF7Ly6O5lCnqsVdZ12M9fEvk&dib_tag=se&keywords=shoe%2Bred%2Badidas&qid=1778733770&sr=8-6&th=1&psc=1",
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
    image: "data:image/webp;base64,UklGRo4KAABXRUJQVlA4IIIKAAAwLgCdASqOAGoAPlUSlUqjkdHLiDgFRKANSE38vHyv5Ee1JbW4IHCtzeg/7kvUg/S3rr+aX9kf2q95b0lf5D1AP8d1KHPu/t38Of7l/sl7U141fjPC/rxe1PyGXd7TfsR+o9cPZT8XtQL8a/j/+D/LjjWQCfl39U/0X5k/3b5iJqH3cwqR7+i19UehL6v/Zb4CP5x/Yv+N/cu09+6/s3/rSrr+A10w57MEpO4TY02Pa+5WFM6VnHVUxIpP4q4TTtOcB6UfM0U2q4rKohdqZ/tSDCHtqQjZyo6Vfro8UTRJEgufHlq/SwRta21ctMIWe14lXUiYje+U3kjQV4fu/pyJkJGY0+RgQj+qjB/+Gkjvh6VNaJmziLDten/0wtKGyljgDvIK5aUa2g1Q/1UgRVKwfDrlqiaBLnec1oMs0sgjexKlR1AElrLcTkRjgv2eiXAWFEVMuDJEF2l5vmZUpSPR04baIVCGber+IW8u9eOIvwHKYrEOjBQ2pQAA/v/+CeEYXw7tv/3u5/WkFVLL8BRmNb2fK6E3d19gO4YCmOIEHNRiJT86pX+3cydkeIdwXz4IFmmR7hR4Q+3//BW9tSq7mofSEzWIZr+Esl9g2AGu/uZr/T8Y+M4VH0VWGMX3D28yDmtB2bcEon+t2LH2MHPXucH4sONXUPwtl6F1yzJo688hN1rXsKUSceNtI/P22tHoZifdi2e6c1aQt22b9E/Kt+O56KJibSrInmDb0yiO5zd0F+D0Kw+4Fyt22DCGVj60dUxoFhel20AL/NnhC412CiElmhgtUZknm6ndTM29yX8EWoFUCOnouQW8lGntkWeyybICeJx/w7f7y9M4UcKxWpTV1mMJzi5eH38q7u4pgGtbPKfZH33wlJgPLsn0vxyoO0X9m42+kBOTx+WrEuZqzTiM2X1Rmv3tBa2L6I0TFpnDFNvDgxQb1PHa8rDJefr4aCiGCfMNWnITkZYIqmKfuPyKwtf8MvogWO8M70Uut56iYK/eLcQW6B+pEXrKSzaah23B2YlIjn3DLKYGIUBEnF0fKVxrVZudrc/jmnakVC5zlxjivQf7nEbMG1I1moRy5l1EwzgBucP//e6YbF9t0y16ZJs5B0kkWyWnsg5A8Mx0wmSPrbgotHu8CHB2EJRzBvcRBSUhDa9jp4InMrwhtFVSBSU5yX5PmiLdqKCt6vKiclC3/+qdZcuAJ3X/VCL3A6EYLpAQ5yL9YLJJzR0v5O/mshri8J+59IKGq49OTmVxdmA52A2kvrh9UzivUe3BU+GwTwYKVm3qKxWwJnqaPPzMGtJdLfKqQOTZ61BM3xu6Rt+7Ar17X0dsNtMSXWYXXqi6klpyBR0Oi2BOoC0AUeQSPOoFQ1gCmrXgkGQ66txTlimOS7qNx+n30od19rFERBxFuszdUskXJ7GfJ2xqqvHXAT5R4tLmgQ6jFLFjcBm6ScW9ESh0kb9ZlKy/ZupIg+iXEdz/nS6HWJfw5H50P7AWKf6ndKxMe6hdjE4Eon8ydHJWwt5Ipe2T4Xz7pvTfE0T4ahgDGvvNcdfAyMZUpd50QnHD2ccUUqI2QKzw32T6//o5YMkLpL5YZn8YKis6UbOrn14Da49k+eOh175DrUmKJG50Vw9APBeFLdlH1e0/yZppqyG/VLVHDwH0CaPKQHgCcgxVwzNXY0t+vRCmzzGEkS9jyvl1wbhYc4Hd/6zfmBhof8NtFPZhF0cqemY+Iac2Bg3fICIL654oqtYtN6uDb/SBKd6SD/UfoTakmxe/Xe/KEH7Fvv/aPzPg9MzPMW966yJR5R0thyWIG77PcUBa46zxFGKQhqFLfc/pQiBXn56T+yYbYvS32U50jYo+FQCFdu+GrhdAUo1r3JkQnGOkXVLNA8ymbzBCBsslY0Uj99a9aG+UqA17zWLRWpjr4obcqeuYbA7cgQ0sPpHWxqbPoMiTlC+/hCYo7MGeFY3Y8UJF2Uq0chDzPjWxZIVelt4dzvoNBjW/GBU8TFx6gwMSyaM6XTFJLLmGKnjrOw04tyzEyhj3K9AGdgTDHqkn+R1c0Hldt33+I6jJYl+nqw7v778b632X0hEKGgoSm2px3sln4q9VzF9HfXHp7+wREdHIaIfAHTbJnh38J7aYjahZshUqOlynZp493aK7S74Zl+d67Q5pf3sGXbcQh836AMu1ZNWa4pHuZ5zqld/SVv/pbuv0yO1iZQP/SBBF8Ad6lHJUY7if6MaqKtyShtFz02gurRGjhu993CB/5E++a08ifhGIRthK6hRSKJQqh2dK1fLvcriawDSliPt9VE+eVhktUxioeKvV+vfNSQIb894qcuYh/mHCMOgpbSHxKgzxHFOdrVu2O9PgX6o/pBVOD8DzPuEbfraFI/QbHPZ9Qo/NSe80x3exctZpL/2UcV/yltqu4PLw6WxH7BQkF/vR8Ncs/9B0tCXYlA8NnUCadpV/4qbntnz6nHYXKQjpahGVtJRfcfkHZSNjIbVuyNoLaqQ7ndCBE1LHU91qdPp1WMWA0JJmgDsAW0C7w0T8gZyrWuxFptxpX36Xo6z63pHAjF4jHEtMc8JHR64v5WwpbgnNMtjyZVSRNEVmsTJGsOg8BYdLI0i2Eb1eRyptIKmpCUVyy+lCm7iDkAkJnHUtHdVDhCDAPSme+gd97XJvSS6X39nixR/x6xuhHXsreopG+zmoXe59eMWsglb57ZBXEpe57GE6C8inCooLJi647dkw06O1l/WEqTLLGnHT+r7Y8F2EuyMcg+2OEnmQNba7ROPphKY6BY74TsTbeXZNod0rwcEd6OPLHBx32nHADW7vcjcjJvg3spvtbQgoepqw0MOrmdQf25lleBtDKBTPLCm1rEL90DpOKchlf9rzTzbSGOjXCnKBsdvqz066iKA52Idph1pKWb+K7wYeTfZDkPWPWJ8ekJ45qD2Kcem7+bl6PQo5ltiCXim5BXE8QDiwjBpORLzwpb6dSFWqChoilxP+1swnNok5AhNm0PFV/5mwxIfodKySGpUkwKFgiaCIL725iCZgX//grVnSq8Z/QE6wQsD9jyz9sJn4UA4/yGFzL3KIHAI0YrKpxT/41wUThjHrccqv5IsB9b5kqCEzAaGynJKMGN6c6JUHe8V1qmUo12kxrJw3D6PV9hEdNaea+W4UsB//KZZTrw5o39/Ir8TF7nlLoItF8+HinWU4Tb9/3kkSQBmIN6mt5u76z4GfkV5vnnMGx/KFyl6yfmnLk7f+tax+ayVbfMSoDqNz1sqH9/qx9F8QvCO63yUI5gARwYn9CgLzJ4zvuUtoZ8AQTVZ4D9UAJwERwTOmORGpzyaiYhIxZVfgjs23tKXsw7HWQ2X8HhOvIPFLY3DCQj5vMhrQkeJL5YK2sBGbWpQ8QYYyACHAk+Wi3kwLY1EaHdxQc8GvgJ1SROAyAAL2WnZiJ/cFOPdpQ7Cp8iKuQLVB/cZaUfQs6zfk3aauuqaX/fczdPpeiN90/0f9mp6YuKBK+/nYTICc/GD6nSCWHBbOI7URp473oPF3G2TappT1/WzCChwoVef+2s01qtL1sQqbrNeuMceJaBZKVoAAE3IeBAAAAA==",
    link: "https://www.amazon.in/Campus-North-Plus-Running-Shoes/dp/B08PRWPS27/ref=sr_1_6?dib=eyJ2IjoiMSJ9.z7NRh4bSvxUhU3TxaPYyn81lv7pXx4Ns7hxmiETYavBOzBaKdnn9XucTS7RzYmzv5BEszJ4WMGlsGhb0dYUw7uD4vZuxZyDIXaEfWwH3flTe3yy6ifIFOz2dHHTAEMV3ewdwPoRaFinD3JZ3VrPX6GdJymbO6OSnBcRG5jYmWBlkEZIZZ1VNswhxtyElT7OV9HhOYQEotKK_Se0iVI7XRUl0baHGC9PSQig39WYWli7-N_bPYNvtszWoZ5K3Kswhceyq3vKmer8jI-Rk7ujL7Gvq1jI47PA3hrIipdCE1Ls._rulQXsr88fuj6sur-piF7Ly6O5lCnqsVdZ12M9fEvk&dib_tag=se&keywords=shoe%2Bred%2Badidas&qid=1778733770&sr=8-6&th=1&psc=1"
  },
  {
    id: 8,
    title: "Stainless steel water bottle",
    category: "fitness",
    price: 699,
    mrp: 999,
    rating: 4.7,
    reviews: 3118,
    image: "data:image/webp;base64,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",
    link: "https://www.amazon.in/Borosil-Stainless-Steel-Hydra-Trek/dp/B083PDKJ26/ref=asc_df_B083PDKJ26?mcid=955c6f799fc03324856e6c85edf001db&tag=googleshopdes-21&linkCode=df0&hvadid=804420888471&hvpos=&hvnetw=g&hvrand=14231083283853039619&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9298840&hvtargid=pla-2448171642895&gad_source=1&th=1"
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
// const accountBtn = document.querySelector(".account-btn");

// const user = localStorage.getItem("user");

// if (user) {
//   accountBtn.innerHTML = `
//     <span class="tiny">Hello,</span>
//     <strong>${user}</strong>
//   `;
// }
// accountBtn.addEventListener("click", () => {
//   localStorage.removeItem("user");
//   window.location.href = "login.html";
// });

const checkoutButton = document.querySelector("#checkoutButton");
checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  // Save cart (optional)
  localStorage.setItem("amazona-cart", JSON.stringify(cart));

  // Go to payment page
  window.location.href = "payment.html";
});                                                                                                                                                                                                                                              
const currency= new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

let cart = [];

function renderProducts(list) {
  productGrid.innerHTML = "";

  if (list.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      ${p.link ? `<a href="${p.link}" target="_blank" class="product-link">` : ''}
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      ${p.link ? '</a>' : ''}
      <div class="rating">⭐ ${p.rating} (${p.reviews})</div>
      <div class="price">${currency.format(p.price)}</div>
      <div class="mrp">M.R.P: <s>${currency.format(p.mrp)}</s></div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    productGrid.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);

  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCart();
  showToast("Added to cart");
}

function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}">
      <div>
        <h3>${item.title}</h3>
        <strong>${currency.format(item.price)}</strong>
        <div class="qty-row">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  cartTotal.innerText = currency.format(total);
  cartCount.innerText = count;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  updateCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function showToast(msg) {
  toast.innerText = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// 🔍 SEARCH
searchForm.addEventListener("submit", e => {
  e.preventDefault();

  const query = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(query)
  );

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  renderProducts(filtered);
});

// 🧾 SORT
sortSelect.addEventListener("change", () => {
  let sorted = [...products];

  if (sortSelect.value === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(sorted);
});

// 🛒 CART OPEN/CLOSE
cartButton.onclick = () => cartDrawer.classList.add("open");
closeCart.onclick = () => cartDrawer.classList.remove("open");

// INIT
renderProducts(products);
calStorage.getItem("amazona-cart") || "[]");
