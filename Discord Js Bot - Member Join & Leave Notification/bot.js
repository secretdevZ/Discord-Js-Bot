const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", ()=>{
    console.log(`${client.user.tag} connected to Discord`);
});

// Member Join Notification----------------------------------------------------
client.on("guildMemberAdd", member =>{
    const embed = {
        "title": "__***New Member Joined***__",
        "description": `${member.user} Joined to the ${member.guild}`,
        "color": 8709482,

        "author" : {
            "name" : `${member.user.username}`,
            "icon_url" : `${member.user.avatarURL}`
        },
        "thumbnail" : {
            "url" : `${member.user.avatarURL}`
        },
        "footer" : {
            "icon_url" : `${member.guild.iconURL}`,
            "text" : `${member.guild.name}`
        },
        "timestamp" : new Date(),
        "fields" : [
            {
                "name" : "User ID :",
                "value" : `${member.user.id}`,
                "inline" : true
            },
            {
                "name" : "User Name :",
                "value" : `${member.user.username}`,
                "inline" : true
            },
            {
                "name" : "Server Name :",
                "value" : `${member.guild}`,
                "inline" : true
            }
        ]
        };

    var channel = member.guild.channels.find("id", "645236146103779359");
    channel.send({embed});
      
})

// Member Leave Notification----------------------------------------------------
client.on("guildMemberRemove", member =>{
    const embed = {
        "title": "__***Member Leaved***__",
        "description": `${member.user} Leaved From the ${member.guild}`,
        "color": 8709482,

        "author" : {
            "name" : `${member.user.username}`,
            "icon_url" : `${member.user.avatarURL}`
        },
        "thumbnail" : {
            "url" : `${member.user.avatarURL}`
        },
        "footer" : {
            "icon_url" : `${member.guild.iconURL}`,
            "text" : `${member.guild.name}`
        },
        "timestamp" : new Date(),
        "fields" : [
            {
                "name" : "User ID :",
                "value" : `${member.user.id}`,
                "inline" : true
            },
            {
                "name" : "User Name :",
                "value" : `${member.user.username}`,
                "inline" : true
            },
            {
                "name" : "Server Name :",
                "value" : `${member.guild}`,
                "inline" : true
            }
        ]
        };

    var channel = member.guild.channels.find("id", "642342669632405504");
    channel.send({embed});

})

client.login("NjQ0NzY2NjQ3Mzk1Mjg3MDgx.XdDCJQ.mL0EUmYmi-IHUQatIpUhCR7aTiI");