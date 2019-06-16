const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
var prefix = "v!";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login('NTg5MDg2NzA3MzI5MDA3NjMy.XQOp-A.-z3rdLPUYcscsRChhIReBmoxz5Y');

/*Réponse bidons*/

client.on('message', message =>{
    if(message.content === "Loan"){
        message.reply('Mon créateur est le plus beau ! :heart:');
        console.log('Répond')
    };
});

/*Bienvenue*/

client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('589538533098651711').send(embed)
    member.addRole('577223747833036803')
})

/*Aurevoire*/
 
client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('589538633632055296').send(embed)
})

/*Kick*/

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
});

/*Ban*/

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
});
/*Anti-insulte*/
client.on('message', message => {
    if (message.content.includes('ntm')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`ntm`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.includes('mere')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`A propos des mamans`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.includes('meres')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`A propos des mamans`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.includes('mère')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`A propos des mamans`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.includes('mères')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`A propos des mamans`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.includes('fils')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`A propos des mamans`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.includes('fdp')) {
        message.delete();
        var embed = new Discord.RichEmbed()
            .setTitle(":x: **INSULTE**")
            .setDescription("Insulte : **`fdp`**")
            .setColor("#DF0101")
            .setFooter("Prière de ne plus insulter !")
        message.channel.sendEmbed(embed);
    }
});

/*Jeux*/
client.on('ready', function() {
    console.log('Bot  en cours de démarrage')
    client.user.setActivity('v!help !', {type: 'STREAMING'})
})


/*Clear et mute*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :x:")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer :x:")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide :x:")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100 :x:")
        message.channel.bulkDelete(parseInt(count) + 1)
        var embed = new Discord.RichEmbed()
            .setTitle(":tada: **CLEAR**")
            .setDescription(count + " messages clear")
            .setColor("#01DF01")
        message.channel.sendEmbed(embed);
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre :x:")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre :x:")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
});

// Warn + Infractions

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :x:")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre :x:")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison :x:")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        var embed = new Discord.RichEmbed()
            .setTitle(":tada: **WARN**")
            .setDescription(member.user.username + " a été warn", reason)
            .setColor("#01DF01")
        message.channel.sendEmbed(embed);
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    }
});

//Ping wip

//client.on('message', msg => {
//    if(msg.content.startWith('c!ping') 
 //       msg.channel.send('ping').then((m) => m.edit(Pong : **${Date.now()}**ms));

//})

//Question

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + "question"){ 
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Peut être... :thinking:", "Absolument pas :interrobang:"]
        let question = args.slice(1).join(" ")

        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("ORANGE")
            .addField("Question :", question)
            .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
});

//Help
client.on('message', message =>{
    if(message.content === "v!help"){
        var embed = new Discord.RichEmbed()
            .setTitle(":question: **HELP**")
            .setDescription("Liste des commandes du BOT Vulkania !")
            .setColor("AQUA")
            .addField(":tada: v!question `ta question`", "poser une question au bot")
            .addField(":hammer: v!warn `joueur`", "warn un joueur")
            .addField(":hammer: v!infractions `joueur`", "consulter les warns d'un joueur")           
            .addField(":hammer: v!mute `joueur`", "mute un joueur")
            .addField(":hammer: v!ban `joueur`", "ban un joueur")
            .addField(":hammer: v!clear `chiffre`", "nettoyer les messages d'un channel")
            .addField(":question: v!credit", "voir les credits du bot")
        message.channel.send(embed)
    }
});

//credits
client.on('message', message =>{
    if(message.content === "v!credit"){
        var embed = new Discord.RichEmbed()
            .setTitle(":question: **CREDITS**")
            .setDescription("Les credits du BOT Vulkania !")
            .setColor("ORANGE")
            .addField("Créateur", "Loan#4512")
            .addField("Aides extérieurs mineures", "MCHub :heart:")
        message.channel.send(embed)
    }
});