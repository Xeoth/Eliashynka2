const Discord = require('discord.js');

/**
 *  Syntax: !editembed <textChannel:channelResolvable> <embedID:number>
*/


exports.run = async (client, message, args) => {
  /** This changes the contents of an embed. */
  async function editEmbed() {
    const embedid = args[1];
    const channelMention = message.mentions.channels.first();
    if (!embedid) return message.reply('Nie wpisałeś ID embeda.');
    if (!channelMention) return message.reply('Nie wpisałeś nazwy kanału <:facepalm:589888884800880756>');

    const creationMessage = await message.channel.send('Wpisz tytuł embeda (masz na to 30 sekund!)');
    channelMention.fetchMessage(embedid).then((messagea) => {
      const filter = (m) => m.author.id === message.author.id;
      message.channel.awaitMessages(filter,
          {max: 1, time: 30000}).then((collected) => {
        const title = collected.first().content;
        collected.deleteAll(0);
        creationMessage.edit('Wpisz pole embeda (masz na to 30 sekund!)');
        message.channel.awaitMessages(filter,
            {max: 1, time: 30000}).then((collected) => {
          const fieldText = collected.first().content;
          collected.deleteAll(0);
          creationMessage.edit('Wpisz kolor embeda (masz na to 30 sekund!)');
          message.channel.awaitMessages(filter,
              {max: 1, time: 60000}).then((collected) => {
            const color = collected.first().content;
            collected.deleteAll(0);
            const embed = new Discord.RichEmbed()
                .setTitle(title)
                .setDescription(fieldText)
                .setColor(color);
            messagea.edit(embed);
            creationMessage.delete(0);
            message.delete(0);
          });
        });
      });
    });
  }
  const perms = message.member.permissions;
  if (perms.has('ADMINISTRATOR')) {
    editEmbed();
  } else {
    message.reply('Nie masz do tego uprawnień <:eee:589888887640555525>');
  }
};