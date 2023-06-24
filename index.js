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
// Save form data to localally
function saveFormData() {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

// Fill form fields with data gathered from local storage
function fillFields() {
  const formData = localStorage.getItem('formData');

  if (formData) {
    const parsedData = JSON.parse(formData);
    document.getElementById('name').value = parsedData.name;
    document.getElementById('email').value = parsedData.email;
    document.getElementById('message').value = parsedData.message;
  }
}

// Event listener for form input changes
const inputFields = document.querySelectorAll('input, textarea');
inputFields.forEach((input) => {
  input.addEventListener('input', saveFormData);
});

// Load form data from local storage on page load

if (storageAvailable('localStorage')) {
  fillFields();
}

// Projects

const projects = [{
  id: 1,
  card: 'project1',
  image: './HTML&CSS/Images/Tonic.svg',
  Title: 'Tonic',
  history: {
    client: 'CANOPY',
    tech: 'Backend Dev',
    year: 2015,
  },
  Discription: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
{
  id: 2,
  card: 'project2',
  image: './HTML&CSS/Images/arti.svg',
  Title: 'Multi-Post',
  history: {
    client: 'CANOPY',
    tech: 'Backend Dev',
    year: 2015,
  },
  Discription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
{
  id: 3,
  card: 'project3',
  image: './HTML&CSS/Images/joga.svg',
  Title: 'Tonic',
  history: {
    client: 'CANOPY',
    tech: 'Backend Dev',
    year: 2015,
  },
  Discription: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
];

const section = document.getElementById('projects');

const projectMethod = () => {
  projects.map((card) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.classList.add(card.card);
    project.innerHTML = `<img
              class="project_image "
              src=${card.image}
              alt="Project image"
              />
              <div class="project_detail">
              <div class="project-title">
              <h2>${card.Title}</h2>
                <div class="project-history">
                  <div class="project-his-det"><p>${card.history.client}</p></div>
                <div>
                <img src="./HTML&CSS/Images/Counter.svg"/>
                </div>
                <div class="project-his-det">
                <p>${card.history.tech}</p>
                  </div>
                  <div>
                  <img src="./HTML&CSS/Images/Counter.svg"/>
                   </div>
                  <div class="project-his-det"><p>${card.history.year}</p></div>
                </div>
              </div>
              <div class="project_discription">
              <p>${card.Discription}</p>
              </div>
               <div class="project-tags">
                <div class="lang-tag">
                 <span class="spanning">${card.tags.html}</span>
                 </div>
                  <div class="lang-tag">
                      <span class="spanning">${card.tags.css}</span>
                 </div>
                 <div class="lang-tag">
                         <span class="spanning">${card.tags.javascript}</span>
                 </div>
               </div>
              <div class="project_buttons">
              <button onclick="button(${card.id})" class="btn" id="btn" type="button">See Project</button>
              </div>
               </div>`;

    return section.appendChild(project);
  });
};

projectMethod();

const modal = document.getElementById('model');
const btn = document.getElementById('btn');

function button(id) {
  modal.style.display = 'flex';
  const card = projects.find((card) => card.id === id);
  const project = document.createElement('div');
  project.classList.add('modelsection');
  project.classList.add(card.card);
  project.innerHTML = `<div class="header">
               <div>
              <h2>${card.Title}</h2>
               <div class="project_history">
                 <div class="card_history_detaill_model"><p>${card.history.client}</p></div>
                <div>
                       <img src="./HTML&CSS/Images/Counter.svg"/>
                </div>
                   <div class="project-his-det">
                  <p>${card.history.tech}</p>
                </div>
                  <div>
                  <img src="./HTML&CSS/Images/Counter.svg"/>
                 </div>
                 <div class="project-his-det"><p>${card.history.year}</p></div>
               </div>
               </div>
              
              <span id="modelCloseIcon">
                    <img src="./HTML&CSS/icons/close popup.svg" alt="close button">
              </span>
            </a>
          </div>
       <div class="modelimage">
            <img
               class="project_image_model"
                src=${card.image}
             alt="Project image"/>
             </div>
             <div class="modeldiscription">
              <div class="project_discription">
               <p>
                   ${card.Discription}
                 </p>
            </div>
              <div class="project-tags">
                <div class="modeltags">
                 <div class="lang-tag">
                   <span class="spanning">${card.tags.html}</span>
                </div>
                <div class="lang-tag">
                 <span class="spanning">${card.tags.css}</span>
                </div>
                <div class="lang-tag">
                  <span class="spanning">${card.tags.javascript}</span>
                </div>
              </div>
              <hr class="hr">
              <div class="project_buttons">
                    <button class="modelbtn" type="button"> See Live <img style="height: 24px; width: 24px; margin-left: 6px;" src="./HTML&CSS/buttons/Icon -see live.svg" alt="See live button"></button>
                     <button class="modelbtn" type="button"> See source <img style="height: 24px; width: 24px; margin-left: 6px;" src="./HTML&CSS/buttons/Icon -GitHub.svg" alt="button to source code"> </button>
           </div>
            </div>
         </div>`;

  modal.appendChild(project);
  setTimeout(() => {
    const span = document.getElementById('modelCloseIcon');
    span.onclick = function Poping() {
      modal.style.display = 'none';
      modal.removeChild(project);
    };
  }, 50);
}
let id;
const cardID = projects.find((card) => card.id === id);
btn.onclick = button(cardID.id);
