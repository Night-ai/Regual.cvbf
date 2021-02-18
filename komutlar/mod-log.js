const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Premium Üyeler İçindir. Sende Premium Üye Bulunmamakta.`) }
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Modlog Kanalı Zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`ModLog Kanalı başarıyla sıfırlandı.`);
    return
  }
if (!logk) return message.channel.send(`Yanlış Kullanım Doğru Kullanım: -mod-log #kanal`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`);
 message.react('791593234353618954')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 3 
 };

exports.help = {
    name: 'mod-log',
    description: '',
    usage: ''
};