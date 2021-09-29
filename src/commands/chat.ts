import { ICommand } from 'wokcommands'
import  {chatBot} from "reconlx"
export default {
  category: 'fun',
  description: 'Replies with ml based replies', // Required for slash commands
  
  slash: false, // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  
  callback: ({ message , args }) => {
    chatBot(message, args.join(" "))

}} as ICommand