<!-- Partie 1 -->
<!-- Vous êtes développeur et devez écrire un programme PHP pour l’entreprise Strategy, 
 en vue d’améliorer un processus de publication vers le web. L'entreprise Strategy est dans 
 le domaine de la veille stratégique. Elle recense et traite quotidiennement des centaines de
  publications dans différents domaines : académique, juridique, commercial, etc. Depuis peu,
   elle récupère des résumés (abstracts) de publications au format Markdown. Elle aimerait pouvoir 
   les transformer automatiquement au format HTML pour les publier sur un site web. Voici un exemple 
   représentatif de résumé d'article que votre programme doit pouvoir traiter :

Git is a fast, *scalable*, distributed revision control system with an unusually rich command 
set that provides both high-level operations and full access to internals. Git is an *Open Source project*
 covered by the *GNU General Public License* version 2 (some parts of it are under different licenses, 
 compatible with the GPLv2). It was originally written by *Linus Torvalds* with help of a group of *hackers* around the net.

Pour simplifier le problème, nous supposons que :

Les astérisques sont uniquement présents pour former des balises et ne sont pas utilisés dans le texte.

Tous les abstracts sont bien formés : chaque balise ouvrante possède une balise fermante. 
Par exemple, nous n’avons pas à traiter un cas comme « Git is a fast, *scalable, distributed system »
 où la balise fermante a été oubliée.

Question
Nous souhaitons transformer les balises Markdown indiquant une emphase (*) en balise HTML (<em></em>). 
Par exemple, transformer *scalable* en <em>scalable</em>. Écrire une fonction qui prend en entrée le texte 
au format Markdown et retourne un tableau contenant les tokens. Par exemple, si l’entrée est la chaîne suivante 
« Git is an *Open Source project* covered by the *GNU General Public License* version 2 », votre fonction doit 
renvoyer un tableau contenant « Open Source project » et « GNU General Public License ». Le nom de votre fonction
 et de ses arguments doivent être significatifs. Elle doit être documentée par un Docblock. L’usage d’expressions
 régulières (regex) n’est pas autorisé.

Conseils :

Stockez le résumé test dans une chaîne de caractères.

Vous pouvez écrire d'autres fonctions intermédiaires pour écrire les fonctions demandées.

Vous pouvez vous aider des fonctions PHP strpos(string $haystack, string $needle, 
int $offset = 0): int | false et pour écrire votre fonction. -->


<?php 
function countTokenBetweenTags(string $string, string $openTag, string $closeTag): int {

// Définir la condition d'arrêt, quand la chaine à analyser est égale a 0

if (empty($string)) return 0;

$openTagPosition = strpos($string, $openTag);
$closeTagPosition = strpos($string, $closeTag, $openTagPosition + strlen($closeTag));

if($openTagPosition === 0 || $closeTagPosition === 0) return 0; 
  

$offset = $closeTagPosition + strlen($closeTag);

$extractString = substr($string, $offset)  ;

return 1 + countTokenBetweenTags($extractString, $openTag, $closeTag);

} 

$test = 'Git est un répertoire, * illisible * masi * ici * et *la * et * la * fait pour certains  * la * mais * la * et * la * et * la * et * la * et * la *dévelopeurs * néamoins, il se *pourrait* que tout aille mieux *bientot*';
echo 'Question 2: test ', PHP_EOL;
print_r(countTokenBetweenTags($test, '*', '*'))
 ?>

<!-- Partie 2 -->
<!-- Écrire une fonction récursive qui compte le nombre de tokens entre balises 
   Markdown d’« emphase » (*) dans une chaîne de caractères. Par exemple, la chaîne 
   « Git is an *Open Source project* covered by the *GNU General Public License* version 2 »
   en contient 2. -->

   <!-- Code  -->