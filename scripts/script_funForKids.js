window.addEventListener("DOMContentLoaded", (event) => {

    const funContainers = document.getElementsByClassName("funContainer");
    for (let i = 0; i < funContainers.length; i++) {
        funContainers[i].addEventListener("mouseover", () => {
            document.getElementsByClassName("click")[i].style.color = "black";
            document.getElementsByClassName("click")[i].style.transform = "scale(1.5) rotate(-30deg)";
        })
        funContainers[i].addEventListener("mouseout", () => {
            document.getElementsByClassName("click")[i].style.color = null;
            document.getElementsByClassName("click")[i].style.transform = null;
        })
    }
})