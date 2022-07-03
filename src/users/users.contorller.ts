import { BaseController } from "../common/base.controller";
import { IControllerRoute } from "../common/route.interface";
import { LoggerService } from "../logger/logger.service";
import { Request, Response, NextFunction } from "express";
import { HTTPError } from "../errors/http-error.class";
import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController {
    constructor(
        @inject(TYPES.ILogger) private loggerService: ILogger
    ) {
        super(loggerService);

        this.bindRoutes(this.routes);
    }

    routes: IControllerRoute[] = [
        { path: '/register', method: 'post', func: this.register},
        { path: '/login', method: 'post', func: this.login}
    ];

    login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, "cannot authorize", 'login'));
    }
    
    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }

}