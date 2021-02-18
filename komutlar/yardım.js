const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Regual")
.setTitle("<a:Yldz:778555821285441546> Regual yardım menüsüne hoşgeldin! <a:Yldz:778555821285441546>")
.setTimestamp()
.setDescription("<a:destinyhype:778543872867303424> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:ayarlardestiny:778543872867303424> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:partnerdestiny:778543872867303424> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:Yldz:778543872867303424> **-logo** = __Logo komutlarını görüntülersiniz.__ \n <a:destinyhype:778543872867303424> **-seviye-yardım** = __Seviye yardım menüsünü açar.__ \n <a:destinyhype:778543872867303424> **-kayıt-yardım** = __Kayıt Menü Açar.__ \n <a:destinyhype:778543872867303424> **-koruma** = __Koruma Menü Açar.__ \n <a:destinyhype:778543872867303424> **-bot** = __Bot Menüsünü Açar.__ \n <a:destinyhype:778543872867303424> **-bilgi** = __Premium Sistemi İle Bilgi Verir.__ \n <a:destinyhype:778543872867303424> **-hg-bb yardım** = __Public Sunucular İçindir.__ \n <a:destinyhype:778543872867303424> **-botlistyardım** = __BotListi Menüsünü Açar.__ \n <a:destinyhype:778543872867303424> **-aboneyardım** = __Abone Yardım Menüsü Açar.__ \n <a:destinyhype:778543872867303424> **-otorol yardım** = __Otorol Yardım Menüsü Açar.__")
.setFooter(`${message.author.tag} Tarafından İstendi. -bilgi Yazarak Premium Bilgi Ulaş.`, message.author.avatarURL())
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y","tr"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}