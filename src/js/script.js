let theme = true;
let sunIcon = "fa-sun";
let moonIcon = "fa-moon";



let ldIcon = document.querySelector(".ldIcon");
let texts = document.querySelectorAll(".text");
let icons = document.querySelectorAll(".icon");
let border = document.querySelector(".border");
let mainDiv = document.querySelector(".main-div");

const light = ()=>{
    ldIcon.classList.remove(sunIcon);
    ldIcon.classList.add(moonIcon);
    border.classList.remove("border-light");
    border.classList.add("border-dark");
    mainDiv.classList.remove("main-div-dark");
    mainDiv.classList.add("main-div-light");

    for (let i = 0; i < texts.length; i++) {

        texts[i].classList.remove("text-light");
        texts[i].classList.add("text-dark");

    }
    for (let i = 0; i < icons.length; i++) {

        icons[i].classList.remove("text-light");
        icons[i].classList.add("text-dark");

    }
    console.log(ldIcon);
    theme = false;
}

const dark = ()=>{
    ldIcon.classList.remove(moonIcon);
    ldIcon.classList.add(sunIcon);
    border.classList.remove("border-dark");
    border.classList.add("border-light");
    mainDiv.classList.remove("main-div-light");
    mainDiv.classList.add("main-div-dark");

    for (let i = 0; i < texts.length; i++) {

        texts[i].classList.remove("text-dark");
        texts[i].classList.add("text-light");

    }
    for (let i = 0; i < icons.length; i++) {

        icons[i].classList.remove("text-dark");
        icons[i].classList.add("text-light");

    }
    console.log(ldIcon);
    theme = true;
}


ldIcon.addEventListener("click", () => {
    if (theme) {
        light();
    } else {
        dark();
    }
});


