import { skills } from "./info-trad.js";
//import Swal from "sweetalert2";

let playgame = document.getElementById('play-game')
playgame.addEventListener('click', game)

async function skillRender() {
    let render = document.getElementById('skills-render');
    console.log(skills)
    for (const skill of skills) {
        render.innerHTML += `
                    <div class="container__skill">
                        ${ skill.img }
                        <p>${ skill.name }</p>
                    </div>
                    `
    }
}

skillRender();

function game() {
    Swal.fire('Hello World!')
}


