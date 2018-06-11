const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDU1Nzk1OTc1NzU2NDQ3NzYx.DgBMnA.eURAo9lsKfMADMU86DWqUC_zGhQ')

bot.on("ready", () => { //On dis que quand le bot est prêt, on va faire une action.
    bot.user.setStatus("dnd") //Le bot va se mettre en mode ne pas déranger
    bot.user.setGame("BOT en test", "https://www.twitch.tv/mehdigameone") //Va mettre le bot en streaming avec le jeu séléctionner (dans les premiers "")
    console.log("Prêt") //On va dire au bot de mettre "Prêt" dans la console
   }) //On termine les instruction
