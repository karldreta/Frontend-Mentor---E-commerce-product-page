const cartBtn = document.querySelector('#viewCart');
const imageContainer = cartBtn.closest('.imageContainer');

cartBtn.addEventListener('click', viewCart)
    
export default function viewCart () {
    let tooltip = imageContainer.querySelector('.tooltip');
    
    if (!tooltip) {
        // Create tooltip if it doesn't exist
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = `
            <h2>Cart</h2>
            <section>
            <ul>
            <li>
            </li>
            </ul>
            </section>
            <button id='checkout'>Checkout</button>
        `;
        imageContainer.appendChild(tooltip);
    }
    
    // Toggle the 'show' class to show/hide the tooltip
    tooltip.classList.toggle('show');
};
