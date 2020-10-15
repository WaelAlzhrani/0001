 
const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = '#' 
client.on('ready', () => {
  console.log(`[Start] ${new Date()}`);
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('InfoBOT Nabarat :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  });

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("RANDOM")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
   **
   حبيب قلبي اسف ، البوت خاص !!
   WaelAlzhrani

    
   『البوت قيد التطوير !!  』
    
             _ _---------------- _ _
  BOT By: | WaelAlzhrani 

   **

   `)
   message.author.sendEmbed(embed)
   
   }
   });  
 




 
client.on("message", message => {
  if(!message.guild || message.author.bot)return;
  if(message.content.startsWith(prefix+"اخفاء.الرومات")){
    message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false
        });
 
    })
    message.channel.send("**Successfully**");
  }else if(message.content.startsWith(prefix+"اظهار.الرومات")){
    var arg =message.content.split(" ")[1];
    if(arg && arg == "all"){
      message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.id, {
          READ_MESSAGES: true
        });
      })
    }else{
    var member = message.mentions.members.first();
    if(!member)return message.channel.send("**Mention a member.**");
message.guild.channels.forEach(channel => {
        channel.overwritePermissions(member.id, {
          READ_MESSAGES: true
        });
    })
    message.channel.send("**تم بنجاج**")
    }
  }
})//3Mo_Steve is the best & n3k4a is one


client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : تم الإرسال`); 
 message.delete(); 
};     
});


/*حالة البوت*/ 
   client.on('message', function(message) {
    const myID = "438390620982345744";// حط ايديك هنا +الاوامر setname+stream+offstatus+play+listen+watch+setavatar
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الاسم الذي تريده.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح ').then(msg => {
           msg.delete(90000);
          message.delete(90000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/A_K');
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح!').then(msg => {
           msg.delete(90000);
          message.delete(90000);
        });
    } else if(message.content.startsWith(prefix + "offstatus")) {
                if(message.author.id !== myID) return;
client.user.setGame(args , '');
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح!').then(msg => {
           msg.delete(90000);
          message.delete(90000);
        });
    } else if(message.content.startsWith(prefix + "setgame")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح!').then(msg => {
           msg.delete(90000);
          message.delete(90000);
        });
} else if(message.content.startsWith(prefix + "listen")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح!').then(msg => {
           msg.delete(90000);
          message.delete(90000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح!').then(msg => {
           msg.delete(90000);
          message.delete(90000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: تم تغيير الحالة بنجاح!').then(msg => {
                if(!args) return message.reply('اكتب رابط الصوره التي تريدها.');
           msg.delete(90000);
          message.delete(90000);
        });
    }
});
   
 client.on('message' , message => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "طلب")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(0).join(" ");
        client.channels.get("726648238458798135").send(
            "\n" + "**" + "  الطلب من : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + "   : " + "**" +
            "\n" + "**" + args + "**")
        
        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription('تم ارسال الطلب  ✅ ')
             .setFooter("Nabarat Server ღ")
			 .setColor('RANDOM')
        message.channel.send(embed);
}
 });

client.on('message' , message => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "اقتراح")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(0).join(" ");
        client.channels.get("726648238458798135").send(
            "\n" + "**" + "  الاقتراح من : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + "   : " + "**" +
            "\n" + "**" + args + "**")
        
        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription('✅ تم ارسال الإقتراح ')
             .setFooter("Nabarat Server ღ")
			 .setColor('RANDOM')
        message.channel.send(embed);
}
 });
 

client.on('message' , message => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "شكوى")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(1).join(" ");
        client.channels.get("726648238458798135").send(
            "\n" + "**" + "  الشكوى من : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + "   : " + "**" +
            "\n" + "**" + args + "**")
        
        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription('✅ تم ارسال الشكوى')
             .setFooter("Nabarat Server ღ")
			 .setColor('RANDOM')
        message.channel.send(embed);
}
 });
 


