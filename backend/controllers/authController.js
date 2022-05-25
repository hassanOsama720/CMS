

const jwt = require("jsonwebtoken");
const User = require("./../models/userSchema");

exports.login = (request, response, next) => {
    User.findOne({ username: request.body.username, password: request.body.password })
      .then(data => {

        if (data == null)
          throw new Error("username or password is incorrect");
  
        let token = jwt.sign({
          username: request.body.username,
          role: data.role
        }, process.env.SECRET_KEY, { expiresIn: "10h" })
  
        response.status(200).json({ message: "Login Success", data, token })
      })
      .catch(error => {
        next(error);
      })
  }