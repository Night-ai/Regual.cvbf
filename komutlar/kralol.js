const Discord = require ("discord.js");

exports.run = (client, message) => {
  
  
  var embed = new Discord.RichEmbed()
  
  .setColor("RANDOM")
  .setDescription(`Artık kralsın!`)
  .setImage(`https://cdn.discordapp.com/attachments/689188113888837716/689942017606025355/0RzPYF.gif`)
  
  message.channel.send(embed)
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "",
  permLevel: 0
};

module.exports.help = {
  name: 'kral-ol',
  description: 'Kral olursunuz',
  usage: 'kral-ol'
}; 