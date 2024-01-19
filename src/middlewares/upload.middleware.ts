import { v2 as cloudinary } from 'cloudinary';
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import {configDotenv} from 'dotenv';

configDotenv()

// Initialize cloudinary API
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.CLOUD_API_SECRET,
  api_key: process.env.CLOUD_API_KEY,
  secure: true
});

// initialize Multer file upload processor
const storage = multer.diskStorage({});
export const upload = multer({
  storage,
  // fileFilter(_req, file, cb) {
  //   checkFileType(file, cb);
  // },
}).single('file');

// //Checking file type
// function checkFileType(file:any, cb:any) {

//   // Allowed extensions
//   const filetypes = /jpeg|jpg|png|gif/;

//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }
// Upload file
export const uploadToCloudinary = (filePath: any, folder: string, res: Response) => {
  return cloudinary.uploader.upload(filePath, { folder })
    .then((data) => {
      res.locals = data;
      console.log(data)
      return data;
    })
    .catch((err: any) => {
      console.log(err.message);
      return;
    });
}
