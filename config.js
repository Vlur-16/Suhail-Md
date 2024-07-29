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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_34_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRVY0JURFhydUFqRXBjaHFvTUlvbFhrYXgyamU4KzZtSjNoVStJMlFUSFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlF1U2dJWHlTUUpPaG02Q3lBLThqM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjVhZjk3MjQtMjI4Ny00YWMwLWI0MzAtMzgyOWM4ZmY3ZDc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDk5LFxuICAgICAgNDIsXG4gICAgICAyMTAsXG4gICAgICAyNSxcbiAgICAgIDIyMixcbiAgICAgIDIxNSxcbiAgICAgIDkzLFxuICAgICAgMTg4LFxuICAgICAgMTk3LFxuICAgICAgOTQsXG4gICAgICAyMzQsXG4gICAgICAxMDQsXG4gICAgICAyNCxcbiAgICAgIDM2LFxuICAgICAgMTQ4LFxuICAgICAgMTA5LFxuICAgICAgMjAxLFxuICAgICAgMTYwLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMjE1LFxuICAgICAgMjM4LFxuICAgICAgMjI3LFxuICAgICAgMTMzLFxuICAgICAgMTA0LFxuICAgICAgMjIzLFxuICAgICAgMjMwLFxuICAgICAgMzgsXG4gICAgICAzNixcbiAgICAgIDIyNixcbiAgICAgIDk3LFxuICAgICAgMTY5LFxuICAgICAgMjM1LFxuICAgICAgMTU2LFxuICAgICAgMTgyLFxuICAgICAgMTUxLFxuICAgICAgMjEzLFxuICAgICAgNjcsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUFhHNFlLNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzODYyNzE3MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDM4Nzc4MjIxNDg4NjA6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTk9kaXJjSEVMaVluclVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqL0JYYmMyUmIvaE5taUdLamRmQmJKUitFa2hUbG9CM2pWZktya0p5VVRvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImphSHlJN0dBWUtJMFcrazgvVmQ2c0cyYUYxY2laUWJDTS9BTlFGQW1UOExvZ01pT1RBdkVIekVOWnRZLytVMytxWEppUUZRRDdiNTR4NzNUYmwrckRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVNZ0pSc2xBRndZajRQRHhwNlUyQmw1ak5PbGNsdTFwKytoSzhhSmp2WUhHNmNNbHdpUDBEUHdHc2R6Q2NZbDNZS3l6L0E2Zm5FRlF5K2hUQU9PN0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg2MjcxNzM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI1NjQ0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFhNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWE2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiajl3aGFFOHhjRGdydkNiVEVOWE93TDIvUzlnSDdQRnptK1czWHV1dE5WTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk0NTU5MTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNTYxNjM5MDNcIn0iCn0=" // PUT your SESSION_ID 


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
