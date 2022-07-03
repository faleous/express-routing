import express, { Express } from "express";
import { Server } from 'http';
import { ExceptionFilter } from "./errors/exception.filter";
import { ILogger } from "./logger/logger.interface";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.contorller";

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: ILogger;
    userContorller: UserController;
    exceptionFilter: ExceptionFilter;


    constructor(
        logger: ILogger,
        userController: UserController,
        exceptionFilter: ExceptionFilter
    ) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userContorller = userController;
        this.exceptionFilter = exceptionFilter;
    }

    useRoutes() {
        this.app.use('/users', this.userContorller.router);
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }

    public async initApp() {
        this.useRoutes();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server started on http://loclahost:${this.port}`)
    }
}