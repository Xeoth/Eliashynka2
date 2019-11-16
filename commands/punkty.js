const Discord = require('discord.js');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

exports.run = async (client, message, args) => {

    //Embed przed uzyskaniem wyniku
    const embedBefore = new Discord.RichEmbed()
        .setAuthor("Pracuję...", "https://cdn.discordapp.com/attachments/590180303537176578/645011029042003968/loading_eliashynka.gif")

    const embedMessage = await message.channel.send(embedBefore);

    //Sprawdzanie czy wiadomość jest wysyłana na serwerze
    if (message.guild) {

        //Definiowanie punktów
        let score = client.getScore.get(message.author.id, message.guild.id);

        if (!score) {
            //Jeżeli użytkownik nie ma punktów, pokazujemy to
            score = {
                id: `${message.guild.id}-${message.author.id}`,
                user: message.author.id,
                guild: message.guild.id,
                points: 0
            }
            client.setScore.run(score);
        }

        const embedSuccess = new Discord.RichEmbed()
            .addField(`Liczba punktów dla ${message.author.username}:`, score.points)
            .setColor("00ff00")
        
        embedMessage.edit(embedSuccess)

    } else {

        const embedFailNotInGuild = new Discord.RichEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/590180303537176578/645015715967139850/cross.png")
            .setDescription("Aby użyć tej komendy, musisz wpisać ją na serwerze!")
            .setColor("ff0000")
        
        embedMessage.edit(embedFailNotInGuild);
    }
};