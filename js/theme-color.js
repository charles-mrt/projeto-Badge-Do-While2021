
// get the sword image
const sword_image = document.querySelectorAll(".main-menu .sword");


/**
 * set a given theme - color-scheme
 * **/

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}



/**
 *  flip container 
 *  style sword_light css class
 *  return bolean
 * **/

function cardTransition(card) {
    const main_content = document.querySelector('.main-content');
    const container = document.querySelector(".container");

    // return bolean 
    card
        ? main_content.classList.add("background-theme")
        : main_content.classList.remove("background-theme");

    main_content.style.transition = "1s";
    main_content.style.transform += 'rotateY(180deg)';
    container.style.transition = '1s';
    container.style.transform += 'rotateY(-180deg)'

    return card;
}

/**
 *  Hide selector
 * **/
function hideTheSelector() {
    sword_image.forEach((image) => {
        image.style.visibility = 'hidden';
    });
}

/**
 *  sets a time to trigger a function
 * **/
function timeOut() {
    setInterval(hideTheSelector, 4000);
}



/**
 *  toggle between light and dark theme
 *  style sword_light css class
 * **/
function toogleThemeColor() {

    const sword_light = document.querySelectorAll('.main-menu .sword_light');
    const switch_theme = document.querySelector('.switch-theme');

    localStorage.getItem('theme') === 'theme-dark'
        ? setTheme('theme-light')
        : setTheme('theme-dark')

    if (localStorage.getItem('theme') === 'theme-light') {

        sword_image.forEach((image) => {
            image.style.visibility = 'visible';
        });

        sword_light.forEach((light) => {
            light.style.width = '40%';
        });
        
        cardTransition(card = true);


    } else {
        sword_light.forEach((light) => {
            light.style.width = '0%';
            timeOut();
        });
        cardTransition(card = false);
    }

}


/**
 *  invoked to set the theme on initial load
 * **/

(function () {
    localStorage.getItem('theme') === 'theme-dark'
        ? setTheme('theme-dark')
        : setTheme('theme-light');

})();
