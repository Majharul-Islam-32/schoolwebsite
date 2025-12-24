const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpg|jpeg|png|pdf|mp4|webm|ogg|mov|avi|mkv|wmv/;
  // Allowed mimetypes (video/.* covers all video types)
  const mimetypes = /image\/.*|application\/pdf|video\/.*|application\/octet-stream/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Unsupported file type! Allowed: Images, PDFs, Videos'));
  }
}

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;
