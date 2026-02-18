Types de Base 
<!-- // Null true et false  -->

<?php
if(""==null){ # compare la chaîne de caractère vide avec null
	echo "une chaîne vide !", "\n";
}
if([]==null){ # compare le tableau vide avec null
	echo "un tableau vide !","\n";
}
var_dump(true) ; # affiche bool(true)
var_dump(false) ; # affiche bool(false)
var_dump(2==1) ; # affiche le résultat du test "2 est-il égal à 1", soit bool(false)
var_dump(2>1) ; # affiche le résultat du test "2 est-il supérieur à 1", soit bool(true)
var_dump(2!=1) ; # affiche le résultat du test "2 est-il différent de 1", soit bool(true)
var_dump(2<=1) ; # affiche le résultat du test "2 est-il inférieur ou égale à 1", soit bool(false)
?>

<!--  Entiers et flottants
3 autres manières avec php : 

Le système binaire avec les deux chiffres 0 et 1, en préfixant les valeurs par “0b” ou “0B”,

Le système octal avec les huit chiffres de 0 à 7, en préfixant les valeurs par “0o” ou ”0O”,

Le système hexadécimal avec les seize chiffres de 0 à F, avec les préfixes “0x” et “0X”.

Manipulation :  -->

<?php
echo 195,"\n" ; # un nombre entier écrit dans le système décimal
echo 0b101,"\n" ; # le nombre entier 101 écrit dans le système binaire correspond à 5 en décimal
echo 0o764,"\n" ; # le nombre entier 764 écrit dans le système octal correspond à 500 en décimal
echo 0x1F4,"\n" ; # le nombre entier 1F4 écrit dans le système hexa correspond à 500 en décimal
echo PHP_INT_MAX,"\n"; # cette constante correspond à la plus grande valeur entière
echo PHP_INT_MAX + 1 ,"\n"; # en ajoutant 1, le nombre n'est plus entier, mais flottant
echo 42.5,"\n" ; # un nombre décimal
echo 4.25e3,"\n" ; # un nombre décimal avec un exposant positif, ici 4250
echo 4.25e-3,"\n" ; # un nombre décimal avec un exposant négatif, ici 0.00425
# attention avec l'utilisation des float
echo 0.1+0.2,"\n"; # la somme de 0,1 et 0,2 vaut 0,3
var_dump(0.1+0.2); # en mémoire, ça ne vaut pas vraiment 0,3
echo 9.3-5.3,"\n"; # la différence de 9,3 par 5,3 vaut 4
var_dump(9.3-5.3); # en mémoire, ça ne vaut pas vraiment 4
?>

<!-- Chaines de caractères : 

1.le moyen le plus simple c'est guillement simple ' 
2. autre moyen <<<
3. c'est guillement double pour ajouter des caractères spéciaux 
4. HEREDOC : permet de créer son propre délimiteur 

Exemples :  -->

<?php
echo 'une simple chaîne de caractères', "\n" ;
echo 'et maintenant avec l\'apostrophe !',"\n" ;
echo <<<'MON_DELEMITEUR'
voici le début du texte
qui peut aller sur plusieurs lignes
et contenir des caractères spéciaux
comme l'apostrophe et la barre oblique inverse \
MON_DELEMITEUR;
$quantite = 12 ; # on affecte la valeur 12 à la variable $quantite
echo "\nCette boîte contient {$quantite} oeufs.\n" ;
echo "une\ttabulation" ; # le caractère spécial "\t" est une tabulation
echo <<<mon_identifiant_de_chaine
\nune chaîne avec\ndes\nlignes\nmultiples
ainsi que des variables interprétées :
{$quantite}
mon_identifiant_de_chaine;
?>


<!-- Types Structurés -->

<!-- Les tableaux : Manipulation  -->

