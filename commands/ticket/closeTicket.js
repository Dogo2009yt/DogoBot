module.exports ={
    name:"comando",
    execute(message){
        client.on("messageCreate", message => {
            if (message.content == "!close") {
                let topic = message.channel.topic;
                if (!topic) {
                    message.channel.send("Non puoi utilizzare questo comando qui");
                    return
                }
                if (topic.startsWith("User ID:")) {
                    let idUtente = topic.slice(9);
                    if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                        message.channel.delete();
                    }
                }
                
            }
        })
    }}