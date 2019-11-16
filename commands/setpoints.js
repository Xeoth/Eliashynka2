const Discord = require('discord.js');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

exports.run = async (client, message, args) => {
    const workingEmbed = new Discord.RichEmbed()
        .setAuthor("Pracuję...", "https://cdn.discordapp.com/attachments/590180303537176578/645011029042003968/loading_eliashynka.gif")
    
    const embedMessage = await message.channel.send(workingEmbed);
    let userID = args[0];
    var setPoints = args[1];
    //Sprawdzanie czy są argumenty
    if (!userID) {
        const failNoUserID = new Discord.RichEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/590180303537176578/645015715967139850/cross.png")
            .setDescription("Nie wprowadziłeś ID użytkownika")
            .setColor("ff0000")
        return embedMessage.edit(failNoUserID);
    } else if (!setPoints) {
        const failNoPointsToSet = new Discord.RichEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/590180303537176578/645015715967139850/cross.png")
            .setDescription("Nie wprowadziłeś liczby punktów którą mam ustawić")
            .setColor("ff0000")
        return embedMessage.edit(failNoPointsToSet);
    }
    let score = client.getScore.get(userID, message.guild.id);
    if (!score) {
        //Jeżeli użytkownik nie ma punktów, pokazujemy to
        score = {
            id: `${message.guild.id}-${message.author.id}`,
            user: message.author.id,
            guild: message.guild.id,
            points: 0
        }
    }
    score.points = setPoints;
    client.setScore.run(score);
    const user = client.users.get(userID);
    const successEmbed = new Discord.RichEmbed()
        .setAuthor("Sukces!", "https://cdn.discordapp.com/attachments/590180303537176578/645015711202279434/check.png")
        .setDescription(`Ustawiono punkty ${user.username} na ${score.points}`)
        .setColor("00ff00")
    embedMessage.edit(successEmbed);
};