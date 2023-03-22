// navbar animated
window.onscroll = () => {
    let header = document.querySelector(".header-navbar")

    header.classList.toggle("stick", window.scrollY > 100)
}


// write name
let typed = new Typed(".write-name", {
    strings: ["Sarah Costa Urcezino"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 50,
    loop: false
})

// skills
let skill = document.querySelector(".boxSkills")
let tags = document.getElementById("habilidades")
let itens = document.createElement("div")
itens.classList.add("skill")
tags.appendChild(itens)

let texto = `
    <div class="boxSkills">                        
        <h4>HTLM 5</h4>
        <img class="imageBox" src="assets/image/html5-white.svg">          
    </div>
    <div class="boxSkills">
        <h4>CSS 3</h4>
        <img class="imageBox" src="assets/image/css3-white.svg">
    </div>
    <div class="boxSkills">
        <h4>JavaScript</h4>
        <img class="imageBox" src="assets/image/javascript-white.svg">
    </div>
    <div class="boxSkills">
        <h4>Bootstrap</h4>
        <img class="imageBox" src="assets/image/bootstrap-white.svg">
    </div>
    <div class="boxSkills">
        <h4>Git</h4>
        <img class="imageBox" src="assets/image/git-white.svg">
    </div>
    <div class="boxSkills">
        <h4>GitHub</h4>
        <img class="imageBox" src="assets/image/github-white.svg">
    </div>
    `  

itens.innerHTML = texto

