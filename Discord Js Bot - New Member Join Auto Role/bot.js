const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", ()=>{
    console.log(`${client.user.tag} connected to Discord`);
});

client.on("guildMemberAdd", member =>{
  var role = member.guild.roles.find("id", "642342707259506699");
  member.addRole(role);
})

client.login("NjQ0NzY2NjQ3Mzk1Mjg3MDgx.XdEYsw.48qjlWTfKV8cxvgMgah6dnp7KPM");