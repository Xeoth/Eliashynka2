const Discord = require('discord.js');

module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  try {
    const prefixLen = client.config.prefix.length;
    const args = message.content.slice(prefixLen).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(client, message, args);
  } catch (err) {
    // Get the log channel
    const logChannel = client.channels.get(client.config.logChannel);

    // Create an error embed
    const errorEmbed = new Discord.RichEmbed()
        .setTitle('Błąd')
        .setURL(message.url)
        .setColor('#ff0000')
        .addField('Treść:', `\`${err}\``);

    // Send the error embed
    logChannel.send(errorEmbed);

    // Notify the user about the error
    message.reply('Coś poszło nie tak!\nWystąpił wewnętrzny błąd i nie można było ukończyć wykonywania komendy. Wszystkie szczegóły zostały już przekazane właścicielowi bota.');
  }
};
