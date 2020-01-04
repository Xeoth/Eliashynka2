// Require file with activities
const names = require('../activities.json');
const ms = require('ms');

module.exports = (client, message) => {
  // Send the log notification
  const logChannel = client.channels.get(client.config.logChannel);
  logChannel.send('Successfully activated the bot <:greenTick:643513035495047188>');

  // Set the status
  // See https://discord.js.org/#/docs/main/stable/typedef/PresenceData

  // Set a new activity every 6 hours

  /** Used to set a new presence */
  function setNewPresence() {
    // Select a random activity
    const settings = names[Math.floor(Math.random()*names.length)];

    // Set the status
    client.user.setPresence(settings);
  }

  // Set the initiating presence
  setNewPresence();

  setInterval(setNewPresence, ms('6h'));
};
