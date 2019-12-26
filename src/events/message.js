const ms = require("ms");
const Discord = require("discord.js");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) !== 0) return;
    try {
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.run(client, message, args);
    } catch (err) {
        message.channel.send(`<@${client.config.ownerID}> coś spierniczył! Weź go ktoś pingnij. Tu masz co zwaliłeś:` +
        `
\`\`\`js
${err}
\`\`\`
        `)
    }
};