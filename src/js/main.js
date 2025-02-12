import '../css/styles.css';
import '../css/animate.css';
import '../images/next-logo.png';
import '../images/profile.jpg';
import '../images/profile-3.jpeg';

let valueLang = 'ENG'
let toggleConts = document.querySelectorAll(".toggle-cont");
let textsToChange = document.querySelectorAll("[data-section]")

toggleConts.forEach((toggleCont) => {
  let toggleDark = toggleCont.querySelector(".dark");
  let toggleLight = toggleCont.querySelector(".light");
  let flag = false;

  toggleCont.addEventListener("click", (e) => {
    console.log(e)
    flag = !flag;
    console.log(flag)
    if (flag) {
      toggleDark.classList.remove("active");
      toggleLight.classList.add("active");
      valueLang = e.target.parentElement.dataset.language;
      console.log(valueLang)
      changeLanguage(valueLang);
    } else {
      toggleDark.classList.add("active");
      toggleLight.classList.remove("active");
      valueLang = e.target.children[0].dataset.language;
      console.log(valueLang)
      changeLanguage(valueLang);
    }
  });
})

let changeLanguage = async (language) => {
  try {
    const basePath = window.location.hostname.includes("github.io") ? "/Portfolio" : "";

    fetch(`${basePath}/lang/ENG.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("bio-1").textContent = data.profile.bio1;
        document.getElementById("bio-2").textContent = data.profile.bio2;
      })
      .catch(error => console.error("Error cargando el JSON:", error));

    const response = await fetch(`./Portfolio/lang/${language}.json`);
    const data = await response.json();
    console.log('data => ', data);

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




