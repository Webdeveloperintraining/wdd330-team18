import { renderListWithTemplate } from "./utils.mjs";

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = {};
  }
  async init() {
    this.list = await this.dataSource.getData(this.category);
    this.renderList(this.list);
    document.querySelector(".title").innerHTML = this.category;
  }
  productCardTemplate(product) {
    return `<li class="product-card">
            <a href="/product_pages/index.html?product=${product.Id}">
            <img
            src="${product.Images.PrimaryMedium}"
            alt="Image of ${product.Name}"
            />
              <h3 class="card__brand">${product.Brand.Name}</h3>
              <h2 class="card__name">${product.NameWithoutBrand}</h2>
              <p class="product-card__price">$${product.FinalPrice}</p></a>
          </li>`;
  }
  renderList(list) {
    renderListWithTemplate(
      this.productCardTemplate,
      this.listElement,
      this.filterProducts(list)
    );
  }
  filterProducts(list) {
    let filteredList = list.filter((tent) => tent.FinalPrice != "179.99");
    return filteredList;
  }
}
