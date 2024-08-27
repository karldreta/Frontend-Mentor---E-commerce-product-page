import "./style.css";
import createFooter from "./createFooter";
import viewCart from "./viewCart";
import addToCart from "./addToCart";
import { controlQuantity } from "./addToCart";
import { removeItem } from "./addToCart";
import expandThumbnail from "./lightbox";

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(createFooter());
  controlQuantity();
});
