const { Client, Intents,MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.on('ready',()=>{
    console.log(`Bot is ready as: ${client.user.tag}`);
});

var datamet=[]
var dataname=[]
var database=[]
var clock=[]
client.on("message", message=>{
    if(message.content==='hola'){
        message.reply(`¡Hola ${message.author}! ¿De que forma aprendes`)
    }
    

    if(message.content.includes("retos")){
        var nombre=message.author
        dataname.push(nombre)
        var challengues='retos'
        datamet.push(challengues)

    var person1={
        "name":`${dataname}`,
        "met":`${datamet}`
    } 

    database.push(person1)
    console.log(database)

    var coincidencias=[]
    coincidencias.push([])
    
    for (let i = 0; i < datamet.length; i++) {
        if(i === 0){
            if(message.author.bot) return
            message.reply(`Te avisare cuando haya un match`)
            console.log(i)
        }
        else if(i === 1){
            if(message.author.bot) return
            message.reply(`Hey mira lo que encontré, ${dataname} disfruta aprender por medio de -retos-, lo cual empata muy bien contigo. Podrían juntarse a las -6:00 pm- a -hacer retos en code wars-.`)
            console.log(i)
            break
        }
        
    }
}
})


client.login('OTQ1MTkzNTM1NDgzODMwMzMy.YhMmEw.DTvMGmhejNliQey9N67Hw2uMvdU');