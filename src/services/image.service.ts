import { Request, Response, NextFunction } from 'express';
import ImageModel from '../models/image.model';
import { uploadToCloudinary } from '../middlewares/upload.middleware';

class Images {

  constructor() {this.home }

  //Base route
  async home(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({
      status: true,
      message: 'Welcome to the image upload api. Ensure you read the documentation before using this service'
    })
  }

  // Upload an image
  async upload(req: Request, res: Response) {
    try {
      await uploadToCloudinary(req.file?.path, "image-upload", res);

      const img = new ImageModel({
        url: res.locals.secure_url,
        fileType: res.locals.format
      })

      // Save Image to database
      img.save();
      return res.status(201).json({
        status: true,
        message: "Image uploaded",
        secureUrl: res.locals.secure_url
      })

    } catch (e) {
      return res.status(500).json({
        status: false,
        message: "Oops! something went wrong"
      });
    }
  }


  // Get all images
  async view(req: Request, res: Response) {
    try {
      await ImageModel.find()
        .then(images => {
          return res.status(200).json({
            status: true,
            images
          });
        })
    }
    catch (e: any) {

      res.status(500).json({
        status: false,
        message: e.message
      })
    }
  }
};

export default Images;