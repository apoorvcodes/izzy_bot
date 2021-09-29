import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: 'Replies with pong', // Required for slash commands
  
  slash: 'both', // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  
  callback: ({ message, interaction, client }) => {
    const reply = 'Pong!'

    if (message) {
      message.reply({
        content: `My ping is ${client.ws.ping}`
      })
      return
    }

    interaction.reply({
	content: `My ping is ${client.ws.ping}`
    })

    return {
      content: reply
    }
  },
} as ICommand