const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.js");
const {
  registrationOldEgy
  } = require("./controller/registration.js");
  
router.post(
  "/registerOLg",
   //auth.auth([auth.roles.admin]),
   registrationOldEgy
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
      
