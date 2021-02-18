const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
const p = ayarlar.prefix
module.exports.run = async (client, message, args) => {
let by = await db.fetch(`banyetkili.${message.guild.id}`)
let bl = await db.fetch(`banlog.${message.guild.id}`)
if(!by) return message.channel.send(`**Ban Yetkili Ayarlanmamış! [-banyetkili @roletiketle]**`)
  if(!bl) return message.channel.send(`**Ban Log Ayarlanmamış!  [-banlog #kanalismi]**`)
  
  if(!message.member.roles.cache.has(by)) {
    return message.channel.send(`Bu Komutu Kullanmak İçin <@${by}> Rolüne Sahip Olman Gerekmekte`)
  }
  
  let sebep = args.slice(1).join(' ')
  let user = message.mentions.users.first()
  if(!message.mentions.users.first()) return message.channel.send(`**Banlanacak Kişiyi Etiketlemelisin!**`)
  if(!sebep) return message.channel.send(`**Bir Sebep Girmelisin!**`)
  if(!message.guild.member(user).bannable) return message.channel.send(`**Hey Yetkililerimi Banlayamam!**`)
  message.guild.member(user).ban()
  
  const embed = new Discord.MessageEmbed()
  .addField(`İşlem:`, `Ban`)
  .addField(`Ban Atan Yetkili:`, `${message.author.tag}`)
  .addField(`Banlanan Üye:`, `${user}`)
  .addField(`Sebep:`, `${sebep}`)
  
message.guild.channels.cache.get(bl).send(embed)
   }

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'ban'
};