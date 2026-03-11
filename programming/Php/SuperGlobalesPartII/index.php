<?php
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username === 'admin' AND $password === 'admin') {
      $_SESSION['admin'] = true;
      $_SESSION['username'] = $username;
      
      // création du cookie admin
      
      setcookie('user', 'admin', time() + 3000, '/');
      // redirection
      
      header("location:home.php");
    }
  }
  if($username === 'user' AND $password === 'user') {
// Initialisation de la session en tant qu'utilisateur normal
    $_SESSION['admin']= false;
    $_SESSION['username'] = $username;

// Cookie de l'utilisateur normal
    setcookie('user', 'user', time() + 3000, '/');
    header("location:home.php");
  }
}
?>

<!-- Connexion Bdd et $_ENV -->


<?php 

$db_host = $_ENV['DB_HOST'] = 'localhost';
$db_name = $_ENV['DB_NAME'] = 'env';
$db_user = $_ENV['DB_USER'] = 'admin';
$db_password = $_ENV['DB_PASSWORD'] = 'admin';


try {
  $pdo = new PDO("mysql:host=$db_host;port=8889;dbname=$db_name", $db_user, $db_password );

  echo "Connexion à la base de donnée réussie";
} catch(PDOException $e) {
  
echo "Erreur de connexion à la base de donné e". $e->getMessage();
}
?>