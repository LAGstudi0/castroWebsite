const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-phone')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})





//     const element = document.createElement('div');
//     element.classList.add('up-container');

//     //Button for going up the page
//     const upBtn = document.createElement('a');
//     upBtn.classList.add('up-btn');
//     upBtn.href = '#top';

//     window.addEventListener('resize', function() {
//         if (window.innerWidth <= 600) {
//             upBtn.href = "#top"; 
//         }
//     });

//     if (window.innerWidth <= 600) {
//         upBtn.href = "#top"; 
//     }

//     //Image inside the button.
//     const icon = new Image();
//     icon.src = "./images/arrowUp.svg";

//     upBtn.appendChild(icon);
//     element.appendChild(upBtn);



// document.body.appendChild(element);


// below is for the up button

const element = document.createElement('div');
element.classList.add('up-container');

// Button for going up the page
const upBtn = document.createElement('a');
upBtn.classList.add('up-btn');

// Set the href attribute to an empty string to make it a valid anchor link
upBtn.href = '#';

upBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    // Smooth scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) {
        upBtn.href = '#';
    }
});

if (window.innerWidth <= 600) {
    upBtn.href = '#';
}

// Image inside the button.
const icon = new Image();
icon.src = './images/arrowUp.svg';

upBtn.appendChild(icon);
element.appendChild(upBtn);

document.body.appendChild(element);

// on top of this is for the up button 



// this is for the top nav
window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 500);
});
