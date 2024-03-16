
async function getData(){
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>localStorage.setItem("data", JSON.stringify(json) ))
}
getData()

function renderProduct(){
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    const render = document.getElementById("render-card");
    render.innerHTML = "";
    data.forEach((item) => {
        console.log(item);
        var item_div = document.createElement("a");
        item_div.className = "card";
        item_div.href = `product.html?id=${item.id}`;
        item_div.innerHTML = `
        <img src="${item.image}" alt="Avatar" >
        <div class="card-content">
          <h4><b>${item.title}</b></h4> 
          <p>${item.price}$</p> 
        </div>
        `;
        render.appendChild(item_div);
    });
}
renderProduct()
