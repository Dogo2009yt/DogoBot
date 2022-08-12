module.exports ={
    name:"social",
    execute(message){
            //Bottone unico
                let social = new Discord.MessageEmbed()
                    .setTitle("Social")
                    .setDescription("Premi il bottone con il social che vuoi")
         
                let youtube = new Discord.MessageButton()
                    .setLabel("Youtube")
                    .setCustomId("youtube")
                    .setStyle("PRIMARY") //Oppure "DANGER", "SECONDARY", "SUCCESS"
                let instagram = new Discord.MessageButton()
                    .setLabel("Instagram")
                    .setCustomId("instagram")
                    .setStyle("PRIMARY")
        
                let twitch = new Discord.MessageButton()
                    .setLabel("Twitch")
                    .setCustomId("twitch")
                    .setStyle("PRIMARY")
                
                let Sito = new Discord.MessageButton()
                    .setLabel("Sito web")
                    .setCustomId("sito")
                    .setStyle("PRIMARY")
            
                let telegram = new Discord.MessageButton()
                    .setLabel("Telegram")
                    .setCustomId("telegram")
                    .setStyle("PRIMARY")
        
                    
                let row1 = new Discord.MessageActionRow()
                    .addComponents(youtube)
                    .addComponents(instagram)
                    .addComponents(twitch)
                    .addComponents(telegram)
                    .addComponents(Sito)
         
                message.channel.send({ embeds: [social], components: [row1] })
         
            }
         }
         
         client.on("interactionCreate", interaction => {
            if (!interaction.isButton()) return
        
            if (interaction.customId == "youtube") {
                interaction.reply({ content: "Ecco il link: https://www.youtube.com/channel/UC-fRd6-frGO5jlo56jVSiyg", ephemeral: true })
            }
            if (interaction.customId == "instagram") {
                interaction.reply({ content: "Ecco il link: https://www.instagram.com/dogoyt3430/", ephemeral: true })
            }
            if (interaction.customId == "twitch") {
                interaction.reply({ content: "Ecco il link: https://www.twitch.tv/dogo_2009", ephemeral: true })
            }
            if (interaction.customId == "sito") {
                interaction.reply({ content: "Ecco il link: https://dogochannel.wordpress.com/", ephemeral: true })
            }
            if (interaction.customId == "telegram") {
                interaction.reply({ content: "Ecco il link: https://t.me/dogoclubofficial ", ephemeral: true })
            }
        })
        
    
    
