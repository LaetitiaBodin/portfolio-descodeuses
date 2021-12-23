<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 25</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 25</h1>
<?php

$name = isset($_GET["name"]) ? $_GET["name"] : "aucun";
$surname = isset($_GET["surname"]) ? $_GET["surname"] : "aucun";
$age = isset($_GET["age"]) ? $_GET["age"] : "aucun";

echo strData (); 

function startHTML () {
return 
'<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 25</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 25</h1>';
};

function strData () {
    global $name;
    global $surname;
    global $age;
    return "
    <p>Paramètres&nbsp;:</p>
    <p>Nom&nbsp;: $name</p>
    <p>Prénom&nbsp;: $surname</p>
    <p>Age&nbsp;: $age</p>"; 
};

function endHTML () {
return '
</body>
</html>';
};

$name = "Toto";
$surname = "Titi";
$age = 18;
$newHTML = startHTML().strData().endHTML();

$myFile = "NewPage.php";   
$fh = fopen($myFile, 'w');
fwrite($fh, $newHTML);
fclose($fh);

echo "<a href='$myFile?name=$name&amp;surname=$surname&amp;age=$age'>
        Voir les informations pour \"nom\" = \"$name\", \"prénom\" = \"$surname\" et \"âge\" = \"$age\".
      </a>";
    
?>
</body>
</html>