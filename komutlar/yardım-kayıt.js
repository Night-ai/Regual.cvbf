const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("-")
  
const yardım = new Discord.MessageEmbed()
.setAuthor(`Regual`, message.author.avatarURL(({ format: 'png', dynamic: true, size: 1024 })))
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
.setDescription(`Kayıt Komutlarım
**-kayıt-rol @rol**: Kayıt Rolü Ayarlarsınız.
**-kayıt**: Kayıt Olursunuz.
**-kayıt-kanal**: Kayıt Kanal Ayarlarsınız.`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-yardım',
  description: 'la yardım komutu nolabilir başka',
  usage: '!yardım işte '
};