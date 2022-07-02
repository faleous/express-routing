import { BaseController } from "../common/base.controller";
import { IControllerRoute } from "../common/route.interface";
import { LoggerService } from "../logger/logger.service";
import { Request, Response, NextFunction } from "express";

export class UserController extends BaseController {
    constructor(
        logger: LoggerService
    ) {
        super(logger);

        this.bindRoutes(this.routes);
    }

    routes: IControllerRoute[] = [
        { path: '/register', method: 'post', func: this.register},
        { path: '/login', method: 'post', func: this.login}
    ];

    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'login');
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }

}