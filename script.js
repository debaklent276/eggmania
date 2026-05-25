// CUSTOMER

let currentCustomer = {

    name:"",
    phone:"",
    address:""

};


// CART

let cart = [];

let total = 0;


// LOGIN POPUP

document.getElementById("loginBtn")
.onclick = function(){

    document.getElementById("loginPopup")
    .style.display = "flex";

};


// ABOUT POPUP

document.getElementById("aboutBtn")
.onclick = function(){

    document.getElementById("aboutPopup")
    .style.display = "flex";

};


// CONTACT POPUP

document.getElementById("contactBtn")
.onclick = function(){

    document.getElementById("contactPopup")
    .style.display = "flex";

};


// CLOSE POPUP

function closePopup(id){

    document.getElementById(id)
    .style.display = "none";

}


// LOGIN

document.getElementById("loginSubmit")
.onclick = function(){

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const address =
        document.getElementById("customerAddress").value;

    const password =
        document.getElementById("customerPassword").value;


    if(

        name === "" ||
        phone === "" ||
        address === "" ||
        password === ""

    ){

        document.getElementById("loginMsg")
        .innerHTML = "Fill all details";

        return;

    }


    currentCustomer.name = name;

    currentCustomer.phone = phone;

    currentCustomer.address = address;


    document.getElementById("welcomeUser")
    .innerHTML = "Welcome, " + name;


    document.getElementById("loginMsg")
    .innerHTML = "Login Successful ✅";


    setTimeout(function(){

        closePopup("loginPopup");

    },1000);

};


// ADD TO CART

function addToCart(product,price,qtyId){

    if(currentCustomer.name === ""){

        alert("Please login first 👤");

        return;

    }


    const qty =
        parseInt(
            document.getElementById(qtyId).value
        );


    const itemTotal = qty * price;


    cart.push({

        customer : currentCustomer.name,

        phone : currentCustomer.phone,

        address : currentCustomer.address,

        product : product,

        quantity : qty,

        total : itemTotal,

        time : new Date().toLocaleString()

    });


    total += itemTotal;


    document.getElementById("count")
    .innerHTML = cart.length;

    document.getElementById("total")
    .innerHTML = total;


    let li = document.createElement("li");

    li.innerHTML =

        product +
        " × " + qty +
        " = ₹" + itemTotal;


    document.getElementById("cartItems")
    .appendChild(li);


    alert(product + " added 🥚");

}


// PLACE ORDER

document.getElementById("checkoutBtn")
.onclick = function(){

    if(cart.length === 0){

        alert("Cart is empty");

        return;

    }


    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];


    cart.forEach(function(item){

        orders.push(item);

    });


    localStorage.setItem(

        "orders",
        JSON.stringify(orders)

    );


    alert("Order Placed Successfully 🎉");


    cart = [];

    total = 0;


    document.getElementById("count")
    .innerHTML = 0;

    document.getElementById("total")
    .innerHTML = 0;

    document.getElementById("cartItems")
    .innerHTML = "";

};



// ======================
// EGG DETAILS
// ======================

function showEggInfo(type){

    let title = "";

    let description = "";


    // WHITE EGGS

    if(type === "white"){

        title = "White Eggs 🥚";

        description =

        "White eggs are the most common and affordable eggs. " +

        "They are rich in protein, vitamins and minerals. " +

        "Perfect for everyday cooking, breakfast and baking. " +

        "Despite the color difference, their nutrition is very similar " +

        "to brown eggs.";

    }


    // BROWN EGGS

    if(type === "brown"){

        title = "Brown Eggs 🟤";

        description =

        "Brown eggs are laid by larger hens and are often considered " +

        "more natural farm eggs. They usually have stronger shells and " +

        "slightly richer taste. Many people prefer them for their " +

        "premium appearance and texture.";

    }


    // ORGANIC EGGS

    if(type === "organic"){

        title = "Organic Eggs 🌿";

        description =

        "Organic eggs come from hens raised on organic feed without " +

        "chemicals, antibiotics or hormones. These eggs are healthier, " +

        "cleaner and ideal for people who want premium quality nutrition " +

        "and natural food choices.";

    }


    document.getElementById("eggTitle")
    .innerHTML = title;

    document.getElementById("eggDescription")
    .innerHTML = description;


    document.getElementById("eggPopup")
    .style.display = "flex";

}