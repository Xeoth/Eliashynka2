const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

module.exports = (client, message) => {
    const logChannel = client.channels.get(client.config.logChannel);
    var date = new Date();
    const currentTimeAndDate = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}] - `;
    logChannel.send(currentTimeAndDate + "Successfully activated the bot <:greenTick:643513035495047188>");
}