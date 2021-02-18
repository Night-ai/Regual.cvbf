const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Regual")
.setTitle("<a:Yldz:778542755495411732> Regual Eğlence Komutları <a:Yldz:778542755495411732>")
 .setTimestamp()
.setDescription("<a:yan:778542755495411732> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-fbi** = Bot FBi Gif Atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-düello** = Düello Atarsın. <a:developeremoji:749525084586115153> \n <a:yan:778542755495411732> **-wasted** = Polis tarafından yakalanırsın. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-atatürk** = Dene ve gör... (1881-1938) <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-yazan-kazanır** = İlk yazan kazanır. <a:developeremoji:778542755495411732>\n <a:yan:778542755495411732> **-türk** = Rastgele türk gif atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-gif-woman** = Kadın Gifi Atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-gif-baby** = Bebek Gifi Atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-gif-man** = Man Gifi Atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-gif-couple** = Couple Gif Atar. <a:developeremoji:778542755495411732>")
.setImage("https://cdn.discordapp.com/attachments/782983674940882944/811217803499405344/350kb_49.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["e"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}