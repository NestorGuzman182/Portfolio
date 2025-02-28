import { skills } from "./info-trad.js";
import { TicTacToeGame } from "./game.js";
import Swal from "sweetalert2";

const playgame = document.getElementById('play-game');
const contactBtn = document.getElementById('contact-btn');
playgame.addEventListener('click', game);
contactBtn.addEventListener('click', showForm);

const input = document.getElementById("fullname");
if (input && !input.getAttribute("type")) {
    input.setAttribute("type", "text");
}

document.addEventListener('DOMContentLoaded', function() {
    const subsections = document.querySelectorAll('.subsection');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });
    subsections.forEach((sub) => observer.observe(sub));
})

async function skillRender() {
    let render = document.getElementById('skills-render');
    const categories = Object.values(orderByCategory(skills));

     for(const category of categories) {
        render.innerHTML += `
            <details>
                <summary>${category.category}</summary>
                <div class="container__general">
                    ${category.skills.map(skill => `
                        <div class="container__skill">
                            ${skill.img}
                            <p>${skill.name}</p>
                        </div>
                    `).join('')}
                </div>
            </details>
        `
    } 

}

skillRender();

function orderByCategory(arr) {
    return arr.reduce((acc, obj) => {
        const { category, ...skill } = obj;

        if(!acc[category]) {
            acc[category] = { category, skills: [] };
        }
        acc[category].skills.push(skill);
        return acc
    }, {});
}

function showForm() {
    const contactForm = document.getElementById("contact-form");

    Swal.fire({
        title: '<span style= "color:#e6007e !important"> Contact Me </span>',
        html: contactForm.outerHTML,
        allowOutsideClick: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#060d13',
        didOpen: () => {
            //document.querySelector('.swal-close-button').style.color = '#e6007e';
           //const modalForm = document.querySelector(".swal2-html-container form");

            // Agregar evento de envío para capturar los datos
        }
    });
}

function game() {
    Swal.fire({
        allowOutsideClick: false,
        html: createTemplateGame(),
        confirmButtonText: 'Exit',
        background: '#060d13',
        didOpen: () => setupGame()
    })
}

function createTemplateGame() {
    return `
        <div id="tic-tac-toe">
            <div class="result" id="result"></div>
            <div class="board" id="board">
                ${Array(9).fill(0).map((_,i) => `<div class="board__cell" data-index="${i}"></div>`).join('')}
            </div>
            <div class="buttons-container">
                <button id="btn-reset">Reset</button>
            </div>    
        </div>
        `
}

function setupGame() {
    const tictacgame = new TicTacToeGame();
    const btnReset = document.getElementById('btn-reset');
    tictacgame.init();
    btnReset.addEventListener('click', () => tictacgame.resetGame());
    
    const buttonsContainer = document.querySelector(".buttons-container");
    const confirmButton = document.querySelector(".swal2-confirm");
    buttonsContainer.appendChild(confirmButton);
}


