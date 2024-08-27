document
  .querySelector("#productPicture")
  .addEventListener("click", expandThumbnail);

const productThumbnail = document.querySelectorAll(".initial-scale");
productThumbnail.forEach((thumbnail) =>
  thumbnail.addEventListener("click", expandThumbnail),
);

let slideIndex = 1;

export default function expandThumbnail(e) {
  const dialog = document.querySelector("#dialog");

  if (e.target.dataset.pos <= 4 && e.target.dataset.pos !== 0) {
    slideIndex = e.target.dataset.pos;
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
  carouselImageContainer.innerHTML = `<img src="../images/image-product-${slideIndex}.jpg" />`;
}

// For the thumbnails inside the dialog
const thumbnail = document.querySelectorAll(".productThumbnail.lightboxMode");
thumbnail.forEach((thumbnail) =>
  thumbnail.addEventListener("click", styleThumbnail),
);

function styleThumbnail(e) {
  slideIndex = this.querySelector("img").dataset.pos;

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
