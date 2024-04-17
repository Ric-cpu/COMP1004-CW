const fs = require('fs');
const path = require('path');

const gameData = {
    username: "player1", // example username
    minutesPlayed: 1, // example minutes of gameplay
    score: 0, // example score
    level: 1 // example level
};

const gameDataJsonString = JSON.stringify(gameData, null, 2);

const filePath = path.join(process.cwd(), 'gameData.json');

fs.writeFile(filePath, gameDataJsonString, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File written successfully');
    }
});





