const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", ()=>{
    console.log(`${client.user.tag} connected to Discord`);
});

client.on("message", message => {

    msg = message.content.toLowerCase();

    if(msg.startsWith(prefix + "ping")){
        message.reply("Pong, Mesasage Sender ID : " + message.author.id);
    }
});

client.login("NjQ0NzY2NjQ3Mzk1Mjg3MDgx.Xc448Q.AwoID2gZ6l9vt9FpQGtJCi1UoRs");