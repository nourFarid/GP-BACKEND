const express = require ('express')
const router = express.Router()
const buldings = require("../Buildings/buildings.router.js")
const universityCityController = require ("./controller/universityCity.js")
const auth = require('../../middleware/auth.js')





//  router.use('/:cityId/bulding',buldings)







router.post('/',

    auth.auth([auth.roles.admin]),
     universityCityController.addUniversityCity)

router.get('/',auth.auth([auth.roles.admin]),
 universityCityController.getAllCities)



router.get('/:UniversityCityId',auth.auth([auth.roles.admin])
, universityCityController.getCity)

router.put('/:UniversityCityId', 
auth.auth([auth.roles.admin]),
     universityCityController.updateUniversityCity)

 router.delete('/:UniversityCityId', 
 auth.auth([auth.roles.admin]),
     universityCityController.deleteCity)


module.exports = router