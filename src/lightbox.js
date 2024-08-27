const productThumbnail = document.querySelectorAll(".productThumbnail");
productThumbnail.forEach((thumbnail) =>
  thumbnail.addEventListener("click", expandThumbnail),
);

export default function expandThumbnail() {
  const dialog = document.querySelector("#dialog");
  dialog.showModal();

  dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}

const closeBtn = document.querySelector(".closeModal");
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  dialog.close();
}
