const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Regual")
.setTitle("<a:Yldz:778542755152396309> Regual Moderasyon Komutları <a:Yldz:778542755152396309>")
 .setTimestamp()
.setDescription("<a:yan:778542755152396309> **-sil** = Yazdığınız miktarda mesajı siler. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-ban** = Etiketlediğiniz kişiyi banlarsınız. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-kick** = Etiketlediğiniz kişiyi atarsınız. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-duyuru** = Bota duyuru yaptırırsınız. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-küfür** = Küfür engel sistemini açarsınız. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-reklam** = Reklam engel sistemi açarsınız. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-slowmode** = Yavaş modu ayarlarsınız. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-forceban** = Birisine id ban atarsınız. <a:developeremoji:749525084586115153> \n <a:yan:778542755152396309> **-unban** = Birisinin banını açarsınız <a:yan:778542755152396309> \n <a:yan:778542755152396309> **-sa-as** = Bot biri sa dedimi cevap verir. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-üyedurum** = Üyelerin durumlarını görürsün. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-çekiliş** = Çekiliş başlatırsınız. <a:developeremoji:778542755152396309>\n <a:yan:778542755152396309> **-sunucukur** = Gelişmiş sunucu kurar(Beta). <a:developeremoji:778542755152396309>\n <a:yan:778542755152396309> **-otorol** = Otorol ayarlar. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-sohbet-aç-kapat** = Sohbeti açıp kapatır. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-sayaç-ayarla** = Sayaç ayarlar. <a:developeremoji:778542755152396309> \n <a:yan:778542755152396309> **-sayaç-kanal-ayarla** = Sayaç kanal ayarlar. <a:developeremoji:778542755152396309>")
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}