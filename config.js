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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_50_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZFZWemxDWmUzUUxqakNjUU9iZjZIYlUrV2lXVHJ4QnpjYVdWdHN4T0JuZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0JuQ2FpVkVRY2lzcTdqV2xOV3R2d1wiLFxuICBcInBob25lSWRcIjogXCJlZTg3MTRmMi1kZWQ2LTRjMDEtODc3Ny0zYzBlMjZmMWI1ZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTk5LFxuICAgICAgMTQxLFxuICAgICAgMjQwLFxuICAgICAgNjksXG4gICAgICAzMyxcbiAgICAgIDIyMyxcbiAgICAgIDE3NCxcbiAgICAgIDQzLFxuICAgICAgMjUwLFxuICAgICAgMzEsXG4gICAgICAzNixcbiAgICAgIDE4NSxcbiAgICAgIDkxLFxuICAgICAgMjAxLFxuICAgICAgMjcsXG4gICAgICA1NixcbiAgICAgIDgyLFxuICAgICAgNDIsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICA5NyxcbiAgICAgIDc0LFxuICAgICAgMTIsXG4gICAgICAxNDQsXG4gICAgICAyMjMsXG4gICAgICAxMzgsXG4gICAgICAxNzcsXG4gICAgICA1MixcbiAgICAgIDM1LFxuICAgICAgNSxcbiAgICAgIDEyNixcbiAgICAgIDIwLFxuICAgICAgNDcsXG4gICAgICAyOSxcbiAgICAgIDEzOSxcbiAgICAgIDE5LFxuICAgICAgMTE0LFxuICAgICAgMTU2LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUFONDdNMTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzg2MjcxNzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDM4Nzc4MjIxNDg4NjA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcWRpcmNIRUtxNDVyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImovQlhiYzJSYi9oTm1pR0tqZGZCYkpSK0VraFRsb0IzalZmS3JrSnlVVG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2JVbjFkRVc2MGZwTWpPSFNvYW1YME91K1U1cnVNZGRxT1I3OFFkbStmeGo5UnhOdjdzWjlXWmF2MGllek1iUUYxVmdDZGpoNmtPcklhOEZ6eEdlRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidnhBclBwNGJIaXExMGhicU15ZVc3WWZyemFDOGhXKzZnSUxKRFBtYS94MW9wZ1BYeDVORmNiQURObUFpc1RTdlluQmVZOHZaUHFjR2RXTGpqdzMxQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzODYyNzE3MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNDMwMjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZ1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtnUC5qc29uIjogIntcImtleURhdGFcIjpcIjcxcFlmYzBtNjhxeU9RcHBVTkFORjdwNTNacEFBS0Vrd2Z0VmdMWEw3cGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5NDU1OTE3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzQzMDI4MTUzXCJ9Igp9"  // PUT your SESSION_ID 


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
