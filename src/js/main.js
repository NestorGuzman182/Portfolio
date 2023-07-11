
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
  let requestJson = await fetch(`./lang/${language}.json`);
  var textLang = await requestJson.json();

  for (let textToChange of textsToChange) {
     let section = textToChange.dataset.section
     const value = textToChange.dataset.value
     if(section.includes('|')){
       section = section.split('|')
       textToChange.innerText = textLang[section[0]][section[1]][value]
     }else {
      console.log({section})
      console.log({value})
      textToChange.innerText = textLang[section][value];
     }
  } 
}


const typeWriter = (function() {
  const elements = document.querySelectorAll('.container__typewriter p');
  let index = 0;
  let currentElement = elements[index];
  let text = currentElement.getAttribute('data-text');
  let letterIndex = 0;
  let intervalId;

  function type() {
    if (letterIndex < text.length) {
      currentElement.textContent += text.charAt(letterIndex);
      letterIndex++;
    } else {
      clearInterval(intervalId);
      currentElement.classList.add('visible');
      index++;
      if (index < elements.length) {
        currentElement = elements[index];
        text = currentElement.getAttribute('data-text');
        letterIndex = 0;
        setTimeout(() => {
          currentElement.textContent = '';
          currentElement.classList.add('visible');
          intervalId = setInterval(type, 100);
        }, 1000);
      }
    }
  }

  function start() {
      //currentElement.classList.add('visible');
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




