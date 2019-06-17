const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    
    const creationMessage = await message.channel.send("Wpisz tytuł embeda (masz na to 30 sekund!)")

    const filter = m => m.author.id === message.author.id
    message.channel.awaitMessages(filter, {max: 1, time: 30000}).then(collected => {
        const title = collected.first().content
        //collected.react(":upvoteeye:")
        //setTimeout(1000)
        collected.deleteAll(0)
        creationMessage.edit("Wpisz pole embeda (masz na to 30 sekund!)")
        message.channel.awaitMessages(filter, {max: 1, time:30000}).then(collected => {
            const fieldText = collected.first().content
            //collected.react(":upvoteeye:")
            //setTimeout(1000)
            collected.deleteAll(0)
            creationMessage.edit("Wpisz kolor embeda (masz na to 30 sekund!)")
            message.channel.awaitMessages(filter, {max: 1, time: 60000}).then(collected => {
                const color = collected.first().content
                //collected.react("<:upvoteeye:589888888936595497>")
                //setTimeout(1000)
                collected.deleteAll(0)
                const embed = new Discord.RichEmbed()
                    .setTitle(title)
                    .setDescription(fieldText)
                    .setColor(color)
                creationMessage.edit(embed)
            })
        })
    })
};