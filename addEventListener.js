let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        header.style.boxShadow = "0px 3px 6px gray";
    } else {
        header.style.boxShadow = "none";
    }
})