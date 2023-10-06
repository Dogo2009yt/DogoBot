 const Discord = require("discord.js")
 global.client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES", "GUILD_VOICE_STATES"]},{ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }
 );


const { createCanvas, loadImage, registerFont } = require("canvas")
registerFont("./font/roboto.ttf", { family: "roboto" })
registerFont("./font/robotoBold.ttf", { family: "robotoBold" })

const { DisTube } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
global.distube = new DisTube(client, {
    youtubeDL: false,
    plugins: [new SpotifyPlugin()],
    leaveOnEmpty: true,
    leaveOnStop: true
})


 client.login(TOKEN)

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





