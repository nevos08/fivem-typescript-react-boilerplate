name 'nvx_multicharacter'
version '1.0.0'
license 'ISC'
fx_version 'cerulean'
game 'gta5'
lua54 'yes'
node_version '22'
ui_page 'web/dist/index.html'

files {
	'static/config.json',
}

dependencies {
	'/server:13068',
	'/onesync',
}

client_scripts {
	'dist/client.js',
}

server_scripts {
	'dist/server.js',
}
