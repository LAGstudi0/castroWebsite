const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-phone')
const aboutUsBtn = document.querySelector('.original-button');

var isScrollDisabled = false;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Toggle the scroll state
    isScrollDisabled = !isScrollDisabled;

    // Disable or enable scrolling based on the scroll state
    if (isScrollDisabled) {
        // Disable scrolling
        console.log('Disabling scrolling');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scrolling
        console.log('Enabling scrolling');
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        document.body.style.overflowY = 'hidden';
        
    }
});

aboutUsBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Smooth scroll to the top of the page
    window.scrollTo({
        top: document.getElementById('aboutUs').offsetTop - 100, // Replace with the actual ID of the target element
        behavior: 'smooth'
    });
});



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

    // var logo = document.querySelector('.castro-mainLogo');
    // logo.src = 'images/castroLogoWhite.png';
    header.classList.toggle('sticky', window.scrollY > 0);
});
