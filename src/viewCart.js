const cartBtn = document.querySelector("#viewCart");
const imageContainer = cartBtn.closest(".imageContainer");

cartBtn.addEventListener("click", viewCart);

export default function viewCart() {
  let tooltip = imageContainer.querySelector(".tooltip");

  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = `
            <h2>Cart</h2>
            <section>
                <ul id="productList"></ul>
            </section>
            <button id="checkout">Checkout</button>
        `;
    imageContainer.appendChild(tooltip);
  }
  tooltip.classList.toggle("show");

  const checkout = document.querySelector("#checkout");
  checkout.addEventListener("click", () => {
    const productList = document.querySelector("#productList");
    const alertModal = document.createElement("dialog");
    alertModal.classList.add("alertModal");
    const alert = document.createElement("p");
    alertModal.appendChild(alert);
    document.body.appendChild(alertModal);
    if (productList.innerHTML != "") {
      alert.textContent = `Order Placed!`;
      alertModal.showModal();
    } else {
      alert.textContent = `Cart Empty!`;
      alertModal.showModal();
    }
    alertModal.addEventListener("click", (e) => {
      const dialogDimensions = alertModal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        alertModal.close();
      }
    });
  });
}

export function addProductToTooltip(productHTML) {
  let tooltip = imageContainer.querySelector(".tooltip");

  if (!tooltip) {
    // Create the tooltip if it doesn't exist
    viewCart();
    tooltip = imageContainer.querySelector(".tooltip");
  }

  const ul = tooltip.querySelector("#productList");
  const productListItem = document.createElement("li");
  productListItem.classList.add("productListItem");
  productListItem.innerHTML = productHTML;
  ul.appendChild(productListItem);
}
