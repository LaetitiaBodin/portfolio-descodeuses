<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 35</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 35</h1>
    <?php
    
    // Attention ! Ni le contenu ni l'intégrité des fichiers téléchargés ne sont vérifiés.
    // Seuls les pdf sont acceptés. La taille maximale du fichier dépend des réglages du serveur.

        function cleanName ($var) {
            // Enlève les tags html.
            $var_clean = strip_tags($var);
            // Enlève tout ce qui n'est pas une lettre ou un trait d'union ou une apostrophe.
            $var_clean = preg_replace('/[^\p{L}\-\']/u', '', $var_clean);
            // Remplace 2 traits d'union consécutifs par un seul.
            $var_clean = preg_replace('/-{2,}/u', '-', $var_clean);
            // Remplace 2 apostrophes consécutives par une seule.
            $var_clean = preg_replace('/\'{2,}/u', '\'', $var_clean);

            if ($var == $_POST["name"]) {
                // La chaîne est mise en minuscules.
                $var_clean = mb_strtolower($var_clean, 'UTF-8');
                // La 1ère lettre de la chaîne est mise en majuscule.
                $var_clean = ucfirst($var_clean);
            } else if ($var == $_POST["surname"]) {
                // La chaîne est mise en majuscules.
                $var_clean = mb_strtoupper($var_clean, 'UTF-8');
            }
            
            // Retourne la chaîne passée en argument après nettoyage.
            return $var_clean;
        }

        $gender = $_POST["gender"];
        $name = cleanName($_POST["name"]);
        $surname = cleanName($_POST["surname"]);

        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["fileUL"]["name"]);
        $uploadOk = 1;
        $file_type = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        if ($name != '' && $surname != '') {
            echo 
            "<p>$gender</p>
            <p>PRENOM : $name </p>
            <p>NOM : $surname </p>";
        } else {
            header("location:index.html");
        }
        
        if ($file_type != "pdf") {
            echo "<p>Seuls les <em>pdf</em> sont autorisés.</p>";
            $uploadOk = 0;
        }

        if (file_exists($target_file)) {
            echo "<p>Ce fichier existe déjà.</p>";
            $uploadOk = 0;
        }

        if ($uploadOk == 0) {
            echo "<p>Votre fichier n'a pas pu être téléchargé.</p>";
        } else {
            if (move_uploaded_file($_FILES["fileUL"]["tmp_name"], $target_file)) {
                echo "<p>Le fichier <em>". htmlspecialchars( basename( $_FILES["fileUL"]["name"])). "</em> a bien été téléchargé.</p>";
            } else {
                echo "<p>Erreur. Votre fichier n'a pas pu être téléchargé.</p>";
            }
        }
        
    ?>
</body>
</html>