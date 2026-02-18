<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Test </title>
</head>
<body>
  <?php echo '<h1> Bonjour </h1>'; ?>
  
  <p> Liste d'animaux : </p>

  <?php 

  $animals = ['lion', 'chat', 'agneau', 'rat', 'singe', 'leopard'] ;
  echo '<ul';
    shuffle($animals);

    foreach ($animals as $animal) {
    echo '<li>'.$animal.'</li>';
    }
    echo '</ul>' ; 


    $userName = 'Jhon';
    $newMessage = [
      'RDV 12h',
      'Projet X',
      'Maj Doc'
    ];

    echo '<h1> Hello ' . $userName . '!' ; 
    echo '<p>Vous avez ' . count($newMessage) . ' nouveaux messages . </p>';

    echo '<ul>';
    foreach ($newMessage as $id => $message) {
      echo '<li><a href="/readMessages/'. $id. '">' .$message . '</a></li>' ;
    }
    echo'</ul>'
    ?>
  
</body>
</html>