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

