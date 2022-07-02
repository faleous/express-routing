import express, { Express } from "express";
import { Server } from 'http';
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.contorller";

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;
    userContorller: UserController;


    constructor(
        logger: LoggerService,
        userController: UserController
    ) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userContorller = userController;
    }

    useRoutes() {
        this.app.use('/users', this.userContorller.router);
    }

    public async initApp() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server started on http://loclahost:${this.port}`)
    }
}