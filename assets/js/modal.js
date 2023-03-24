let modal = document.querySelector(".project-modal")
document.querySelector(".text-car").addEventListener("click", () => {
    modal.classList.add("active-modal")
})

document.querySelector(".close").addEventListener("click", () => {
    modal.classList.remove("active-modal")
})