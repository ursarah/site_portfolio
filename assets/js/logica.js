// Scroll
const target = document.querySelectorAll('[data-anime]')
const targetSkills = document.querySelectorAll('[data-animeSkills]')

function animeScroll() {
    // distacia do scroll pro top da tela com window
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    target.forEach(item => {
        // offsettop da a distancia de um elemento para o top
        if((windowTop) > item.offsetTop) {
            item.classList.add('animate')
        }
        else{
            item.classList.remove('animate')
        }
       
    })

    targetSkills.forEach(targetSkill => {
        // offsettop da a distancia de um elemento para o top
        if((windowTop) > targetSkill.offsetTop) {
            targetSkill.classList.add('animateSkill')
        }
        else{
            targetSkill.classList.remove('animateSkill')
        }
       
    })
}
animeScroll()

if(target.length) {
    // adicionando evento a cada elemento que encontrar na pagina
    window.addEventListener('scroll', () => {
        animeScroll()
    })
}
// ==============================================


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