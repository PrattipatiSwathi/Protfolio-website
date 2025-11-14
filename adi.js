// Smooth Scroll handled by CSS (scroll-behavior: smooth)
document.querySelectorAll('a[href^="#"]').foreach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
// Form submission message
document.getElementById("contactForm").addEventListener("Send Me", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
    this.reset();
});
