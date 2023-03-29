
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
    nomeImg: "digital-cadastro",
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
                <img src="assets/image/projects/${modal.nomeImg}.jpg" alt="">
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

    
        
// Dar evento de click pro text car para abrir um id especifico
const eventClicks = document.querySelectorAll(`.text-car`)

// o que vai aparecer
const openModals = document.querySelectorAll(`.project-modal`)

// Div do X d fechar modal
const closeModals = document.querySelectorAll(".close")


for(let i = 0; i <= openModals.length; i++){
    // Abrir modais
    eventClicks[i].addEventListener("click", ()=>{
        openModals[i].classList.add("active-modal")
    })        
    
    // Fechar modal
    closeModals[i].addEventListener("click", () =>{
        openModals[i].classList.remove("active-modal")   
    })       
}




