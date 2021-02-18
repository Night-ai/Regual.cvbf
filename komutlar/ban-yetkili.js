const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
const p = ayarlar.prefix
module.exports.run = async (client, message, args) => {
let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Premium Üyeler İçindir. Sende Premium Üye Bulunmamakta.`) }
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Gerekli Yektiye Sahip Değilsin`)
  
  const rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir Rol Etiketlemeyi Unuttun`)
  
  
  db.set(`banyetkili.${message.guild.id}`, rol.id)
  message.channel.send(`Ban Atma Yetkilisi Başarıyla ${rol} Olarak Ayarlandı`)
   }

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-y-rol"],
  permLevel: 0
};

module.exports.help = {
  name: 'banyetkili'
};