client.on('message', message => {//WaelAlzhrani
    if (message.content.startsWith(prefix + 'مالجديد')) {//WaelAlzhrani
        if (message.author.bot) return//WaelAlzhrani
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//WaelAlzhrani
        var args =  message.content.split(' ').slice(1).join(' ')//WaelAlzhrani
        if (!args) return message.reply('Type You tsweet').then(c => {c.delete(90000)})//WaelAlzhrani
        let Room = message.guild.channels.find(`name`, "info")//WaelAlzhrani
        if (!Room) return message.channel.send("Can't find tsweet channel.").then(d => d.react('❌'))//WaelAlzhrani
        let embed = new Discord.RichEmbed()//WaelAlzhrani
        .setColor('RANDOM')//WaelAlzhrani
        .addField('**Nabarat**',`${args}`)//WaelAlzhrani
        .setFooter(`Nabarat server`)//WaelAlzhrani
        Room.sendEmbed(embed).then(c => {//WaelAlzhrani
            c.react('👍').then(() => //WaelAlzhrani
                c.react('👎'))//WaelAlzhrani
            
        }).catch(e => console.error(e)//WaelAlzhrani
        )
    }//WaelAlzhrani
	
	
});client.on('message', message => {//WaelAlzhrani
    if (message.content.startsWith(prefix + 'ادارة.تصويت')) {//WaelAlzhrani
        if (message.author.bot) return//WaelAlzhrani
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//WaelAlzhrani
        var args =  message.content.split(' ').slice(1).join(' ')//WaelAlzhrani
        if (!args) return message.reply('Type You tsweet').then(c => {c.delete(90000)})//WaelAlzhrani
        let Room = message.guild.channels.find(`name`, "شات_الإدارة")//WaelAlzhrani
        if (!Room) return message.channel.send("Can't find tsweet channel.").then(d => d.react('❌'))//WaelAlzhrani
        let embed = new Discord.RichEmbed()//WaelAlzhrani
        .setColor('RANDOM')//WaelAlzhrani
        .addField('**Nabarat**',`${args}`)//WaelAlzhrani
        .setFooter(`Nabarat server`)//WaelAlzhrani
        Room.sendEmbed(embed).then(c => {//WaelAlzhrani
            c.react('✅').then(() => //WaelAlzhrani
                c.react('❌'))//WaelAlzhrani
            
        }).catch(e => console.error(e)//WaelAlzhrani
        )
    }//WaelAlzhrani
});



client.on('message', message => {//WaelAlzhrani
    if (message.content.startsWith(prefix + 'جديد.تصويت')) {//WaelAlzhrani
        if (message.author.bot) return//WaelAlzhrani
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//WaelAlzhrani
        var args =  message.content.split(' ').slice(1).join(' ')//WaelAlzhrani
        if (!args) return message.reply('Type You tsweet').then(c => {c.delete(90000)})//WaelAlzhrani
        let Room = message.guild.channels.find(`name`,"استطلاع")//WaelAlzhrani
        if (!Room) return message.channel.send("Can't find tsweet channel.").then(d => d.react('❌'))//WaelAlzhrani
        let embed = new Discord.RichEmbed()//WaelAlzhrani
        .setColor('RANDOM')//WaelAlzhrani
        .addField('**Nabarat**',`${args}`)//WaelAlzhrani
        .setThumbnail(message.author.avatarURL)//WaelAlzhrani
        .setFooter(`Nabarat server`)//WaelAlzhrani
        Room.sendEmbed(embed).then(c => {//WaelAlzhrani
            c.react('👍').then(() => //WaelAlzhrani
                c.react('👎'))//WaelAlzhrani
            
        }).catch(e => console.error(e)//WaelAlzhrani
        )
    }//WaelAlzhrani
});




