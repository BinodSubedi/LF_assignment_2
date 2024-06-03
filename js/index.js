const modeChanger = document.querySelector(".navigation-bar__face-icon__img");
const menu_toggler = document.querySelector(".navigation-bar__menu-button");
const menu = document.querySelector(".navigation-bar__elements");
const fotter_logo_div = document.querySelector('.footer__content-and-logo__logos');

const upper_logos = document.querySelector('.social-media-logos');

modeChanger.addEventListener('click',()=>{

    const darkChoice_or_white = Array.from(document.body.classList).length;

    document.body.classList.toggle('dark_theme');

    const ligh_mode = ['linkedin_white.png', 'instagram_white.png', 'dribble_white.png', 'github_white.png'];

    const dark_mode = ['linkedin_logo_black.png','instagram_logo_black.png','dribbble_logo_black.png','github_logo_black.png'];

    let index = 0;

    const fotter_logos =  Array.from(fotter_logo_div.childNodes);

    Array.from(upper_logos.childNodes).map((val,i)=>{

            switch(i){
                case 1:
                case 3:
                case 5:
                case 7:
                    val.src = `./assets/icons/${darkChoice_or_white == 0 ? ligh_mode[index] : dark_mode[index]}`;
                    fotter_logos[i].src = val.src;
                    index++;
                    break;
           }


    });
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
