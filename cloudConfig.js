const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.ClOUD_NAME,
    api_key:process.env.ClOUD_API_KEY,
    api_secret:process.env.ClOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'staycity_DEV',
      allowedFormats:["png","jpg","jpeg"],
    },
  });

module.exports={cloudinary,storage};