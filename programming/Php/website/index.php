<?php 
require 'Back/articles.php';
require 'Back/language.php';

var_dump(loadArticle());
selectLanguage('fr');
echo TEXT_WELCOME;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma boutique en ligne d'articles</title>
</head>
<body>
  <?php 
  $headerTitle = 'Test';
  require 'Front/header.php';
   ?>

   <div>
    <h2> 
      <?php
      $pageTitle = 'H2 page test title ';
       echo $pageTitle; ?></h2>
    <?php 
    for ($i=0; $i<3; $i++) {
      $title = 'Test article '. $i;
      $price = 30;
      $description = 'nouvel article';
      require 'Front/article.php';
    }
     ?>
   </div>
  
</body>
</html>