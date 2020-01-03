module.exports = (client, message) => {
  // Send the log notification
  const logChannel = client.channels.get(client.config.logChannel);
  logChannel.send('Successfully activated the bot <:greenTick:643513035495047188>');

  // Set the status
  // See https://discord.js.org/#/docs/main/stable/typedef/PresenceData
  const settings = {
    game: {
      name: 'zawodzenia furfagów w piecach',
      type: 'LISTENING',
    },
  };

  client.user.setPresence(settings);
};
