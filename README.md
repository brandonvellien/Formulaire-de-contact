# Projet Full-Stack : Formulaire de Contact

## Description
Ce projet consiste en un formulaire de contact full-stack, permettant aux utilisateurs d'envoyer des messages via une interface web. Le backend traite ces messages et les envoie par email grâce à Mailgun.

## Structure du Projet
- `frontend/` : Contient le code de l'interface utilisateur
- `backend/` : Contient le code du serveur

## Fonctionnalités
- Formulaire de contact en HTML/CSS
- Intégration JavaScript pour la gestion du formulaire
- Backend pour réceptionner et traiter les données
- Envoi d'emails via Mailgun

## Prérequis
- Node.js (version 14.x ou supérieure)
- npm
- Compte Mailgun

## Installation

### Frontend
1. Naviguez dans le dossier frontend :

````
cd frontend
````
2. Ouvrez le fichier `index.html` dans votre navigateur

### Backend
1. Naviguez dans le dossier backend :
````
cd backend
``````
2. Installez les dépendances :

`````
npm install 
`````
3. Créez un fichier `.env` et ajoutez vos identifiants Mailgun :

````
MAILGUN_API_KEY=votre_clé_api
MAILGUN_DOMAIN=votre_domaine
`````

## Démarrage

### Backend
1. Dans le dossier backend, lancez le serveur :

````
npm start
````
Le serveur démarrera sur le port spécifié (par défaut 3000)

## Utilisation
1. Ouvrez le fichier HTML du frontend dans votre navigateur
2. Remplissez le formulaire et soumettez-le
3. Le backend traitera la demande et enverra un email via Mailgun

## Tests
- Testez le backend avec Postman avant l'intégration frontend
- Utilisez ngrok pour tester en local avec une URL publique

## Déploiement
- Frontend : Hébergé sur Netlify
- Backend : Hébergé sur Northflank

### Notes pour le déploiement
- Assurez-vous que toutes les références à `localhost` sont remplacées par l'URL de production
- Ne pas spécifier de PORT dans les variables d'environnement sur Northflank
- Vérifiez que les requêtes Axios du frontend pointent vers les bonnes routes du backend déployé

## Bonus
- Intégration d'une modal pour le formulaire (dans le cas du projet TripAdvisor)
- Gestion des erreurs avec try/catch pour les requêtes Axios

## Technologies Utilisées
- Frontend : HTML, CSS, JavaScript (Vanilla)
- Backend : Node.js, Express
- Email : Mailgun


