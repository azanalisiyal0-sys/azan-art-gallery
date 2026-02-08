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

        //Alert
        alert("Please Shift to Desktop site")

        let name = prompt("What's Your name?");
        
        
        if(name === 'Shezu') {
            alert("Hi Shezu");
            let specialBtn = document.querySelector("#specialBtn");
        
            let newBtn = document.createElement("button");
            newBtn.innerText = "only for you";
        
            newBtn.className = "headerSpecialBtn";
        
            specialBtn.appendChild(newBtn);
        
            newBtn.addEventListener("click", () => {
                window.open("specialSpecific.html", "_blank");
            });
              
            
        }   else {
            
            alert("Welcome " + name);
            
        }
        
        console.log(name);  
        