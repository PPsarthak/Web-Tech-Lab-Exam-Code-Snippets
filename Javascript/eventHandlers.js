var bgImg = document.getElementById("firstImg")
var text = document.getElementById("moto")

bgImg.addEventListener("mouseover", ()=>{
    bgImg.style.filter = "brightness(50%)"
    text.style.color = "white"
})
bgImg.addEventListener("mouseleave", ()=>{
    bgImg.style.filter = "brightness(80%)"
    text.style.color = "black"
})
