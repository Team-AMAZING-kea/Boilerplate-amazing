let productId = new URLSearchParams(window.location.search).get("id");
let dynamiskInnhold = document.querySelector(".dynamisk_innhold"); // fixed the typo
let infoContainer = document.querySelector(".content_info");
let reviewContainer = document.querySelector(".content_rev");

console.log("sidenVises");

fetch(`https://dummyjson.com/products/${productId}`) // fixed URL
  .then((response) => response.json()) // fixed case issue
  .then((product) => {
    dynamiskInnhold.innerHTML = `
       
          <div class="background-texture">
            <img src="${product.images[0]}" alt="sofa" />
          </div>
          <div class="col">
          <div class="title">
            <h1 class="hero_2">${product.title}</h1>
            </div>
            <p class="uppercase">${product.tags[0]} | ${product.tags[1]}</p>
            <div class="price_container">
              <p class="bold">€${product.discountPercentage ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2) : product.price}</p>
              <p class="discount_price hide ${product.discountPercentage ? "show" : ""}">€${product.price}</p>
               <p class="discount hide ${product.discountPercentage ? "show" : ""}">${product.discountPercentage}%</p>
            </div>
            <p>${product.description}</p>
            <p class="bold">Quantity</p>
            <div id="counter-container">
              <div class="controls"><span id="minus" class="control-button">-</span></div>
              <span id="count">0</span>
              <div class="controls">
                <span id="plus" class="control-button">+</span>
              </div>
            </div>
            <div class="button-container">
              <button class="basket">Add to basket</button>
            <a href="../html/check_out.html" > <button>Buy now</button></a>
            </div>
        
          
          </div>
   
       
    `;

    infoContainer.innerHTML = ` 
    <p class="underline bold">Size</p>
            <div class="grid_1-1 padding">
              <p>Width</p>
              <p class="number"> ${product.dimensions["width"]} cm</p>
              <p>Height</p>
              <p class="number">${product.dimensions["height"]} cm</p>
              <p>Depth</p>
              <p class="number">${product.dimensions["depth"]} cm</p>
            </div>
            <div class="info">
              <p class="underline bold">Warranty</p>
              <p>When purchesing the ${product.title} you get a ${product.warrantyInformation}. That means something something something.</p>
            </div>
            <div class="info">
              <p class="underline bold">Return policy</p>
              <p>With all of our products you have a 30 day return policy. If you have questions, contact us on our 24 hr costumer service line.</p>
            </div>
            <div class="info">
              <p class="underline bold">Shipping information</p>
              <p>The ${product.title} ${product.shippingInformation}.</p>
            </div>`;
    reviewContainer.innerHTML = `
    <div class="grid_1-2">
              
              ${product.reviews
                .map(
                  (review) => `
            <div class="contact">
            <p class="bold">${review.reviewerName}</p>
            <p>${review.date}</p>
              </div>
              <div class="review">
                <p>${"★".repeat(review.rating)}</p>
                <p>${review.comment}</p>
              </div>
            `
                )
                .join("")}</div>`;

    let count = 0;

    const countElement = document.getElementById("count");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");

    plusButton.addEventListener("click", () => {
      count++;
      countElement.textContent = count;
    });

    minusButton.addEventListener("click", () => {
      if (count > 0) {
        count--;
        countElement.textContent = count;
      }
    });

    // DROPDOWN
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    const dropdownContents = document.querySelectorAll(".dropdown-content");

    dropdownButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const content = dropdownContents[index];
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  });
