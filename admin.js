// ADMIN LOGIN

function login(){

    const user =
        document.getElementById("user").value;

    const pass =
        document.getElementById("pass").value;


    if(user === "admin" && pass === "1234"){

        document.getElementById("loginBox")
        .style.display = "none";


        document.getElementById("dashboard")
        .style.display = "block";


        loadOrders();

    }

    else{

        alert("Wrong admin details");

    }

}



// LOAD ORDERS

function loadOrders(){

    const orders =
        JSON.parse(localStorage.getItem("orders"))
        || [];


    const table =
        document.getElementById("ordersTable");


    orders.forEach(function(order){

        let row = table.insertRow();


        row.insertCell(0).innerText =
            order.customer;

        row.insertCell(1).innerText =
            order.phone;

        row.insertCell(2).innerText =
            order.address;

        row.insertCell(3).innerText =
            order.product;

        row.insertCell(4).innerText =
            order.quantity;

        row.insertCell(5).innerText =
            "₹" + order.total;

        row.insertCell(6).innerText =
            order.time;

    });

}