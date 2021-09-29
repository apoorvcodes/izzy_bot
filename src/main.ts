import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import {token, prefix, ownerID , testServer} from "../izzy.config"
const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    testServers: testServer,
    typeScript: true,
  })
  .setDefaultPrefix(prefix) 
  .setBotOwner(ownerID)

})

client.login(token)