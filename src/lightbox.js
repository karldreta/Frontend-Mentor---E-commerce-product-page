import productImage1 from "../images/image-product-1.jpg";
import productImage2 from "../images/image-product-2.jpg";
import productImage3 from "../images/image-product-3.jpg";
import productImage4 from "../images/image-product-4.jpg";

document
  .querySelector("#productPicture")
  .addEventListener("click", expandThumbnail);

const productThumbnail = document.querySelectorAll(".initial-scale");
productThumbnail.forEach((thumbnail) =>
  thumbnail.addEventListener("click", expandThumbnail),
);

let slideIndex = 1;
let image = document.createElement("img");

export default function expandThumbnail(e) {
  const dialog = document.querySelector("#dialog");
  thumbnail.forEach((thumbnail) => {
    thumbnail.querySelector("img").classList.remove("active");
  });

  if (e.target.dataset.pos <= 4 && e.target.dataset.pos !== 0) {
    slideIndex = parseInt(e.target.dataset.pos);
  } else {
    slideIndex = 1;
  }

  dialog.showModal();
  pictureSlide();
}

// Closing the dialog

const closeBtn = document.querySelector(".closeModal");
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  dialog.close();
}

function pictureSlide() {
  const carouselImageContainer = document.querySelector(
    "#carouselImageContainer",
  );
  switch (slideIndex) {
    case 1:
      image.src = productImage1;
      break;
    case 2:
      image.src = productImage2;
      break;
    case 3:
      image.src = productImage3;
      break;
    case 4:
      image.src = productImage4;
      break;
    // default:
    //   image.src = productImage1;
    //   break;
  }
  carouselImageContainer.appendChild(image);
}

// For the thumbnails inside the dialog
const thumbnail = document.querySelectorAll(".productThumbnail.lightboxMode");
thumbnail.forEach((thumbnail) =>
  thumbnail.addEventListener("click", styleThumbnail),
);

function styleThumbnail(e) {
  slideIndex = parseInt(this.querySelector("img").dataset.pos); // Need to get an number value
  thumbnail.forEach((thumbnail) => {
    thumbnail.querySelector("img").classList.remove("active");
  });
  if (e.target.dataset.pos == slideIndex) {
    e.target.classList.add("active");
  }
  pictureSlide();
}

const next = document.querySelector("#next");
next.addEventListener("click", nextPicture);

function nextPicture(e) {
  if (slideIndex < 4) {
    slideIndex++;
  } else {
    slideIndex = 1;
  }

  let thumbnailPosition = 1;

  thumbnail.forEach((thumbnail) => {
    thumbnail.querySelector("img").classList.remove("active");
    thumbnailPosition = thumbnail.querySelector("img").dataset.pos;
    if (thumbnailPosition == slideIndex) {
      thumbnail.querySelector("img").classList.add("active");
    }
  });
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
  let thumbnailPosition = 1;

  thumbnail.forEach((thumbnail) => {
    thumbnail.querySelector("img").classList.remove("active");
    thumbnailPosition = thumbnail.querySelector("img").dataset.pos;
    if (thumbnailPosition == slideIndex) {
      thumbnail.querySelector("img").classList.add("active");
    }
  });
  pictureSlide(slideIndex);
}
