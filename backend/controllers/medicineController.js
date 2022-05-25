const mongoose = require("mongoose");
const Medicine = require("./../models/medicine");
const express = require("express");
//const { validationResult } = require("express-validator");


exports.show_medicines = (request, response, next) => {
  //Medicine.counterReset('_id', function(err) {
   //console.log(err)
//});
  Medicine.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
};
//-----------------------------------------------------------------------------------------------
exports.add_medicine = (request, response, next) => {
//   let errors = validationResult(request);
//   if (!errors.isEmpty()) {
//     let error = new Error();
//     error.status = 422;
//     error.message = errors
//       .array()
//       .reduce((current, object) => current + object.msg + " ", "");
//     throw error;
//   }
//   if (request.role == "admin" || request.role == "seller") {
    let object = new Medicine({
      //_id:request.body._id,  
      comercial_name: request.body.comercial_name,
      medical_name: request.body.medical_name,
      price: request.body.price,
      manufacturer: request.body.manufacturer,
      description: request.body.description,
      image: request.body.image,
      type: request.body.type,
      side_effects: request.body.side_effects,
    });
    object
      .save()
      .then((data) => {
        response.status(201).json({ message: "added", data });
      })
      .catch((error) => next(error));
//   } else {
//     response
//       .status(404)
//       .json({ mesg: "You should be admin or seller to add product" });
//   }

  // });
};
//--------------------------------------------------------------------------------------------------
exports.delete_medicine = (request, response, next) => {
//   if (request.role == "admin") {
    Medicine.findByIdAndDelete({ _id: request.params.id })
      .then((data) => {
        response.status(201).json({ message: "deleted", data });
      })
      .catch((error) => {
        next(error);
      });
//   } else if (request.role == "seller") {
//     Products.findById({ _id: request.body.id }).then((data) => {
//       if (request.id == data.seller.userID) {
//         Products.findByIdAndDelete({ _id: request.body.id })
//           .then((data) => {
//             response.status(201).json({ message: "deleted", data });
//           })
//           .catch((error) => {
//             next(error);
//           });
//       } else {
//         response.status(404).json({ message: "You dont owne this product " });
//       }
//     });
//   } else {
//     response
//       .status(404)
//       .json({ message: "You should be admin or seller to delete product " });
//   }
};
//-------------------------------------------------------------------------------------------------------

exports.update_medicine = (request, response, next) => {
//   if (request.role == "admin") {
    Medicine.findByIdAndUpdate(
      { _id: request.body._id },
      {
        $set: {
            comercial_name: request.body.comercial_name,
            medical_name: request.body.medical_name,
            price: request.body.price,
            manufacturer: request.body.manufacturer,
            description: request.body.description,
            image: request.body.image,
            type: request.body.type,
            side_effects: request.body.side_effects,
        },
      }
    )
      .then((data) => {
        response.status(201).json({ message: " updated", data });
      })
      .catch((error) => {
        next(error);
      });
//   } else if (request.role == "seller") {
//     Products.findById({ _id: request.body.id }).then((data) => {
//       if (request.id == data.seller.userID) {
//         Products.findByIdAndUpdate(
//           { _id: request.body.id },
//           {
//             $set: {
//               name: request.body.name,
//               price: request.body.price,
//               brand: request.body.brand,
//               category_id: request.body.category_id,
//               discount: request.body.discount,
//               reviews: request.body.reviews,
//               description: request.body.description,
//               images: request.body.images,
//               properties: request.body.properties,
//               quantity: request.body.quantity,
//               seller: request.body.seller,
//             },
//           }
//         )
//           .then((data) => {
//             response.status(201).json({ message: " updated", data });
//           })
//           .catch((error) => {
//             next(error);
//           });
//       } else {
//         response.status(404).json({ message: "You dont owne this product " });
//       }
//     });
//   } else {
//     response
//       .status(404)
//       .json({ message: "You should be admin or seller to delete product " });
//   }
};
//------------------------------------------------------------------------------------------------------------
exports.show_medicine = (request, response, next) => {
  Medicine.find({ _id: request.params.id })
    .then((data) => {
      response.status(200).json( data );
    })
    .catch((error) => {
      next(error);
    });
};
//----------------------------------------------------------------------------------------------------------
