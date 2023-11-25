const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.js");
const {
    registrationOldExp
  } = require("./controller/registration.js");

  router.post(
    "/registerOLx",
    //auth.auth([auth.roles.admin]),
  
    registrationOldExp
  );
  
  module.exports=router;













// //app.use(bodyParser.json());

// const{
//     addStudent,
// }=require("./controller/registration.js");
// const registration = require("../../../DB/model/registration.js");

// // router.post( '/register',
// //     auth.auth([auth.roles.admin])
// //     ,registration.addStudent)
//     router.post(
//         "/register",
//         auth.auth([auth.roles.admin]),
//         addStudent
//       );
      
   