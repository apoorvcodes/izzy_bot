// try {
// 	const code = args.join(" ");
// 	let evaled = eval(code);
  
// 	if (typeof evaled !== "string")
// 	  evaled = require("util").inspect(evaled);
  
// 	message.channel.send((evaled), {code:"xl"});
//       } catch (err) {
// 	message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
//       }


import { ICommand } from 'wokcommands'

export default {
  category: 'util',
  description: 'evals the code', // Required for slash commands
  
  slash: 'both', // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  ownerOnly:true,
  callback: ({ message, args }) => {
 try {
	const code = args.join(" ");
	let evaled = eval(code);
  
	if (typeof evaled !== "string")
	  evaled = require("util").inspect(evaled);
  
	message.channel.send((evaled), {code:"xl"});
      } catch (err) {
	message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
      }

  },
} as ICommand