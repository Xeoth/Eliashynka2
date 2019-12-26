const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const perms = message.member.permissions
    const wantedPerm = args[0]
    if (!wantedPerm) return message.reply("Nie wpisałeś nazwy uprawnienia")
    function checkValue(value,arr){
        var status = false;
       
        for(var i=0; i<arr.length; i++){
          var name = arr[i];
          if(name == value){
            status = true;
            break;
          }
        }
        return status;
      }
    const allThePerms = ["CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "READ_MESSAGES",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "EXTERNAL_EMOJIS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES_OR_PERMISSIONS",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS"]
    if (checkValue(wantedPerm, allThePerms) === false) return message.reply("Nazwa uprawnienia jest niepoprawna. Lista nazw uprawnień: https://anidiots.guide/understanding/roles#addendum-permission-names")
    const hasThePerm = perms.has(wantedPerm)
    message.reply(hasThePerm)
};