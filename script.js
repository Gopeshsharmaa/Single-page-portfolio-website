const heading = document.getElementById("dynamic-heading");
const messages = [
   "Hello, I'm [Your Name]",
   "Web Developer | Problem Solver",
   "Creative Coder & Learner"
 ];
 let index = 0;

 setInterval(() => {
   index = (index + 1) % messages.length;
   heading.textContent = messages[index];
 }, 3000);

 // Smooth scroll for nav links
 document.querySelectorAll("nav a").forEach(link => {
   link.addEventListener("click", function (e) {
     e.preventDefault();
     const target = document.querySelector(this.getAttribute("href"));
     if (target) {
       window.scrollTo({
         top: target.offsetTop - 60,
         behavior: "smooth"
       });
     }
   });
 });