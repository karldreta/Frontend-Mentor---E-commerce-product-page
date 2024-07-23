const cartBtn = document.querySelector('#viewCart');
const imageContainer = cartBtn.closest('.imageContainer');

cartBtn.addEventListener('click', viewCart);

export default function viewCart() {
    let tooltip = imageContainer.querySelector('.tooltip');
    
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = `
            <h2>Cart</h2>
            <section>
                <ul id="productList"></ul>
            </section>
            <button id="checkout">Checkout</button>
        `;
        imageContainer.appendChild(tooltip);
    }

    tooltip.classList.toggle('show');
}

export function addProductToTooltip(productHTML) {
    let tooltip = imageContainer.querySelector('.tooltip');
    
    if (!tooltip) {
        // Create the tooltip if it doesn't exist
        viewCart();
        tooltip = imageContainer.querySelector('.tooltip');
    }
    
    const ul = tooltip.querySelector('#productList');
    const productListItem = document.createElement('li');
    productListItem.classList.add('productListItem');
    productListItem.innerHTML = productHTML;
    ul.appendChild(productListItem);
}
