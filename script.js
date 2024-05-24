document.addEventListener('DOMContentLoaded', () => {
    // Redirect when clicking on the specific image
    const redirectImagePV = document.getElementById('redirect-image-pv');
    redirectImagePV.addEventListener('click', () => {
        window.location.href = 'https://www.blackpinkmusic.com/';
    });

    // Product data
    const products = [
        { name: 'Adidas Campus 00s Shoes (Black)', price: 'P5,000', page: 'index.html' },
        { name: 'Adidas Campus 00s Shoes (Pink)', price: 'P3,500', page: 'index.html' },
        { name: 'Adidas Adilette Sandals (Black)', price: 'P1,500', page: 'Products.html' },
        { name: 'Adidas Superstar Shoes (White)', price: 'P5,300', page: 'Products.html' },
        { name: 'Adidas Response Shoes (Black)', price: 'P4,300', page: 'Products.html' },
        { name: "Adidas Women's Duramo SL Shoes (Pink)", price: 'P3,000', page: 'Products.html' },
        { name: "adidas Hello Kitty And Friends", price: 'P4,000', page: 'Kids.html' },
        { name: "adidas Stan Smith (white)", price: 'P5,300', page: 'Unisex.html' },
        { name: "adidas Rivalry Low Shoes", price: 'P5,000', page: 'Unisex.html' },
        { name: "adidas SOLARGLIDE 6", price: 'P8,000', page: 'Men.html' },
        { name: "adidas GALAXY 6 Shoes", price: 'P3,500', page: 'Women.html' }
    ];

    // Search functionality
    const handleSearch = (searchText, searchDropdown) => {
        const searchResults = products.filter(product => product.name.toLowerCase().includes(searchText));

        searchDropdown.innerHTML = '';

        searchResults.forEach(result => {
            const resultItem = document.createElement('li');
            resultItem.textContent = `${result.name} - ${result.price}`;
            resultItem.addEventListener('click', () => {
                window.location.href = result.page;
            });
            searchDropdown.appendChild(resultItem);
        });
    };

    const searchInputs = document.querySelectorAll('.search-input');
    const searchDropdowns = document.querySelectorAll('.search-dropdown');

    searchInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const searchText = input.value.trim().toLowerCase();
            handleSearch(searchText, searchDropdowns[index]);
        });
    });

    // Add to cart functionality
    const addToCart = (event) => {
        const button = event.target;
        const productId = button.dataset.productId;
        const productName = button.dataset.productName;
        const productPrice = button.dataset.productPrice;
        const productSize = button.dataset.productSize;
        const productQuantity = button.closest('tr').querySelector('input[type="number"]').value;

        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            size: productSize,
            quantity: productQuantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Product added to your Shopping Cart!');
    };

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Redirect to the shopping cart
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'shopping-cart.html';
        });
    });

    // Redirect aside image to Blackpink website
    const asideImage = document.querySelector('.aside-image');
    asideImage.addEventListener('click', () => {
        window.location.href = 'https://www.blackpinkmusic.com/';
    });
});