<?php
$tableau = [4,5.3,-8,"programmation",true]; # un tableau de 5 éléments sans clé explicite
echo $tableau[0],"\n"; # le premier élément du tableau, à l'indice 0, affiche 4
echo $tableau[3],"\n"; # le quatrième élément du tableau, à l'indice 3, affiche programmation
$tableau[3] = "PHP" ; # met à jour la valeur du quatrième élément du tableau, à l'indice 3
echo $tableau[3],"\n"; # le quatrième élément du tableau, à l'indice 3, affiche PHP
$tableau[] = "new !"; # ajoute un élément en fin de tableau avec la valeur indiquée
print_r($tableau); # affiche tout le contenu du tableau ; remarquez le dernier élément ajouté

# un tableau avec clés explicites
$famille = [
    "père"=>"jean",
    "mère"=>"marie",
    "grand-père_p"=>"antoine",
    "grand-mère_p"=>"alice",
    "grand-père_m"=>"franck",
    "grand_mère_m"=>"sarah"
];
echo $famille["père"],"\n" ; # la valeur de l'élément du tableau dont la clé est "père"
echo $famille["mère"],"\n" ; # la valeur de l'élément du tableau dont la clé est "mère"
# un tableau dont les valeurs sont des tableaux
$famille_bis = array(
    "père"=>"jean",
    "mère"=>"marie",
    "grand-père"=>array(
        "paternel"=>"antoine",
        "maternel"=>"franck"),
    "grand-mère"=>array(
        "paternel"=>"alice",
        "maternel"=>"sarah")
);
print_r($famille_bis); # affiche tout le contenu du tableau
?>

<!-- Manipuler les Objects : ( class )  -->
<?php
# on définit notre modèle de Livre avec nos 3 propriétés
class Livre{
    public $titre;
    public $auteur;
    public $parution;
}
# on crée une instance de Livre, puis on renseigne ses propriétés
$livre1 = new Livre();
$livre1->titre = "Voyage au Centre de la Terre"; # on renseigne le titre
$livre1->auteur = "Jules Vernes"; # on renseigne l’auteur
$livre1->parution = 1864 ; # on indique l’année
print_r($livre1); # on affiche le contenu de l’instance
?>

<?php
# on définit une nouvelle classe qui contient un constructeur
class Livre2{
    public $titre;
    public $auteur;
    public $parution;
    function __construct($t, $a, $p){
        $this->titre = $t;
        $this->auteur = $a;
        $this->parution = $p;
    }
}
# à la création de l’objet, on passe au constructeur les valeurs des propriétés
$livre2 = new Livre2("De la Terre à la Lune","Jules Vernes",1865);
print_r($livre2); # on affiche l’objet
?>

<!-- Les Variables -->

<!-- Portée des variables =  -->

<?php
function combien(){ # on définit une fonction "combien"
    $poids = 300 ; # on définit une variable $poids dans la fonction
}
combien(); # on exécute la fonction "combien"
echo $poids; # on veut afficher une variable $poids
#, mais il n'existe pas de variable $poids à ce niveau
# donc un message d'erreur est affiché
?>

<!-- Cas 1  -->
<?php
function affiche(){ # on définit une fonction "affiche"
    $quantite = 2 ; # on initialise une variable locale $quantite
    echo $quantite,"\n" ; # on affiche cette variable
}
$quantite = 5 ; # on définit une variable globale $quantite
affiche(); # on exécute la fonction "affiche", qui affiche 2
echo $quantite,"\n" ; # on affiche la variable globale $quantite, soit 5
?>

<!-- Cas 2  -->
<?php
function affiche_bis(){ # on définit une fonction "affiche_bis"
    global $quantite ; # on déclare utiliser la variable globale $quantite
    echo $quantite,"\n" ; # on affiche cette variable
    $quantite = 2 ; # on modifie cette variable à 2
}
$quantite = 5 ; # on définit une variable globale $quantite à 5
affiche_bis(); # on exécute la fonction "affiche_bis"
echo $quantite,"\n" ; # on affiche la variable qui a été modifiée par la fonction
?>

<!-- Variables prédéfinies (variables globales *)  -->

$GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST, $_ENV.

<!-- Variables externe a PHP :  -->
 <!-- Imaginons que nous avons 3 input, pour acceder aux informations on peut faire  -->
 <!-- ces variables sont dites externes -->

