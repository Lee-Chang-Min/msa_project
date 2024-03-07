import express, { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class HealthRoutes {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/notification-health', (_req: Request, res: Response) => {
            res.status(StatusCodes.OK).send('Notification service is healthy and OK.');
        });
    }
}

export default new HealthRoutes().router;