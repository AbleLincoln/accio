// .github/scripts/updateCardsJson.js

const fs = require('fs')
const { cards } = require('../../cards.js') // Assuming cards.js exports like: export const cards = [...]

// Convert the cards data to JSON
const jsonData = JSON.stringify(cards, null, 2)

// Write the JSON data to cards.json
fs.writeFileSync('cards.json', jsonData, 'utf8')

console.log('cards.json has been updated.')
