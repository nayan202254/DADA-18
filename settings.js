
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pTNFFseFl4L0ZzNnhEMFYzemF5ZUt2dlpFeUJnbFRzVnVrVlNjTE5GUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1gwOFV0dGl4dFEyMzhhZ0l1Ujl0STB4YlUxSlJaS0JpZUQ1MzBSTThDRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTW9sNHpWNHd6c0RCMGhhRDZTczI2OWhQczdidzMvSmU5N3dyZ1p3cG1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrcDRwY0t6d3VndUNvUnI0RzBZQjVabytYb0lUTStZSmRIQWFSQzdteDBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFVGpVdEFPUldEZ21iNy9aZldSUVpVQkxZME5YR3lab09SUnlNNmFoR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBFSzc5Q2NLTXdwekszNmx5UWlGcnhLSHpkNFd3NjhzL3NYUkNhUVZQaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0I2WkxHcVQxYjhZSGJqSDhvdFlVM1V3QVpnZHYxdkxNWENHRzBrWlFGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkVXT28yQU1VakZuUWJlbFB0d0VYc1JoRjJxQWIvL2oyRWZWQlhwSWFqWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlKMTJncnBjeTI5QmVwZU81eW0zNEVqeGZxYXJGM3dKaC9hMnBtVFE5S2I3eFFYWllCMmdOSWZaaGNTK1gySm84ZGpvYk9BOXRWR3pPVC9pTjNwa0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiIxR1JjY1ZRUzFtcXlyTzh3RzAzZkt2SU5WRDRBWmRWOVROVXVDQThJNkdVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTZkRxckdqLVRrVzdKS2FCTGJvZlBBIiwicGhvbmVJZCI6Ijc0MjM0ZmQ3LTI0ODktNDM5Ny04ZjFhLWUwMTAzNDgxMWEwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5elVNNys2dlV2UEVpVmprYkZnOVN5WDczYnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRks0NlJIYXQ0T0dSVG9vbGpsa2F4QnN4QWVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiI5MTkwNTE5NjY5Mzg6NjBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1OTcxMzU4NDY2MDY2NTo2MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05qamxITVF0SVhteFFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1UdlRCSHhUVFpwd1hMaVA0R3RyMndzVThCT0tpbk1UZ2FGbHIwc1p6QXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJYaGNaR2xRc3QyWW9RSm1wL3hCVWpzTXprUlRUU2s4WVJZVTQvVC9lWDBITzZld0xSdVYxUS9EVEVab3VjUFNPVmt6eHprZ3h6ZW1KcllobjBvY0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiVisxRlhGYjc2cEtCcGd3MzdERTNmUzhOS3BIek4zTDNWbXdoWDF1NDRQMTI4cTY2VGl0NlJUck9zMzBudElSc29ZYUd4NEF6RDJFaWNLaUJBekNEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTA1MTk2NjkzODo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJURTcwd1I4VTAyYWNGeTRqK0JyYTlzTEZQQVRpb3B6RTRHaFphOUxHY3dNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5ODgwOTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmZTIn0=",
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
