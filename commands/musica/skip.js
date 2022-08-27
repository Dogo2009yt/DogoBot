const Discord = require("discord.js")

const { DisTube, Queue } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { DiscordAPIError } = require("discord.js")

module.exports ={
    name:"skip",
    execute(message){
        if (message.content == "!skip") {
            const voiceChannel = message.member.voice.channel
            if (!voiceChannel) {
                return message.channel.send("Devi essere in un canale vocale")
            }
    
            const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
            if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
                return message.channel.send("Qualun'altro sta già ascoltando della musica")
            }
    
            try {
                distube.skip(message)
            } catch {
                return message.channel.send("Ultima canzone")
            }
    
            message.channel.send("Canzone skippata")
        }
    }
    }