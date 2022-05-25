const express = require("express");
const router=express.Router();
const appointmentController = require("../controllers/appointmentController")

// Create an appointment
router.post("/appointments", appointmentController.createAppoitnment);

// Retrieves all appointments
router.get("/appointments", appointmentController.getAllAppoitnments);

// Returns an appointment by ID
router.get("/appointments/:id", appointmentController.getAppoitnment);

// Update an appointment by ID
router.put("/appointments/:id", appointmentController.updateAppoitnment);

// Delete an appointmentser by ID
router.delete("/appointments/:id", appointmentController.deleteAppoitnment);

// Delete all appointments
router.delete("/appointments", appointmentController.deleteAllAppoitnments);

module.exports = router;