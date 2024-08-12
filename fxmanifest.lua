fx_version "cerulean"
game "gta5"
lua54 "yes"

author "Nevos"
description "Boilerplate for FiveM resources with TypeScript and React"
version "0.1 Alpha"

ui_page "web/dist/index.html"
-- ui_page "http://localhost:5173" -- Use this in development only
files {
    "web/dist/*",
    "web/dist/**/*",
}

client_script "dist/client.js"
server_script "dist/server.js"
