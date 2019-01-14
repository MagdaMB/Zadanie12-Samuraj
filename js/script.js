const listsBtn = [...document.querySelectorAll("button")];
const removeTask = (e) => {
    // e.target.remove();

    // e.target.parentNode.remove();

    // e.target.parentNode.style.textDecoration = "line-through";

    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove()
};

for (let i = 0; i < listsBtn.length; i++) {
    listsBtn[i].addEventListener('click', removeTask);
}