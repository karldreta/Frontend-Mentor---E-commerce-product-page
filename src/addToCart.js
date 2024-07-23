const addToCartBtn = document.querySelector('#addToCart');
addToCartBtn.addEventListener('click', addToCart);

export default function addToCart() {
    
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