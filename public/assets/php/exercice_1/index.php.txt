<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 1</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 1</h1>
    <?php
        $welcome_msg = "Hello World!";
        $lorem_5 = "Lorem ipsum dolor sit amet.";
        $lorem_10 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, deserunt?";
        $lorem_20 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum facere cupiditate deserunt est reiciendis debitis temporibus, officia accusantium non!";
        $lorems = array($lorem_5, $lorem_10, $lorem_20);

        echo "<h2>{$welcome_msg}</h2>";
        foreach($lorems as $lorem) {
            echo "<p>{$lorem}</p>";
        };
    ?>
</body>
</html>