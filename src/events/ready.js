module.exports = (client, message) => {
  // Send the log notification
  const logChannel = client.channels.get(client.config.logChannel);
  logChannel.send('Successfully activated the bot <:greenTick:643513035495047188>');

  // Set the status
  // See https://discord.js.org/#/docs/main/stable/typedef/PresenceData

  // Require file with activities
  const names = require('../activities.json');

  // Select a random activity
  const settings = names[Math.floor(Math.random()*names.length)];

  // Set the status
  client.user.setPresence(settings);
};
