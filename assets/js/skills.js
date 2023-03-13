


let skill = document.querySelector("#description .skill .boxSkills")
let tags = document.getElementById("habilidades")
let itens = document.createElement("div")
itens.classList.add("skill")
let texto = `
    <div class="boxSkills">                        
        <h4>HTLM 5</h4>
        <img src="assets/image/html/html5-white.svg" alt="">          
    </div>
    <div class="boxSkills">
        <h4>CSS 3</h4>
        <img src="assets/image/css/css3-white.svg" alt="">
    </div>
    <div class="boxSkills">
        <h4>JavaScript</h4>
        <img src="assets/image/js/javascript-white.svg" alt="">
    </div>
    <div class="boxSkills">
        <h4>Bootstrap</h4>
        <img src="assets/image/bs/bootstrap-white.svg" alt="">
    </div>
    <div class="boxSkills">
        <h4>Git</h4>
        <img src="assets/image/git/git-white.svg" alt="">
    </div>
    <div class="boxSkills">
        <h4>GitHub</h4>
        <img src="assets/image/github/github-white.svg" alt="">
    </div>
    `
itens.innerHTML = texto
tags.appendChild(itens)

// skill.addEventListener("mouseout", function white(obj, branco){
    
// })

skill.addEventListener("mouseover", function () {
    alert("funciona")
        let texto = `
            <div class="boxSkills">                        
                <h4>HTLM 5</h4>
                <img src="assets/image/html/html5-${cor}.svg" alt="">          
            </div>
            <div class="boxSkills">
                <h4>CSS 3</h4>
                <img src="assets/image/css/css3-${cor}.svg" alt="">
            </div>
            <div class="boxSkills">
                <h4>JavaScript</h4>
                <img src="assets/image/js/javascript-${cor}.svg" alt="">
            </div>
            <div class="boxSkills">
                <h4>Bootstrap</h4>
                <img src="assets/image/bs/bootstrap-${cor}.svg" alt="">
            </div>
            <div class="boxSkills">
                <h4>Git</h4>
                <img src="assets/image/git/git-${cor}.svg" alt="">
            </div>
            <div class="boxSkills">
                <h4>GitHub</h4>
                <img src="assets/image/github/github-${cor}.svg" alt="">
            </div>
            `

    item.innerHTML = texto
    tag .appendChild(item)
})

// white(this, "white")
