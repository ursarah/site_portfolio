// Scroll
const target = document.querySelectorAll('[data-anime]')

function animeScroll() {
    // distacia do scroll pro top da tela com window
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    console.log(windowTop)
    target.forEach(item => {
        // offsettop da a distancia de um elemento para o top
        if((windowTop) > item.offsetTop) {
            item.classList.add('animate')
        }
        else{
            item.classList.remove('animate')
        }
       
    })
}
animeScroll()

if(target.length) {

    // adicionando evento a cada elemento que encontrar na pagina
    window.addEventListener('scroll', () => {
        animeScroll()
        console.log('oi')
    })
}



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
