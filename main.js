// تفعيل البرغر بار لفتح القائمة
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// عرض القسم الذي تم النقر عليه من القائمة
const homeLink = document.getElementById('homeLink');
const productsLink = document.getElementById('productsLink');
const cartLink = document.getElementById('cartLink');
const contactLink = document.getElementById('contactLink');

const homeSection = document.getElementById('homeSection');
const productsSection = document.getElementById('productsSection');
const cartSection = document.getElementById('cartSection');
const contactSection = document.getElementById('contactSection');

homeLink.addEventListener('click', () => {
    homeSection.style.display = 'block';
    productsSection.style.display = 'none';
    cartSection.style.display = 'none';
    contactSection.style.display = 'none';
});

productsLink.addEventListener('click', () => {
    homeSection.style.display = 'none';
    productsSection.style.display = 'block';
    cartSection.style.display = 'none';
    contactSection.style.display = 'none';
});

cartLink.addEventListener('click', () => {
    homeSection.style.display = 'none';
    productsSection.style.display = 'none';
    cartSection.style.display = 'block';
    contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
    homeSection.style.display = 'none';
    productsSection.style.display = 'none';
    cartSection.style.display = 'none';
    contactSection.style.display = 'block';
});

// عرض المنتجات في قسم المنتجات
const products = [
    {
        name: "منتج 1",
        price: 100,
        currency: "ريال سعودي"
    },
    {
        name: "منتج 2",
        price: 150,
        currency: "ريال سعودي"
    }
];

function displayProducts() {
    if (products.length > 0) {
        productsSection.innerHTML = ''; // تفريغ قسم المنتجات
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <div class="content">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price} ${product.currency}</div>
                    <button class="add-to-cart-btn">إضافة إلى السلة</button>
                </div>
            `;
            productsSection.appendChild(productCard);
        });
        noProductsMessage.style.display = 'none';
        productsSection.style.display = 'grid';
    } else {
        noProductsMessage.style.display = 'block';
        productsSection.style.display = 'none';
    }
}

// استدعاء الدالة لعرض المنتجات
displayProducts();