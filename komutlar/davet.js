const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=775428604825567273&scope=bot&permissions=805314622) \n [__**Destek Sunucusu**__](https://discord.gg/cK8AjDkxKT) \n [__**Web Sitem**__](https://www.regualbot.tk)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};