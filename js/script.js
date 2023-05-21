hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
    
}
let enter = document.querySelector('.enter');
enter.addEventListener('click', function(){
    document.location = 'form.html'
})
