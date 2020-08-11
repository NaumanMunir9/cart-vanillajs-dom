// show cart
(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

// add items to the cart
(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = e.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partialPath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart${partialPath}`;
        let name =
          e.target.parentElement.parentElement.nextElementSibling.children[0]
            .children[0].textContent;
        item.name = name;

        let price =
          e.target.parentElement.parentElement.nextElementSibling.children[0]
            .children[1].textContent;
        let finalPrice = price.slice(1).trim();

        item.price = finalPrice;

        console.log(item);
      }
    });
  });
})();
