let _registeredEvents: string[] = [];

export class View {
    static sendMessage(data) {
        SendNuiMessage(JSON.stringify(data));
    }

    static registerCallback(eventName, callback) {
        const index = _registeredEvents.findIndex(event => event === eventName);
        if (index <= 0) {
            RegisterNuiCallbackType(eventName);
            _registeredEvents.push(eventName);
        }
        on(`__cfx_nui:${eventName}`, callback);
    }
}