import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { setLocalStorage, getParams } from "./utils.mjs";

const productId = getParams("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

/*
import ProductData from "./ProductData.mjs";
import ProductDetails from './ProductDetails.mjs';
import { setLocalStorage, getLocalStorage, getParams } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParams('product');
console.log(dataSource.findProductById(productId));

// Get products currently in cart, if cart is empty initialize an array
const cartItems = getLocalStorage("so-cart") || [];

function addProductToCart(product) {
  // Add new product to cart
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}
// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
*/