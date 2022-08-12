module.exports ={
    name:"canvas",
    execute(message){
        const { createCanvas, loadImage, registerFont } = require("canvas")
       registerFont("./font/roboto.ttf", { family: "roboto" })
        registerFont("./font/robotoBold.ttf", { family: "robotoBold" })
     client.on("guildMemberAdd", async member => {
    var utente = member.user.username;
 
    let canvas = await createCanvas(1700, 600) 
    let ctx = await canvas.getContext("2d")

   
    let img = await loadImage("./img/backgroud.png")
    ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2) 

    
    ctx.fillStyle = "rgba(0,0,0,0.30)"
    ctx.fillRect(70, 70, canvas.width - 70 - 70, canvas.height - 70 - 70) 

    
    ctx.save()
    ctx.beginPath()
    ctx.arc(150 + 300 / 2, canvas.height / 2, 150, 0, 2 * Math.PI, false) 
    ctx.clip()
    img = await loadImage(member.displayAvatarURL({ format: "png" }))
    ctx.drawImage(img, 150, canvas.height / 2 - 300 / 2, 300, 300)
    ctx.restore()

 
    ctx.fillStyle = "#fff"
    ctx.textBaseline = "middle"

    ctx.font = "80px roboto" 
    ctx.fillText("Benvenuto/a", 500, 200) 

    ctx.font = "100px robotoBold"
    ctx.fillText(utente.slice(0, 25), 500, canvas.height / 2)

    ctx.font = "50px roboto"
    ctx.fillText(`${member.guild.memberCount}° membro`, 500, 400)

   
    let channel = client.channels.cache.get("808393914126041142")

    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.png")

    channel.send({ files: [attachment] })

    member.send("Benvenuto/a nella community di Dogo! Buona permanenza nel server!")


})


    }
    
}






