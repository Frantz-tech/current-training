### 📝 Exercices à réaliser

**💡Pour les modèles, c**réer des classes pour représenter les entités, implémenter la validation des données dans ces classes.

1. **Compléter le code**
   - Implémenter le repository, service et controller pour les livres
   - Implémenter le modèle pour les livres
   - Implémenter le modèle, repository, service et controller pour les auteurs
   - Implémenter le modèle, repository, service et controller pour les emprunts
   - Ajouter les routes manquantes dans routes.js
2. **Endpoints API à créer**
   - `GET /api/auteurs` → Liste tous les auteurs OK
   - `GET /api/auteurs/:id` → Détails d'un auteur OK
   - `POST /api/auteurs` → Crée un nouvel auteur OK
   - `PUT /api/auteurs/:id` → Modifie un auteur OK
   - `DELETE /api/auteurs/:id` → Supprime un auteur OK
   - `GET /api/emprunts` → Liste tous les emprunts OK
   - `GET /api/emprunts/:id` → Détails d'un emprunt OK
   - `POST /api/emprunts` → Crée un nouvel emprunt OK
   - `PUT /api/emprunts/:id` → Modifie un emprunt (ex: retour de livre) OK
   - `DELETE /api/emprunts/:id` → Supprime un emprunt OK
3. **Fonctionnalités avancées**
   - Ajouter le filtrage des livres par catégorie (`GET /api/livres?categorie=1`)
   - Ajouter le filtrage des livres par auteur (`GET /api/livres?auteur=2`)
   - Ajouter la pagination des résultats (`GET /api/livres?page=1&limit=10`) OK 

### 🔍 Points d'attention

- Architecture en couches claire (Repository → Service → Controller → Routes)
- Gestion des erreurs à chaque niveau
- Validation des données dans la couche service
- Utilisation de async/await pour les opérations asynchrones
- Respect des conventions REST
- Codes de statut HTTP appropriés

### ✅ Bonus

1. **Tests unitaires**
   - Installer Vitest, Jest ou Mocha/Chai pour les tests
   - Écrire des tests pour les repositories
   - Écrire des tests pour les services
   - Simuler les requêtes HTTP pour tester les controllers
2. **Documentation de l'API**
   - Créer la documentation SWAGGER décrivant tous les endpoints
3. **Logging avancé**
   - Enregistrer les logs dans un fichier
   - Implémenter des niveaux de log différents (production vs développement)
