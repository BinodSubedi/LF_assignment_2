const modeChanger = document.querySelector(".navigation_bar__face_icon__img");
const menu_toggler = document.querySelector(".navigation_bar__menu_button");
const menu = document.querySelector(".navigation_bar__elements");

modeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark_theme');

    console.log(modeChanger.children[0])
})

menu_toggler.addEventListener('click', ()=>{

    menu.classList.toggle('hidden');

})
window.addEventListener('resize', (e) => {

    if(window.innerWidth > 750){
        menu.classList.remove('hidden')
    }

    if(window.innerWidth < 750 && Array.from(menu.classList).length == 1){
        menu.classList.add('hidden')
    }

});