client.on('message', message => {//WaelAlzhrani
    if (message.content.startsWith(prefix + 'كت.تصويت')) {//WaelAlzhrani
        if (message.author.bot) return//WaelAlzhrani
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//WaelAlzhrani
        var args =  message.content.split(' ').slice(1).join(' ')//WaelAlzhrani
        if (!args) return message.reply('Type You tsweet').then(c => {c.delete(90000)})//WaelAlzhrani
        let Room = message.guild.channels.find(`name`,"cut tweet")//WaelAlzhrani
        if (!Room) return message.channel.send("Can't find tsweet channel.").then(d => d.react('❌'))//WaelAlzhrani
        let embed = new Discord.RichEmbed()//WaelAlzhrani
        .setColor('RANDOM')//WaelAlzhrani
        .addField('**Nabarat**',`${args}`)//WaelAlzhrani
        .setThumbnail(message.author.avatarURL)//WaelAlzhrani
        .setFooter(`Nabarat server`)//WaelAlzhrani
        Room.sendEmbed(embed).then(c => {//WaelAlzhrani
            c.react('✅').then(() => //WaelAlzhrani
                c.react('❌'))//WaelAlzhrani
            
        }).catch(e => console.error(e)//WaelAlzhrani
        )
    }//WaelAlzhrani
});






 
  
  
	
	



								   
client.on('message', message => {

    if(message.content === prefix + "قفل الشات") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "فتح الشات") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      

});



