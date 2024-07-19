const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_54_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIml0TkltTVgrTFZqSHREa3ExWFFhSDJ1U25meGl6L2xZMjU1eVJtZU1BT3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzODYyNzE3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMURGNjI2MDMwRkQxNkVBQzczOUVDNjkxNTA4RTEzMzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzQ2ODgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRpUEJRamZLU0p1Nmd5TWg4MVpaZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDBlYTg1OWEtY2RiZS00MTllLThjNjMtZDc0MWUzMDM0MzgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEwMyxcbiAgICAgIDEzMixcbiAgICAgIDU0LFxuICAgICAgMTM2LFxuICAgICAgMTQyLFxuICAgICAgMTAyLFxuICAgICAgNTgsXG4gICAgICAxMDQsXG4gICAgICA4MyxcbiAgICAgIDEzNCxcbiAgICAgIDgzLFxuICAgICAgMjE2LFxuICAgICAgMjksXG4gICAgICA1MyxcbiAgICAgIDE2MSxcbiAgICAgIDk4LFxuICAgICAgMTUzLFxuICAgICAgMTg5LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICA4MCxcbiAgICAgIDYyLFxuICAgICAgMTE0LFxuICAgICAgMTQwLFxuICAgICAgMzIsXG4gICAgICAxMzMsXG4gICAgICAyNDksXG4gICAgICAyNTMsXG4gICAgICAxOTUsXG4gICAgICAyMDUsXG4gICAgICAxMjIsXG4gICAgICAyMjUsXG4gICAgICA4MSxcbiAgICAgIDE0LFxuICAgICAgNTUsXG4gICAgICA5NCxcbiAgICAgIDU2LFxuICAgICAgMTg0LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNaMTdCWkFEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4NjI3MTczOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzODc3ODIyMTQ4ODYwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXVkaXJjSEVMalc1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqL0JYYmMyUmIvaE5taUdLamRmQmJKUitFa2hUbG9CM2pWZktya0p5VVRvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNmbEdBSlJJdDJhUG9kclZlOFp0eTFNNjMwN0VUZzNWdXlCLzYvam5vNk1LZEJFcHJqNms0LzMzRERxcXpZTGhYMnpvV2FrWUlEVHhOdEN1cjNiY0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk04ZTM1RGc0ZHhOdXlnazl5cHd2a3Iwam80Ty9HMW1jMmhMSG85a0d0OHk5dzlDVnpSVWFhakxPdmplSFZxalRYNTR6WjFYZzBGRG4vSjJIRVlYYUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg2MjcxNzM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzQ2ODc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2dRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZ1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEYVI1cU5hYjZkNW5nT0publJFVy93Y3g1ZUUvcCs1bDFsWSs1MnpOTFRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTQ1NTkxNzgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
