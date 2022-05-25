const express =require("express");
const {body , param , query} = require("express-validator");
const router =express.Router();

const controller = require("../controllers/patientController");

router.route("/patients")
        .get([],controller.getAllPatients)
        .post([
            body("name").notEmpty().withMessage("invalid Name."),
            body("phoneNumber").notEmpty().withMessage("invalid phoneNumber."),
            body("isMarried").notEmpty().withMessage("please write true or false"),
            body("age").notEmpty().withMessage("invalid age."),
            body("address").notEmpty().withMessage("invalid address."),
            body("gender").notEmpty().withMessage("choose your gender"),
            
        ],controller.addPatient)
        .put([
            body("name").notEmpty().withMessage("invalid Name."),
            body("phoneNumber").notEmpty().withMessage("invalid phoneNumber."),
            body("isMarried").notEmpty().withMessage("please write true or false"),
            body("age").notEmpty().withMessage("invalid age."),
            body("address").notEmpty().withMessage("invalid address."),
            body("gender").notEmpty().withMessage("choose your gender"),
        ],controller.editPatient)
        .delete([
            // body("_id").isNumeric().withMessage("ID Should be a number")
        ],controller.deletePatient)


router.route("/patients/:id")
        .get( [], controller.getPatient)
    

module.exports=router;        