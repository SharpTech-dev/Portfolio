// Navbar active on select
navbar = document.querySelector(".navbar").querySelectorAll("a");

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    });
});


// Mobile nav toggle
$(document).ready(function () {
    $('.mobile-nav-toggle').on('click',function(){
        $('.header').toggleClass('active');
    });
});



// No Server Form Alert
const send = document.querySelector('button');
send.addEventListener('click', function(){
    alert('Error: No server detected, form cannot be submitted.');
});