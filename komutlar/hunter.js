const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=754040174236925952&scope=bot&permissions=40) \n [__**Destek Sunucusu**__](https://discord.gg/q3feVKFGrV)")
  .setTitle("Botun Sahibi:<@793589155367354388> ✯ 𝐇𝐔𝐍𝐓𝐄𝐑𝐊İ𝐍𝐆𝐘𝐓 [𝟐𝐊]#0001")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hunter',
  description: '',
  usage: ''
};