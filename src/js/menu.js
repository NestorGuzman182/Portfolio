const ipad = window.matchMedia('screen and (max-width: 786px');
const menu = document.querySelector('.navbar');
const showButton = document.querySelector('#btn-menu');
const closeButton = document.querySelector('#btn-menu-2');

/* document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const scrollThreshold = 200;

    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        } 
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const scrollThreshold = 200;

    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        } 
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item a");

    function changeActiveSection() {
      let currentSection = null;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; 
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (currentSection && link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", changeActiveSection);

    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                navLinks.forEach((elem) => elem.classList.remove('active'));
                this.classList.add('active')
              window.scrollTo({
                top: section.offsetTop - 50, // Ajusta según el margen
                behavior: "smooth",
              }); 
            }
        })
    })
  });

function show (){
    menu.classList.add('is-active');
/*     showButton.style.display = 'none';
    closeButton.style.display = 'block'; */
    showButton.classList.add('hidden')
    closeButton.classList.remove('hidden')
}

function close (){
    menu.classList.remove('is-active');
/*     closeButton.style.display = 'none';
    showButton.style.display = 'block'; */
    closeButton.classList.add('hidden')
    showButton.classList.remove('hidden')
}

function validate (event){
    if(event.matches){
        showButton.addEventListener('click', show);
        closeButton.addEventListener('click', close);
    }else{ 
        showButton.removeEventListener('click', show);
        closeButton.removeEventListener('click', close)
        menu.classList.remove('is-active'); // Cierra el menú si se cambia a pantalla grande
        showButton.classList.remove('hidden');
        closeButton.classList.add('hidden');
    }
}


ipad.addListener(validate);
validate(ipad);
