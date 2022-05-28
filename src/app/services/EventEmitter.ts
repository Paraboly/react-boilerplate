import EEmitter from "events";

const EventEmitter = new EEmitter();
EventEmitter.setMaxListeners(50);

export enum EVENT_TOPICS {}

export default EventEmitter;
