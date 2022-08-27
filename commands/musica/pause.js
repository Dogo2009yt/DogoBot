const Discord = require("discord.js")

const { DisTube, Queue } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { DiscordAPIError } = require("discord.js")

module.exports ={
    name:"pause",
    execute(message){
        if (message.content == "!pause") {
            const voiceChannel = message.member.voice.channel
            if (!voiceChannel) {
                return message.channel.send("Devi essere in un canale vocale")
            }
    
            const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
            if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
                return message.channel.send("Qualun'altro sta già ascoltando della musica")
            }
    
            try {
                distube.pause(message)
            } catch {
                return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa")
            }
    
            message.channel.send("Canzone in pausa")
        }
    }
    }