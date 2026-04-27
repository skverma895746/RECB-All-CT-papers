const errorBox = document.querySelector(".errorDilogBox")
const links = document.querySelectorAll("a")
if (links && errorBox) {
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            let text = link.textContent;
            console.log(text)
            if (link.getAttribute("href") === "" || link.getAttribute("href") == "#") {
                e.preventDefault();
                popupMessage(`${text} will be available soon.`)
            }
      
        })
    })
}
function popupMessage(msg){
    errorBox.innerHTML = `<span id="errorIcon">⚠️</span>
    <span>${msg}</span>`;

    errorBox.style.bottom = "50px";
    setTimeout(() => {
        errorBox.style.bottom = "-100%";
    }, 1500);
}
// when page loaded
document.addEventListener("DOMContentLoaded", () => {
    if (links && errorBox) {
        links.forEach((link) => {
            if (link.getAttribute("href") === "" || link.getAttribute("href") === "#") {
                link.style.color = "red";
            }

        })
    }
})
