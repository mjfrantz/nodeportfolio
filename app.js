const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const portfolioRouter = require("./routes/portfolioRoutes");

const app = express();

app.use(express.json());

app.use(cors());

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("Hello from Middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// MULTER

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  }
});

app.post("/upload", (req, res, next) => {
  const upload = multer({ storage }).single("image");
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    }
    console.log("file uploaded to server");
    console.log(req.file);

    // SEND FILE TO CLOUDINARY
    const cloudinary = require("cloudinary").v2;

    cloudinary.config({
      cloud_name: "dyx7cgqqy",
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const { path } = req.file;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(
      path,
      { public_id: `portfolio/${uniqueFilename}`, tags: `portfolio` }, // directory and tags are optional
      function(err, image) {
        if (err) return res.send(err);
        console.log("file uploaded to Cloudinary");
        // remove file from server
        const fs = require("fs");
        fs.unlinkSync(path);
        // return image details
        res.json(image);
      }
    );
  });
});
//Mounting the Router
app.use("/api/v1/portfolios", portfolioRouter);

module.exports = app;
