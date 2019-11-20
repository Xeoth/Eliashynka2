const ms = require("ms");
const Discord = require("discord.js");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.id == client.config.memeChannel && message.attachments.size > 0) {
        //Tracking emotes
        const testServer = client.guilds.get("384449697605091330");
        const downvote = testServer.emojis.get("639966733976731690");

        await message.react(downvote);

        const downvoteFilter = reaction => reaction.emoji.name === downvote;

        const downvoteCollector = message.createReactionCollector(downvoteFilter, { time: ms(client.config.timeToFinishCounting) });

        downvoteCollector.on('collect', element => {
            console.log(message.reactions);
            //if (message.reactions.)
        })

        downvoteCollector.on('end', () => {
            message.clearReactions();
        })
    }

    if (message.content.indexOf(client.config.prefix) !== 0) return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(client, message, args);
};