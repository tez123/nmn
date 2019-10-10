const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("611698482759073804")
setInterval(function() {
channel.send(`حب سكنر ♥ ☠`);
}, 30)
})

client.login(process.env.BOT_TOKEN);