import {renderListWithTemplate} from "./utils.mjs";

function productCardTemplate(product){
    return`<li class="product-card">
            <a href="product_pages/index.html?product=${product.Id}">
              <img
                src="${product.Image}"
                alt="${product.Name}"
              />
              <h3 class="card__brand">${product.Brand.Name}</h3>
              <h2 class="card__name">${product.Name}</h2>
              <p class="product-card__price">$${product.FinalPrice}</p></a>
            </li>`
};

export default class ProductListing{
    constructor (category,dataSource,listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement =listElement;
    }
    async init(){
        const list = await this.dataSource.getData(this.category);
        this.renderList(list);
    }

    renderList(list) {
        /*const htmlStrings = list.map(productCardTemplate);
        this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));*/
        let filter = this.filterProducts(list);
        renderListWithTemplate(productCardTemplate, this.listElement, filter);
    }

    filterProducts (list){
      let filteredList = list.filter(tent => tent.FinalPrice != '179.99');
      return filteredList;
    }
      /*let filteredList2 = list.slice(0, 4);
        return filteredList2;
      }*/
};