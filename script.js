document.addEventListener('DOMContentLoaded', (event) => {
    const redirectImage = document.getElementById('redirect-image');
    redirectImage.addEventListener('click', () => {
        window.location.href = 'https://www.blackpinkmusic.com/';
    });

    document.getElementById('cart-button').addEventListener('click', function() {
        window.location.href = 'shopping-cart.html';
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const productName = this.dataset.productName;
            const quantityInput = document.getElementById(`quantity-${productId}`);
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

            addToCart({ id: productId, name: productName, quantity: quantity });
        });
    });

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += item.quantity;
        } else {
            cart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function getCartItems() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }
});
