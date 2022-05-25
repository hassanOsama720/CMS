const Appointment = require("./../models/appointment");

exports.getAllAppoitnments = async (request, response) => {
  try {
    const appointments = await Appointment.find().
    populate({ path: 'patientId', select: 'name'}).
    populate({ path: 'doctorId', select: 'name'});

    response.status(200).json(appointments);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

exports.getAppoitnment = async (request, response) => {
  try {
    const appointment = await Appointment.findById(request.params.id); //returns null if not found
    response.status(200).json(appointment);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

exports.deleteAppoitnment = async (request, response) => {
  try {
    const appointments = await Appointment.findByIdAndDelete(request.params.id);
    response.status(200).json("Appointment has been Deleted.");
  } catch (error) {
    response.status(500).json(error.message);
  }
};


exports.deleteAllAppoitnments = async (request, response) => {
    try {
      const appointmentss = await Appointment.deleteMany();
      response.status(200).json("All Appointments have been deleted.");
    } catch (error) {
      response.status(500).json(error.message);
    }
  };
  

exports.updateAppoitnment = async (request, response) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedAppointment);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

exports.createAppoitnment = async (request, response) => {
  const newAppointment = new Appointment(request.body);

  try {
    const savedAppointment = await newAppointment.save();
    response.status(200).json(savedAppointment);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

/* Post request Example
{
    "doctor_id":1,
    "patient_id":43,
    "time": "2022-03-14T08:00:00.000Z"
}
*/
