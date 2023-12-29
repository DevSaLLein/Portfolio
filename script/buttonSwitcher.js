const button = document.querySelector('.buttonSwitcher');
const aboutMe__content = document.querySelector('.aboutMe__content');

const handleClickButton = () => {
    alert('essa funcionalidade ainda não está pronta, estou trabalhando para que esteja pronta o quanto antes!')
};

const handleScaleContent = () => {
    aboutMe__content.classList.toggle('scaleContainer');
}

button.addEventListener('click', handleClickButton);
aboutMe__content.addEventListener('click', handleScaleContent);