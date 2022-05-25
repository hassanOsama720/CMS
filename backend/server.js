//***************************requires********************* */
require("dotenv").config();
//call Express
const express = require("express");
// getting body parser
const body_parser = require("body-parser");
// getting morgan
const morgan = require("morgan");
//getting mongoose
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

//image vars
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(path.join(__dirname, "images"));
    cb(null, path.join(__dirname, "images"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toLocaleDateString().replace(/\//g, "-") +
        "-" +
        file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/png"
  )
    cb(null, true);
  else cb(null, false);
};

//import Patient
const patientRouter = require("./routes/patientRouter");
const clinicRouter = require("./routes/clinicRouter");
const testRouter = require("./routes/testRouter");
const doctorRouter = require("./routes/doctorRouter");
const medicine = require("./routes/medicineRouter");
const appointmentRouter = require("./routes/appointmentRouter");
const prescriptionRouter = require("./routes/prescriptionRouter");
const authRouter = require("./routes/authRouter");
//************************DB Server****************************** */
// create Server
const app = express();

//open the server on port number 8080
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected");

    app.listen(process.env.PORT_NUMBER || 8080, () => {
      console.log("I am Listenining Don't Worry");
    });
  })
  .catch((error) => {
    console.log("DB problem");
  });

// app.listen(process.env.PORT||8080,()=>{
//     console.log("I am Listenining Don't Worry")
// });

// First MW =>  request url and method-request- using morgan package
// app.use(morgan(":method :url"));
//second MW => // CORS MW that allow access control origin, methods, headers
// to make any other website communicate with my server as" RESTful API"
// app.use((request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header(
//     "Access-Control-Allow-Methods",
//     "GET,POST,DELETE,PUT,OPTIONS"
//   );
//   response.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
//   next();
// });
app.use(morgan("tiny"));

//CORS
app.use(cors());
// calling body parser
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(multer({ storage, fileFilter }).single("image"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
//************************Routers******************* */
app.use(testRouter);

//third MW => //************ */ NOT Found => if my routers don't exist ***************
// app.use((request, response, next) => {
//   response.status(404).json({ data: "Not Found" });
// });

//Routes
app.use(clinicRouter);
app.use(doctorRouter);
app.use(testRouter);
app.use(medicine);
app.use(appointmentRouter);
app.use(patientRouter);
app.use(prescriptionRouter);
app.use(authRouter);
//Not found MW
app.use((request, response) => {
  response.status(404).json({ data: "Not Found" });
});

//Error MW
app.use((error, request, response, next) => {
  let status = error.status || 500;
  response.status(status).json({ Error: error + "" });
});
