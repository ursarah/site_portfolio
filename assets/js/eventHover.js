let skills = document.querySelectorAll(".boxSkills")

for (let i = 0; i < skills.length; i++){
    skills[i].addEventListener("mouseover", () => {
        let imageB = document.querySelectorAll(".imageBox")
        let links = ["html5-colored", "css3-colored", "javascript-colored", "bootstrap-colored", "git-colored", "github-colored"]  
        imageB[i].src = `assets/image/${links[i]}.svg`
    })
    skills[i].addEventListener("mouseout", () => {
        let imageB = document.querySelectorAll(".imageBox")
        let links = ["html5-white", "css3-white", "javascript-white", "bootstrap-white", "git-white", "github-white"]
        imageB[i].src = `assets/image/${links[i]}.svg`
    })

}