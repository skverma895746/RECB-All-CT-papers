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
                errorBox.textContent = " ⚠️PDF will available soon."
                errorBox.style.display = "flex";
            }
            setTimeout(() => {
                errorBox.style.display = "none";
            }, 1000)
        })
    })
}

