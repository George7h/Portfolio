const menutoggle = document.querySelector('#menutoggle');
const menutoggle2 = document.querySelector('#menutoggle2');
const nav = document.querySelector('nav');
const navicons = document.querySelectorAll('.navicons');

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

const menuItems = document.querySelectorAll('.linav a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close the menu by simulating a click on the menu toggle button
        menutoggle.click();
    });
});

// Form validation functions
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
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
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
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
  event.preventDefault();

  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (nameValid && emailValid) {
    form.submit();
  }
});

// Local Storage Functions
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
      e instanceof DOMException &&
      (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage &&
      storage.length !== 0
    );
  }
}

function saveFormData() {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

function fillFields() {
  const formData = localStorage.getItem('formData');

  if (formData) {
    const parsedData = JSON.parse(formData);
    document.getElementById('name').value = parsedData.name;
    document.getElementById('email').value = parsedData.email;
    document.getElementById('message').value = parsedData.message;
  }
}

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
  image: './HTML&CSS/Images/module1capstone.svg',
  Title: 'NPConnect',
  history: {
    client: 'Plain Webpage',
    tech: 'Frontend Development',
    year: 2023,
  },
  Discription: 'This a website to connect people that are interested in the role-playing game: Dungeons and Dragons. This website will have awesome features. Finding awesome Dungeon Masters, find nearby players and much more. Check it out.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    ruby: '',
  },
  button: 'myBtn',
  codeSource: 'https://github.com/George7h/Module-1-capstone-project',
  SeeLive: 'https://george7h.github.io/Module-1-capstone-project/index.html',
},
{
  id: 2,
  card: 'project2',
  image: './HTML&CSS/Images/Javascriptcapstone.svg',
  Title: 'MGSeries',
  history: {
    client: 'Series List App with comments and likes',
    tech: 'Frontend Development',
    year: 2023,
  },
  Discription: 'This a website that displays a list of series retrieved from an API. The UI is designed for a user to be able to like a series and also view extra details about it and add comments.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    ruby: '',
  },
  button: 'myBtn',
  codeSource: 'https://github.com/George7h/JavaScript-Capstone',
  SeeLive: 'https://george7h.github.io/JavaScript-Capstone/',
},
{
  id: 3,
  card: 'project3',
  image: './HTML&CSS/Images/Investgrow-HUB3capstone.svg',
  Title: 'InvestGrow Hub',
  history: {
    client: 'Investment monitoring App',
    tech: 'Frontend Development',
    year: 2023,
  },
  Discription: 'This is a React and Redux project that leverages real live data from Financial modeling prep API. My mission is to develop a mobile web application that helps people monitor stock prices.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    ruby: '',
  },
  button: 'myBtn',
  codeSource: 'https://github.com/George7h/investgrow-hub',
  SeeLive: 'https://investgrow-hub.onrender.com/',
},
{
  id: 4,
  card: 'project4',
  image: './HTML&CSS/Images/Budgetapp.svg',
  Title: 'Budgetto',
  history: {
    client: 'Budgeting App',
    tech: 'Backend Development',
    year: 2024,
  },
  Discription: 'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    ruby: 'Ruby',
  },
  button: 'myBtn',
  codeSource: 'https://github.com/George7h/Budget-App',
  SeeLive: 'https://budgettobudgetbpp.onrender.com/',
},
{
  id: 5,
  card: 'project5',
  image: './HTML&CSS/Images/Finalcapstone.svg',
  Title: 'StaySphere',
  history: {
    client: 'Hotel booking System',
    tech: ['Backend-',  ' Frontend Development'],
    year: 2024,
  },
  Discription: 'This app built with Rails and React on two different apps. This application enables users to signin/signup create hotels/AirBnb listings and create reservations on each hotel.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    ruby: 'Ruby',
  },
  button: 'myBtn',
  codeSource: 'https://github.com/George7h/final-capstone-react-front-end',
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
                 ${card.tags.html ? `<span class="spanning">${card.tags.html}</span>` : ''}
                 </div>
                  <div class="lang-tag">
                      ${card.tags.css ? `<span class="spanning">${card.tags.css}</span>` : ''}
                 </div>
                 <div class="lang-tag">
                         ${card.tags.javascript ? `<span class="spanning">${card.tags.javascript}</span>` : ''}
                 </div>
                 <div class="lang-tag">
                         ${card.tags.ruby ? `<span class="spanning">${card.tags.ruby}</span>` : ''}
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
  modal.style.opacity = '0';
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
                 ${card.tags.html ? `<div class="lang-tag"><span class="spanning">${card.tags.html}</span></div>` : ''}
                 ${card.tags.css ? `<div class="lang-tag"><span class="spanning">${card.tags.css}</span></div>` : ''}
                 ${card.tags.javascript ? `<div class="lang-tag"><span class="spanning">${card.tags.javascript}</span></div>` : ''}
                 ${card.tags.ruby ? `<div class="lang-tag"><span class="spanning">${card.tags.ruby}</span></div>` : ''}
              </div>
              <hr class="hr">
              <div class="project_buttons">
              ${card.SeeLive ? `<button class="modelbtn" type="button"><a class="modelbtnlink" href="${card.SeeLive}" target="_blank"> See Live </a><img style="height: 24px; width: 24px; margin-left: 6px;" src="./HTML&CSS/buttons/Icon -see live.svg" alt="See live button"></button>` : ''}
              ${card.codeSource ? `<button class="modelbtn" type="button"><a class="modelbtnlink" href="${card.codeSource}" target="_blank"> See source </a><img style="height: 24px; width: 24px; margin-left: 6px;" src="./HTML&CSS/buttons/Icon -GitHub.svg" alt="button to source code"> </button>` : ''}
           </div>
            </div>
         </div>`;

  modal.appendChild(project);
  
  // Using setTimeout to give a slight delay before changing opacity to allow transition to take effect
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.style.transition = 'opacity 2.5s';
  }, 50);
  
  setTimeout(() => {
    const span = document.getElementById('modelCloseIcon');
    span.onclick = function Poping() {
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.display = 'none';
        modal.removeChild(project);
      }, 1000);
    };
  }, 50);
}


function toggleDropdown() {
  var dropdown = document.querySelector('.skilllist');
  var dropdownIcon = document.querySelector('.iconskills img');
  var hrElement = document.getElementById('skillsHr');

  if (dropdown.style.display === 'flex') {
    // If dropdown is currently visible, hide it and show the hr
    dropdown.style.display = 'none';
    hrElement.style.display = 'block';
    dropdownIcon.src = './HTML&CSS/icons/active.png';
} else {
    // If dropdown is currently hidden, show it and hide the hr
    dropdown.style.display = 'flex';
    hrElement.style.display = 'none';
    dropdownIcon.src = './HTML&CSS/icons/Disabled.png';
}
}

function toggleDropdown2() {
  var dropdown = document.querySelector('.databaselist');
  var dropdownIcon = document.querySelector('.dropdown-database img');
  var hrElement = document.getElementById('databaseHr');

  if (dropdown.style.display === 'flex') {
      // If dropdown is currently visible, hide it and show the hr
      dropdown.style.display = 'none';
      hrElement.style.display = 'block';
      dropdownIcon.src = './HTML&CSS/icons/active.png';
  } else {
      // If dropdown is currently hidden, show it and hide the hr
      dropdown.style.display = 'flex';
      hrElement.style.display = 'none';
      dropdownIcon.src = './HTML&CSS/icons/Disabled.png';
  }
}


function toggleDropdown3() {
  var dropdown = document.querySelector('.langlist');
  var dropdownIcon = document.querySelector('.iconlang img');
  var hrElement = document.getElementById('langHr');

  if (dropdown.style.display === 'flex') {
      // If dropdown is currently visible, hide it and show the hr
      dropdown.style.display = 'none';
      hrElement.style.display = 'block';
      dropdownIcon.src = './HTML&CSS/icons/active.png';
  } else {
      // If dropdown is currently hidden, show it and hide the hr
      dropdown.style.display = 'flex';
      hrElement.style.display = 'none';
      dropdownIcon.src = './HTML&CSS/icons/Disabled.png';
  }
}

function toggleDropdown4() {
  var dropdown = document.querySelector('.framelist');
  var dropdownIcon = document.querySelector('.iconframe img');
  var hrElement = document.getElementById('frameHr');

  if (dropdown.style.display === 'flex') {
      // If dropdown is currently visible, hide it and show the hr
      dropdown.style.display = 'none';
      hrElement.style.display = 'block';
      dropdownIcon.src = './HTML&CSS/icons/active.png';
  } else {
      // If dropdown is currently hidden, show it and hide the hr
      dropdown.style.display = 'flex';
      hrElement.style.display = 'none';
      dropdownIcon.src = './HTML&CSS/icons/Disabled.png';
  }
}

// Function to toggle dropdown visibility
document.addEventListener('DOMContentLoaded', function() {
  // Hide dropdown lists initially
  document.querySelectorAll('.langlist, .databaselist, .skilllist, .framelist').forEach(function(dropdown) {
      dropdown.style.display = 'none';
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Hide dropdown lists initially
    document.querySelectorAll('.langlist, .databaselist, .skilllist, .framelist').forEach(function(dropdown) {
        dropdown.style.display = 'none';
    });

    // Event listeners for dropdown icons
    document.querySelector('.iconskills').addEventListener('click', function() {
        var dropdown = document.querySelector('.skilllist');
        var icon = document.querySelector('.iconskills img');
        toggleDropdown(dropdown, icon);
    });

    document.querySelector('.dropdown-database').addEventListener('click', function() {
        var dropdown = document.querySelector('.databaselist');
        var icon = document.querySelector('.dropdown-database img');
        toggleDropdown(dropdown, icon);
    });

    document.querySelector('.iconlang').addEventListener('click', function() {
        var dropdown = document.querySelector('.langlist');
        var icon = document.querySelector('.iconlang img');
        toggleDropdown(dropdown, icon);
    });

    document.querySelector('.iconframe').addEventListener('click', function() {
        var dropdown = document.querySelector('.framelist');
        var icon = document.querySelector('.iconframe img');
        toggleDropdown(dropdown, icon);
    });

    // Function to toggle dropdown visibility
    function toggleDropdown(dropdown, icon) {
        if (dropdown.style.display === 'flex') {
            // If dropdown is currently visible, hide it
            dropdown.style.display = 'none';
            icon.src = './HTML&CSS/icons/active.png';
        } else {
            // If dropdown is currently hidden, show it
            dropdown.style.display = 'flex';
            icon.src = './HTML&CSS/icons/Disabled.png';
        }
    }
});});