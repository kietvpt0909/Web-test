const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

function renderProduct() {
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const render = document.getElementById("render-product");
    render.innerHTML = "";
    data.forEach((item) => {
        if (item.id == id) {
            var item_div = document.createElement("div");
            item_div.className = "product-container";
            item_div.innerHTML = `
            <div class="image"><img src="${item.image}" alt=""></div>
            <div class="content">
                <p class="title">${item.title}</p>
                <p class="description"><b>Description:</b> ${item.description}</p>
                <p class="price"><b>Price:</b> ${item.price}$</p>
                <button class="add-to-cart">Add to cart</button>
            </div>
            `;
            render.appendChild(item_div);
        }
    });
}
renderProduct()