module.exports = (client, message) => {
  const logChannel = client.channels.get(client.config.logChannel);
  logChannel.send('Successfully activated the bot <:greenTick:643513035495047188>');
};
