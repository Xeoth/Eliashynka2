exports.run = (client, message, args) => {
  const chosenColor = args[0];
  const regex = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
  if (!chosenColor.match(regex)) {
    return message.reply('Wpisz poprawny kod koloru, na przykład `#98f019`');
  }

  const authorID = message.author.id;
  const colorRole = message.guild.roles.find((r) => r.name === authorID);
  if (!colorRole) return message.reply('Nie masz przydzielonego koloru');
  colorRole.edit(
      {color: chosenColor},
      `Zmieniono kolor na polecenie ${message.author.username}`);

  message.reply(`Zmieniono kolor na \`${chosenColor}\``);
};
