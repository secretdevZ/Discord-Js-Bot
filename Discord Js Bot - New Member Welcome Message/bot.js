const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", ()=>{
    console.log(`${client.user.tag} connected to Discord`);
});

// New Member welcome Messale ----------------------------------------------

client.on("guildMemberAdd", member =>{
    member.send("Welcome on the Server");
});

client.login("NjQ0NzY2NjQ3Mzk1Mjg3MDgx.Xc_L0w.C3yt0vH_1E--jrME8SX2Lhjz60E");