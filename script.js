
let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '0';
  title.innerHTML = 'Sign In';
  text.innerHTML = 'Lost Password';
  signUpBtn.classList.add('disable');
  signInBtn.classList.remove('disable');
  underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '60px';
  title.innerHTML = 'Sign Up';
  text.innerHTML = 'Password Suggestions';
  signUpBtn.classList.remove('disable');
  signInBtn.classList.add('disable');
  underline.style.transform = 'translateX(0)';

});

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}