const BuildingsModel = require('../../../../DB/model/BuildingsModel.js')
const errorHandling = require ('../../../utils/errorHandling.js')
const httpStatusText = require('../../../utils/httpStatusText.js')

//add Building
const addBuilding = errorHandling.asyncHandler(async(req,res,next)=>{
    const{Name , Gender,UniversityCityId}= req.body
    // console.log(req.originalUrl);
    // console.log(req.params);
   const userId = req.user._id
    const building = await BuildingsModel.create({
        Name,
        Gender,
        UniversityCityId,createdBy:userId,
     })
    return res.status(201).json({status : httpStatusText.SUCCESS , data : {building}})
}
)

 //get building
const getAllBuilding = errorHandling.asyncHandler( async(req,res,next)=>{
    const Building = await BuildingsModel.find({}, {"__v":false}).populate([
      {
        path:"UniversityCityId",
        path:"FLOORS"
      }
    ])
    if(!Building){
      return res.json("this building not Found")
    }
    return res.status(200).json({status : httpStatusText.SUCCESS , data : {Building}})
})
const getBuilding = errorHandling.asyncHandler( async(req,res,next)=>{
  //const Building = await BuildingsModel.find({}, {"__v":false})
  const building = await BuildingsModel.findById(req.params.BuildingID).populate([
    {
      path:"UniversityCityId",
      path:"FLOORS"
    }
  ]);

  if(!building){
     return res.status(404).json({status : httpStatusText.FAIL , data : {building : null}});
}
  return res.status(200).json({status : httpStatusText.SUCCESS , data : {building}})
})

// const getBuilding = errorHandling.asyncWrapper(async (req , res, next )=>{ 
//   const building = await BuildingsModel.findById(req.params.BuildingID);
//     if(!building){
//       const error = appError.create('building not found' , 404 , httpStatusText.FAIL )
//       return next(error);
//     //  return res.status(404).json({status : httpStatusText.FAIL , data : {course : null}});
//     }
//     res.json({status:httpStatusText.SUCCESS , data : {building}});

// })

//update building
const updateBuilding = errorHandling.asyncHandler(async(req,res,next)=>
    {
        const {BuildingID} = req.params
        const {Name , Gender}=req.body
        const building = await BuildingsModel.findByIdAndUpdate({_id:BuildingID},{Name,Gender})
        if(!building){
          res.status(400).json({status: httpStatusText.ERROR , message : 'No building found with that ID'})
        }
        return res.status(200).json({status : httpStatusText.SUCCESS , data : {building}})

    }
)

//delete building
const deleteBuilding = errorHandling.asyncHandler(async(req,res,next)=>{
           
     const {BuildingID} = req.params

     const building = await BuildingID.findOne({_id:BuildingID})
     if (!building) {
      return res.status(404).json({status: httpStatusText.ERROR , message : 'building not found'})
       }
      
    await BuildingsModel.deleteOne({_id: BuildingID})
    return res.status(200).json({status:httpStatusText.SUCCESS , message:'Building Deleted Successfully'})
})

 module.exports = {addBuilding , getAllBuilding , updateBuilding , deleteBuilding , getBuilding}

        
    