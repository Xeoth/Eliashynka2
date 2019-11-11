module.exports = (client, message) => {
    const logChannel = client.channels.get("643509968234086401");
    var date = new Date();
    const currentTimeAndDate = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}] - `;
    logChannel.send(currentTimeAndDate + "Successfully activated the bot <:greenTick:643513035495047188>");
}