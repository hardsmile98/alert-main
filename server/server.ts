import express, { Request, Response } from 'express';
import cors from 'cors';
import endpoints from './endpoints';

interface IEndpoint {
  path: string
  method?: string
  data?: string
}

const app: any = express();

const corsOptions = {
  credentials: true,
  origin: true,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 8000;

endpoints.forEach((endpoint: IEndpoint) => {
  app[endpoint?.method || 'get'](endpoint.path, async (req: Request, res: Response) => {
    const { data } = endpoint;
    const json = data && await import(`./data/${data}`);
    const resultData = json ? json.default : {};

    setTimeout(() => res.send(resultData), 1000);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
