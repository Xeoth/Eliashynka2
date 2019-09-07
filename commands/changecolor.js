const Discord = require("discord.js");
const colorFile = require('../rolecolors.json');
const fs = require('fs');

exports.run = (client, message, args) => {
  //const chosenColor = args[0];
  //if (chosenColor.length != 7 || chosenColor.startsWith("#")) return message.reply("Wpisz poprawny kod koloru, na przykład `#98f019`")
  fs.readFile('rolecolors.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
  });
  //if (colorFile)
};
