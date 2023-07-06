'use strict'
document.addEventListener('DOMContentLoaded', function() {

// navbar toggle button ------------------------------------------
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', function() {
    return navBarLinks.classList.toggle('active');
});

// add book button ----------------------------------------------
const addBookButton = document.getElementById('add-book-button');
const bookCardForm = document.getElementById('book-card-wrapper');
const blurBackground = document.getElementById('blur');
let isFormOpen = false;

function openForm() {
    bookCardForm.classList.add('active');
    blurBackground.classList.add('active');
    isFormOpen = true;
}

function closeForm() {
    bookCardForm.classList.remove('active');
    blurBackground.classList.remove('active');
    isFormOpen = false;
    bookCardForm.reset();
}

addBookButton.addEventListener('click', function () {
  if (isFormOpen) {
    closeForm();
  } else {
    openForm();
  }
});

window.addEventListener("click", function (event) {
  if (event.target !== addBookButton && !bookCardForm.contains(event.target)) {
    closeForm();
  }
});

// book card form -----------------------------------------------
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// Add submit event listener to the form
bookCardForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('form-title').value;
    const author = document.getElementById('form-author').value;
    const pages = document.getElementById('form-pages').value;
    

    console.log('Form submitted');
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Pages:', pages);
    
    // Reset the form
    bookCardForm.reset();
});
});
