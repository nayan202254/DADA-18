
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0IyRDgwM3ZpaVNoQ2VRNGw5NEVFQ0dRMEVqL3UxUkpzYVhLeG13QVBFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnprZnpqNUJleVNmVGh2VmZKY3RYMmp3L24yd3hNWEptamlDS0VpTUswMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQUsraGFZZjNVQXJjODlvSklmUmJ3eEEwTWFDNDBXbFhLL0xxT2hlYkZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZEpQTDEvOXNHR1crME84WWhWck12NFJjZjV2d2orUHQxSkhXbWNhb3ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBSUtRV2tjTmxPejVwY0pMdWluOUZiNXJJaGg3T0lud0V0NUZBN0Vqa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh0RytGdXgwQ0M2QzVNaTcwVEt6dU1Ha0pqL0Z2bVBMQjFwK0xEWFZyV1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tiQ2h5UzlUZWNoTzlMUUFENHh0dFpLemNZWS8xaElqb3ZIaEFSS2wxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTV4dXV5MkYrSDk4Nzlrb09kRUsralk5QXZ5V09mRHNKTjZUa1hBcGpYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM2N0JZcjN1VWJOSDYzMjdZTlVBWURXOHZUQ2hLbkpzc0Z0K2ExQXNqNE9YQW1sTGJlSjdhUDlnWE55Vmt6dXgrOGx1TGptT0liYlQxN25QTEFxakRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiI4YjBQMUZORkwxYkdHSWpQQmNDRnJpQk91bGtLWGRSUHZaeDJ5dmY3V1JVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJETlNaME5kQVRTdTBnWHlndmgwSG5BIiwicGhvbmVJZCI6ImNjNThhOWIwLTY2MjAtNDU2YS04NzYzLTQ4NGZkMDc3MjM0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VHlIQ2E1a2dYaU1SVCtWMXVVakE2NlhDa2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tRZE8yU25yUVBnZ2pweWtzU0lvaC9QMGNzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiI5MTkwNTE5NjY5Mzg6NDlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1OTcxMzU4NDY2MDY2NTo0OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IamxITVFpcS9meFFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1UdlRCSHhUVFpwd1hMaVA0R3RyMndzVThCT0tpbk1UZ2FGbHIwc1p6QXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdEamZEN2prWDdaL25ncFdwVFRjdHZIRC9MSFRVdGpUSDcrRFprQm1LWjg3YUZOVWNad2VPbEJxaWtydHdPdlV2OGl0MFd0cTFlbTJpM2E0b3BRbkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkZzVjVmlzWGlYWkxveHRrN2NQRnM2UjVCRXcyRTdHb2szZi9VUTRYMksvMGhYT1NDek1pRmhjazRLL0c5OFVIT1I2ems1Y3ovQU8reU05bW1CdkpBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTA1MTk2NjkzODo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJURTcwd1I4VTAyYWNGeTRqK0JyYTlzTEZQQVRpb3B6RTRHaFphOUxHY3dNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY4Nzg3NDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUER3In0=",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*💋*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "NAYAN",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "919051966938",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "dada",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By NAYAN DADA_18*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
