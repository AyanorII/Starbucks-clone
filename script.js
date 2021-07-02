function showContent(evt, index) {
    const starsButtons = document.getElementsByClassName('stars__btn');
    for (let i = 0; i < starsButtons.length; i++) {
        starsButtons[i].classList.remove('active');
    }

    const starsContent = document.getElementsByClassName('stars-free__content');
    for (let i = 0; i < starsContent.length; i++) {
        starsContent[i].classList.remove('active');
    }

    evt.currentTarget.classList.add('active');
    starsContent[index].classList.add('active');
}

