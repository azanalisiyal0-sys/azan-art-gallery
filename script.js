
//Animations
const section = document.querySelectorAll(".fade");
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    section.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();










