function modo_light(){
    let body = document.getElementById("bg")
    let btn_modo = document.getElementById("btn-modo")
    if(body.classList.contains("active")){
        body.classList.remove("active")
        btn_modo.innerText = "toggle_off"
    }else{
        body.classList.add("active");
        btn_modo.innerText = "toggle_on"
    }
}