<input type="text" name="prenom" />
<input type="text" name="nom" />
<input type="text" name="email" />

$_REQUEST["email"]


<!-- Variables dynamiques  -->
 <?php
$texte = 'chaine' ; # on définit une variable $texte qui vaut 'chaine'
$chaine = 'de caractères' ; # on définit une variable $chaine
echo $texte,"\n" ; # on affiche la variable $texte
echo $chaine,"\n" ; # on affiche la variable $chaine
echo $$texte,"\n" ; # on affiche la variable dont le nom est la valeur de $texte
$document = 'texte' ; # on définit une variable $document qui vaut 'texte'
echo $$$document,"\n" ; # on affiche l'interprétation finale de document->texte->chaine->de caractères
?>


<?php
$document = 'texte' ; # on définit une variable $document qui vaut 'texte'
$texte = 'chaine' ; # on définit une variable $texte qui vaut 'chaine'
$chaine = 'lien' ; # on définit une variable $chaine qui vaut 'lien'
echo "${$document}\n" ; # affiche la valeur de la variable dont le nom est $texte, soit 'chaine'
echo "${${$document}}\n" ; # affiche la valeur de la variable dont le nom est $chaine, soit 'lien'
echo "$document\n" ; # affiche la valeur de la variable $document, soit 'texte'
echo "$$document\n" ; # affiche le symbole $ suivi de la valeur de la variable $document, soit 'texte'
echo "$$$document\n" ; # affiche 2 symboles $ suivis de la valeur de la variable $document, soit 'texte'
$donnees = ['phrase','mots','lettres']; # on définit un tableau de données
$phrase = 'mots'; # on définit une variable nommée $phrase et qui vaut 'mots'
$mots = 'lettres'; # on définit une variable nommée $mots et qui vaut 'lettres'
echo "une $donnees[0] contient des {${$donnees[0]}} avec des {${${$donnees[0]}}}";
# affiche 'une phrase contient des mots avec des lettres'
?>

<!-- Les Constantes -->
 <?php
define("MAJORITE",18); # on définit une constante nommée MAJORITE qui vaut 18
echo MAJORITE,"\n" ; # on affiche cette constante
define("MINIMUM_TEMPERATURE",-20); # on définit une constante MINIMUM_TEMPERATURE
echo MINIMUM_TEMPERATURE,"\n" ; # on l'affiche
?>
<!-- Constantes prédéfinies -->
 <?php
echo PHP_VERSION,"\n" ; # la version de PHP utilisée
echo PHP_INT_MAX,"\n"; # le plus grand entier
echo PHP_FLOAT_MAX,"\n"; # le plus grand flottant
?>

<!-- Constantes magiques -->
 __LINE__ : correspond au numéro de la ligne dans le fichier,

__FILE__ : correspond au nom complet du fichier,

__DIR__ : correspond au nom complet du répertoire du fichier,

__FUNCTION__ : correspond au nom de la fonction courante,

__CLASS__ : correspond au nom de la classe courante,

__TRAIT__ : correspond au nom du trait courant,

__METHOD__ : correspond au nom de la méthode courante,

__NAMESPACE__ : correspond au nom de l'espace de noms courant,

ClassName::class : correspond au nom entier de la classe courante.

<!-- Utilisation -->

<?php
echo __FILE__,"\n" ; # affiche le nom complet de ce fichier
echo __LINE__,"\n" ; # affiche le numéro de cette ligne
function affichage(){ # on définit une fonction nommée 'affichage'
    echo __FUNCTION__ ; # affiche le nom de la fonction en cours
}
affichage(); # exécute cette fonction 'affichage'
?>

<!-- Manipuler la concaténation  -->
 <?php
echo "réveil","-","matin","\n" ;
echo "réveil"."-"."matin"."\n" ;
?>

<!-- Affectation -->

