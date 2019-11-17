const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", ()=>{
    console.log(`${client.user.tag} connected to Discord`);
});

client.on("message", message =>{
  msg = message.content.toLowerCase()

  if(msg.startsWith(prefix + "user")){
    const embed = {
      "title" : "__***User Details***__",
      "description" : `${message.author.username} Detailes here :`,
      "color" : 8709482,
      "author" : {
        "name" : `${message.author.username}`,
        "icon_url" : `${message.author.avatarURL}`
      },
      "thumbnail" : {
        "url" : `${message.author.avatarURL}`
      },
      "footer" : {
        "icon_url" : `${message.guild.iconURL}`,
        "text" : `${message.guild.name}`
      },
      "timestamp" : new Date(),
      "fields" : [
        {
          "name" : "User ID :",
          "value" : `${message.author.id}`,
          "inline" : true
        },
        {
          "name" : "User Name :",
          "value" : `${message.author.username}`,
          "inline" : true 
        },
        {
          "name" : "Server Name :",
          "value" : `${message.guild.name}`,
          "inline" : true
        }
      ]
    };
    message.channel.send({embed});
  };
})

client.login("NjQ0NzY2NjQ3Mzk1Mjg3MDgx.XdEoFw.FzEp9hNcQqdUTC-NDWyQbuTNh3g");