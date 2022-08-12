 const Discord = require("discord.js")
 global.client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES", "GUILD_VOICE_STATES"]},{ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }
 );

const MongoClient = require("mongodb").MongoClient;
var url ="mongodb+srv://Dogo:Diego126126@cluster0.0ui46.mongodb.net/test"
MongoClient.connect(url , function(err, db){
     var database = db.db("PerDiscord");
     database.collection("collection").insertOne({id:"2317", username:"Dogo", xp:"112", level:"112", cooldown:"212"})
})

const { createCanvas, loadImage, registerFont } = require("canvas")
registerFont("./font/roboto.ttf", { family: "roboto" })
registerFont("./font/robotoBold.ttf", { family: "robotoBold" })

const { DisTube } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const distube = new DisTube(client, {
    youtubeDL: false,
    plugins: [new SpotifyPlugin()],
    leaveOnEmpty: true,
    leaveOnStop: true
})


 client.login("OTg1NjQzODc4MDgwMjA0ODUw.GUGWDs.s8KmqO6i30KU-5ZaHp4Sy5ZBixil1yi7FiCkYk")

client.on("ready",() => {
   console.log ("bot online")
}) 

const fs = require("fs");

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const eventsFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventsFiles) {
    const event = require(`./events/${file}`);
}

client.on("message", message => {
    const prefix = "!";

    if (!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

    var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    if (comando.onlyStaff) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("Non hai il permesso di eseguire questo comando")
            return
        }
    }

    comando.execute(message, args);
})





