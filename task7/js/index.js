let usernamePattern = /^\S+$/
let passwordPattern = /^(?=.*\d).{8,}$/
let phonePattern =/^07\d{8}$/;

let username = document.getElementById("username")
let password = document.getElementById("password")
let phone = document.getElementById("phone")
let order = document.getElementById("order")


function validate()
{
    if(
        (usernamePattern.test(username.value)) &&
        (passwordPattern.test(password.value)) &&
        (phonePattern.test(phone.value))
    )

    {
        document.getElementById("text").textContent = "Welcome "+username.value

        localStorage.setItem("order",order.value)
        let savedOrder ="Saved Order: "+ localStorage.getItem("order")
        document.getElementById("selectedOrder").textContent = savedOrder

        sessionStorage.setItem("UserName",username.value)
        let savedUsername = "Saved Username: "+ sessionStorage.getItem("UserName")
        document.getElementById("savedUsername").textContent = savedUsername
    }
    else
    {
        document.getElementById("text").textContent = "Faild data please try again"
    }
}