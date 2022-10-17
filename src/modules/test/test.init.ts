import eventEmitter, { EVENT_TOPICS } from "@services/EventEmitter.service";
import TestModuleRoutes from "./test.route";

const ptInit = (): void => {
  eventEmitter.emit(EVENT_TOPICS.MODULE_INJECTED, TestModuleRoutes);
};

export default ptInit;
