<!-- Syntaxe -->

<?php
$firstArray = array(); // V1
$secondArray = []; // V2

?>

<!-- $firstArray = array(cle1 => element1, cle2 => element2, cle3 => element3); -->
<!-- $secondArray = [cle1 => element1, cle2 => element2, cle3 => element3]; -->

<?php
$languages = array('a' => 'PHP', 'b' => 'Javascript', 'c' => 'Python');
$languages2= ['a' => 'PHP', 'b' => 'Js', 'c' => 'Python'];

print_r($languages);
print_r($languages2);

?>

<!-- Tableau Assiociatif ( quand les clés sont des chaines de caractères ) -->

 <?php

$students = [
	"Class1" => ["John", "Mary", "Karim"],
	"Class2" => ["Jane", "Richard", "Anna"]
];

print_r($students)

?>

<!-- Manipulation -->
 <?php

$countries = ["Argentine", "Belgique", "Chili", "Equateur"];
$isoCode = [
"Argentine" => "AR",
"Belgique" => "BE",
	"Chili" => "CL",
	"Equateur" => "EC"
];
echo $countries[1]."\n"; // Affiche Belgique
echo $isoCode["Argentine"]; // Affiche AR
?>

<!-- Afficher tous les élements d'un tableau : -->

<?php

$names = ["Lea", "Morgan", "Lionel", "Marina"];
foreach($names as $key => $name) {
	echo "Le prénom " . $name . " est à la clé " . $key . " du tableau.\n";
};


//Le prénom Lea est à la clé 0 du tableau.
//Le prénom Morgan est à la clé 1 du tableau.
//Le prénom Lionel est à la clé 2 du tableau.
//Le prénom Marina est à la clé 3 du tableau.

?>

<!-- Si on passe une seule valeur as foreach, il prendra que les noms en params -->

<?php 

$prenoms = ["Tom", "Lionel", "Goerges"];
foreach($prenoms as $prenoms) {
  echo "Je m'appelle " . $prenoms . "\n";
} 

?>

<!-- Modifier une valeur mal orthographié -->
 <?php

 $countries =[
  "Europe" => ["France", "Belgique", "Allemagne"],
  "America" => ["Brésil", "Etats Unis", "Mexique"],
  "Asie" => ["Inde", "Chine"]
 ];


$countries["Asie"][0] = "Japon"."\n"; 
echo $countries["Asie"][0];  // Japon
print_r($countries["Asie"]); #Japon / Chine

?>

<?php 

$grades = [ 1, 3 , 5 , 8, 12, 19, 23];

function incrementByOne($grades) {
  return $grades + 1;
}

$gradePlusOne = array_map('incrementByOne', $grades);

print_r($gradePlusOne);
function lessFiftheen($grades) {
  return $grades <= 15;
}

$underFiftheenGrades = array_filter($grades, 'lessFiftheen');

print_r($underFiftheenGrades)

 ?>

 <?php
$s = 0;
for($i=12;$i<20;$i+=2){
	$s += $i;
}
echo $s;
?>

<?php
$t = 40;
while($t>0){
	echo $t,"\n";
	$t-=5;
}
?>

<?php
$t = 40;
while($t>0){
	for($i=($t-10);$i<$t;$i+=2){
		echo $i,"\n";
	}
	$t-=5;
}
?>


<?php
$n = [3,2,0,1,2,-2,2,3,-1,0,2,0];
$s = 0;
foreach($n as $c=>$v){
	if($v<0){
		echo "valeur négative détectée en position {$c}\n";
		continue;
	}
	$s += $v ;
}
echo $s;
?>
<!-- Exercice -->

<?php
$notes = [] ;
for ($e=0 ; $e<1000 ; $e++){
	$notes[$e] = [] ;
	for ($n=0 ; $n<8 ; $n++){
		$notes[$e][$n]=random_int(0,20);
	}
}

$recu = 0 ;
foreach($notes as $e) {
  $moyenne= 0;
  foreach($e as $n) {
    $moyenne += $n;
  }

  $moyenne = $moyenne / 8;
  if ($moyenne >= 10 ) {
    $recu ++;
  }
}
echo $recu
?>

