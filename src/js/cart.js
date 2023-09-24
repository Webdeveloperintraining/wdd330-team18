
import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
    if(cartItems  != null) {
    //console.log('The variable is undefined or null');
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  } else{
    console.log("No Items added to the Shopping Cart");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider" >
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  //getCartProductsId(item.Id); data-id="${item.Id}"
  /*if (!items.includes(item)){
    items.push(item);*/
  //}
  return newItem;
}
renderCartContents();

//function getCartProductsId(item){
  //let items = array();
  /*if (!items.includes(item)){
      items.push(item);
  }*/

//}

/*
function removeItem(id){
  var element = document.getElementById(`#${id}`);
  console.log(element);
  if (element != null) 
  element.remove();

}*/

