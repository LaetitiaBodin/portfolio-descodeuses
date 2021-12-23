<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 41</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 41</h1>
    <p>Merci de vous connecter.</p>
    <form action="index.php" method="post">
        <label for="name">PSEUDO</label>
        <input type="text" name="name" id="name" required>
        <label for="password">MOT DE PASSE</label>
        <input type="password" name="password" id="password" required>
        <button type="submit" value="submit">ENVOYER</button>
    </form>
    <?php

    if (isset($_POST["name"]) && isset($_POST["password"])) {
        $_COOKIE["name"] = $_POST["name"];
        $_COOKIE["password"] = $_POST["password"];
       
        setcookie("name", $_COOKIE["name"], time() + (86400 * 30), null, null, null, true);
        setcookie("password", $_COOKIE["password"], time() + (86400 * 30), null, null, null, true);

        function newHTML () {
            return
'<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 41</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 41</h1>
    <p>Bienvenue&nbsp;!</p>
    <p>Vos identifiants de connexion&nbsp;:</p>
    <p>PSEUDO&nbsp;: '.$_POST["name"].'</p>
    <p>MOT DE PASSE&nbsp;: '.$_POST["password"].'</p>
    <p>Des cookies ont été créés avec ces informations&nbsp;: <i>'.$_COOKIE["name"].'</i> et <i>'.$_COOKIE["password"].'</i>.</p>
</body>
</html>';
        } 

        $newPage = "welcome.php";   
        $fh = fopen($newPage, 'w');
        fwrite($fh, newHTML());
        fclose($fh);
        header("location:$newPage");
    }

    ?>
</body>
</html>