const Discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Premium Üyeler İçindir. Sende Premium Üye Bulunmamakta.`) } 
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Kayıt kanalını etiketler misin?')

db.set(`kayıtk_${message.guild.id}`, kanal.id)
return message.channel.send(`Kayıt kanalı başarı ile <#${kanal.id}> olarak ayarlandı.`)

};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['kayıtkanal'],
permLevel: 4

};
exports.help = {
name : "kayıt-kanal"

};