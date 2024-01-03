const rollButton = document.querySelector(".RollButton");
const rollButton__container = document.querySelector(".RollAction__container");

const handleRollButtonClick = () => {
    window.scroll({top: 0, behavior:'smooth'})
}

rollButton.addEventListener('click', handleRollButtonClick);

window.addEventListener('scroll', () => {
    if ( window.pageYOffset > 100) {
        rollButton__container.classList.add("activeRollButton");

        console.log('ativado');
    } else {
        rollButton__container.classList.remove("activeRollButton");
    }
})