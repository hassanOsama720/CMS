const express = require("express");
const router = express.Router();
//const { body } = require("express-validator");
const controller = require("../controllers/medicineController");
//isAuth=require("./../MW/auth");




router
  .route("/medicine")
  .get(controller.show_medicines)

  .post(
    [],
    controller.add_medicine
  )

  //.delete(
    //[body("id").notEmpty().withMessage("ID Should be a object_ID")],
    //controller.delete_medicine
  //)

  .put(
    controller.update_medicine
  );


router
  .route("/medicine/:id")
  .delete(controller.delete_medicine)
  .get(
    controller.show_medicine
  );


module.exports = router;