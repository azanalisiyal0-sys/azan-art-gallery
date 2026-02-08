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

let specialBtn = document.querySelector("#specialBtn");

    let newBtn = document.createElement("button");
    newBtn.innerText = "Back";

    newBtn.className = "headerSpecialBtn";

    specialBtn.appendChild(newBtn);

    newBtn.addEventListener("click", () => {
        window.open("index.html", "_blank");
    }
);

let fun = document.querySelector(".fun");

fun.addEventListener("click", () => {
    alert("Instagram Button per Click Kro")
})

