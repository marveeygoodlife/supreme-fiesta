function openNav() {

    document.getElementById("navbar").style.width = "100%";
    document.body.style.overflow = "hidden"; // stop user from scrolling the background when the overlay is active
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
       // e.preventDefault(); //prevent default link behaviour
        const  targetID  = link.getAttribute("href").substring(1);// get section id from the link href attribute
        const targetSection = document.getElementById(targetID);
        // smoothly scroll to target section 
        targetSection.scrollIntoView({behavior: "smooth"});
closenav();

    });

});
