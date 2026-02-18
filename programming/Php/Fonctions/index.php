<?php 
$sentence = ("Dont repeat yourself");
echo $sentence."<br>"."\n";

echo strlen($sentence)."\n";
?>
<?php

function sayHello($firstName, $lastName)
{
    return "Bonjour " . $firstName . " " . $lastName . "!";
}
$bonjour = sayHello("Samuel", "Doe"). "\n";

echo $bonjour;
?>

<?php 
strlen("toto");
$grades= [2,3,4,42,3,4,3,1,2];
// var_dump($grades); // Affiche en console plus précis
print_r($grades); // Affiche également en console
?>

<?php
$movie = "Children of Men";
$rates = [3, 4, 2, 4, 3, 5, 0];
$comment = ["Albert", "Super film, j’ai adoré!"];

$total = array_sum($rates);
$numberTotal =  count($rates);
$medium = $total / $numberTotal;

var_dump('total', $medium);

// ******

$auteurName = $comment[0];
$nameLength = strlen($auteurName);
$stars = str_repeat("*", $nameLength -1);

$anonymousName = $auteurName[0] . $stars;

var_dump($anonymousName);



?>


<!-- Déclarer ses propres fonction -->

<?php 

//Déclaration de la fonction sayHi 
function sayHi(string $firstName, string $lastName): string 
{ 
    $currentDay = date("l");
    $currentDayNumber = date("d");
    $currentMonth = date("F");
    $currentTime = date('H:i'); 
    return "Bonjour " . $firstName . " " . $lastName ."Aujourd'hui nous sommes ". 
    $currentDay ." ".  $currentDayNumber ." ". $currentMonth.  " Il est " . 
    $currentTime ; 
} 

//Appel de la fonction sayHi (le corps de la fonction sayHi est éxecuté) 

$message = sayHi('John', 'Doe'); 
echo $message;


?>

<?php 

function multiply(int $x,int $y, int $z): int {
  return $x * $y *$z;
}

$result = multiply(2,5,4);

$arrayMultiply = multiply(...[3,2,7,9]); 
# " ... "Permet de déplier le tableau le 9 étant pas attendu comme argument, 
# il sera ignoré

var_dump($result);
var_dump($arrayMultiply)
 ?>


<!-- Passage des arguments par valeur -->
<?php 
function name(string $namePerson = "Tom") {
$namePerson = strtoupper($namePerson);
return "Bonjour " . $namePerson . "!" . PHP_EOL ;
}
$so = name();

print_r($so);

$someone= 'Eve';
// print_r(name($someone));
echo $someone;

 ?>

 <!-- Passage des arguments par référence -->

 <?php 
 function emptyArray(array & $array){
  $array =array([1,2]);
  return $array;
 }
 $foo = array(1,2,3);
 print_r($foo);

 $empty = emptyArray($foo);
 var_dump($foo);
 print_r($empty)

  ?>

  <?php

function foo(int $a, int $b, int $c):int 
{
	return $a + $b + $c;
}

echo foo(1, 2, '3') . PHP_EOL;
echo foo(...[1, 2, 3, 4, 5]). PHP_EOL;
// echo foo(1, 2). PHP_EOL; Erreur 

function bar(array $array) {
  $foo[0] = 'Bonjour';
}
$foo = array(1,2,3);
bar($foo);
print_r($foo);

?>

<!-- Exercice video -->


<?php

/**
  *Retourne la somme des items sur laquelle on a effectué une opération
  *@param array $array la liste des sommes à calculer
  *@param callable opération L'opération à faire a chaque items
 */
//Une fonction qui prend une fonction en argument

function sum(array $array, callable $operation){
$result = array_map($operation, $array);
return array_sum($result);
}

echo sum(array(1,2,3), function($items) {

  return $items * $items;
  }
); PHP_EOL;


?>

<!-- Fonctions récursives -->
 <!-- Ex 1 -->
 
 <?php
/**
* Calcul du produit factoriel d'un nombre de manière itérative
* @param int $n Un entier positif
* @return int Le produit factoriel
*/
function factorielIterative(int $n): int
{
	//Par définition, 0! = 1
	if ($n === 0) {
		return 1;
	}

	$result = $n;

	for ($i = $n - 1; $i !== 0; $i = $i - 1) {
		$result *= $i;
	}

	return $result;
}

//Affiche 1
echo factorielIterative(0);

//Affiche 120
echo factorielIterative(5);
?>

<!-- Ex 2 -->
<?php
/**
* Calcul du produit factoriel d'un nombre de manière récursive
* @param int $n Un entier positif
* @return int Le produit factoriel
*/
function factorielRecursive(int $n): int
{
	//Par définition, 0! = 1
	if ($n === 0) {
		return 1;
	}
	return $n * factorielRecursive($n - 1);
}
//Tests
echo factorielRecursive(0);
echo factorielRecursive(1);
echo factorielRecursive(5);
?>

<?php 

$n = 1;

function fizzBuzzRecursive(int $n) {
#Condition d'arret
  if ($n === 1){
    return '1';
  }

  if($n % 3 === 0 && $n % 5 == 0){
    return fizzBuzzRecursive($n - 1). " FizzBuzz";
  }
  if($n % 3 === 0 ){
    return fizzBuzzRecursive($n - 1). " Fizz";
  } 
  if($n % 5 === 0 ){
    return fizzBuzzRecursive($n - 1). " BUzz";
  } 

  return fizzBuzzRecursive($n - 1). " ". $n;
}
echo fizzBuzzRecursive(20)

 ?>