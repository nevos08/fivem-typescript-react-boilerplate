# FiveM TypeScript React Boilerplate

This boilerplate should give you an easy start developing your FiveM scripts with TypeScript & React.

## General

### Usage

Make sure to install all the dependencies inside the root and the "web" folder. The project is built with pnpm, so I recommend using this as well. If you want to use another package manager you need to make some changes. I will give no support for this.

### Shared

Inside the "game" folder you will find a "shared" folder. You can import everything that is in there to your React Application as well.

## NUI

I prepared some functions for you to make developing your NUI pages easier.

- game/client/nui.ts contains to functions to emit an event and to listen to NUI events.
- web/src/utils/fetchNui contains a function to emit an event to the client.
- web/src/hooks/useNuiEvent contains a function to listen for NUI events. It doesnt need to be used inside "useEffect".

### shadcn-ui

This branch already has shadcn-ui installed for you. Take a look at their [documentation](https://ui.shadcn.com/docs)
