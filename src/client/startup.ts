import { View } from "./systems/view";
import { SERVER_EVENTS } from "../shared/enums/events";
View.sendMessage({ action: "hello", msg: "world" })

on("onClientResourceStart", () => {
    View.sendMessage({ action: "hello", msg: "world" })
})

const tick = setTick(() => {
    if (NetworkIsSessionStarted()) {
        emitNet(SERVER_EVENTS.PLAYER_JOINED);
        clearTick(tick);
    }   
})