const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("RED")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  " **Sahibim**","<@748497573316264027> / ᘜᙢ Night#2166"
  )
    .addField(
      " **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      " **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
  
    .addField(
            " **Kullanıcılar**",client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)

        .toLocaleString(),

      true

    )

    .addField(

      " **Sunucular**",

      client.guilds.cache.size.toLocaleString(),

      true

    )

    .addField(

      " **Kanallar**",

      client.channels.cache.size.toLocaleString(),

      true

    )

.addField(" **Discord.JS sürüm**", "v" + Discord.version, true)

    .addField(" **Node.JS sürüm**", `${process.version}`, true)

    .addField(" **Ping**", client.ws.ping + " ms", true)

    .addField(

      " **CPU**",

      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``

    )
      .addField(" **Bit**", `\`${os.arch()}\``, true)

    .setThumbnail(client.user.avatarURL())

  .setImage("https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif")

    .addField(" **İşletim Sistemi**", `\`\`${os.platform()}\`\``)

    .addField("**➥ Linkler**", "[➥ Davet Linki](https://discord.com/oauth2/authorize?client_id=775428604825567273&scope=bot&permissions=805314622)\n[➥ Destek Sunucu](https://discord.gg/cK8AjDkxKT)\n[➥ Web Sitem](https://www.regualbot.tk/)");

  return message.channel.send(msg);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0,
}
exports.help = {
  name: "istatistik",
};