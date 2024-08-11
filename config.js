//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_09_32_08_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtodnRLa3k3c1ZBTmFkZWRFQXI3cTRaQkN5cEp3UVAveElCNDlsRTRQaE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkxRDBGMzg5NkEyNzc4RjQ2N0M5M0M5OTE5NDY3OEI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzM2ODcyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY2OTgwNTUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDREM2ODk0NTE4OTIzQTI0QTkwQUFFMEI4NjY0MUJCQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMzNjg3MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2Njk4MDU1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDYyQjIxNzgyN0FFMEJGMTRENkM1ODZEMTBGM0Q4OTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMzY4NzIzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBQTM2OUU0NEMyN0JBNDk3RjFFNTZDNTIwNUZBNzZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzM2ODcyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6ZkxGUU9fbFFLQzhQTmJ0VTloV0l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3NDNkYWViLWNlNzctNGY1MS04NDEwLWQ5NjM0OGE2MTUzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyNDgsXG4gICAgICAyMjIsXG4gICAgICAyNixcbiAgICAgIDE4LFxuICAgICAgMTMxLFxuICAgICAgMzEsXG4gICAgICAxNDAsXG4gICAgICAyMjIsXG4gICAgICAxNTIsXG4gICAgICAxNDYsXG4gICAgICAxNjIsXG4gICAgICAxOTAsXG4gICAgICAxMDIsXG4gICAgICAxNDEsXG4gICAgICA0LFxuICAgICAgMTM5LFxuICAgICAgMTk0LFxuICAgICAgMTI2LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDIwOCxcbiAgICAgIDg0LFxuICAgICAgMjE0LFxuICAgICAgMTIwLFxuICAgICAgMTM4LFxuICAgICAgMjI2LFxuICAgICAgODQsXG4gICAgICAxMzcsXG4gICAgICAxNDMsXG4gICAgICA5NSxcbiAgICAgIDQ2LFxuICAgICAgMTg3LFxuICAgICAgODIsXG4gICAgICAxNjMsXG4gICAgICAxOTYsXG4gICAgICAyNTAsXG4gICAgICA3MCxcbiAgICAgIDczLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktZSkdTTDhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2Njk4MDU1MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2ODE2NzIzMTA4MDk1OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIktBVklcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYUF6ajBRaW9yaXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhwMWRIRFdVTkRsY3ptazA1MDRzbGdGMGNKbXdnemI0RGJaSk1iRno3QTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM21iYVF4bHAwNGNQK3ExdUZjY0gvM1Z3cmFiNG8zYjNJUFBCaGFzdHV0YUhuQ0dkNDNkRVlJSVZXUzVxR3kwM1dqM3RaUjh2WEVnVzBYdy9udVVFQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSklDTTV1T0JnK1pEenR4bXNYMW9pWVM3YnBWV0p5a1BJQzFia0IySWJoWVBHUG85a3ZuWVhvaktQaEljYTVDN0FMUmtDTUdmTEhnaFVMRisvK0F2REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjY5ODA1NTM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzM2ODcxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5zZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnNmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQVdzUUg3d1dUMCtGWDlUTFRLbGFvaWdGcG8wdGdEWkVpYXNVTm9CWjAzaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkyMDQyOTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzM2ODcyMDMxNFwifSIKfQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225,94757660788,94778668193,94785274495";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "ture";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
