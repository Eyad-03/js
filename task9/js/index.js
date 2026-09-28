let menu = document.getElementById("menu-container")


fetch("../data/menu.json")
.then(response =>response.json())
.then(data=>{


    for (let i=0;i<data.menu.length;i++)
    {
        menu.innerHTML += `
                <div>
                    <p>${data.menu[i].mealName}</p>
                    <p>
                        <span>${data.menu[i].price}</span>
                        <span>${data.menu[i].availability}</span>
                    </p>
                </div>
        `
    }



})