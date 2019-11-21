const ms = require("ms");
const Discord = require("discord.js");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.id == client.config.memeChannel && message.attachments.size > 0) {
        //Tracking emotes
        const downvote = '👎';

        await message.react(downvote);

        const downvoteFilter = reaction => reaction.emoji.name === downvote;

        const downvoteCollector = await message.createReactionCollector(downvoteFilter, { time: ms(client.config.timeToFinishCounting) });

        downvoteCollector.on('collect', r => {
            console.log(r.count);
            if (r.count == client.config.downvotesToDelete) {
                return message.delete(0, `Mem uzyskał -${client.config.downvotesToDelete} punktów`);
            }
        })

        downvoteCollector.on('end', () => {
            if (message.deleted) return;
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