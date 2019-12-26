const Discord = require("discord.js");
const fs = require('fs');

exports.run = (client, message, args) => {
  const chosenColor = args[0];
  const regex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
  if (!chosenColor.match(regex)) return message.reply("Wpisz poprawny kod koloru, na przykład `#98f019`")
  
  const colorRole = message.guild.roles.find(r => r.name === message.author.id);
  if (!colorRole) return message.reply("Nie masz przydzielonego koloru")
  colorRole.edit({color: chosenColor}, `Zmieniono kolor na polecenie ${message.author.username}`)
  
  message.reply(`Zmieniono kolor na \`${chosenColor}\``)
};
