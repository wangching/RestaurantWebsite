function navChange() {
    const navElement = document.querySelector("nav");
    const logoElement = document.querySelector("nav a img");
    const navButtonElements = document.querySelectorAll("nav a div");
    const navHomeElements = document.querySelectorAll(".logo span");
    const toggleElements = document.querySelectorAll(".languageToggle p");

    if (this.scrollY > 100) {
        logoElement.style.height = "40px";
        logoElement.style.width = "40px";
        navElement.style.height = "60px";
        navElement.style.backgroundColor = "#efd9b4";
        navButtonElements.forEach((button) => {
            button.style.color = "#292522";
            button.style.border = "0px";
        })
        navHomeElements.forEach((span) => {
            span.style.border = "0px";
            span.style.color = "black";
            span.style.fontSize = "15px";
        })
        toggleElements.forEach((toggle) => {
            toggle.style.color = "black";
        })
    } else {
        logoElement.style.height = null;
        logoElement.style.width = null;
        navElement.style.height = null;
        navElement.style.backgroundColor = null;
        navButtonElements.forEach((button) => {
            button.style.color = null;
            button.style.border = null;
        })
        navHomeElements.forEach((span) => {
            span.style.border = null;
            span.style.color = null;
            span.style.fontSize = null;
        })
        toggleElements.forEach((toggle) => {
            toggle.style.color = null;
        })
    }
}

window.addEventListener("scroll", navChange, false);

window.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("englishToggle").addEventListener("click", () => {
        document.querySelector("html").lang = "en";
    })

    document.getElementById("frenchToggle").addEventListener("click", () => {
        document.querySelector("html").lang = "fr";
    })
})
