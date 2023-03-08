let btn = document.getElementById("darkTheme")
let backG = document.getElementById ("bg")
let img = document.getElementById("image")
btn.addEventListener("click", btnDark)

function btnDark(){
    backG.classList.toggle("active")
    if (backG.classList.contains("active")) {
        img.src = "assets/image/darkLight/sol.svg"
    }
    else {        
        img.src = "assets/image/darkLight/lua.svg"
    }
}