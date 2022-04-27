fx_version "cerulean"
game "gta5"

author "Nevos"
description "Core resource built with TypeScript & React"
version "0.1 Alpha"
url "https://github.com/nevos08/core"

ui_page "ui/dist/index.html"
files {
    "ui/dist/*",
    "ui/dist/**/*"
}

server_script "dist/server/server.js"
client_script "dist/client/client.js"