 // function to listen for the large screen size

function isOverlayEnabled() {
    const width = window.innerWidth;
    return width < 1024; //enable overlay for screens smaller than 1024px
}
// function to open nav overlay
function openNav() {


    if (isOverlayEnabled()) {
        document.getElementById("navbar").style.width = "100%";
        document.body.style.overflow = "hidden"; // stop user from scrolling the background when the overlay is active
    
    }
  
}
// function to close overlay

function closenav() {
    document.getElementById("navbar").style.width = "0%";
    document.body.style.overflow = ""; // Re-enable background scrolling

}

// ADD event listener to the navlinks

const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); //prevent default link behaviour
        const  targetID  = link.getAttribute("href").substring(1);// get section id from the link href attribute
        const targetSection = document.getElementById(targetID);
        // smoothly scroll to target section 
        targetSection.scrollIntoView({behavior: "smooth"});
closenav();

    });

});

//listen for window resize to enable / disable overlay

window.addEventListener("resize", () => {


    const navOverlayButton = document.querySelector(".nav-overlay");
    if (window.innerWidth >= 1024) {
        navOverlayButton.style.display = "none"; // Hide the button for desktop
    } else {
        navOverlayButton.style.display = "block"; // Show the button for smaller screens
    }
    if (!isOverlayEnabled()) {
        document.getElementById("navbar").style.width = "0%"; // close overlay on large screen
    }
});




/* 
g
    // Function to check if overlay should be enabled based on screen size
function isOverlayEnabled() {
    const width = window.innerWidth;
    return width < 1024; // Enable overlay for screens smaller than 1024px
}

// Function to open the navigation overlay
function openNav() {
    if (isOverlayEnabled()) {
        const navbar = document.getElementById("navbar");
        navbar.style.width = "100%"; // Expand overlay to full screen
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

// Function to close the navigation overlay
function closenav() {
    const navbar = document.getElementById("navbar");
    navbar.style.width = "0%"; // Collapse overlay
    document.body.style.overflow = ""; // Re-enable background scrolling
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetID = link.getAttribute("href").substring(1); // Extract section ID
        const targetSection = document.getElementById(targetID);

        // Scroll smoothly to the target section if it exists
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Close the overlay after navigation
        closenav();
    });
});

// Listen for window resize to manage overlay visibility and toggle button
window.addEventListener("resize", () => {
    const navOverlayButton = document.querySelector(".nav-overlay");
    const navbar = document.getElementById("navbar");

    if (window.innerWidth >= 1024) {
        navOverlayButton.style.display = "none"; // Hide toggle button on desktop
        navbar.style.width = "0%"; // Ensure overlay is closed on large screens
    } else {
        navOverlayButton.style.display = "block"; // Show toggle button on smaller screens
    }
});
 */