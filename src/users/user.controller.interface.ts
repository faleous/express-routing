import { NextFunction, Request, Response } from "express";
import { IControllerRoute } from "../common/route.interface";


export interface IUserController{
    routes: IControllerRoute[];

    login: (req: Request, res: Response, next: NextFunction) => void;
    register: (req: Request, res: Response, next: NextFunction) => void;
}