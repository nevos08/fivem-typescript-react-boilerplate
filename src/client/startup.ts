import { View } from "./systems/view";
View.sendMessage({ action: "hello", msg: "world" })

on("onClientResourceStart", () => {
    View.sendMessage({ action: "hello", msg: "world" })
})

console.log("Hello from TypeScript");