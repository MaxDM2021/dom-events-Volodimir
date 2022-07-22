const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    console.log("this: ", this);
    console.log("event.currentTarget: ", event.currentTarget)
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

// const showInfo = (event) => {
//     // This будет выдавать window т.к. стрелочная фунция, применяют только если писать слово function
//     console.log('This: ', this);
//     console.log("event.currentTarget: ", event.currentTarget)
// }

function showInfo(event) {
    // This будет выдавать window т.к. стрелочная фунция, применяют только если писать слово function
    console.log('This: ', this);
    console.log("event.currentTarget: ", event.currentTarget)
}


const container = document.querySelector(".container");
const singleBtn = document.querySelector(".single-btn");

// container.addEventListener('click', showInfo)
singleBtn.addEventListener("click", showInfo);

// querySelector использует любой css селектор
// const.btnClon = document.querySelector("ul + p")