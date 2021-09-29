  
//       if (!message.member.permissions.has("MANAGE_MESSAGES"))
//       return message.channel.send("You do not have enough permissions!");
//       let user =
//       message.mentions.members.first() ||
//       client.members.cache.get(args[0]);
//       if (!user)
//       return message.channel.send(
//         `You did not mention a user, or you gave an invalid id`
//       );
 
//       if (!args.slice(1).join(" "))
//       return message.channel.send("You did not specify your message");
//       user.user
//       .send(`${args.slice(1).join(" ")}`)
//       .catch(() => message.channel.send("That user could not be DMed!"))
//       .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: 'Replies with pong', // Required for slash commands
  
  slash: 'both', // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  
  callback: ({ message, client }) => {
	

	if (!message.member.permissions.has("MANAGE_MESSAGES"))
	return message.channel.send("You do not have enough permissions!");
	let user =
	message.mentions.members.first() ||
	client.members.cache.get(args[0]);
	if (!user)
	return message.channel.send(
	  `You did not mention a user, or you gave an invalid id`
	);
   
	if (!args.slice(1).join(" "))
	return message.channel.send("You did not specify your message");
	user.user
	.send(`${args.slice(1).join(" ")}`)
	.catch(() => message.channel.send("That user could not be DMed!"))
	.then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
	    
	

  },
} as ICommand