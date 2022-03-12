const { Client, Intents, NewsChannel, } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//Horas y palabras clave
var horas=['12','13','14','15','16','17','18','19','20']  
var contenido=['retos','explicar','expliquenme']

client.on("message", message=>{
    //condición de entrada
     switch (message.content.toLowerCase()) {
        case 'hola': 
            message.reply(`Hola, como te gusta aprender ${message.author}`)
            break;
     }
     //recorrido de listas y validación
     for (let i = 0; i < horas.length; i++)
     {
     switch (message.content.toLowerCase()) {
        case contenido[i]:
            message.reply('¿A qué hora estás disponible?')
            message.author.selection=(`${contenido[i]}`)
            break;
        case horas[i]:
            message.author.availability=horas[i]
            message.reply('Te avisaré cuando haya un match')
            console.log(message.author)
            break;
    }

}
})

client.login('OTQ1MTkzNTM1NDgzODMwMzMy.YhMmEw.ISAq1PGm6uvsVysu5OEHJArM6lA');