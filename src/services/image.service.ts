import { Request, Response } from 'express';
import ImageModel from '../models/image.model';
import { uploadToCloudinary } from '../middlewares/upload.middleware';

class Images {

  constructor() { };

  // Upload an image
  async upload(req: Request, res: Response) {
    try {
      await uploadToCloudinary(req.file?.path, "image-upload", res);

      const img = new ImageModel({
        url: res.locals.secure_url,
        fileType: res.locals.format
      })

      img.save();
      return res.status(201).json({
        status: true,
        message: "Image uploaded",
        secureUrl:res.locals.secure_url
      })

    } catch (e) {
      return res.status(500).json({
        status:false,
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
    catch (e:any) {

      res.status(500).json({
        status: false,
        message: e.message
      })
    }
  }
};

export default Images;