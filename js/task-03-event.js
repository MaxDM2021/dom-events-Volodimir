
const container = document.querySelector(".container");
const btn = document.querySelector(".single-btn");

function showEvent(event) {

    // Деструктуризация event
     const { target, currentTarget } = event;

    // В карент попадает инициатор действия, т.е. это button
    console.log("event.target: ", target);
    // В каррент таргет попадает div, т.к. на него повешен слушатель
    console.log("event.currentTarget: ", currentTarget)

};

container.addEventListener("click", showEvent);



