const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Regual Premium Sistemi')
    .setColor("GREEN")
    .setImage(`https://i.hizliresim.com/IRt1Uf.jpg`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: '',
  usage: ''
};