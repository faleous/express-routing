import { App } from "./app";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.contorller";


async function bootstrap() {
    const logger = new LoggerService();
    const app = new App(logger, new UserController(logger));
    await app.initApp();
}

bootstrap();