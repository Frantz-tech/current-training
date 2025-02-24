Introduction à SQLite

https://sql.sh/cours/update
https://sqliteonline.com/

💡 Objectifs

- Remplacer le stockage JSON par une base de données SQLite
- Adapter les routes existantes pour utiliser SQLite
- Mettre en place une gestion simple de base de données

📁 Structure du Projet
/exercice-10
│── package.json
│── server.js
│── database.db # Base de données SQLite
│── /routes
│ └── articles.js
│── /utils
│ ├── db.js # Configuration SQLite
│ └── logger.js
│── /sql
│ └── seed.sql # Données initiales

---

## ✅ Bonus à implémenter

### 1. Pagination des articles

- Ajout des paramètres `limit` et `offset`
- Route: `GET /articles?limit=10&offset=0`
- Retourner le nombre total d'articles

// Exemple de réponse
{
"articles": [...],
"total": 50,
"limit": 10,
"offset": 0
}

### 2. Recherche et Filtrage

- Recherche par titre/contenu
- Route: `GET /articles?search=mot-clé`
- Filtrage par date
- Route: `GET /articles?startDate=2024-01-01&endDate=2024-02-01`

### 3. Gestion des transactions

- Implémenter des transactions pour les opérations critiques
- Rollback automatique en cas d'erreur
- Verrouillage optimiste pour éviter les conflits

### 4. Migration de base de données

- Système de versioning de la base
- Scripts de migration up/down
- Commande `npm run migrate`

### 5. Performance

- Ajout d'index sur les colonnes fréquemment recherchées
- Mise en cache des requêtes fréquentes
- Monitoring des performances des requêtes

### 6. Validation avancée

- Schéma de validation pour les articles
- Sanitization des entrées
- Validation des formats de date

### 7. Statistiques

- Nombre d'articles par période
- Taille moyenne des articles
- Temps de réponse des requêtes

### 8. Logging avancé

- Log des requêtes SQL
- Temps d'exécution des requêtes
- Export des logs au format JSON
