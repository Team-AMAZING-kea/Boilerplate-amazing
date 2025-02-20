let productContainer = document.querySelector(".product");
const getUrl = window.location.search;
const getSearch = new URLSearchParams(getUrl);
const myCategories = getSearch.get("categories");
let allData;

fetch(`https://dummyjson.com/products/category/${myCategories}`).then((response) =>
  response.json().then((data) => {
    allData = data.products;
    showList(data.products);
  })
);

function showList(products) {
  console.log("products");
  const markup = products
    .map(
      (products) => ` <article class="product_container">
            <a href="singel.html?id=${products.id}">
              <div class="background-texture discount_img">
                <img src="${products.images[0]}" alt="${products.title}" />
              </div>
                </a>
              <div class="grid_1-1">
                <p>${products.title}</p>
                <div class="flexbox">
                 <div class="flexbox_2">
                  <p class="discount hide ${products.discountPercentage ? "show" : ""}">€${products.price}</p>
                  <p>€${products.discountPercentage ? (products.price * (1 - products.discountPercentage / 100)).toFixed(2) : products.price}</p>
                  </div>
                   <a href="singel.html?id=${products.id}">
                  <p class="add_to_chart">Read more</p>
                     </a>
                </div>
              </div>
           
          </article>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
