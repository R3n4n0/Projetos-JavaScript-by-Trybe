const collumns = document.querySelectorAll(".collumn");

document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
})

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
})

collumns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        const dragging = document.querySelector(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);

        if(applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
            item.prepend(dragging);
        }
    })
})

function getNewPosition(collumn, positionY) {
    const cards = collumn.querySelectorAll(".item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (positionY >= boxCenterY) result = refer_card;
    }
    return result;
}