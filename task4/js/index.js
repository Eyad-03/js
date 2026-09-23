/*

let customerName = prompt("please enter name : ")

let age = prompt("please enter age : ")

let gender = prompt("please enter gender (male or female) : ")



let welcomeMessage = "";

if (gender == "male")
{
    welcomeMessage = "Welcome Mr " + customerName
}

else if (gender=="female")
{
    welcomeMessage = "Welcome Ms " + customerName
}

else
{
    welcomeMessage = " Welcome " + customerName
}

alert(welcomeMessage)

let isEligible = false

if (age<16)
{
    alert("You are not eligible to place an order")
    isEligible = true;
}

else
{
    alert("Continue with the order")
    isEligible = false;
}


let meal = prompt("enter one of the following : 1-Burger 2-Shawarma 3-Zinger")
let validOrder = false

if(meal =="Burger" || meal =="Shawarma" || meal=="Zinger")
{
    alert("Your order is being prepared")
    validOrder = true
}

else
{
    alert("Invalid order. Please try again")
    validOrder = false;
}


let orderStatus = ""
if (age>=18 && validOrder)
{
    alert("Order confirmed")
    orderStatus = "Order confirmed"
}

else if (age<18 || !validOrder)
{
    alert("Order requires verification")
    orderStatus = "Order requires verification"
}


console.log("customer name is " + customerName )
console.log("age is " +age )
console.log("gender is " +gender )
console.log("meal is " +meal )



document.write("<h2>Restaurant Order Summary</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Age:</strong> " + age + "</p>");
document.write("<p><strong>Gender:</strong> " + gender + "</p>");
document.write("<p><strong>Order:</strong> " + meal + "</p>");
document.write("<p><strong>Order Status:</strong> " + orderStatus + "</p>");

*/

/**************************************************************************************/
/*

let menu = [
    {name:"orange juice",price:20,category:"drink",available:true},
    {name:"burger",price:30,category:"fast food",available:true},
    {name:"shawrma",price:40,category:"fast food",available:true},
    {name:"fish",price:50,category:"see food",available:true},
    {name:"ice creem",price:60,category:"drink",available:true}
]


function showMenu()
{

for(let i=0;i<menu.length;i++)
{

console.log(menu[0].name)
console.log(menu[0].price)
console.log(menu[0].category)
console.log(menu[0].available)

}

}

showMenu();




    while (true) {

        foodName = prompt("Enter food name:");

        selectedFood = null;

        for (let i = 0; i < menu.length; i++) {

            if (menu[i].available === false) {
                continue;
            }

            if (menu[i].name.toLowerCase() === foodName.toLowerCase()) {

                selectedFood = menu[i];

                break;
            }
        }


        if (selectedFood !== null) {
            break;
        }

    }

    for (let property in selectedFood) {

        document.write(
            property + ": " +
            selectedFood[property] +
            "<br>"
        );
    }



    let quantity = prompt("Enter quantity:");

    let totalPrice = selectedFood.price * quantity;


    document.write("<h2>Final Order</h2>");

    document.write("Food: " + selectedFood.name + "<br>");
    document.write("Price: $" + selectedFood.price + "<br>");
    document.write("Quantity: " + quantity + "<br>");
    document.write("Total Price: $" + totalPrice + "<br>");

*/


let customerName = document.getElementById("customerName")
let order = document.getElementById("order")
let result = document.getElementById("result")
function display()
{

let name = customerName.value
let selectedOrder = order.value

result.innerHTML =
"your name is "+name+" and your order is "+selectedOrder



}




function changeColor()
{
    document.getElementById("btn").style.backgroundColor="#27ae60"
}


 function returnColor() 
 {

    document.getElementsByTagName("button")[0].style.backgroundColor = "#e67e22";
}