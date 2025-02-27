### **Exercice 12 : Refactorisation et introduction aux services et repositories**

💡 **Objectif :**

- **Découper encore plus le code pour introduire une séparation claire entre** :
- **Services** (`services/userService.js`, `services/articleService.js`) → Contiennent la **logique métier**.
- **Repositories** (`repositories/userRepository.js`, `repositories/articleRepository.js`) → Contiennent l'**interaction avec la base de données**.

## Guide explicatif - Architecture en couches

### Introduction aux Architectures

Il existe plusieurs types d'architectures logicielles populaires :

1. **Layered Architecture** (Notre choix)
   - Simple et direct
   - Structure en couches distinctes
   - Communication unidirectionnelle
   - Parfait pour les petites et moyennes applications
   - Facile à comprendre et à maintenir
2. **Clean Architecture**
   - Plus complexe et complète
   - Ajoute des entités et cas d'utilisation
   - Règles strictes de dépendances
   - Mieux pour les grandes applications
3. **Hexagonal Architecture**
   - Adaptée aux systèmes complexes
   - Utilise les ports et adaptateurs
   - Plus flexible mais plus complexe
4. **Repository Pattern**
   - Focus sur l'accès aux données
   - Partie de DDD (Domain-Driven Design)
   - Souvent utilisé dans d'autres architectures

Pour notre exercice, nous utilisons la **Layered Architecture** car :

- Elle est plus simple à comprendre
- Suffisante pour nos besoins
- Facile à tester
- Bonne base d'apprentissage
