

const openBtn = document.querySelector('.open-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

// function showModal () {
// overlay.classList.remove('hide');
// }

// function closeModal () {
//     overlay.classList.add('hide');
//     }

function toggleModal (event){
    console.log(event)
    const { code } = event;
    if (code === 'Escape' ) {
        if (overlay.classList.contains('hide')) {
            return;
        }
    // toggle - это добавление и удаление в одной команде
    overlay.classList.toggle('hide');
    return;
    }
    overlay.classList.toggle('hide')
}

    
openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

addEventListener('keydown', toggleModal);