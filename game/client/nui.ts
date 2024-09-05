export function onNui<T = any>(eventName: string, cb: (data: T, cb: any) => void) {
  RegisterNuiCallbackType(eventName)
  on(`__cfx_nui:${eventName}`, cb)
}

export function emitNui<T = any>(eventName: string, data: T) {
  SendNuiMessage(JSON.stringify({ action: eventName, data }))
}
