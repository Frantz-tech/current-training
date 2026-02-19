<?php 
require 'Back/articles.php';
require 'Back/language.php';

$language = 'en';
$articles = (loadArticle());
selectLanguage($language);
echo TEXT_WELCOME;
?>

<!DOCTYPE html>
<head>
  <title>Ma boutique en ligne d'articles</title>
</head>
<body>
  <?php $headerTitle = TEXT_WELCOME; require 'Front/header.php';?>
   <div>
    <h2> 
      <?php echo TEXT_ARTICLE; ?></h2>
    <?php 
    foreach($articles as $article){
      $title = $article['name'];
      $price = $article['price'];
      $description = $article['description'];
      require 'Front/article.php';
    }
     ?>
   </div>
  
</body>
</html>