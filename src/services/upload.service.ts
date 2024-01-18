import { Request, Response } from 'express';

class Images {

  constructor() { };

  // Upload an image
  upload = (req: Request, res: Response)=> {
    try {
      res.status(201).json({
        status: true,
        message: 'File uploaded successul'
      })
    } catch (e) {
      throw new Error('')
    }

  }

  // Get all images
  view = (req: Request, res: Response)=> {
     res.status(200).json({
        status: true,
        message: 'OK'
      })
  }
};

export default Images;