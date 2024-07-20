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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_31_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxoYlc5OU9Vd20xUXFPV0ZyQjZ0UkZUTjlMeDBqR29zVWN5L09iNEVRVWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJPWGxNd0RWVHk2cnBkMVBNZlVlRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2QwYmNjNDQtN2IzMi00ZjFlLWIzYWMtNzMyOWZjYTM3MTBkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDg0LFxuICAgICAgMjQwLFxuICAgICAgNzYsXG4gICAgICAxNzQsXG4gICAgICAxMjksXG4gICAgICAxMjgsXG4gICAgICAyMzAsXG4gICAgICA3OSxcbiAgICAgIDIxOCxcbiAgICAgIDQ4LFxuICAgICAgMTA4LFxuICAgICAgMTU1LFxuICAgICAgMTUyLFxuICAgICAgMTgwLFxuICAgICAgMjI1LFxuICAgICAgMTY3LFxuICAgICAgOTAsXG4gICAgICAxMjksXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDY4LFxuICAgICAgNTYsXG4gICAgICAxNTcsXG4gICAgICA2NCxcbiAgICAgIDY1LFxuICAgICAgMjIxLFxuICAgICAgMjA1LFxuICAgICAgMTgsXG4gICAgICA4MyxcbiAgICAgIDE4OSxcbiAgICAgIDEsXG4gICAgICAxMjUsXG4gICAgICAyMTEsXG4gICAgICAxODMsXG4gICAgICA3MixcbiAgICAgIDE5NCxcbiAgICAgIDIxNixcbiAgICAgIDIyOCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRRWTRGN1NTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4NjI3MTczOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzODc3ODIyMTQ4ODYwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXlkaXJjSEVNak03N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqL0JYYmMyUmIvaE5taUdLamRmQmJKUitFa2hUbG9CM2pWZktya0p5VVRvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdGMU5CSTV6NzJSVm01ODlCc1Z1Q1haVW5PZ1VGcTZFeGJFUThJT0ZTNEFwZlF5UE9xLzBKeHVuSnJ2S3lqWHBaa0ZUMUlpWEV3NEJ2dWswSkJUdEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIncyY0Y4b1IrS3hkbTlMbGZIV3hadXVKbVg3MlhqbmRCNWhKYW5VanNTNmVMSWxKcHhzSHdXeDQ5UWlkLzdhU1Q3dnRKLzRaekE0bDBreU13TkUyeGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg2MjcxNzM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDkzMDY4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" // PUT your SESSION_ID 


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
