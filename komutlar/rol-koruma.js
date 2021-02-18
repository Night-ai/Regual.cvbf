const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Premium Üyeler İçindir. Sende Premium Üye Bulunmamakta.`) }
  
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`Bir seçenek belirtin (aç/kapat)**Örnek Kullanım:** ${prefix}rol-koruma aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`rolk_${message.guild.id}`, "Aktif")
     message.channel.send(`Rol Koruma Başarıyla Açıldı!`)
  }
   if (args[0] === 'kapat') {
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(`Rol Koruma Başarıyla Kapatıldı!`)
  }
};
exports.conf = {
  aliases: ['rolkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'rol-koruma'
}; 