const starsButtons = document.getElementsByClassName('stars__btn');
const starsContent = document.getElementsByClassName('stars-free__content');
const bottomBar = document.querySelector('.bottom-bar');


function showContent(evt, index) {
    for (let i = 0; i < starsButtons.length; i++) {
        starsButtons[i].classList.remove('active');
    }

    for (let i = 0; i < starsContent.length; i++) {
        starsContent[i].classList.remove('active');
    }

    evt.currentTarget.classList.add('active');
    starsContent[index].classList.add('active');

    bottomBar.style.left = `calc(20% * ${index})`;

}


