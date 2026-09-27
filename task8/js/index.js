let title = document.getElementById("title")
let description = document.getElementById("description")
let cards = document.getElementById("cards")
let collectionDo = JSON.parse(localStorage.getItem("tasks")) || [];

function addDo()
{

    let task = { title: title.value, description: description.value };

    collectionDo.push(task);

    localStorage.setItem("tasks",JSON.stringify(collectionDo))

    display()

    title.value = ""; 
    description.value = "";



}


function display()
{

    cards.innerHTML = "";


    collectionDo.forEach(function(task, index) 
    { 
        cards.innerHTML += `
            <div class="do-card">
                <p class="title-card">${task.title}</p> 
                <p class="description-card">${task.description}</p>
                <button onclick="removeDo(${index})">Delete</button>
            </div>
        `;
    });
}


function removeDo(index)
{
    collectionDo.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(collectionDo));

    display();
}





display()