/*
This code was published for the first time in Toxic Codes server;
All copyrights reserved to 'Baron' , 'Idiots Group';
you can contact with me here : https://baron.netlify.com/

requirements : npm i cooldown
*/
const cooldown = new Set()
  client.on("message", async message => {
    let msgCount = 0;

        let errorCount = 0;

        let successCount = 0;
        let sent = '📤';
        let cant = '❌';
        let rcv = '📥';
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLocaleLowerCase()
    switch (command) {
    case "nbc" :
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**U don't have `Manage_Messages` permission**")
      if(!args[0]) return;

      var args2 = args.slice(1).join(" ").replace('[sender]', message.author.username).replace('[server]', message.guild.name).replace('[channel]', message.channel.name).replace('[members]', message.guild.members.size).replace('[owner]', message.guild.owner.user.username).replace('[roles]', message.guild.roles.size).replace('[online]', message.guild.members.filter(m=>m.presence.status == 'online').size + message.guild.members.filter(m=>m.presence.status == 'dnd').size +  message.guild.members.filter(m=>m.presence.status == 'idle').size).replace('[offline]', message.guild.members.filter(m=>m.presence.status == 'offline').size)
      if(args[0] === message.guild.roles.find(r => r.id === args[0]) || message.guild.roles.find(r => r.name.toLowerCase().includes(args[0]))){
        if(!args[1]) return;
        let getRole = message.guild.roles.find(r => r.id === args[0]) || message.guild.roles.find(r => r.name.toLowerCase().includes(args[0]));
        if (cooldown.has(message.author.id)) {
          if(message.author.bot) return;
          return message.reply("U have to wait 2 Hours for using this cmd again").then(message => {
          message.delete(5000)
          })
          }
          cooldown.add(message.author.id);
          setTimeout(() => {
            cooldown.delete(message.author.id);

          }, 7200000);

      let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **${getRole} Memebrs**: `+'`'+`${getRole.members.size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
      message.channel.send(embed).then(msg => {

        message.guild.members.filter(m => m.roles.find(r => r.name.toLowerCase().includes(args[0])) || m.roles.find(r => r.id === args[0])).forEach(g => {

          g.send(args2).then(() => { //!Baron#0001

            successCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **${getRole} Memebrs**: `+'`'+`${getRole.members.size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          }).catch(e => {

            errorCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **${getRole} Memebrs**: `+'`'+`${getRole.members.size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          });

        });
      }) //!Baron#0001


    }
      if(args[0] === 'online'){
        if(!args[1]) return;
        if (cooldown.has(message.author.id)) {
          if(message.author.bot) return;
          return message.reply("U have to wait 2 Hours for using this cmd again").then(message => {
          message.delete(5000)
          })
          }
          cooldown.add(message.author.id);
          setTimeout(() => {
            cooldown.delete(message.author.id);

          }, 7200000);
      let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Online Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'online').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
      message.channel.send(embed).then(msg => {

        message.guild.members.filter(m => m.presence.status === 'dnd').forEach(g => {

          g.send(args2).then(() => {

            successCount++;

            msgCount++;
            let embed = new Discord.RichEmbed() //!Baron#0001
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Online Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'online').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          }).catch(e => {

            errorCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Online Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'online').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`) //!Baron#0001
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          });

        });
      })
      }
      if(args[0] === 'dnd'){
        if(!args[1]) return;
        if (cooldown.has(message.author.id)) {
          if(message.author.bot) return;
          return message.reply("U have to wait 2 Hours for using this cmd again").then(message => {
          message.delete(5000)
          })
          }
          cooldown.add(message.author.id); //!Baron#0001
          setTimeout(() => {
            cooldown.delete(message.author.id);

          }, 7200000);
      let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Dnd Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
      message.channel.send(embed).then(msg => { //!Baron#0001

        message.guild.members.filter(m => m.presence.status === 'dnd').forEach(g => {
 
          g.send(args2).then(() => {

            successCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Dnd Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          }).catch(e => {

            errorCount++; //!Baron#0001

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Dnd Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          });

        }); //!Baron#0001
      })
      }
      if(args[0] === 'idle'){
        if(!args[1]) return;
        if (cooldown.has(message.author.id)) {
          if(message.author.bot) return;
          return message.reply("U have to wait 2 Hours for using this cmd again").then(message => {
          message.delete(5000)
          })
          }
          cooldown.add(message.author.id); //!Baron#0001
          setTimeout(() => {
            cooldown.delete(message.author.id);

          }, 7200000);
      let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Idle Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL) //!Baron#0001
      message.channel.send(embed).then(msg => {

        message.guild.members.filter(m => m.presence.status === 'idle').forEach(g => {

          g.send(args2).then(() => {

            successCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Idle Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          }).catch(e => { //!Baron#0001

            errorCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Idle Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          });

        });
      })
      }
      if(args[0] === 'offline'){
        if(!args[1]) return;
        if (cooldown.has(message.author.id)) {
          if(message.author.bot) return;
          return message.reply("U have to wait 2 Hours for using this cmd again").then(message => {
          message.delete(5000)
          })
          }
          cooldown.add(message.author.id);
          setTimeout(() => {
            cooldown.delete(message.author.id); //!Baron#0001

          }, 7200000);
      let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Offline Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
      message.channel.send(embed).then(msg => {

        message.guild.members.filter(m => m.presence.status === 'offline').forEach(g => {

          g.send(args2).then(() => {

            successCount++;

            msgCount++;
            let embed = new Discord.RichEmbed() //!Baron#0001
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Offline Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          }).catch(e => {

            errorCount++;

            msgCount++;
            let embed = new Discord.RichEmbed()
            .setTitle(`**Brodcast Info**`)
            .setDescription(`- **Offline Memebrs**: `+'`'+`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`+'`\n'+
            `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
            `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
            `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
            .setFooter(client.user.username, client.user.avatarURL)
            msg.edit(embed);

          });

        });
      })
      }
      if(args[0] === 'all'){
        if(!args[1]) return;
          if (cooldown.has(message.author.id)) {
            if(message.author.bot) return;
            return message.reply("U have to wait 2 Hours for using this cmd again").then(message => {
            message.delete(5000)
            })
            } //!Baron#0001
            cooldown.add(message.author.id);
            setTimeout(() => {
              cooldown.delete(message.author.id);

            }, 7200000);
        let embed = new Discord.RichEmbed()
              .setTitle(`**Brodcast Info**`)
              .setDescription(`- **All Memebrs**: `+'`'+`${message.guild.memberCount}`+'`\n'+
              `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
              `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
              `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
              .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(embed).then(msg => {

          message.guild.members.forEach(g => {

            g.send(args2).then(() => {

              successCount++; //!Baron#0001

              msgCount++;
              let embed = new Discord.RichEmbed()
              .setTitle(`**Brodcast Info**`)
              .setDescription(`- **All Memebrs**: `+'`'+`${message.guild.memberCount}`+'`\n'+
              `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
              `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
              `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
              .setFooter(client.user.username, client.user.avatarURL)
              msg.edit(embed);

            }).catch(e => {

              errorCount++;

              msgCount++;
              let embed = new Discord.RichEmbed()
              .setTitle(`**Brodcast Info**`)
              .setDescription(`- **All Memebrs**: `+'`'+`${message.guild.memberCount}`+'`\n'+
              `- Sent messages: `+'`'+`${msgCount}`+'`'+`${sent}\n`+
              `- Received messages: `+'`'+`${successCount}`+'`'+`${rcv}\n`+
              `- Non-received messages: `+'`'+`${errorCount}`+'`'+`${cant}`)
              .setFooter(client.user.username, client.user.avatarURL)
              msg.edit(embed);

            });

          });//!Baron#0001
        })
      }
      if(args[0] === 'help'){
        let space = '⚙️';
        let arrow = '📌';
        var online = '💚';
  var dnd = '❤️';
  var idle = '💛';
  var offline = '🖤';
       let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setTitle(`**IdiotBot Broadcast Help**`)
       .setDescription(`${space}**In fact idiot bot is designed to meet almost all the desires the server owner needs, So we tried to make it as much as possible**\n`+
       '**`Commands`**\n'+`${space} `+'**pls bc all <message>**'+` ${arrow} For all members\n`+
       `${space} `+'**pls bc online <message>**'+` ${arrow} For specific members with ${online} status\n`+
       `${space} `+'**pls bc offline <message>**'+` ${arrow} For specific members with ${offline} status\n`+
       `${space} `+'**pls bc idle <message>**'+` ${arrow} For specific members with ${idle} status\n`+
       `${space} `+'**pls bc dnd <message>**'+` ${arrow} For specific members with ${dnd} status\n`+
       `${space} `+'**pls bc role-name/role-id <message>**'+` ${arrow} For members with specific role\n`)
       .addField(`**Replacements**`, `**[sender]\n
       [server]\n
       [channel]\n
       [owner]**`, true)
       .addField(`**Replacements**`, `**[members]\n
       [roles]\n
       [online]\n
       [offline]**`, true)
       message.channel.send(embed)
      }
      break;  //!Baron#0001
    }
  })



