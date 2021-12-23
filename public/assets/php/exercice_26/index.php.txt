<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 26</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 26</h1>
<?php

$name = "Toto";
$surname = "Titi";
$age = rand(0, 150);

function startHTML () {
return 
'<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 26</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 26</h1>
    ';
};

function strData () {
    global $name;
    global $surname;
    global $age;
    return
    "<p>Paramètres&nbsp;:</p>
    <p>Nom&nbsp;: $name</p>
    <p>Prénom&nbsp;: $surname</p>
    <p>Age&nbsp;: $age</p>
    "; 
};

function strError () {
    return "
    <p>Les informations entrées sont invalides</p>
    ";
}

function strReturn () {
    return 
    "<a href='index.php'>Retour</a>";
}

function endHTML () {
return '
</body>
</html>';
};

function ifValidData () {
    global $name;
    global $surname;
    global $age;
    $isValidData = "ValidData.php";
    $openValid = fopen($isValidData, 'w');
    fwrite($openValid, startHTML().strData().strReturn().endHTML());
    fclose($openValid);
    echo "<a href='$isValidData?name=$name&amp;surname=$surname&amp;age=$age'>Informations</a>";
}

function ifInvalidData () {
    global $name;
    global $surname;
    global $age;
    $isInvalidData = "InvalidData.php";
    $openInvalid = fopen($isInvalidData, 'w');
    fwrite($openInvalid, startHTML().strError().endHTML() );
    fclose($openInvalid);
    echo "<a href='$isInvalidData?name=$name&amp;surname=$surname&amp;age=$age'>Informations</a>";
}

function checkData () {
    global $age;
    if ($age >= 18 && $age <= 130) {
        ifValidData();
    } else {
        ifInvalidData();
    }
};
    
?>
<p><?= strData() ?></p>
<p><?= checkData() ?></p>
</body>
</html>