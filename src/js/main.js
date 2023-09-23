import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

let productData = new ProductData("tents");

const element = document.querySelector(".product-list");

let productList = new ProductListing("Tents",productData,element);

productList.init();