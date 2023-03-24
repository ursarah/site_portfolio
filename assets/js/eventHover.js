let skills = document.querySelectorAll(".boxSkills")

const images = [{white: "html5-white",
                colored: "html5-colored"},
                {white: "css3-white",
                colored: "css3-colored"},
                {white: "javascript-white",
                colored: "javascript-colored"},
                {white: "bootstrap-white",
                colored: "bootstrap-colored"},
                {white: "git-white",
                colored: "git-colored"},
                {white: "github-white",
                colored: "github-colored"}]

skills.forEach((skill, i) => {
    let image = document.querySelectorAll(".boxSkills img")
    
    skill.addEventListener("mouseover", () => {
        image[i].src = `assets/image/${images[i].colored}.svg`
    })

    skill.addEventListener("mouseout", () => {
        image[i].src = `assets/image/${images[i].white}.svg`
    })
})