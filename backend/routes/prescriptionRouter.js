const express = require("express");
const router = express.Router();
const controller = require("./../controllers/prescriptionController");
router
  .route("/prescriptions/:id?")
  .get(controller.getOnePrescr)

  .put(controller.updatePrescr)
  .delete(controller.deletePrescr);

router.post("/prescriptions", controller.addPrescr);
router.get("/prescriptions", controller.getOnePrescr);

module.exports = router;
