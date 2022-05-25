const { validationResult } = require("express-validator");
const Patient = require("../models/patientSchema"); 

const bcrypt = require('bcrypt');
const { request, response } = require("express");

exports.getAllPatients=(request ,response , next)=>{
    Patient.find({}).then(data=>{
        response.status(200).json(data)
    }).catch(error =>{
        next(error);
    })
}

exports.getPatient = (request,response)=>{
    Patient.findOne({
        _id:request.params.id
    }).then(data=>{
        response.status(200).json(data)
    }).catch(error=>{
        next(error)
    })
}

exports.addPatient=(request, response ,next)=>{
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

    let patientObj = new Patient({
        name : request.body.name,
        phoneNumber : request.body.phoneNumber,
        address : request.body.address,
        age : request.body.age,
        isMarried : request.body.isMarried,
        gender:request.body.gender,
        // image:"http://localhost:8080/images/"+ request.file.filename,
    })

    patientObj.save()
                .then(data=>{
                    response.status(201).json({message: "added", data })
                }).catch(error=>{
                    next(error)
                })
}

exports.editPatient = (request , response, next )=>{
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

    Patient.updateOne({_id:request.body._id} , {
        $set:{
            name : request.body.name,
            phoneNumber : request.body.phoneNumber,
            address : request.body.address,
            age : request.body.age,
            isMarried : request.body.isMarried,
            gender:request.body.gender,
            // image:"http://localhost:8080/images/"+ request.file.filename,
        }
    }).then(data=>{
        if(data == null ) throw new Error("Patient not found");
        response.status(200).json({ message : "Updated",data})
    }).catch(error=>{
        next(error)
    })
}


exports.deletePatient= async(request,response,next)=>{
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

    try {
        let data = await Patient.findOneAndDelete({
            _id:request.body._id
        });
        if (data == null ) throw new Error("Patient Not Found");
        response.status(200).json({message : "Patient deleted"})
            
        
    } catch (error) {
        next(error)
    }

}

