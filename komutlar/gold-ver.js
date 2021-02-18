const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '748497573316264027') return;
  let prex = args[0]
  if (!prex) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`prexgold${prex}`, 'premium')
  
  message.channel.send(`**${prex}** Adlı Kullanıcı Artık Premium Üye Verildi!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pre-ver"],
  permLevel: 0
};
exports.help = {
  name: 'pre-ver',
  description: '[Admin Komutu]',
  usage: 'gold-ver <ID>'
};