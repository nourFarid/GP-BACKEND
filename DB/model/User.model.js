const { boolean } = require("joi")
const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        // required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char']

    },
    NationalId: {
        type: Number,
        required: [true, 'NationalId is required'],
        unique: [true, 'NationalId must be unique value'],
        min: [14 , 'National Id must be at leadt 14 characters'],
    },
    gender:{
      type:String,
      enum:['male' , 'Male' , 'female' , 'Female'], lowercase: true},

    email: { 
        type: String,
        unique: [true, 'email must be unique value'],
        required: [true, 'userName is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        default: 'User',
        enum: ['User', 'Admin']
    },
    active: {
        type: Boolean,
        default: false,
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    buildingId:{ type: mongoose.ObjectId, ref: 'Buildings' },
    floorId:{ type: mongoose.ObjectId, ref: 'Floor'},
    roomId:{ type: mongoose.ObjectId, ref: 'Rooms'},
    housingDate :{type: Date},
    evacuationDate :{type: Date}, // إخلاء السكن
    evacuationType : {type : String, enum:['نصف العام الدراسي' , 'نهاية العام الدراسي']},
    evacuationReason :{type: String, enum :['إخلاء اجازات' , 'إخلاء انتقالات']},
    blocked: { type: Boolean, default: false},
    expulsionStudent:{ type: Boolean,default:false},
    penalty:{type: Boolean,default:false},

    image: String,
    DOB: String,
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)