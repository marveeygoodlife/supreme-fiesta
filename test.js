 const overlay = document.querySelector('.overlay');
const openOverlayBtn = document.querySelector('.nav-overlay');
const closeOverlayBtn = document.querySelector('.closebutton');
const navBar = document.querySelector('.overlaycontent');

openOverlayBtn.addEventListener('click', () => {
overlay.style.display = "block";
navBar.style.display = "block";
console.log('NAVBAR IS OPEN')
});

closeOverlayBtn.addEventListener('click', () => {
overlay.style.display = "none";
navBar.style.display = "none";
console.log('NAVBAR IS CLOSED')
});
 


/* 
const overlay = document.querySelector('.overlay');
const openOverlayBtn = document.querySelector('.nav-overlay');
const closeOverlayBtn = document.querySelector('.closebutton');
const navbar = document.querySelector('.overlaycontent'); // Select your navigation element


function opennav() {
    navbar.style.display = 'block'; // Or any animation you want
    // Example animation (using a CSS class)
    //nav.classList.add('slide-in'); 
}

function closenav() {
    overlay.style.display = 'none';
    navbar.style.display = 'none';
    // Or any animation you want
    // Example animation (using a CSS class)
    //nav.classList.remove('slide-in');
}

openOverlayBtn.addEventListener('click', () => {
    navbar.style.display = 'block';
    overlay.style.display = 'block';
    console.log('NAVBAR IS OPEN')

});

closeOverlayBtn.addEventListener('click', () => {
    closenav();
    navbar.style.display = 'none';
    overlay.style.display = 'none';
    console.log('NAVBAR IS CLOSED')

}); 

 */
// Handle screen resize
function handleResize() {
    if (window.innerWidth >= 1024) {
        // For larger screens, ensure overlay is always visible 
        overlay.style.display = 'flex';
         console.log('ThIS IS GREAT')
         opennav();

    } else {
        // For smaller screens, ensure overlay is hidden initially
        console.log("small screen");
        overlay.style.display = 'none';
        document.querySelectorAll('.overlaycontent a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.style.display = 'none';
            });
        });
        closenav();

    }
}


function opennav() {
    navBar.style.display = 'block'; 
    overlay.style.display = "flex";

    // Or any animation you want
    // Example animation (using a CSS class)
    //nav.classList.add('slide-in'); 
}

function closenav() {
    overlay.style.display = "none";
    navBar.style.display = 'none'; 

    // Or any animation you want
    // Example animation (using a CSS class)
    //nav.classList.remove('slide-in');
}

// Smooth scrolling for internal links
const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Check if the link is an internal anchor link
        if (href.startsWith("#")) {
            const targetID = href.substring(1); // Get the ID (remove #)
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                e.preventDefault(); // Prevent default navigation behavior
                targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
                closenav(); // Close the overlay navigation
            }
        }
        // Allow external navigation (e.g., index.html) to proceed as usual
    });
});




// Scroll to top button
const scrolltop = document.getElementById("marvBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrolltop.style.display = "block"; // Show button
     } else {
        scrolltop.style.display = "none"; // Hide button
     }
}

// Scroll to the top when the button is clicked
function topScroll() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For other browsers
 }
