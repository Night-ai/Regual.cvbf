const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("-")
  
const yardım = new Discord.MessageEmbed()
.setAuthor(`Regual`, message.author.avatarURL(({ format: 'png', dynamic: true, size: 1024 })))
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
.setDescription(`Abone Yardım
-abone-log: Abone Rol Verilince Log Kanalına Mesaj Atar.
-abone-rol @rol: Abone Rol Ayarlarsınız.
-abone-yetkili-rol: Yetkili Rolü Ayarlarsınız.
-abone @kullanıcı: Abone Rolü Verirsiniz.`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'aboneyardım',
  description: 'la yardım komutu nolabilir başka',
  usage: '!yardım işte '
};