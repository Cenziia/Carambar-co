// public/script.js


  // Récupérer une blague aléatoire
  document.getElementById('fetch-joke-btn').addEventListener('click', function() {
    fetch('http://localhost:3000/api/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('jokes-content').textContent = data.content;
        })
        .catch(error => console.error('Erreur lors de la récupération de la blague :', error));
});

// Ajouter une nouvelle blague
document.getElementById('add-joke-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const jokeContent = document.getElementById('joke-content').value;

    fetch('http://localhost:3000/api/jokes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: jokeContent })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Blague ajoutée avec succès :', data);
        alert('Blague ajoutée avec succès !');
        document.getElementById('joke-content').value = ''; // Réinitialiser le formulaire
    })
    .catch(error => {
        console.error('Erreur lors de l\'ajout de la blague :', error);
        alert('Une erreur est survenue lors de l\'ajout de la blague.');
    });
});
