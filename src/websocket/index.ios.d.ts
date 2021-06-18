import { HttpRequestOptions } from "@nativescript/core/http";
import { IWebsocketConnection, WebsocketCallbacks } from "./websocket.common";
export type { IWebsocketConnection, WebsocketCallbacks } from "./websocket.common";
export declare class WebsocketConnection implements IWebsocketConnection {
    private nativeConnection;
    constructor(nativeConnection: SRWebSocket);
    queueSize(): number;
    send(text: string): void;
    sendBinary(bytes: ArrayBuffer): void;
    close(code: number, reason: string): void;
    cancel(): void;
}
export declare function newWebsocketConnection(options: HttpRequestOptions, callbacks: WebsocketCallbacks): Promise<IWebsocketConnection>;
