const Discord = require("discord.js")

const { DisTube, Queue } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { DiscordAPIError } = require("discord.js")

module.exports ={
    name:"pause",
    execute(message){
        if (message.content == "!pause") {
            try {
                distube.pause(message)
            } catch {
                return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa")
            }
    
            message.channel.send("Canzone in pausa")
        }
    }
    }