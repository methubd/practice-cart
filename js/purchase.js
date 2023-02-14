document.getElementById("btn-burger").addEventListener("click", function () {
  const itemContainer = document.getElementById("item-container");
  const productTitle = document.getElementById("burger");
  const burgerQty = inputToValueConvertbyId("burger-qty");
  if (isNaN(burgerQty)) {
    alert("Please selet qty 1 or ...");
    return;
  }
  const newLine = document.createElement("h1");
  newLine.innerText = productTitle.innerText;
  itemContainer.appendChild(newLine);
  const productPrice = spanToValueConvertbyId("price-burger");
  const priceCounter = spanToValueConvertbyId("burgerTotal");
  const burgerTotal = productPrice * burgerQty;
  const totalPrice = burgerTotal + priceCounter;
  setANewValue("burgerTotal", totalPrice.toFixed(2));
  const previousTotal = spanToValueConvertbyId("payable");
  const totalPayable = totalPrice + previousTotal;
  setANewValue("payable", totalPayable.toFixed(2));
});

document.getElementById("btn-salad").addEventListener("click", function () {
  const itemContainer = document.getElementById("item-container");
  const productTitle = document.getElementById("salad");
  const burgerQty = inputToValueConvertbyId("salad-qty");
  if (isNaN(burgerQty)) {
    alert("Please selet qty 1 or ...");
    return;
  }
  const newLine = document.createElement("h1");
  newLine.innerText = productTitle.innerText;
  itemContainer.appendChild(newLine);
  const productPrice = spanToValueConvertbyId("price-salad");
  const priceCounter = spanToValueConvertbyId("saladTotal");
  const burgerTotal = productPrice * burgerQty;
  const totalPrice = burgerTotal + priceCounter;
  setANewValue("saladTotal", totalPrice.toFixed(2));
  const previousTotal = spanToValueConvertbyId("payable");
  const totalPayable = totalPrice + previousTotal;
  setANewValue("payable", totalPayable.toFixed(2));
});

document.getElementById("btn-Luchi").addEventListener("click", function () {
  const itemContainer = document.getElementById("item-container");
  const productTitle = document.getElementById("luchi");
  const burgerQty = inputToValueConvertbyId("luchi-qty");
  if (isNaN(burgerQty)) {
    alert("Please selet qty 1 or ...");
    return;
  }
  const newLine = document.createElement("h1");
  newLine.innerText = productTitle.innerText;
  itemContainer.appendChild(newLine);
  const productPrice = spanToValueConvertbyId("price-luchi");
  const priceCounter = spanToValueConvertbyId("luchiTotal");
  const burgerTotal = productPrice * burgerQty;
  const totalPrice = burgerTotal + priceCounter;
  setANewValue("luchiTotal", totalPrice.toFixed(2));
  const previousTotal = spanToValueConvertbyId("payable");
  const totalPayable = totalPrice + previousTotal;
  setANewValue("payable", totalPayable.toFixed(2));
});
