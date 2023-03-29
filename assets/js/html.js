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
let tags = document.getElementById("habilidades")
let itens = document.createElement("div")
itens.classList.add("skill")
tags.appendChild(itens)

const objetos = [
    {ling: "HTML 5",
    img: "html5-white"},
    {ling: "CSS 3",
    img: "css3-white"},
    {ling: "JavaScript",
    img: "javascript-white"},
    {ling: "Bootstrap",
    img: "bootstrap-white"},
    {ling: "Git",
    img: "git-white"},
    {ling: "Github",
    img: "github-white"}
]

objetos.forEach((objeto) =>{
    itens.innerHTML += `
        <div class="boxSkills">                        
            <h4>${objeto.ling}</h4>
            <img src="assets/image/${objeto.img}.svg">          
        </div>`
})

// Projetos
