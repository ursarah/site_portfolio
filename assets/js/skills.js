


let skill = document.querySelector(".boxSkills")
let tags = document.getElementById("habilidades")
let itens = document.createElement("div")
itens.classList.add("skill")
tags.appendChild(itens)

let texto = `
    <div class="boxSkills" onmouseover="coloridoHTML()" onmouseout="white()">                        
        <h4>HTLM 5</h4>
        <img src="assets/image/html/html5-white.svg">          
    </div>
    <div class="boxSkills" onmouseover="colorido()" onmouseout="white()">
        <h4>CSS 3</h4>
        <img src="assets/image/css/css3-white.svg">
    </div>
    <div class="boxSkills" onmouseover="colorido()" onmouseout="white()">
        <h4>JavaScript</h4>
        <img src="assets/image/js/javascript-white.svg">
    </div>
    <div class="boxSkills" onmouseover="colorido()" onmouseout="white()">
        <h4>Bootstrap</h4>
        <img src="assets/image/bs/bootstrap-white.svg">
    </div>
    <div class="boxSkills" onmouseover="colorido()" onmouseout="white()">
        <h4>Git</h4>
        <img src="assets/image/git/git-white.svg">
    </div>
    <div class="boxSkills" onmouseover="colorido()" onmouseout="white()">
        <h4>GitHub</h4>
        <img src="assets/image/github/github-white.svg">
    </div>
    `

function white() {
    let text = `
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
        return text
    
}


function coloridoHTML() {
    let text = `
        <div class="boxSkills">                        
            <h4>HTLM 5</h4>
            <img src="assets/image/html/html5-colored.svg">          
        </div>`

        return text
}
   

itens.innerHTML = texto