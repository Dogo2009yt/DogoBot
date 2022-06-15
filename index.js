 const Discord = require("discord.js")
 const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
 )

 client.login("OTg1NjQzODc4MDgwMjA0ODUw.GUGWDs.s8KmqO6i30KU-5ZaHp4Sy5ZBixil1yi7FiCkYk")

client.on("ready",() => {
   console.log ("bot online")




}) 
client.on("messageCreate", (message) => {
  if (message.content == "!youtube") (
     message.channel.send(`${message.author.username} questo è il mio canale yt:youtube.com/channel/UC-fRd6-frGO5jlo56jVSiyg`)
  )
  if (message.content == "!ciao") (
   message.channel.send("Ciao anche a te")
  )
  
  
  if (message.content == "!aboutme") {
      var aboutme = new Discord.MessageEmbed()
          .setTitle(`${message.author.username}`)
          .setDescription(`${message.author.Description}`)
          .setThumbnail(`${message.author.avatar}`)
          .setTimestamp("By DogoBot")
      message.channel.send({embeds: [aboutme]})
  }
})