client.on('message', message => {
  if (message.content.startsWith(prefix + 'بوت.رابط')) {
    var mentionned = message.mentions.users.first();
    var mrx;
      if(mentionned){
          var mrx = mentionned; } else {
          var mrx = message.author;
      }
      if(!mentionned.bot) return message.reply("الشخص الذي منشنته ليس بوت");
      if(!mentionned) return message.reply("منشن البوت");
      let alpha = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Link Bot`)
      .setURL(`https://discordapp.com/oauth2/authorize?client_id=${mrx.id}&scope=bot&permissions=8`)
      .setThumbnail(mrx.avatarURL)
      .setFooter(`- Requested By: ${message.author.tag}`)
      message.channel.sendEmbed(alpha);
  }
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
//
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
//
  let args = message.content.split(" ").slice(1);
  

if (command == "em") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor('RANDOM')
    message.channel.sendEmbed(say);
    message.delete();
  }


});

 




client.on('message', message => {
var prefix = "#";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
	



client.on('message', message => {
var prefix = "#";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://khamsat.hsoubcdn.com/images/services/889912/ec6f8f67fb7e5c0f1a65c06f2862b5e4.jpg","https://i.ytimg.com/vi/_Mt04t0y8o0/hqdefault.jpg","https://goxtraaa.com/wp-content/uploads/2016/12/meriam-1.jpg","https://www.newlebanon.info/images/fullPicPageArticle/215182.jpg","https://al-marsd.com/wp-content/uploads/2018/08/6667778.jpg","https://www.sadanews.ps/cached_uploads/resize/600/400/2019/04/28/j2sc7-1556457954.jpg","https://mulhak-website.s3.amazonaws.com/2016/08/-----------------110.jpg","https://pbs.twimg.com/media/CJ-nJ0TUAAAKJjC.jpg","http://1.bp.blogspot.com/_8pR_fH1QT-8/TVEMWDapl9I/AAAAAAAAAf0/8nUKkDLkkAo/s1600/michael-jackson-majidalhydar1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0xJYb8gJHFTRNFsttScJ4hm44FO1vaIN1MI2V3hHVeYPfL9F","https://modo3.com/thumbs/fit630x300/126499/1480253196/%D8%B4%D8%AE%D8%B5%D9%8A%D8%A7%D8%AA_%D8%A3%D8%AB%D8%B1%D8%AA_%D9%81%D9%8A_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85.jpg","http://go.xtraaa.com/wp-content/uploads/2017/08/nan.jpg","https://meaningg.cc/wp-content/uploads/2018/06/3018.jpg","https://meaningg.cc/wp-content/uploads/2018/06/3018-1.jpg","https://meaningg.cc/wp-content/uploads/2018/06/3018-2.jpg","https://meaningg.cc/wp-content/uploads/2018/06/3018-6.jpg","https://meaningg.cc/wp-content/uploads/2018/06/3018-8.jpg","https://www.7hob.com/wp-content/uploads/2019/03/7hob.com135253107617-400x600.jpg","https://wordss.cc/wp-content/uploads/2018/08/3740.jpg","http://gate.ahram.org.eg/Media/News/2018/1/16/19_2018-636517430374797209-479.jpg","http://photo.elcinema.com.s3.amazonaws.com/uploads/_640x_2fb191d4d4e02c54d73b70854322aa451f8036f1b6bf0b7905e155d34dbc7d73.jpg","https://staticmbc-a.akamaihd.net/image/upload/v1525721831/2015/3/1/abdo.jpg","http://www.alamelarab.com/photo/data/media/16/kazem_alsahir13__.jpg","https://www.sayidaty.net/sites/default/files/styles/800x510/public/01/10/2015/1443687149_66dab20fce45191286d8b27d75adcf81.jpg","http://friendss.net/wp-content/uploads/2018/05/1087-1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8Iti0qzoK76r871zvYU3PRHsSEXqtIIVJBwidAxKsaqWQ-GN"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + '#صور')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

	
client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'nabarat');
 
  if (!channel) return;

  channel.send(`   𝗪elcome 𝗧𝗢 **𝗡abarat** ‫ , ${member}`);
});



client.on("message", msg => {
    if(msg.author.bot || !msg.guild) return;
    let [command, ...args] = msg.content.slice(prefix.length).split(/ +/g);
    if(command === "عربي") {
        if(args.shift() === "all") {
            let rooms = msg.guild.channels.filter(r=> r.name.includes("-") || r.name.includes("_"))
            rooms.forEach(r=> r.setName(r.name.replace(/-/g, " ").replace(/_/g, " ")))
             msg.channel.send("**Done i have spaced "+rooms.size+" channel ...**")
            .catch(err=> msg.channel.send("i have an error please check my permissons"))
        } 
        else if(msg.mentions.channels.first()) {
            let room = msg.guild.channels.find(m=> m.name === msg.mentions.channels.first().name)
            room.setName(room.name.replace(/-/g, " ").replace(/_/g, " ")).then(sec=> msg.channel.send("**Done i have spaced "+room+" ...**"))
            .catch(err=> msg.channel.send("i have an error please check my permissons"))
        } 
        else msg.channel.send("**Usage: \n > "+prefix+"space <all | mention channel>**")
    }
 
})




	
client.login('NzM0NTE5NjE4NTA4Njg1MzE0.XxS4sw.40EylDZgpU6NF_M9zDy_mSmrhak');