const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Regual")
.setTitle("<a:tac:779748076894158868> Regual Bot Menüsü! <a:tac:779748076894158868>")
.setTimestamp()
.setDescription("<a:768896333259472977:781797651925696544>**-pre-ver** = Premium Sistem  \n <a:dc:779748598468182066>**-pre-al** = Premium Sistem \n <a:dc_bkm:779748075165057025>**-karaliste** = Kara Listeye Girerseniz Botu Kullanılamaz \n <a:yaniaret:779750992051961876>**-davet** = Davet Menüsünü Atar. \n <a:uzi:781797190380683284>**-istatistik** = Botun Bilgilerin Gösterir. \n <a:zplama:781797264289038377>**-ping** = Botun Pingini Gösterir. \n")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setImage("https://cdn.discordapp.com/attachments/808080967641464862/811216687114354718/350kb_49.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'bot',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}