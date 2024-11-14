document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "Nature enthusiast with a passion for exploring parks, mountains, and beaches.",
        "Enjoys the serene beauty of snowy landscapes.",
        "Appreciates peaceful and tranquil experiences in nature."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('funFact').textContent = randomFact;
});
