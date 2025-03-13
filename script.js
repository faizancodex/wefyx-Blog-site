// for navbar menu active
document.addEventListener('DOMContentLoaded', function () {
    const navbarlinks = document.querySelectorAll('nav a');

    navbarlinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('nav a.active').classList.remove('active');
            this.classList.add('active')
        });
    });
});



// for scroller menu
const scrollAmount = 300;
const scroller = document.getElementById('scroller');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');

function updateButtonVisibility() {
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    scrollLeftButton.classList.toggle('hidden', scroller.scrollLeft === 0);
    scrollRightButton.classList.toggle('hidden', scroller.scrollLeft >= maxScrollLeft);
}
scrollRightButton.addEventListener('click', function () {
    scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    updateButtonVisibility();
});
scrollLeftButton.addEventListener('click', function () {
    scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    updateButtonVisibility();
});
scroller.addEventListener('scroll', updateButtonVisibility);
// Initial button visibility check
updateButtonVisibility();

// for blog category menu
// slect all category buttons and cards
const categoryButtons = document.querySelectorAll(".category-scroller button")
const cardsList = document.querySelectorAll(".card-list .card")

// define the fitercards functions

const categoryCards = e => {
    document.querySelector(".category button.active").classList.remove("active");
    e.target.classList.add("active")

    // iterate over each category cards
    cardsList.forEach(card => {
        // add "hide" class to hide the card initially
        card.classList.add("hide");
        // check if the card matches the selected filter or "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};
// add click event listner to each filter button
categoryButtons.forEach(button => button.addEventListener("click", categoryCards));




// Show Signup form popup
document.getElementById('signup-btn').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

// Hide Popup with Close Button:
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'none';
});

// Hide Popup by Clicking Outside:
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popup-container')) {
        document.getElementById('popup-container').style.display = 'none';
    }
});

// for form password
const forms = document.querySelector(".loginformcontainer"),
    pwShowHide = document.querySelectorAll(".pw-eye"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                // Show password
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            // Hide password
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

// for login and signup link 
// Get the form container and links
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.querySelector('.link[href="#"]'); // Adjust selector if needed
const signupLink = document.querySelector('.link[href="#create-account"]'); // Adjust selector if needed

// Function to show login form and hide signup form
function showLoginForm() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

// Function to show signup form and hide login form
function showSignupForm() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
}

// Event listeners for toggling forms
loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    showLoginForm();
});

signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    showSignupForm();
});

// Initial setup: hide the signup form by default
showLoginForm();
