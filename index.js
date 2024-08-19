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
        document.body.style.overflowX = 'hidden';
        
    }
});

// aboutUsBtn.addEventListener('click', function (event) {
//     event.preventDefault();

//     // Smooth scroll to the top of the page
//     window.scrollTo({
//         top: document.getElementById('aboutUs').offsetTop - 100, // Replace with the actual ID of the target element
//         behavior: 'smooth'
//     });
// });



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

// this is for the animation of the menu

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    }));
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer2.observe(el));

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));


// document.addEventListener("DOMContentLoaded", function() {
//     const backgrounds = ['url(images/main_image.png)', 'url(images/main_image2.JPG)'];
//     const backgroundElement = document.querySelector('.background-image');
//     let currentIndex = 0;

//     function changeBackground() {
//         // Apply blur before changing the background image
//         backgroundElement.style.filter = 'blur(5px)';
        
//         setTimeout(() => {
//             currentIndex = (currentIndex + 1) % backgrounds.length;
//             backgroundElement.style.backgroundImage = backgrounds[currentIndex];
//             // Remove blur after a slight delay to allow for image load
//             setTimeout(() => {
//                 backgroundElement.style.filter = 'blur(0px)';
//             }, 300); // This delay should be enough for the image to "load" under the blur
//         }, 500); // This is the delay before the new background starts loading
//     }

//     // Call the function periodically to change the background
//     setInterval(changeBackground, 5000); // Increase interval to allow for full transition
// });





let headerBackground = document.querySelectorAll('.background');

let imageIndex = 0;

function changeBackground() {
    //remove showing class from image 
    headerBackground[imageIndex].classList.remove('showing');

    //increment value of index
    imageIndex++;

    // if an image index is more than the number of elements reset to 0
    if(imageIndex >= headerBackground.length) {
        imageIndex = 0;
    }

    //add the showing class to the next element
    headerBackground[imageIndex].classList.add('showing');
    
}

setInterval(changeBackground, 3000);