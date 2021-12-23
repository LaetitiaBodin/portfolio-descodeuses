import { characters, goodChoices, badChoices, resultFaces } from "./Setup.js";

let choices = 0;

export function playground () {

    // Adds the game area.
    $('body').append(`
        <div id="playground" class="hidden">
        </div>
    `);

    // Game area is divided in two halves, one for each character.
    // Each has the same layout :
    //     - the face,
    //     - an introduction which includes the default qualities,
    //     - empty spaces which will receive the chosen qualities.

    for (let i = 0; i < characters.length; i++) {
        $('#playground').append(`
            <div id="character_${i}-block" class="fadeIn">
                <p id="character_${i}-face">${characters[i].face}</p>
                <p class="intro">
                    Moi, c'est ${characters[i].name}.<br>Je suis d'un naturel ${defQualities(i)}.<br>
                    Il faut me choisir pour mon côté<br>
                    <span id="character_${i}-good_choice">_____</span> et <span id="character_${i}-bad_choice">_____</span>&nbsp;!
                </p>
                <div id="character_${i}-good_buttons" class="btn-good_qual">${goodQualities()}</div>
                <div id="character_${i}-bad_buttons" class="btn-bad_qual">${badQualities()}</div>
            </div>
        `);
    }

    // Every time a quality is added:
    //    - the quality is added to the character's introduction
    //    - the row which held the quality is removed
    //    - the concerned character reacts
    //    - if all four qualities have been chosen: the button for the match appears.

    // Good qualities for the first character.
    let character_0_goodbuttons = document.querySelectorAll('#character_0-good_buttons > .btn-choice');
    for (let i = 0; i < character_0_goodbuttons.length; i++) {
        $(character_0_goodbuttons[i]).click( () => {
            checkChoice(characters[0], goodChoices[i]);
            removeButtons( $('#character_0-good_buttons'), $('#character_0-good_choice'), goodChoices[i] );
            reaction ( $('#character_0-face'), goodChoices[i], 0 );
            btnMatch();
        });
    }

    // Bad qualities for the first character.
    let character_0_badbuttons = document.querySelectorAll('#character_0-bad_buttons > .btn-choice');
    for (let i = 0; i < character_0_badbuttons.length; i++) {
        $(character_0_badbuttons[i]).click( () => {
            checkChoice(characters[0], badChoices[i]);
            removeButtons( $('#character_0-bad_buttons'), $('#character_0-bad_choice'), badChoices[i] );
            reaction ( $('#character_0-face'), badChoices[i], 0 );
            btnMatch();
        });
    }

    // Good qualities for the second character.
    let character_1_goodbuttons = document.querySelectorAll('#character_1-good_buttons > .btn-choice');
    for (let i = 0; i < character_1_goodbuttons.length; i++) {
        $(character_1_goodbuttons[i]).click( () => {
            checkChoice(characters[1], goodChoices[i]);
            removeButtons( $('#character_1-good_buttons'), $('#character_1-good_choice'), goodChoices[i] );
            reaction ( $('#character_1-face'), goodChoices[i], 1 );
            btnMatch();
        });
    }

    // Bad qualities for the second character.
    let character_1_badbuttons = document.querySelectorAll('#character_1-bad_buttons > .btn-choice');
    for (let i = 0; i < character_1_badbuttons.length; i++) {
        $(character_1_badbuttons[i]).click( () => {
            checkChoice(characters[1], badChoices[i]);
            removeButtons( $('#character_1-bad_buttons'), $('#character_1-bad_choice'), badChoices[i] );
            reaction ( $('#character_1-face'), badChoices[i], 1 );
            btnMatch();
        });
    }

}

function defQualities (char) {

    // Adds the default qualities to the intro.

    let str = `${characters[char].qualities[0]}, ${characters[char].qualities[1]} et ${characters[char].qualities[2]}`;

    return str;

}

function goodQualities () {

    // Adds the good qualities to the dedicated row.

    let str = '';

    for (let choice of goodChoices) {
        str += `<button class="btn-choice">${choice.word}</button>`;
    }

    return str;

}

function badQualities () {

    // Adds the bad qualities to the dedicated row.

    let str = '';

    for (let choice of badChoices) {
        str += `<button class="btn-choice">${choice.word}</button>`;
    }

    return str;

}

function checkChoice (char, choice) {

    // Choices are updated.
    // The button for the match may only appear if choices == 4.

    choices++;

    // The concerned character's score is updated.
    // The scores will be compared later on to declare a winner.

    char.score += choice.score;

}

