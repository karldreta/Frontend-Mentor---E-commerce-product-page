
export default function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="rightHeader">
        <h1>sneakers</h1>
        <nav id="navPanel">
            <button class="navBtn">Collections</button>
            <button class="navBtn">Men</button>
            <button class="navBtn">Women</button>
            <button class="navBtn">About</button>
            <button class="navBtn">Contact</button>
        </nav>
    </div>
    <div class="leftHeader">
        <div class="cart">
            <img src="/images/icon-cart.svg" alt="Cart">
        </div>
        <div class="userProfile">
            <img src="/images/image-avatar.png">
        </div>
    </div>
    `;
    return header;
}