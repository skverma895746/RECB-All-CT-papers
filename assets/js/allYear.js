const errorBox = document.querySelector(".errorDilogBox")
const links = document.querySelectorAll("a")
if (links && errorBox) {
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            if (link.getAttribute("href") === "") {
                e.preventDefault();
                errorBox.textContent = " ⚠️PDF will available soon."
                errorBox.style.display = "flex";
            }
            setTimeout(() => {
                errorBox.style.display = "none";
            }, 1000)
        })
    })
}
