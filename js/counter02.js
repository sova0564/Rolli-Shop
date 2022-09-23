window.addEventListener("click", function (event) {
  let counter;
  // Проверяем клик строго по кнопкам plus либо  minus
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    // Находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем является ли елемент по которому был совершен клик кнопкой Плюс
  if (event.target.dataset.action === "plus") {
    // Изменяем число
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      //console.log("in cart");
      event.target.closest(".cart-item").remove();

      toggleCartStatus();
      calcCartPriceAndDelivery();
    }
  }

  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
