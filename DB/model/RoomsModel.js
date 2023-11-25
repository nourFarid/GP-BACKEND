const mongoose = require('mongoose')

const roomsSchema = new mongoose.Schema({
  Name : {type: Number , required: true},
  FloorId:{ type: mongoose.ObjectId, ref: 'Floor' , required : true},
  roomType: {type: String , enum: ['Normal', 'Special'] },
  Type : {type: String },
  numOfBeds : {type : Number},
  Capacity : {type: String },
  createdBy: { type: mongoose.ObjectId, ref: 'Admin' },
  createdAt:{type: Date, default: Date.now()}
}, {
    timestamps: true
})

module.exports = mongoose.model('Rooms', roomsSchema)
