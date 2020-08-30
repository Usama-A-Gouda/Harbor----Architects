const nav = () => {
    const navIcon = document.querySelector(".nav__icon");
    const navSlide = document.querySelector(".nav");
    const navLink  = document.querySelectorAll(".nav__item");
 
    
    navIcon.addEventListener('click',()=> {
        navSlide.classList.toggle('show-nav');

        navLink.forEach((link ,index) => {   
             if(link.style.animation) {
                link.style.animation ='';
             } 
             else {
                link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 7  + 0.3}s`;

            }
        }); 
    
    });
}

nav(); 