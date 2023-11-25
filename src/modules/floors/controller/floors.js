const floorModel = require('../../../../DB/model/FloorModel.js')
const errorHandling = require ('../../../utils/errorHandling.js')
const httpStatusText = require('../../../utils/httpStatusText.js')

//add floor
const addFloor = errorHandling.asyncHandler(async(req,res,next)=>{
    const{Name , BuildingId}= req.body
   const userId = req.user._id
    const floor = await floorModel.create({
        Name,
        BuildingId,
        createdBy:userId,
     })
    return res.status(201).json({status : httpStatusText.SUCCESS , data : {floor}})
}
)

 //get floor
const getAllFloor = errorHandling.asyncHandler( async(req,res,next)=>{
    const floor = await floorModel.find({}, {"__v":false}).populate([{
      path:"BuildingId",
      path:"ROOMS"
    }])
    if(!floor){
      return res.json("this floor not Found")
    }
    return res.status(200).json({status : httpStatusText.SUCCESS , data : {floor}})
})
const getFloor = errorHandling.asyncHandler( async(req,res,next)=>{
  const floor = await floorModel.findById(req.params.floorId).populate([{
    path:"BuildingId",
    path:"ROOMS"
  }]);

  if(!floor){
     return res.status(404).json({status : httpStatusText.FAIL , data : {floor : null}});
}
  return res.status(200).json({status : httpStatusText.SUCCESS , data : {floor}})
})

//update floor
const updateFloor = errorHandling.asyncHandler(async(req,res,next)=>
    {
        const {floorId} = req.params
        const {Name}=req.body
        const floor = await floorModel.findByIdAndUpdate({_id:floorId},{Name})
        if(!floor){
          res.status(400).json({status: httpStatusText.ERROR , message : 'No floor found with that ID'})
        }
        return res.status(200).json({status : httpStatusText.SUCCESS , data : {floor}})

    }
)

//delete building
const deleteFloor = errorHandling.asyncHandler(async(req,res,next)=>{
           
     const {floorId} = req.params

     const floor = await floorModel.findOne({_id:floorId})
     if (!floor) {
      return res.status(404).json({status: httpStatusText.ERROR , message : 'floor not found'})
       }
      
    await floorModel.deleteOne({_id: floorId})
    return res.status(200).json({status:httpStatusText.SUCCESS , message:'floor Deleted Successfully'})
})

 module.exports = {addFloor , getAllFloor , updateFloor , getFloor , deleteFloor}

        
    
        
    