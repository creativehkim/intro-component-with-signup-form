const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const modal = document.getElementById('modal');
const modalCloseBtn = document.querySelectorAll('.close__btn');
const overlay = document.getElementById('overlay');


form.addEventListener('submit', (e)=> {
  e.preventDefault();

  checkInputs();
 
})


function checkInputs() {
  // get the values from the inputs
  const fnameValue = firstName.value.trim(); // removes all the white spaces
  const lnameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(fnameValue === '') {
    // show error
    // add error class
    setErrorFor(firstName, 'First name cannot be blank');

  } else {
    // add success class
    setSuccessFor(firstName);

  }

  if(lnameValue === '') {
    setErrorFor(lastName, 'Last name cannot be blank');

  } else {
    setSuccessFor(lastName);

  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');

  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');

  } else {
    setSuccessFor(email);

  }

  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');

  } else if(!isPassword(passwordValue)) {
    setErrorFor(password, 'Password must be more than 8 characters with at least one number');
    
  } else {
    setSuccessFor(password);

  }

  
  // show a success message

}




function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form__control
  const small = formControl.querySelector('small');

  // add error message inside samll
  small.innerText = message;

  // add error class
  formControl.className='form__control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control success';
}

function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isPassword(password) {
  const re = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*].{8,}$/; // more than 8 chars, at least one number
  return re.test(password);
}



// function showModal() {
//   modal.classList.add('active');
//   overlay.classList.add('active');
  
// }

// function closeModal() {
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// }
