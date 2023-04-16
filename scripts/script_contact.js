const showAllWithLangN = () => {

    let lang = document.querySelector("html").lang;

    let en_show = lang == "en" ? "block" : "none";
    let fr_show = lang == "fr" ? "block" : "none";

    const elements_fr = document.querySelectorAll('.contact-form [lang="fr"]');
    for (let element of elements_fr) {
        element.style.display = fr_show;
    }

    const elements_en = document.querySelectorAll('.contact-form [lang="en"]');
    for (let element of elements_en) {
        element.style.display = en_show;
    }
};

window.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("englishToggle").addEventListener("click", () => {
        document.querySelector("html").lang = "en";
    })

    document.getElementById("frenchToggle").addEventListener("click", () => {
        document.querySelector("html").lang = "fr";
    })

    showAllWithLangN();
    document.addEventListener("click", showAllWithLangN);
});