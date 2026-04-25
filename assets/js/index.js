const errorBox = document.querySelector(".errorDilogBox");
const links = document.querySelectorAll("a");
const greetWord = document.querySelector(".greetWord");
if(greetWord){
 let now = new Date();
 let hour = now.getHours();
 setTimeout(()=>{
 if(hour>=5 && hour <12)
 {
    greetWord.textContent = "Good Morning ☀️";
 }
 else if(hour >=12 && hour <17)
 {
    greetWord.textContent = "Good Afternoon 🌤️";
 }
 else if(hour >=17 && hour< 20){
       greetWord.textContent = "Good Evening 🌇";
 }
 else{
    greetWord.textContent = "Good Night 🌙"
 }
  },4000)
}
// popBox 
if (links && errorBox) {
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            if (link.getAttribute("href") === "") {
                e.preventDefault();             
                errorBox.textContent = popupMessage("⚠️Page will available soon.")
                errorBox.style.bottom = "50px";
            }
            setTimeout(() => {
                errorBox.style.bottom = "-100%";
            }, 1500)
        })
    })
}
function popupMessage(msg){
 return msg;
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
