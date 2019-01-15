const btnAdd = document.querySelector(".add");
const ul = document.querySelector("ul");
const spanText = document.querySelector("span");
const textInput = document.querySelector(".text");

const delTask = (e) => {
    e.target.parentNode.remove();
    const listItems = document.querySelectorAll("li");
    spanText.textContent = [...listItems].length;

}

const addElement = (e) => {
    e.preventDefault();
    const titleTask = textInput.value;
    if (titleTask === "") return;
    const newLi = document.createElement("li");
    newLi.innerHTML = textInput.value + "<button>Usuń</button";

    ul.appendChild(newLi);

    const listItems = document.querySelectorAll("li");
    console.log(listItems)

    let numberTasks = listItems.length;
    spanText.textContent = numberTasks;

    newLi.querySelector("button").addEventListener('click', delTask);
}


btnAdd.addEventListener('click', addElement);