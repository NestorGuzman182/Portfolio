import '../css/styles.css';
import '../css/animate.css';
import '../images/next-logo.png';
import '../images/profile.jpg';
import '../images/profile-3.jpeg';

let valueLang = 'ENG'
let textsToChange = document.querySelectorAll("[data-section]");

const toggleButton = document.getElementById('toggle-btn'); 
const toggleButtonMobile = document.getElementById('toggle-btn-mob'); 
const toggleButtons = [toggleButton, toggleButtonMobile].filter(Boolean)

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    let flag = button.classList.contains('eng');
    let textLanguage = [
      document.getElementById('lang-text'), 
      document.getElementById('lang-text-mob')
    ].filter(Boolean);
    
    toggleButtons.forEach(button => {
      if (flag) {
        button.classList.remove("eng");
        button.classList.add("spa");
        valueLang = 'SPA';
      } else {
        button.classList.add("eng");
        button.classList.remove("spa");
        valueLang = 'ENG';
      }
    })
    textLanguage.forEach(text => text.textContent = valueLang);
    changeLanguage(valueLang);
  });
})

const changeLanguage = async (language) => {
  try {
    const basePath = window.location.hostname.includes("github.io") ? "/Portfolio" : "";
    const response = await fetch(`${basePath}/lang/${language}.json`);
    const data = await response.json();

    textsToChange.forEach(text => {
      let section = text.getAttribute("data-section");
      let value = text.getAttribute("data-value");

      if (data[section] && data[section][value]) {
        text.textContent = data[section][value];
      }
    });
  } catch (error) {
    console.error('Error al cargar la informacion: ', error);
  }
}

const typeWriter = (() => {
  const elements = document.querySelectorAll('.container__typewriter p');
  let index = 0;

  let letterIndex = 0;
  let intervalId;

  function type() {
    let currentElement = elements[index];
    let text = currentElement.getAttribute('data-text');

    if (letterIndex < text.length) {
      currentElement.textContent += text.charAt(letterIndex);
      letterIndex++;
    } else {
      clearInterval(intervalId);
      setTimeout(() => {
        if (index < elements.length - 1) {
          index++;
          letterIndex = 0;
          intervalId = setInterval(type, 100);
        } else {
          setTimeout(() => {
            intervalId = setInterval(deleteText, 50);
          }, 2000);
        }
      }, 500);
    }
  }

  function deleteText() {
    const currentElement = elements[index];

    if (letterIndex > 0) {
      currentElement.textContent = currentElement.textContent.slice(0, -1);
      letterIndex--;
    } else {
      clearInterval(intervalId);
      if (index > 0) {
        index--;
        letterIndex = elements[index].getAttribute('data-text').length;
        intervalId = setInterval(deleteText, 50);
      } else {
        setTimeout(reset, 500);
      }
    }
  }

  function reset() {
    elements.forEach(el => {
      el.textContent = '';
      el.classList.remove('visible');
    });
    index = 0;
    letterIndex = 0;
    elements[index].classList.add('visible');
    intervalId = setInterval(type, 100);
  }

  function start() {
    elements[index].classList.add('visible');
    intervalId = setInterval(type, 100);
  }

  document.addEventListener('visibilitychange', () => {
    clearInterval(intervalId);
  });

  return {
    start: start
  };
})();

typeWriter.start();
changeLanguage(valueLang)




