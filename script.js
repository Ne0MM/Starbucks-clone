const menu = document.getElementById("menu")
const card = document.getElementById("cardImage")

function menuHandler() {
    menu.classList.toggle("hidden")
}

imageHandler = () => {
    document.querySelector(".cardOneContainer").style.transform = "translateX(-100%)"
}