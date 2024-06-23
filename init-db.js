// init-db.js

const { sequelize, Joke } = require('./models');

// Liste des blagues à ajouter
const jokes = [
    { content: "Quelle est la femelle du hamster ? L’Amsterdam" },
    { content: "Que dit un oignon quand il se cogne ? Aïe" },
    { content: "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette." },
    { content: "Pourquoi le football c'est rigolo ? Parce que Thierry en rit" },
    { content: "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
    { content: "Que se fait un Schtroumpf quand il tombe ? Un Bleu" },
    { content: "Quel est le comble pour un marin ? Avoir le nez qui coule" },
    { content: "Qu'est ce que les enfants usent le plus à l'école ? Le professeur" },
    { content: "Quel est le sport le plus silencieux ? Le para-chuuuut" },
    { content: "Quel est le comble pour un joueur de bowling ? C’est de perdre la boule" }
];

sequelize.sync({ force: true }).then(async () => {
    await Joke.bulkCreate(jokes);
    console.log('Base de données initialisée avec des blagues.');
    process.exit();
  }).catch(err => {
    console.error('Erreur lors de l\'initialisation de la base de données :', err);
  });

