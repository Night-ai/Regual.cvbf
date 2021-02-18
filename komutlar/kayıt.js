const Discord = require('discord.js');
const db = require('narcos-db');
const ayarlar = ('./ayarlar.json')

exports.run = async(client, message, args) => {
let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Premium Üyeler İçindir. Sende Premium Üye Bulunmamakta.`) }  
  var prefix = ayarlar.prefix
let kanal = db.fetch (`kayıtk_${message.guild.id}`)
if(!kanal) return message.channel.send('Lütfen kayıt kanalını ayarla!')
let rol = db.fetch (`kayıtrol_${message.guild.id}`)
if(!rol) return message.channel.send('Lütfen kayıt rolünü ayarla!')
if(kanal == null) return message.channel.send('');
if (message.channel.id !== kanal) return message.channel.send(`Sadece Kayıt Kanalından Kayıt Olabilirsiniz.`);
if (kanal == true) return;


let oo = message.member
let guild = message.guild
let isim = args[0];
let yas = args[1];
if (!isim) return message.channel.send(`İsmini girmelisin.`)
if (!yas) return message.channel.send(`Yaşını girmelisin.`)
setTimeout(function(){oo.roles.add(db.fetch(`kayıtrol_${message.guild.id}`))},5000)
 oo.setNickname(`${isim} ${yas}`)

}
exports.conf =  {
permLevel: 4,
aliases: []


};
exports.help = {
name: "kayıt"



}