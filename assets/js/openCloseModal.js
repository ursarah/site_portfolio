
// ABRI E FECHAR   
        
// Dar evento de click pro text car para abrir um id especifico
const eventClicks = document.querySelectorAll(`.text-car`)

// o que vai aparecer
const openModals = document.querySelectorAll(`.project-modal`)

// Div do X d fechar modal
const closeModals = document.querySelectorAll(".close")


for(let i = 0; i <= openModals.length; i++){
    // Abrir modais
    eventClicks[i].addEventListener("click", ()=>{
        openModals[i].classList.add("active-modal")
    })        
    
    // Fechar modal
    closeModals[i].addEventListener("click", () =>{
        openModals[i].classList.remove("active-modal")   
    })       
}




