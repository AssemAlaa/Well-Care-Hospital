let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} has been added to your cart.`);
}


function searchProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(searchInput) ? 'block' : 'none';
    });
}
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

function checkout() {
    alert("Proceeding to checkout...");
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ${item.price} EGP`;
        cartItemsDiv.appendChild(itemDiv);
    });
}


// Call displayCartItems when the cart page loads
if (document.title === "Shopping Cart") {
    displayCartItems();
}
let currentIndex = 0;
const banners = document.querySelectorAll('.banner');
const totalBanners = banners.length;

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.style.display = (i === index) ? 'block' : 'none';
    });
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalBanners - 1 : currentIndex - 1;
    showBanner(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === totalBanners - 1) ? 0 : currentIndex + 1;
    showBanner(currentIndex);
});

// عرض البانر الأول عند تحميل الصفحة
showBanner(currentIndex);


