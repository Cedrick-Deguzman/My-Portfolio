document.addEventListener("DOMContentLoaded", function() {
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
    
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        // loading
        var loader = document.querySelector("#preloader");
        var mainContent = document.querySelector("#content");

        // // Show the preloader initially
        // loader.style.display = "block";
        // mainContent.style.display = "none";

        // // Delay the showing of the main content by 2 seconds (2000 milliseconds)
        // var contentDelay = 3000;

        // // Hide the preloader and show the main content after the delay
        // setTimeout(function() {
        //     loader.style.display = "none";
        //     mainContent.style.display = "flex";
        // }, contentDelay);
        // const sections = document.querySelectorAll('.section');

        // const sectionObserver = new IntersectionObserver((entries, observer) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('show-section'); // Add class to trigger animation
        //             observer.unobserve(entry.target); // Unobserve after animation triggers once
        //         }
        //     });
        // }, { threshold: 0.5 }); // Adjust threshold based on your preference

        // sections.forEach(section => {
        //     sectionObserver.observe(section);
        // });
    });