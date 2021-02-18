const ms = require('ms');

exports.run = async (client, message, args) => {

 
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Çekiliş başlatmak için yetkiye sahip değilsin.');
    }

   
    let giveawayChannel = message.mentions.channels.first();
   
    if(!giveawayChannel){
        return message.channel.send(':x: Bir kanal etiketlemen lazım!');
    }

    
    let giveawayDuration = args[1];
  
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Bi zaman belirtmen lazım (d,h,m,s)!');
    }


    let giveawayNumberWinners = args[2];
  
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Kaç kişinin çekilişi kazanacağını yazmalısın!');
    }

       let giveawayPrize = args.slice(3).join(' ');
   
    if(!giveawayPrize){
        return message.channel.send(':x: Bir ödül koymalısın');
    }


    client.giveawaysManager.start(giveawayChannel, {
  
        time: ms(giveawayDuration),

        prize: giveawayPrize,

        winnerCount: giveawayNumberWinners,

        hostedBy: client.config.hostedBy ? message.author : null,

        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+"çekiliş başladı",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+"çekiliş bitti",
            timeRemaining: "Kalan süre: **{duration}**!",
            inviteToParticipate: "Katılamk için 🎉 emojisine basın",
            winMessage: "Tebrikler, {winners}! Kazandığın ödül: **{prize}**!",
            embedFooter: "Çekilişler",
            noWinner: "Çekilişe kimse katılmadığı için sona erdi.",
            hostedBy: "Çekilişi yapan: {user}",
            winners: "kazanan(lar)",
            endedAt: "Bittiği tarih",
            units: {
                seconds: "saniye",
                minutes: "dakika",
                hours: "saat",
                days: "gün",
                pluralS: false 
            }
        }
    });

    message.channel.send(`bir çekiliş başladı, ${giveawayChannel}!`);

};