let choiceOptions = [`rock`, `paper`, `scissors`];
let computerChoice;
let playerChoice;
let playerWin = 0;
let computerWin = 0;
let rounds = 0;

$("#go").click(function () {
    $("#go").attr("disabled", true);
    $("#reset").attr("disabled", false);
    rounds++;
    playerChoice = $("#player").val();
    computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    if (playerChoice == `rock` && computerChoice == `paper` ||
        playerChoice == `paper` && computerChoice == `scissors` ||
        playerChoice == `scissors` && computerChoice == `rock`) {
        $("#result").html(`Computer wins!`);
        $("#result").addClass("bg-danger");
        computerWin++;
    } else if (playerChoice == `rock` && computerChoice == `scissors` ||
                playerChoice == `paper` && computerChoice == `rock` ||
                playerChoice == `scissors` && computerChoice == `paper`) {
                $("#result").html(`Player wins!`);
                $("#result").addClass("bg-success");
                playerWin++;
    } else if (playerChoice == computerChoice) {
        $("#result").html(`It's a tie!`);
        $("#result").addClass("bg-warning");
        computerWin++;
        playerWin++;
    }
    $("#roundsTots").html(rounds);
    $("#playerVics").html(playerWin);
    $("#computerVics").html(computerWin);
    $("#playerVicsAvg").html(`${Math.round(playerWin * 100 / rounds)}%`);
    $("#computerVicsAvg").html(`${Math.round(computerWin * 100 / rounds)}%`);
})

$("#reset").click(function () {
    $("#go").attr("disabled", false);
    $("#reset").attr("disabled", true);
    computerChoice = ``;
    playerChoice = ``;
    $("#result").html(``);
    $("#result").removeClass("bg-danger").removeClass("bg-success").removeClass("bg-warning");
})