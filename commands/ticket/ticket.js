module.exports ={
    name:"comando",
    execute(message){
        client.on("messageCreate", message => {
            if (message.content == "!comando") {
                //Bottone unico
                let embed1 = new Discord.MessageEmbed()
                    .setTitle("Ticket")
                    .setDescription("Premi il bottone sottostante per aprire un ticket. NON ABUSARE DEL SERVIZIO!!!")
                    .setThumbnail("https://cdn.icon-icons.com/icons2/1238/PNG/512/concertticket_83678.png")
         
                let button1 = new Discord.MessageButton()
                    .setLabel("📩 Apri ticket")
                    .setCustomId("openTicket")
                    .setStyle("PRIMARY") //Oppure "DANGER", "SECONDARY", "SUCCESS"
                    
                let row1 = new Discord.MessageActionRow()
                    .addComponents(button1)
         
                message.channel.send({ embeds: [embed1], components: [row1] })
         
            }
         })
         client.on("interactionCreate", interaction => {
             if (interaction.customId == "openTicket") {
                 interaction.deferUpdate()
                 if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
                     interaction.user.send("Hai gia un ticket aperto").catch(() => { })
                     return
                 }
                 interaction.guild.channels.create(interaction.user.username, {
                     type: "text",
                     topic: `User ID: ${interaction.user.id}`,
                     parent: "985640877659660338", //per l'id della categoria ,
                     permissionOverwrites: [
                         {
                             id: interaction.guild.id,
                             deny: ["VIEW_CHANNEL"]
                         },
                         {
                             id: interaction.user.id,
                             allow: ["VIEW_CHANNEL"]
                         },
                         { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                             id: "808394107076476959",
                             allow: ["VIEW_CHANNEL"]
                         }
                     ]
                 }).then(canale => {
                     canale.send("Grazie per aver aperto un ticket!Descrivi il tuo problema,lo staff ti aiuterà il prima possibile")
                     let button1 = new Discord.MessageButton()
                     .setLabel("❌Chiudi Ticket")
                     .setCustomId("closeTicket")
                     .setStyle("PRIMARY") //Oppure "DANGER", "SECONDARY", "SUCCESS"
                     
                     let row1 = new Discord.MessageActionRow()
                     .addComponents(button1)
                     canale.send({ components: [row1] })
                 })
             }
         })
         client.on("interactionCreate", interaction => {
             if (!interaction.isButton()) return
         
             if (interaction.customId == "closeTicket") {
                 interaction.reply({ content: "!close"})
             }
         })
         
    }}
