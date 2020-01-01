const Discord = require('discord.js');

// TODO: Validate IDs

exports.run = async (client, message, args) => {
  // Check permissions
  const perms = message.member.permissions;
  if (!perms.has('ADMINISTRATOR')) return message.reply('<:redCross:643513035402772520> Nie masz do tego uprawnień');

  // Check whether the prefix contains a space and set args accordingly
  const hasSpace = client.config.prefix.includes(' ');
  if (hasSpace) {
    args.splice(0, 1); // Remove the command name if the prefix has a space
  }

  // Generic error message reminding about the arguments
  const errorMessage = '\n`<kanałTekstowy:channelResolvable> <IDembeda:numer> | <tytuł:tekst> | <zawartość:tekst> | [kolor:tekst-hex]`';

  // Get the channel and ID of the embed
  const textChannel = message.mentions.channels.first();
  const embedID = args[1];

  // Check whether the channel was provided
  if (!textChannel) return message.reply('Nie oznaczyłeś kanału.' + errorMessage);

  // Validate embedID
  console.log(typeof(embedID));
  if (typeof(embedID) != 'number') return message.reply('Wpisane przez ciebie ID nie jest liczbą.' + errorMessage);

  // Get title, content and color
  const fullArgs = args.splice(3).join(' '); // Full arguments, without channel and ID, for example: | Title here | Content here | Color here
  const separatedArgs = fullArgs.split('|'); // Array: ['Title here', ' content here ', ' color here']
  const title = separatedArgs[0];
  const content = separatedArgs[1];
  let color = separatedArgs[2];

  // Check whether title and content were provided
  if (!title || !content) return message.reply('Nie wpisałeś tytułu bądź zawartości.' + errorMessage);

  // Check whether color was provided
  if (!color) color = '#xxxxxx'; // Set to transparent if no color

  // Get the message
  const messageToEdit = await textChannel.fetchMessage(embedID);

  // Construct the embed
  const embed = new Discord.RichEmbed()
      .setTitle(title)
      .setDescription(content)
      .setColor(color);

  // Edit the message
  messageToEdit.edit(embed);
};
