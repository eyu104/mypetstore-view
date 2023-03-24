var btn = document.querySelector('.btn');

btn.addEventListener('mouseover',(event)=>{
    const x = (event.pageX - btn.offsetLeft) - 40
    const y = (event.pageY - btn.offsetTop) - 100


    btn.style.setProperty("--xPos",x + "px")
    btn.style.setProperty("--yPos",y + "px")
})