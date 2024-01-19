import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: String,
  fileType: String
}, {
  timestamps: true,
  versionKey: false
})

const ImageModel = mongoose.model('Image', imageSchema, 'Uploads');

export default ImageModel;