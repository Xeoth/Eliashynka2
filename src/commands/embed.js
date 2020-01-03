const Discord = require('discord.js');

/**
 * Full syntax:
 * !embed title value | content value | [color]
 */

exports.run = async (client, message, args) => {
  // Check permissions
  const perms = message.member.permissions;
  if (!perms.has('ADMINISTRATOR')) return message.reply('<:redCross:643513035402772520> Nie masz do tego uprawnień');

  // Separates title, content and color
  const fullArgs = args.join(' ');
  const separated = fullArgs.split('|');
  const title = separated[0];
  const content = separated[1];
  let color = separated[2];

  // Check whether at least 2 arguments have been passed
  if (!title || !content) return message.reply('Nie wpisałeś wymaganych argumentów.\nPoprawna składnia:\n' + '`' + client.config.prefix + 'embed <tytuł> | <zawartość> | [kolor]' + '`');

  // Fill color with default value if not present
  if (!color) color = '#xxxxxx';

  // Construct an embed
  const embed = new Discord.RichEmbed()
      .setTitle(title)
      .setDescription(content)
      .setColor(color);

  message.channel.send(embed);
};
