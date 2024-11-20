document.getElementById('generateFactBtn').addEventListener('click', generateRandomFact);

const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Bananas are berries, but strawberries aren't.",
    "A day on Venus is longer than a year on Venus.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
}
