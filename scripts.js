/* 
function opennav() {

    document.getElementById("indexnav").style.width = "100%";
    document.body.style.overflow = "hidden"; // stop user from scrolling the background when the overlay is active
   }
// function to close overlay

function closenav() {
    document.getElementById("indexnav").style.width = "0%";
    document.body.style.overflow = ""; // Re-enable background scrolling

}

// ADD event listener to the navlinks
/* 
const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
       // e.preventDefault(); //prevent default link behaviour
        const  targetID  = link.getAttribute("href").substring(1);// get section id from the link href attribute
        const targetSection = document.getElementById(targetID);
        // smoothly scroll to target section 
        targetSection.scrollIntoView({behavior: "smooth"});
closenav();

    });

}); */
/* 
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
 */


// Button to scroll to top
/* 
const scrolltop = document.getElementById("marvBtn");
// show button when user scroll down 100px from top of document
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     scrolltop.style.display ="block";   } else {
        scrolltop.style.display = "none";
     }
}
// scroll top on click of button 
function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // other browsers
}  */

// JavaScript for overlay handling
const overlay = document.querySelector('.overlay');
const openOverlayButton = document.querySelector('.nav-overlay');
const closeOverlayButton = document.querySelector('.closebutton');

// Open overlay
openOverlayButton.addEventListener('click', () => {
    opennav()
    overlay.style.display = 'block'; // Show the overlay
});

// Close overlay
closeOverlayButton.addEventListener('click', () => {
    closenav()
    overlay.style.display = 'none'; // Hide the overlay
});

// Close overlay on link click (optional, if links inside should close it)


// Handle screen resize
function handleResize() {
    if (window.innerWidth >= 1024) {
        // For larger screens, ensure overlay is always visible
        overlay.style.display = 'flex';
        overlay.style.position = 'fixed';
        console.log('ThIS IS GREAT')
    } else {
        // For smaller screens, ensure overlay is hidden initially
        console.log("small screen");
        overlay.style.display = 'none';
        document.querySelectorAll('.overlaycontent a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.style.display = 'none';
            });
        });
    }
}

// Attach resize event
window.addEventListener('resize', handleResize);

// Initialize state on page load
handleResize();

    // Open navigation overlay
/* function opennav() {
    document.getElementById("indexnav").style.width = "100%";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close navigation overlay
function closenav() {
    document.getElementById("indexnav").style.width = "0%";
    document.body.style.overflow = ""; // Re-enable background scrolling
} */

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
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrolltop.style.display = "block"; // Show button
    } else {
        scrolltop.style.display = "none"; // Hide button
    }
}

// Scroll to the top when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For other browsers
    console.log('scrolled up');
}

// Highlight active navigation link based on the visible section
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navlink");

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionID = entry.target.id;
                navLinks.forEach(link => {
                    if (link.getAttribute("href").substring(1) === sectionID) {
                        link.classList.add("active"); // Highlight active link
                    } else {
                        link.classList.remove("active"); // Remove highlight from others
                    }
                });
            }
        });
    }, observerOptions);
console.log('intersection worked');
    // Observe each section
    sections.forEach(section => observer.observe(section));
});
