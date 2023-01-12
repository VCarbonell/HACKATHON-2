const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


 function uploadPic() { upload.single("car"), (req, res, next) => {
  const { originalname } = req.file;
	const { filename } = req.file;
	fs
		.rename(`uploads/${filename}`, `uploads/${originalname}`, (err) => {
			if (err) throw err;
		});
    return next();
    
}
}

module.exports = uploadPic;