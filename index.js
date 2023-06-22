const menutoggle = document.querySelector('#menutoggle');
const menutoggle2 = document.querySelector('#menutoggle2');
const nav = document.querySelector('nav');
const navicons = document.querySelectorAll('.navicons');
const hamburger = document.querySelector('#hamburger');

menutoggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  navicons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

menutoggle2.addEventListener('click', () => {
  nav.classList.toggle('show');
  navicons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    nav.classList.remove('show');
    navicons.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
  }
});

// // From this point is to validate the form data

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#form1');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter your address with lowercases';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  // if valid, submit the form.
  if (nameValid && emailValid) {
    form.submit();
  }
});

// Store and preserve local data

// Check if localStorage is supported by the browser
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness

  function saveFormData() {
  // Create an object to store the form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    // Convert formData to a JSON string
    const jsonData = JSON.stringify(formData);

    // Store JSON string in localStorage
    localStorage.setItem('formData', jsonData);
  }

  // Load and pre form data
  function loadFormData() {
    // Get string from local storage
    const jsonData = localStorage.getItem('formData');

    // Check stored data
    if (jsonData) {
      // Convert JSON string to an object
      const formData = JSON.parse(jsonData);

      // Pre-fill the inputs with the stored data
      document.getElementById('name').value = formData.name;
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.message;
    }
  }
  loadFormData();

  document.getElementById('submitBtn').addEventListener('click', saveFormData);
}