// On clicking remove button the item should be removed from DOM as well as localstorage.

let data = JSON.parse(localStorage.getItem("coffee"));
console.log(data);

let total = data.reduce(function (acc, el) {
  return acc + el.price;
}, 0);

document.querySelector("#total_amount").textContent = `Total Amount: ${total}`;

let box = document.getElementById("bucket");
data.map(function (el, index) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = el.image;

  let name = document.createElement("h3");
  name.innerText = el.name;

  let price = document.createElement("h4");
  price.innerText = el.price;

  let btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeItem(index);
    numberOfItemscart(items);
  });

  div.append(img, name, price, btn);
  box.append(div);
});
