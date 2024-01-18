import express, { Application} from 'express';
import { configDotenv } from 'dotenv';
import imageUploadRouter from './routes/image.route';
import AppConfig from './config/app.config';
import ('./config/server.config');

if (process.env.NODE_ENV !== 'production')
  configDotenv();

const app: Application = express();

// Initializing app
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/', imageUploadRouter);

app.listen(AppConfig.server.port, () => console.log(`server running on port: ${AppConfig.server.port}`));