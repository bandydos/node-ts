import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const port: number = 3001;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'TS setup!',
    });
});


app.listen(port, () => console.log(`Listening on ${port}.`));