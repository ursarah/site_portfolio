let btn = document.getElementById("darkTheme")
btn.addEventListener("click", btnDark)

function btnDark(){
    document.getElementById("bg").classList.toggle("active")
}