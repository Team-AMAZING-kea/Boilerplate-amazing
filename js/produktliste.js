const category = new URLSearchParams(window.location.search).get("category");

let productCard = document.querySelector("#product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products?limit=&category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products 

  .map( 
    (data) =>
      `<a href="product.html?id=${data.id}" class="productItem">
 <article class="smallProduct">   