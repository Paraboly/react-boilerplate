import EEmitter from "events";

const EventEmitter = new EEmitter();
EventEmitter.setMaxListeners(50);

export enum EVENT_TOPICS {
  MODULE_INJECTED = "MODULE_INJECTED"
}

export default EventEmitter;
