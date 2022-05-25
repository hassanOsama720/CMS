const express=require("express");
const {body,query,param}=require("express-validator")
const router=express.Router();

const controller=require("../controllers/clinicController");
//let isAuth = require("./../middleware/authMW");

router.route("/clinics")
.get([],controller.getAllClinics)

.post([

],controller.addClinic)



.put([

],controller.updateClinic)


.delete([

],controller.deleteClinic)




router.route("/clinics/:id")
.get([],controller.getClinic)

module.exports=router