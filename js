document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelector('.add-to-cart');
    
    addToCartButton.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
