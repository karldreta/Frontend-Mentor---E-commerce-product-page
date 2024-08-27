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

let slideIndex = 1;

function pictureSlide() {
  const carouselImageContainer = document.querySelector(
    "#carouselImageContainer",
  );
  carouselImageContainer.innerHTML = `<img src="/images/image-product-${slideIndex}.jpg" />`;
}

const next = document.querySelector("#next");
next.addEventListener("click", nextPicture);

function nextPicture() {
  if (slideIndex < 4) {
    slideIndex++;
  } else {
    slideIndex = 1;
  }
  pictureSlide(slideIndex);
}

const previous = document.querySelector("#previous");
previous.addEventListener("click", previousPicture);

function previousPicture() {
  if (slideIndex !== 1) {
    slideIndex--;
  } else {
    slideIndex = 4;
  }
  pictureSlide(slideIndex);
}