<?php
$quantite = 12 ;
echo "La quantité vaut {$quantite}.\n" ; # $quantite vaut 12
$quantite += 3 ; # équivalent à : $quantite = $quantite + 3 ;
echo "La quantité vaut {$quantite}.\n" ; # $quantite vaut 15
$quantite *= 3 ; # équivalent à : $quantite = $quantite * 3 ;
echo "La quantité vaut {$quantite}.\n" ; # $quantite vaut 45
$quantite /= 5 ; # équivalent à : $quantite = $quantite / 5 ;
echo "La quantité vaut {$quantite}.\n" ; # $quantite vaut 9
$chaine = "une chaîne" ;
echo $chaine,"\n" ;
$chaine .= " plus longue." ;
echo $chaine,"\n" ;
?>

<!-- Priorités -->
 <?php
$n = 10 ;
echo "la moitié de {$n} est ".$n/2,"\n" ; # la division est effectuée avant la concaténation
echo 1-2**3/4+3 ." €\n" ; # affiche 2 €
# calcule 2**3=8, puis 8/4=2, puis 1-2=-1, puis -1+3=2, puis la concaténation
?>

<!-- Opérateur d'exécution  -->
 <?php
// echo `dir` ; # pour lister le contenu du répertoire courant sous Windows
// echo `tasklist` ; # pour lister les processus actifs sous Windows
// echo `ls` ; # pour lister le contenu du répertoire courant sous Linux
// echo `ps` ; # pour lister les processus actifs de l'utilisateur sous Linux
?>

<!-- Conversion en binaire -->
 <?php
echo decbin("5"), "\n"; # affiche 101
echo decbin("8"), "\n"; # affiche 1000
echo decbin("15"), "\n"; # affiche 1111
echo decbin("32"), "\n"; # affiche 100000
echo bindec("1100"), "\n"; # affiche 12
echo bindec("10101"), "\n"; # affiche 21
echo bindec("100010"), "\n"; # affiche 34
echo bindec("111001"), "\n"; # affiche 57
?>

<!-- utilisation -->
 <?php
echo 1&2, "\n"; # traduit en 01 & 10 = 00, affiche 0
echo 1|2, "\n"; # traduit en 01 | 10 = 11, affiche 3
echo 5^7, "\n"; # traduit en 101 ^ 111 = 010, affiche 2
echo ~0, "\n"; # correspond au nombre binaire qui contient que des "1", affiche -1
?>
<!-- Comparaison -->
 <?php
var_dump(true) ; # affiche bool(true)
var_dump(false) ; # affiche bool(false)
var_dump(2==1) ; # affiche le résultat du test "2 est-il égal à 1", soit bool(false)
var_dump(2>1) ; # affiche le résultat du test "2 est-il supérieur à 1", soit bool(true)
var_dump(2!=1) ; # affiche le résultat du test "2 est-il différent de 1", soit bool(true)
var_dump(2<=1) ; # affiche le résultat du test "2 est-il inférieur ou égale à 1", soit bool(false)
?>

<!-- L'algèbre de Boole
 Dans la section des opérateurs sur les bits, 4 opérateurs vous ont été présentés : « et », « ou », « ou exclusif », « non ». Nous allons ici étendre ces notions aux expressions booléennes. Dans l'algèbre de Boole, que l'on peut appeler aussi calcul binaire, sont définies 4 fonctions logiques :
  « ou » en français, « or » en anglais et en PHP, « et » en français, « and » en anglais et en PHP,
« non » en français, « not » en anglais et « ! » en PHP,
« ou exclusif » en français, noté « xor » en PHP.
Ces fonctions sont définies ainsi :
(A or B) est Vrai, si A est Vrai ou B est Vrai (il suffit d'un seul sur les deux),
(A and B) est Vrai si A est Vrai et B est Vrai (les deux doivent être Vrai),
(! A) est le contraire de A,
(A xor B) est Vrai si A est Vrai ou B est Vrai, mais pas les deux ensemble.
Enfin, il existe aussi 2 autres notations : le « && » correspond au « and » et le « || » correspond au « or ». -->

<?php
var_dump( false or true ); # affiche bool(true)
var_dump( (true || false) && true ); # affiche bool(true)
var_dump( (true xor false) || (!true) ); # affiche bool(true)
?>