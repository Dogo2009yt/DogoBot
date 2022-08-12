module.exports ={
    name:"kick",
    execute(message){
        client.on("messageCreate", message => {
            if (message.content.startsWith("!kick")) {
                
                var utentekick = message.mentions.members.first();
        
                if(!message.member.permissions.has("KICK_MEMBERS")){
                   message.channel.send("Non hai il permesso")
                   return;
                }
                if(!utentekick){
                    message.channel.send("Non hai menzionato nessun utente!")
                    return;
                }
                if(!utentekick.kickable){
                   message.channel.send("Non ho il permesso")
        
                }
                utentekick.kick()
                .then(() => {
                    let kick  = new Discord.MessageEmbed()
                        .setTitle(`${utentekick.user.username} kiccato`)
                        .setDescription(`Utente kiccato da ${message.author.toString()}`)
                        message.channel.send({ embeds: [kick] })
                })  
                
         
            }
         })
    }}
