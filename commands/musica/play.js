const Discord = require("discord.js")

const { DisTube, Queue } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { DiscordAPIError } = require("discord.js")

module.exports ={
    name:"play",
    execute(message){
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        let args = message.content.split(/\s+/)
        let query = args.slice(1).join(" ")

        if (!query) {
            return message.channel.send("Inserisci la canzone che vuoi ascoltare")
        }

        distube.play(voiceChannelBot || voiceChannel, query, {
            member: message.member,
            textChannel: message.channel,
            message: message
        })
    }}
    distube.on("addSong", (queue, song) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Canzone aggiunta")
            .addField("Canzone", song.name)
            .addField("Canzone richiesta da",song.user.toString())
    
        queue.textChannel.send({ embeds: [embed] })
    })

       
    distube.on("playSong", (queue, song) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Canzone in riproduzione...")
            .addField("Canzone", song.name)
            .addField("Richiesta da", song.user.toString())
    
        queue.textChannel.send({ embeds: [embed] })
    })
    distube.on("searchNoResult", (message, query) => {
        message.channel.send("Canzone non trovata")
    })
    
    
    
