let modal = document.querySelector(".project-modal")

let openModal = document.querySelectorAll(".text-car")
openModal.forEach(open => {
    open.addEventListener("click", () => {
        modal.classList.add("active-modal")    
    })
})
let closeModal = document.querySelectorAll(".close")
closeModal.forEach(close => {
    close.addEventListener("click", () => {
        modal.classList.remove("active-modal")
    })
})


// modais
let sec = document.getElementById("projects")
let proj = document.createElement("div")
proj.classList.add("project-port")
sec.appendChild(proj)

const modais = [
    {nomeImg: "site-android",
    nomePjt: "Site android",
    linkPjt: "ursarah.github.io/site_android/",
    linkRps: "https://github.com/ursarah/site_android"}
]

modais.forEach((modal) => {
    proj.innerHTML = 
    `<div class="project-box">
        <img src="assets/image/projects/${modal.nomeImg}.jpg" alt="...">
        <div class="text-car">
            <h2>${modal.nomePjt}</h2>
            <div class="projects-icons">                           
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>  
            </div>
            <div class="pjtVerMais">
                <button class="btn">Ver mais</button>
            </div>
        </div>
        <div class="project-modal" id="android">
            <div class="main-modal">
                <div class="close">X</div>
                <img src="assets/image/projects/${modal.nomeImg}.jpg" alt="">
                <div class="modal-cont">
                    <h2>${modal.nomePjt}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti perspiciatis, ducimus nulla modi optio saepe exercitationem qui dolorum! Dolore laudantium atque ratione velit iste molestias voluptatum voluptatibus et itaque!</p>
                </div>
                <div class="modal-buttons">
                    <a class="btn" href="${linkPjt}">Projeto</a>
                    <a class="btn" href="${linkRps}">Repositorio Github</a>
                </div>
            </div>
        </div>
    </div>`
})  