function removeButtons (btns, choices, choice) {

    // Adds a visual effect to the buttons.
    $(btns).addClass("btn-fadeout");

    setTimeout( () => {

        // The buttons are removed.

        $(btns).remove();

        // The chosen quality is visible in the introduction.

        $(choices).html(choice.word);

    }, 300);

}

function reaction (char, choices, num) {

    setTimeout( () => {

        // The character's face changes.

        char.html(choices.letter);

        // The character has something to say about the choice made.
        // It is displayed in a bubble (its style depends on the choice made).

        $('#playground').append(`
            <div id="characters-message" style="background-image: url('img/bubbles/${choices.img}_${num}.svg')">
                <p>${choices.message}</p>
            </div>`);

    }, 300);

    setTimeout( () => {

        // The character's face returns to default.

        char.html(characters[num].face);

        // The character's message is removed.

        $('#characters-message').remove();

    }, 2000);

}

function btnMatch () {

    // Checks if all 4 qualities have been chosen.
    
    if (choices == 4) {

        // All 4 qualities have been chosen.

        setTimeout( () => {
            
            // The button for the match appears (disabled due to visual effects).

            $('#playground').append(`<button id="btn-match" disabled>?</button>`);

        }, 2100 );

        setTimeout( () => {

            // The button is fully visible, it is no longer disabled.

            $('#btn-match').removeAttr("disabled");

            $('#btn-match').click( () => {

                // The match is done.

                match();

                // The button fades.

                $('#btn-match').addClass("btn-fadeout");

                setTimeout( () => {

                    // The button is removed.

                    $('#btn-match').remove();

                }, 500);
            
            });

        }, 4000);

    }

}

function match () {

    // The characters' scores are compared to declare a winner.

    setTimeout( () => {

        // Depending on the result, the characters' faces change.
        // The winner will say something (in a bubble).
        // Another message appears, declaring the winner.

        if (characters[0].score > characters[1].score) {
            $('#character_0-face').html(resultFaces.win);
            $('#character_1-face').html(resultFaces.lose);
            $('#playground').append(`
                <div id="characters-message" style="background-image: url('img/bubbles/win_0.svg')">
                    <p>C'est moi&nbsp;!</p>
                </div>
                <div id="match-result" style="background-image: url('img/bubbles/match_result.svg')">
                    <p>${characters[0].name} gagne&nbsp;!</p>
                </div>
            `);
        } else if (characters[0].score < characters[1].score) {
            $('#character_0-face').html(resultFaces.lose);
            $('#character_1-face').html(resultFaces.win);
            $('#playground').append(`
                <div id="characters-message" style="background-image: url('img/bubbles/win_1.svg')">
                    <p>C'est moi&nbsp;!</p>
                </div>
                <div id="match-result" style="background-image: url('img/bubbles/match_result.svg')">
                    <p>${characters[1].name} gagne&nbsp;!</p>
                </div>
            `);
        } else {
            $('#character_0-face, #character_1-face').html(resultFaces.win);
            $('#playground').append(`
                <div id="characters-message" style="background-image: url('img/bubbles/win_both.svg')">
                    <p>Il faut nous prendre<br>tous les deux&nbsp;!</p>
                </div>
                <div id="match-result" style="background-image: url('img/bubbles/match_result.svg')">
                    <p>Ex aequo&nbsp;!</p>
                </div>
            `);
        }

    }, 1000);

    setTimeout( () => {

        // The characters' faces return to default.

        $('#character_0-face').html(characters[0].face);
        $('#character_1-face').html(characters[1].face);

        // The character's message is removed.

        $('#characters-message').remove();

    }, 3000);

    setTimeout( () => {

        // The characters' blocks (faces, introductions) fade out.

        $('#character_0-block, #character_1-block').removeClass('fadeIn').addClass('fadeOut');

    }, 4000);

    setTimeout( () => {

        // Everything that was in the playground is removed.

        $('#playground').empty();

        // The game is over: a button appears to reload (disabled due to visual effects).

        $('#playground').append(`<button id="btn-reload" disabled>RELOAD</button>`);

        setTimeout ( () => {
            
            // The button is fully visible, it is clickable.

            $('#btn-reload').removeAttr('disabled');
        
        }, 2000);

        windowReload();

    }, 7000);
}

function windowReload () {

    $('#btn-reload').click( () => window.location.reload() );

}
