// SKILLS
let tags = document.getElementById("habilidades")
let itens = document.createElement("div")
itens.classList.add("skill")
tags.appendChild(itens)

const objetos = [
    {ling: "HTML 5",
    img: "html5-white",
    lado: "leftScroll",
    delay: "3"},

    {ling: "CSS 3",
    lado: "leftScroll",
    img: "css3-white",
    lado: "leftScroll",
    delay: "2"},

    {ling: "JavaScript",
    img: "javascript-white",
    lado: "leftScroll",
    delay: "1"},

    {ling: "Bootstrap",
    img: "bootstrap-white",
    lado: "rightScroll",
    delay: "1"},

    {ling: "Git",
    img: "git-white",
    lado: "rightScroll",
    delay: "2"},

    {ling: "Github",
    img: "github-white",
    lado: "rightScroll",
    delay: "3"}
]

objetos.forEach((objeto) =>{
    itens.innerHTML += `
        <div class="boxSkills" data-animeSkills="${objeto.lado}" style="--i:${objeto.delay}">                        
            <h4>${objeto.ling}</h4>
            <img src="assets/image/${objeto.img}.svg">          
        </div>`
})

// Project
let secPjt = document.getElementById("projects")

//createElement cria uma tag html
let projBox = document.createElement("div")

//classlist adiciona ou remove uma classe
projBox.classList.add("project-port")

//appendChild adiciona um elemento em outro elemento
secPjt.appendChild(projBox)

const projectBs = [
    {nomePjt: "Site android",
    nomeImg: "site-android",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>`,
    delay: "1",},

    {nomePjt: "Faster",
    nomeImg: "faster",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>`,
    delay: "2",},

    {nomePjt: "Digital store email/login",
    nomeImg: "drip-store",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>
    <i class="devicon-bootstrap-plain"></i>`,
    delay: "3",},

    {nomePjt: "Adivinhe o numero",
    nomeImg: "adivinhe-numero",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>
    <i class="devicon-javascript-plain"></i>`,
    delay: "4",},

    {nomePjt: "Digital Burger",
    nomeImg: "digital-burger",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>
    <i class="devicon-bootstrap-plain"></i>
    <i class="devicon-javascript-plain"></i>`,
    delay: "5",}
]



//forEach vai pecorrer uma array e adiciona uma função para cada elemento da array
//aqui ta adicionando em cada
projectBs.forEach(projectB => {
    // innerHTML adiciona elementos de texto no html
    projBox.innerHTML += `
    <div class="project-box" style="--i:${projectB.delay}">
        <img class="imgProject" src="assets/image/projects/${projectB.nomeImg}.png">
        <div class="text-car">
            <h3>${projectB.nomePjt}</h3>
            <div class="projects-icons">                           
                  ${projectB.icon}
            </div>
            <div class="pjtVerMais">
                <button class="btn">Ver mais</button>
            </div>
        </div>
    </div>       
        `
})


// Modal 
const modais = [
    {id: "pjt-android",
    nomePjt: "Site android",
    nomeVid: "video-mascote-android",
    linkPjt: "https://ursarah.github.io/site_android/",
    linkRps: "https://github.com/ursarah/site_android",
    },
    
    {id: "pjt-faster",
    nomePjt: "Faster",  
    nomeVid: "video-faster",
    linkPjt: "https://ursarah.github.io/projeto_faster/",
    linkRps: "https://github.com/ursarah/projeto_faster",
    },

    {id: "pjt-drip-store",
    nomePjt: "Digital store email/login",
    nomeVid: "video-drip-store",
    linkPjt: "https://ursarah.github.io/digital_store/html/email.html",
    linkRps: "https://github.com/ursarah/digital_store",
    },

    {id: "pjt-adivinhe",  
    nomePjt: "Adivinhe o numero",
    nomeVid: "video-adivinhe-numero",
    linkPjt: "https://ursarah.github.io/projeto_adivinhe_numero/",
    linkRps: "https://github.com/ursarah/projeto_adivinhe_numero",
    },

    {id: "pjt-digital_burger",
    nomePjt: "Digital Burger",
    nomeVid: "video-digital-burger",
    linkPjt: "https://kevindik.github.io/digital_burger/",
    linkRps: "https://github.com/KevinDik/digital_burger",
    }
]
let main = document.querySelector("main")

modais.forEach(modal => {
    main.innerHTML += `
    <!-- O modal que vai abrir -->
        <div class="project-modal" id="${modal.id}">
            <div class="main-modal">
                <div class="close">X</div> 
                <video src="assets/image/projects/${modal.nomeVid}.mp4" controls autoplay muted loop>Seu navegador não suporta vídeo</video>
                <div class="modal-cont">
                    <h3>${modal.nomePjt}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti perspiciatis, ducimus nulla modi optio saepe exercitationem qui dolorum! Dolore laudantium atque ratione velit iste molestias voluptatum voluptatibus et itaque!</p>
                </div>
                <div class="modal-buttons">
                    <a class="btn" href="${modal.linkPjt}" target="_blank">Projeto</a>
                    <a class="btn" href="${modal.linkRps}" target="_blank">Repositorio Github</a>
                </div>
            </div>
        </div> `
})