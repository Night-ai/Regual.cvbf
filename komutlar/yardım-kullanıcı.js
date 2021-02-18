const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Regual")
.setTitle("<a:Yldz:778542755394879520> Regual Kullanıcı Komutları <a:Yldz:778542755394879520>")
 .setTimestamp()
.setDescription("<a:yan:778542755394879520> **-avatar** = Avatarınıza bakarsınız. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-yetkilerim** = Yetkilerini görürsün. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-profil** = Profilini görürsün. <a:developeremoji:778542755394879520> \n <a:developeremoji:778542755394879520> **-sunucuresmi** = Sunucu resmini gösterir. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-ping** = Botun Pingine Bakarsın. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-id** = Birisinin id'sine Bakarsın. <a:developeremoji:749525084586115153> \n <a:yan:778542755394879520> **-davet** = Beni Sunucuna Ekle. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-istatistik** = Bot istatistiklerini görürsünüz. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-afk** = AFK <sebep>. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-deprem** = Türkiye Son 10 Deprem. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> \n <a:yan:778542755394879520> **-korona** = Korona <Ülke>. <a:developeremoji:778542755394879520>")
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}