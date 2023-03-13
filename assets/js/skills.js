


let skill = document.querySelector(".boxSkills")
let tags = document.getElementById("habilidades")
let itens = document.createElement("div")
itens.classList.add("skill")
let texto = `
    <div class="boxSkills">                        
        <h4>HTLM 5</h4>
        <img src="assets/image/html/html5-white.svg">          
    </div>
    <div class="boxSkills">
        <h4>CSS 3</h4>
        <img src="assets/image/css/css3-white.svg">
    </div>
    <div class="boxSkills">
        <h4>JavaScript</h4>
        <img src="assets/image/js/javascript-white.svg">
    </div>
    <div class="boxSkills">
        <h4>Bootstrap</h4>
        <img src="assets/image/bs/bootstrap-white.svg">
    </div>
    <div class="boxSkills">
        <h4>Git</h4>
        <img src="assets/image/git/git-white.svg">
    </div>
    <div class="boxSkills">
        <h4>GitHub</h4>
        <img src="assets/image/github/github-white.svg">
    </div>
    `
itens.innerHTML = texto
tags.appendChild(itens)


skill.addEventListener("mouseover", colorido("colored"))

function colorido(cor) {
    let itens = document.createElement("div")

    let texto = `
        <div class="boxSkills">                        
            <h4>HTLM 5</h4>
            <img src="assets/image/html/html5-${cor}.svg">          
        </div>
        <div class="boxSkills">
            <h4>CSS 3</h4>
            <img src="assets/image/css/css3-${cor}.svg">
        </div>
        <div class="boxSkills">
            <h4>JavaScript</h4>
            <img src="assets/image/js/javascript-${cor}.svg">
        </div>
        <div class="boxSkills">
            <h4>Bootstrap</h4>
            <img src="assets/image/bs/bootstrap-${cor}.svg">
        </div>
        <div class="boxSkills">
            <h4>Git</h4>
            <img src="assets/image/git/git-${cor}.svg">
        </div>
        <div class="boxSkills">
            <h4>GitHub</h4>
            <img src="assets/image/github/github-${cor}.svg">
        </div>
        `
        itens.innerHTML = texto
    }
