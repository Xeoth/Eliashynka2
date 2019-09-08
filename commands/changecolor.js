const Discord = require("discord.js");
const fs = require('fs');

exports.run = (client, message, args) => {
  const chosenColor = args[0];
  if (chosenColor.length !== 7 || chosenColor.startsWith("#") === false) return message.reply("Wpisz poprawny kod koloru, na przykład `#98f019`")
  fs.readFile('rolecolors.txt', 'utf8', (err, data) => {
    if (err) throw err;
    if (data.includes(message.author.id) === false) return message.reply("Nie masz przydzielonego koloru.")
  });

  const colorRole = message.guild.roles.find(r => r.name === message.author.id);
  colorRole.edit({color: chosenColor}, `Zmieniono kolor na polecenie ${message.author.username}`)
  
  message.reply(`Zmieniono kolor na \`${chosenColor}\``)
};
