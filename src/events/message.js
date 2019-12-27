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
    message.channel.send('\`Błąd:\`\n' + `\`${err}\`\n` + `<@${client.config.ownerID}>`);
  }
};
