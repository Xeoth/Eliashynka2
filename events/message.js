const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
const ms = require("ms");
const Discord = require("discord.js");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.id == client.config.memeChannel && message.attachments.size > 0) {
        let score = client.getScore.get(message.author.id, message.guild.id);
        if (!score) {
            score = {
                id: `${message.guild.id}-${message.author.id}`,
                user: message.author.id,
                guild: message.guild.id,
                points: 0,
            }
        }

        //Tracking emotes
        const upvote = '👍';
        const downvote = '👎';

        await message.react(upvote);
        await message.react(downvote);

        const upvoteFilter = reaction => reaction.emoji.name === upvote;
        const downvoteFilter = reaction => reaction.emoji.name === downvote;

        const upvoteCollector = message.createReactionCollector(upvoteFilter, { time: ms("12h") });
        const downvoteCollector = message.createReactionCollector(downvoteFilter, { time: ms("12h") });

        downvoteCollector.on('collect', m => {
            if (m.count >= 10) return message.delete(0);
        })

        await upvoteCollector.on('end', collected => {
            score.points += collected.size;
            client.setScore.run(score);
        })

        downvoteCollector.on('end', collected => {
            score.points -= collected.size;
            client.setScore.run(score);
            message.clearReactions()
        }) 
    }

    if (message.content.indexOf(client.config.prefix) !== 0) return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(client, message, args);
};