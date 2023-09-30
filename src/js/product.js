import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");
const list = new ProductDetails(productId, dataSource);

list.init();
loadHeaderFooter();
