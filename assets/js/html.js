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




// MODAL
let sec = document.getElementById("projects")

//createElement cria uma tag html
let projBox = document.createElement("div")

//classlist adiciona ou remove uma classe
projBox.classList.add("project-port")

//appendChild adiciona um elemento em outro elemento
sec.appendChild(projBox)

const modais = [
    {id: "pjt-android",
    nomeImg: "site-android",
    nomePjt: "Site android",
    linkPjt: "ursarah.github.io/site_android/",
    linkRps: "https://github.com/ursarah/site_android",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>`},

    {id: "pjt-digital",
    nomeImg: "drip-store",
    nomePjt: "Digital store email",
    linkPjt: "https://ursarah.github.io/projeto_adivinhe_numero/",
    linkRps: "https://github.com/ursarah/digital_store",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>
    <i class="devicon-bootstrap-plain"></i>
  `},

    {id: "pjt-adivinhe",
    nomeImg: "digital-cadastro",
    nomePjt: "Adivinhe o numero",
    linkPjt: "https://ursarah.github.io/digital_store/html/email.html",
    linkRps: "https://github.com/ursarah/digital_store",
    icon: `<i class="devicon-html5-plain"></i>
    <i class="devicon-css3-plain"></i>
    <i class="devicon-bootstrap-plain"></i>
  `}
]

//forEach vai pecorrer uma array e adiciona uma função para cada elemento da array
//aqui ta adicionando em cada
modais.forEach((modal) => {

    // innerHTML adiciona elementos de texto no html
    projBox.innerHTML += `
    <div class="project-box">
        <img class="imgProject" src="assets/image/projects/${modal.nomeImg}.jpg" alt="...">
        <div class="text-car">
            <h2>${modal.nomePjt}</h2>
            <div class="projects-icons">                           
                  ${modal.icon}
            </div>
            <div class="pjtVerMais">
                <button class="btn">Ver mais</button>
            </div>
        </div>

        <!-- O modal que vai abrir -->
        <div class="project-modal" id="${modal.id}">
            <div class="main-modal">
                <div class="close">X</div>                
                <img src="assets/image/projects/${modal.nomeImg}.png">
                <div class="modal-cont">
                    <h2>${modal.nomePjt}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti perspiciatis, ducimus nulla modi optio saepe exercitationem qui dolorum! Dolore laudantium atque ratione velit iste molestias voluptatum voluptatibus et itaque!</p>
                </div>
                <div class="modal-buttons">
                    <a class="btn" href="${modal.linkPjt}" target="_blank">Projeto</a>
                    <a class="btn" href="${modal.linkRps}" target="_blank">Repositorio Github</a>
                </div>
            </div>
        </div>        
    </div>
        `
})
