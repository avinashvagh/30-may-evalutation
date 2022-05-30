// Add the coffee to local storage with key "coffee"

// const coffee = document.getElementById("coffee");

// const div_button = document.querySelector("#add_to_bucket");

// div_button.addEventListener("submit", async function (e) {
//   // localStorage.setItem("coffee", coffee.value);
//   e.preventDefault();
//   console.log("SUBMIT");

//   const res = await axios.get(https://masai-mock-api.herokuapp.com/coffee/menu={coffee.value}).then(function (response) {
//     console.log(response);
// });

//!! 2nd trial after the erroe with axios method failed to get the data

// const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

// const container = document.querySelector("#menu");

// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     data.forEach(function (coffee) {
//       const div = document.createElement("div");
//       div.classList.add("card");
//       div.innerHTML = `
//             <div class="card-body">
//                 <h5 class="card-title">${coffee.name}</h5>
//                 <p class="card-text">${coffee.description}</p>
//                 <p class="card-text">${coffee.price}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             `;
//       container.appendChild(div);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     appendData(response.menu.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function appendData(data) {
//   console.log(data);

//   data.forEach(function (el) {
//     var box = document.createElement("div");
//     var img = document.createElement("img");
//     img.src = el.image;

//     var price = document.createElement("h5");
//     price.innerText = el.price;

//     box.append(img);
//     container.append(box);

//     var btn = document.createElement("button");
//     btn.innerText = "Add to Bucket";
//     btn.addEventListener("click", function () {
//       addTocart(el);
//       numberOfItemscart(items);
//     });

//     box.append(img, name, price, btn);
//     container.append(box);
//   });
// }

// function addTocart(el) {
//   function Item(image, name, price) {
//     this.image = image;
//     this.name = name;
//     this.price = price;
//   }
//   let item = new Item(el.image, el.name, el.price);
//   items.push(item);
//   localStorage.setItem("coffee", JSON.stringify(items));
// }

// function numberOfItemscart(items) {
//   var itemCount = document.querySelector("#coffee_count");
//   item_count.innerText = items.length;
//   console.log(items);
// }
// numberOfItemscart(items);

//!! 3rd trial after the erroe with second try cuz got some erroe even though I got button and the data

// Add the coffee to local storage with key "coffee"
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

const container = document.getElementById("menu");

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    // console.log(res);
    res = res.menu.data;
    append(res);
  })
  .catch(function (err) {
    console.log(err);
  });

let count = 0;
data = JSON.parse(localStorage.getItem("coffee")) || [];
function append(res) {
  res.forEach(function (el) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("p");
    name.setAttribute("id", "name");
    name.innerText = el.title;

    let price = document.createElement("p");
    price.setAttribute("id", "price");
    price.innerText = el.price;

    let button = document.createElement("button");
    button.setAttribute("id", "add_to_bucket");
    button.innerText = "Add to bucket";
    button.addEventListener("click", function () {
      addtobucket(el);
    });

    div.append(image, name, price, button);

    container.append(div);

    function addtobucket(el) {
      data.push(el);
      count++;
      document.querySelector("#coffee_count").innerText = count;
      localStorage.setItem("coffee", JSON.stringify(data));
    }
  });
}
