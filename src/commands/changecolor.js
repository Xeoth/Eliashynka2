exports.run = async (client, message, args) => {
  const chosenColor = args[0];

  const regex = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
  if (!chosenColor.match(regex)) {
    return message.reply('Wpisz poprawny kod koloru, na przykład `#98f019`');
  }

  const author = message.guild.member(message.author);
  const colorRole = message.guild.roles.find((r) => r.name === author.id);

  if (!colorRole) {
    const statusMsg = await message.reply('Nie posiadasz aktualnie przydzielonego koloru. Próba autoprzydzielenia...');

    // eslint-disable-next-line
    const isSupporter = author.roles.some((r) => client.config.supporterRoles.includes(r.id));

    if (isSupporter) {
      const newRole = await message.guild.createRole({
        name: author.id,
        color: chosenColor,
        permissions: 0,
        position: client.config.supporterRolesPos,
      });

      author.addRole(newRole, 'Dodano rolę kolorów dla ' + message.author.username);

      statusMsg.edit('<:greenTick:643513035495047188> Pomyślnie dodano rolę. Aktualny kolor:`' + chosenColor + '`');
    } else {
      statusMsg.edit('<:redCross:643513035402772520> Nie posiadasz roli uprawniającej do otrzymania koloru. Jeżeli uważasz, że to pomyłka, skontaktuj się z administracją.');
    };
  } else {
    colorRole.edit({
      color: chosenColor,
    }, `Zmieniono kolor na polecenie ${message.author.username}`);

    message.reply(`Zmieniono kolor na \`${chosenColor}\``);
  };
};
