
import { home, gameStart } from './modules/Home.js';
import { playground } from './modules/Playground.js';

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

$(document).ready( function () {
    if (windowWidth < 992 || windowHeight < 720) {
        $('body').append(`
        <div id="small_screen">
            <p>Votre écran est trop petit pour ce jeu.</p>
            <p>Merci d'utiliser une tablette en mode paysage ou un PC.</p>
        </div>
        `)
    } else {
        home();
        playground();
        gameStart();

    }
})
