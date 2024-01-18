import express, { Router } from 'express';
import Images from '../services/upload.service';

// Initializing router
const imageUploadRouter: Router = express.Router();
const image = new Images();

// Application router
imageUploadRouter.get('/get_image', image.view);
imageUploadRouter.post('/upload', image.upload);

export default imageUploadRouter;