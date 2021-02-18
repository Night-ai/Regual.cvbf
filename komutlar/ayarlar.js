const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) } 
  
  let rolkoruma = await db.fetch(`rolk_${message.guild.id}`)
  let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`)
  let capsengel = await db.fetch(`capslock_${message.guild.id}`)
  let reklamengel = await db.fetch(`reklamFiltre_${message.guild.id}`)
  let küfürengel = await db.fetch(`küfürengel_${message.guild.id}`)

  
  let kontrol2;
  if(rolkoruma == null) kontrol2 = '<a:792704133903810560:806932613322768404>'
  else kontrol2 = '<a:yes:802629858365669437>| '+ rolkoruma
  
  
  let kontrol3;
  if(kanalkoruma == null) kontrol3 = '<a:792704133903810560:806932613322768404>'
  else kontrol3 = '<a:yes:802629858365669437> | '+ kanalkoruma

  let kontrol6;
  if(reklamengel == null) kontrol6 = '<a:792704133903810560:806932613322768404>'
  else kontrol6 = '<a:yes:802629858365669437> | '+ reklamengel

 let kontrol7;
  if(küfürengel== null) kontrol7 = '<a:792704133903810560:806932613322768404>'
  else kontrol7 = '<a:yes:802629858365669437> | '+ küfürengel
  
  let kontrol4;
  if(capsengel == null) kontrol4 = '<a:792704133903810560:806932613322768404>'
  else kontrol4 = '<a:yes:802629858365669437> | '+ capsengel
  let ayarlar = new Discord.MessageEmbed()
  .setTitle('Sunucu Anti-raid ayarları')
  .setDescription('İşte ayarlar!')
  .addField('Göstergeler', '<a:yes:802629858365669437> : **Aktif** \n <a:792704133903810560:806932613322768404> : **Devre Dışı**')
  .addField('Rol koruma::', kontrol2, true)
  .addField('Kanal koruma:', kontrol3, true)
  .addField('Caps engel:', kontrol4, true)
  .addField('Reklam engel:', kontrol6, true)
  .addField('Küfür engel:', kontrol7, true)
  message.channel.send(ayarlar)
 

 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ayarlar","a"], 
  permLevel: 0
};

exports.help = {
  name: 'koruma-ayarlar',
  description: 'boş', 
  usage: 'antiraid'
};