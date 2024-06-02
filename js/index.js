const modeChanger = document.querySelector(".navigation_bar__face_icon");


modeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark_theme');

    console.log(modeChanger.children[0])
})