import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const listing = new ProductListing(
  category,
  dataSource,
  document.querySelector(".product-list")
);

listing.init();
