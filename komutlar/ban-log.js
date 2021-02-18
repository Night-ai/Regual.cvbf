const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
const p = ayarlar.prefix
module.exports.run = async (client, message, args) => {
let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Gerekli Yektiye Sahip Değilsin`)
  
  const kanal = message.mentions.channels.first()
  if(!kanal) return message.channel.send(`Bir Kanal Etiketlemeyi Unuttun!`)
  
  
  db.set(`banlog.${message.guild.id}`, kanal.id)
  message.channel.send(`Banlog Kanalı Başarıyla ${kanal} Olarak Ayarlandı`)
   }

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-log"],
  permLevel: 0
};

module.exports.help = {
  name: 'banlog'
};