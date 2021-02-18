  
const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('790161653508603914')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
  .setColor('#3498db')
.addField('**Anti-raid Komutları**',`
**\n -koruma-ayarlar : Ayarlarınızı gösterir.**
**\n -caps-engel aç : Büyük harf koruma sistemini açarsınız.**
**\n -caps-engel kapat : Büyük harf koruma sistemini kapatırsınız.**
**\n -mod-log #kanal : Mod log kanalını belirlersiniz.**
**\n -rol-koruma aç : Rol-koruma açarsınız.**
**\n -rol-koruma kapat : Rol-koruma kapatırsınız.**
**\n -kanal-koruma aç : Kanal korumasını açarsınız.**
**\n -kanal-koruma kapat : Kanal koruma kapatırsınız.**
**\n -reklam-engel aç : Reklam engel korumasını açarsınız.**
**\n -reklam-engel kapat : Reklam engel korumasını kapatırsınız.**
**\n -küfür-engel aç : Küfür engel açarsınız.**
**\n -küfür-engel kapat : Küfür engel kapatırsınız.**
**\n -ping : Botun pingini görürsünüz.**
\n ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'koruma',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};