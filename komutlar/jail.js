const Discord = require('discord.js');
const db = require('narcos-db');

exports.run = async (client, message, args) => {

     

let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Jailleyeceğim kişiyi yaz!')

let oo = message.member
setTimeout(function(){oo.roles.add(db.fetch(`jail_rol${message.guild.id}`))},5000)
oo.setNickname(`JAİLLENMİŞ`)
return message.channel.send('Kullanıcı başarı ile jaillendi!')
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
}

exports.help = {
  name: 'jail',

}