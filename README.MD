# Izzy Bot

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/847334009838632980/892632184509321286/images_1.png" alt="react+tailwind">
</p>


 # Cloning💻

 ```bash
 git clone https://github.com/apoorvcodes/react-tailwind-starter/
 
 cd project-path
 
 yarn dev
 
 ```
 # Setup
 ## Change izzy.example.ts to izzy.config.ts 
 ```js
export const token:string = "TOKEN"
export const ownerID:number| string = "OWNER_ID"
export const prefix = "PREFIX"
export const testServer:string = "TEST_SERVER_ID"
//add ur credentials
```
 # Custimization 
 
 ## base command setup
 ```js
 import { ICommand } from 'wokcommands'

export default {
  category: 'Testing', //type of command
  description: 'Replies with pong', // Required for slash commands
  
  slash: 'both', // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds
  
  callback: ({ message, interaction, client, args }) => {
    //Ur code
  },
} as ICommand
```


<p align="center">

  <img src="https://cdn.discordapp.com/attachments/783903973878136843/883587565867925514/download-removebg-preview.png" alt="happy coding">
</p>
