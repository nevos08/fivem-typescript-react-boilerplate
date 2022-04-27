import { View } from "./systems/view";
View.sendMessage({ action: "hello", msg: "world" })

on("onClientResourceStart", () => {
    View.sendMessage({ action: "hello", msg: "world" })
})

const tick = setTick(() => {
    if (NetworkIsSessionStarted()) {
        emitNet("core:server:playerJoined");
        clearTick(tick);
    }   
})