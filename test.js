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





/* const overlay = document.querySelector('.overlay');
const openOverlayButton = document.querySelector('.nav-overlay');
const closeOverlayButton = document.querySelector('.closebutton');
const nav = document.querySelector('.nav'); // Select your navigation element


function opennav() {
    nav.style.display = 'block'; // Or any animation you want
    // Example animation (using a CSS class)
    //nav.classList.add('slide-in'); 
}

function closenav() {
    nav.style.display = 'none'; // Or any animation you want
    // Example animation (using a CSS class)
    //nav.classList.remove('slide-in');
}

openOverlayButton.addEventListener('click', () => {
    opennav();
    overlay.style.display = 'block';
});

closeOverlayButton.addEventListener('click', () => {
    closenav();
    overlay.style.display = 'none';
}); */