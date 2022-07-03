import { App } from "./app";
import { ExceptionFilter } from "./errors/exception.filter";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.contorller";


async function bootstrap() {
    const logger = new LoggerService();
    const app = new App(
        logger,
        new UserController(logger),
        new ExceptionFilter(logger)
    );
    await app.initApp();
}

bootstrap();