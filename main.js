const typed = new Typed('.typed-0', {
    strings : [ 
        "Programador",
        "Freelancer"],
    typeSpeed:75,
    startDelay: 300,
    backSpeed:75,
    loop: true,
    loopCount: false,
    showCursor: false
});

const menu_mobile = document.getElementById("menu_links");

const navBars = document.querySelector(".nav__burguer");
navBars.addEventListener('click', () => {
    navBars.classList.toggle("burguer-active");
    
    let menu = menu_mobile.offsetTop;
    console.log(menu);
    menu == "-1000" ? menu_mobile.style.top = "50px" : menu_mobile.style.top = "-1000px"
});

