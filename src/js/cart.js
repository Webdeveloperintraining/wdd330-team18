import { getLocalStorage, getNumFromCart } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems != null) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    // Calculate total price of items
    const totalPrice = cartItems.reduce(
      (a, { FinalPrice }) => a + FinalPrice,
      0
    );
    document.getElementById("totalPrice").innerHTML =
      totalPriceTemplate(totalPrice);
  }
}

function cartItemTemplate(item) {
  const newItem = `<li>
  <div class="cart-card divider">
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
  return newItem;
}

function totalPriceTemplate(price) {
  return `<h4 class="total-price-label-color">Total: <span class="total-price-color">$${price}</span></h3>`;
}

renderCartContents();
getNumFromCart();
