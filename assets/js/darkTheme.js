let btn = document.querySelector(".darkTheme")
let backG = document.getElementById ("bg")
let icon = document.querySelector(".ball-dark i")

btn.addEventListener("click", () => {
    backG.classList.toggle("light")
    if (backG.classList.contains("light")) {
        icon.classList.remove("bxs-moon")
        icon.classList.add("bxs-sun")
    }
    else {        
        icon.classList.remove("bxs-sun")
        icon.classList.add("bxs-moon")
    }
})