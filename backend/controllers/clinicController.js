const { validationResult } = require("express-validator");

const Clinic = require("./../models/clinicSchema");


    //add doctor 
    exports.addClinic = (request, response, next) => {
      console.log("BODY",request.body)
      let errors = validationResult(request);
      if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors
          .array()
          .reduce((current, object) => current + object.msg + " ", "");
        throw error;
      }


      let object = new Clinic({
        name: request.body.name,
        address: request.body.address,
        doctor : request.body.doctor
        
      });
      object
        .save()
        .then((data) => {
          response.status(201).json({ message: "added clinic successfully", data });
        }).catch(error => next(error))
 
  
      }



  
  exports.getAllClinics = (request, response, next) => {


        Clinic.find({}).populate("doctor","name")
            .then(data => {
 
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
    }






  exports.getClinic = async (request, response, next) => {
    try {
        const id = request.params.id;

        const data = await Clinic.findById(id).populate('doctor', 'name')
        if (!data) {
            next()
        }
        response.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

  
















exports.updateClinic = (request, response, next) => {
  console.log(request.body)
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
      let error = new Error();
      error.status = 422;
      error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
      throw error;

  }

  Clinic.updateOne({ _id: request.body.data._id }, {
      $set: {
        name: request.body.name,
        address: request.body.address,
        doctor : request.body.doctor
      }
  }).then(data => {

      if (data == null) throw new Error("doctor not found");
      response.status(200).json({ message: "Updated", data })
  })
      .catch(error => next(error))
}












/* exports.deleteClinic = async (request, response, next) => {
    try {
        if (!request.params.id) next();
        const clinic = await Clinic.findOne({ _id: request.params.id });
        if (!clinic) next();
        await clinic.delete();
        response.status(200).json({ data: `clinic deleted ` })
    } catch (error) {
        next(error)
    }
}//delete clinic by admin
 */

exports.deleteClinic = async (request, response, next) => {

  let errors = validationResult(request);
  if (!errors.isEmpty()) {
      let error = new Error();
      error.status = 422;
      error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
      throw error;
  }
  try {
      let data = await Clinic.findOneAndDelete({ _id: request.body._id });
      if (data == null) throw new Error("CLINIC not found");
      response.status(200).json({ message: "deleted" })
  }
  catch (error) {
      next(error)
  }
}