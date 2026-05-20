// LOGIN (simple demo login)
function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u=="admin" && p=="1234"){
        document.getElementById("loginBox").style.display="none";
        document.getElementById("dashboard").style.display="block";
        loadProducts();
    }else{
        alert("Wrong login!");
    }
}

// ADD PRODUCT
function addProduct(){
    let name = document.getElementById("pname").value;
    let price = document.getElementById("pprice").value;

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({name,price});
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added!");
    loadProducts();
}

// SHOW SAVED PRODUCTS
function loadProducts(){
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let list = document.getElementById("list");
    list.innerHTML="";

    products.forEach(p=>{
        let li=document.createElement("li");
        li.innerText = p.name + " - ₹" + p.price;
        list.appendChild(li);
    });
}