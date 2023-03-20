let skills = document.querySelector(".boxSkills")
skills.addEventListener("mouseover", () => {
    // alert("oi")
    let imageB = document.querySelector(".imageBox")
    let links = ['html5-colored', 'css3-colored', 'javascript-colored', 'bootstrap-colored', 'git-colored', 'github-colored']
    
    
    for (let i = 0; i <= links.length; i++){
        imageB.src = `assets/image/${links[i]}.svg`
    }
})