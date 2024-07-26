# Projet sur les Oliviers

## Table des Matières
- [Description du Projet](#description-du-projet)
- [Technologies Utilisées](#technologies-utilisées)
- [Structure du Projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Middleware](#middleware)


## Description du Projet
Ce projet est une application web complète sur les oliviers. Il fournit des informations sur les oliviers et inclut des fonctionnalités pour l'authentification des utilisateurs, la gestion des administrateurs et les sessions utilisateur. Le projet suit la structure MVC (Modèle-Vue-Contrôleur), garantissant une séparation claire des préoccupations.

## Technologies Utilisées
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript, EJS (Embedded JavaScript templates)
- **Gestion des Sessions:** express-session
- **Outils de Développement:** Nodemon

## Structure du Projet
oliverBrief/
├── config/
│   └── db.js
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
├── |    images/
    |  └── image...
├── router/
│   └── router.js
├── views/
│   ├── index.ejs
│   └── login.ejs
├── middleware/
│   ├── auth.js
│   └── admin.js
├── models/
│   └── User.js
├── controllers/
│   ├── authController.js
│   └── adminController.js
├── .env
├── index.js
├── package.json
└── README.md
## Fonctionnalités
- **Authentification des Utilisateurs:** Les utilisateurs peuvent s'inscrire et se connecter.
- **Gestion des Administrateurs:** Les administrateurs peuvent gérer le contenu des utilisateurs.
- **Gestion des Sessions:** Les sessions des utilisateurs sont gérées avec express-session.
- **Structure MVC:** Structure de projet organisée suivant les principes MVC.
## middleware
- **isAuthentification.js:** Middleware pour vérifier si un utilisateur est authentifié.
- **isAdmin.js:** Middleware pour vérifier si l'utilisateur authentifié est un administrateur.
