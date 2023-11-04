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
        //  max: [14 , 'National Id must be at max14 characters']
    },
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
    blocked: {
        type: Boolean,
        default: false,
    },
    image: String,
    DOB: String,
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)
