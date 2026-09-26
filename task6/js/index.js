function circle()
{
    document.getElementById("image").style.borderRadius="50%"
}

function square()
{
    document.getElementById("image").style.borderRadius="0%"
}


let user = {
    name: "Eyad",
    age: 22
};

let name = "eyad"


localStorage.setItem("name",name)
localStorage.setItem("user", JSON.stringify(user));


console.log(typeof(localStorage.getItem("name",name)))
