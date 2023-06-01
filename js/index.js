var language = document.querySelectorAll(".langItem:not(.active)");
var activeLang = document.querySelector('.langItem', '.active');
activeLang.addEventListener('click', ()=>{
    for (let index = 0; index < language.length; index++) {
        console.log(language[index])
    }
})