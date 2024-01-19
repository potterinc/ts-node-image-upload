import express, { Router } from 'express';
import Images from '../services/image.service';
import {upload, uploadToCloudinary} from '../middlewares/upload.middleware';


// Initializing router
const imageUploadRouter: Router = express.Router();
const image = new Images();

// Application router
imageUploadRouter.get('/', image.home)
imageUploadRouter.get('/get_image', image.view);
imageUploadRouter.post('/upload', upload, image.upload);

export default imageUploadRouter;