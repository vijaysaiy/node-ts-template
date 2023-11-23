import express, { Request, Response } from 'express';
import { globalErrorHandler } from './globalErrorHandler';

const app = express();

app.get('/', async (req: Request, res: Response) => {
    const name = (req.query.name as string) || '';
    res.status(200).send('Welcome to auth service: ' + name);
});

// global error handler; keep this last
app.use(globalErrorHandler);

export default app;
