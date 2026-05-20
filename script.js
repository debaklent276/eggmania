// SLIDER
let images = [
 "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
 "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
 "https://images.unsplash.com/photo-1604908176997-431fdc3d8a0a"
];

let i = 0;
setInterval(()=>{
    i=(i+1)%images.length;
    document.getElementById("slideImg").src = images[i];
},3000);

// CART SYSTEM
let cart = [];
let total = 0;

function addToCart(name,price){
    cart.push(name);
    total += price;

    document.getElementById("count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + price;
    document.getElementById("cartItems").appendChild(li);
}

function checkout(){
    alert("Order placed! Eggs coming soon 🥚🚚");
}
// LOAD ADMIN PRODUCTS ON WEBSITE
window.onload = function(){
    let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("productContainer");

    savedProducts.forEach(p=>{
        let div = document.createElement("div");
        div.className="card";
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}
// Egg info popup
function showInfo(type){
    let text="";

    if(type=="white")
        text="White eggs are budget friendly and packed with protein. Perfect for daily meals.";

    if(type=="brown")
        text="Brown eggs come from healthy farm hens and have richer taste and nutrients.";

    if(type=="organic")
        text="Organic eggs are from free-range hens fed organic food. No chemicals, pure health.";

    document.getElementById("infoText").innerText=text;
    document.getElementById("popup").style.display="block";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}



