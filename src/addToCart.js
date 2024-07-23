import { addProductToTooltip } from './viewCart.js';

const addToCartBtn = document.querySelector('#addToCart');
addToCartBtn.addEventListener('click', addToCart);

const cartCountInfo = document.querySelector('#cartCount');
let cartCount = '';

export default function addToCart() {

    if (controlQuantity() === 0) {
        alert("Select quantity first");
        return
    }

    const productName = document.querySelector('.product-name').textContent;
    const rackPrice = document.querySelector('.rackPrice').textContent;

    const totalPrice = parseFloat(rackPrice.replace('$', '').trim()) * controlQuantity();

    const productHTML = `
        <div class="itemImgContainer"><img src="/images/image-product-1.jpg" alt="Product Image" class='cartItemImage'></div>
        <div class="itemCartDescription">
            <p class='productName'>${productName}</p>
            <p class='productPrice'>${rackPrice} x ${controlQuantity()} <strong>$${totalPrice.toFixed(2)}</strong></p>
        </div>
        <div class="removeItem">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </div>
    `;
    
    addProductToTooltip(productHTML);
    cartCount++;
    cartCountInfo.textContent = cartCount;
}

// Event delegation for dynamically added items
document.addEventListener('click', (event) => {
    if (event.target.closest('.removeItem')) {
        removeItem(event);
    }
});

export function removeItem(event) {
    const removeButton = event.target.closest('.removeItem');
    if (removeButton) {
        const listItem = removeButton.closest('li');
        if (listItem) {
            listItem.remove();
            cartCount--;
            if (cartCount === 0) {
                cartCountInfo.textContent = '';
            } else {
                cartCountInfo.textContent = cartCount;
            }
        }
    }
}

export function controlQuantity() {
    const minus = document.querySelector('#minus');
    const number = document.querySelector('#number');
    const plus = document.querySelector('#plus');
    
    let productNum = parseInt(number.textContent);
    minus.addEventListener('click', () => {
        if (!(productNum == 0)) {
            productNum--;
            number.textContent = productNum; 
        }
    });
    
    plus.addEventListener('click', () => {
        productNum++;
        number.textContent = productNum;
    });

    return productNum;
}