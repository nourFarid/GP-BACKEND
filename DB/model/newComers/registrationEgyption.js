const mongoose = require("mongoose");
const validator = require("validator");

const registrationSchemaForNewEgy = new mongoose.Schema(
  {
    nationalID: {
      type: String,
      required: true,
      unique: true,
    },

    studentCode: {
      type: Number,
      required: [true, "StudentCode is required"],
      unique: [true, "StudentCode must be unique value"],
      min: [9, "StudentCode must be at at least 9 numbers"],
      //  max: [10 , 'StudentCode must be at max 10 numbers']
    },

    studentName: {
      type: String,
      // required: [true, 'StudentName is required'],
      min: [2, "minimum length 2 char"],
      max: [20, "max length 20 char"],
    },

    birthDate: {
      type: String,
      // validate: {
      //   validator: value => validator.isISO8601(value),
      //   message: 'Invalid date format. Please use the ISO 8601 format (YYYY-MM-DD)',
      // },
    },

    placeOfBirth: {
      type: String,
    },

    gender: {
      type: String,
      // enum: ["Male", "Female"],
      required: true,
    },

    religion: {
      type: String,
    },

    residence: {
      //محل اقامه
      type: String,
    },

    detailedAddress: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
      },
    },

    landLinePhone: {
      type: String,
    },

    phoneNumber: {
      type: String,
      validate: {
        validator: function (value) {
          // Use a library like validator to check if the phone number is valid
          return validator.isMobilePhone(value, "any", { strictMode: false });
        },
        message: "{VALUE} is not a valid phone number",
      },
    },

    fatherName: {
      type: String,
      min: [2, "minimum length 2 char"],
      max: [20, "max length 20 char"],
    },

    fatherNationalId: {
      type: String,
      required: true,
      unique: true,
    },
    fatherJop: {
      type: String,
    },

    fatherPhone: {
      type: String,
      validate: {
        validator: function (value) {
          // Use a library like validator to check if the phone number is valid
          return validator.isMobilePhone(value, "any", { strictMode: false });
        },
        message: "{VALUE} is not a valid phone number",
      },
    },

    guardianName: {
      type: String,
    },

    guardianNationalId: {
      type: String,
      required: true,
      unique: true,
    },
    guardianRelation: {
      type: String,
    },
    guardianPhone: {
      type: String,
    },
    AsituationRelatedToTheParents: {
      type: String,
    },
    College: {
      type: String,
    },
    grade: {
      type: Number,
    },
    HighSchoolDivision: {
      type: String,
    },
    HighSchoolFromAbroad: {
      type: Boolean,
    },
    HighSchoolGrade: {
      type: Number,
    },
    HighSchoolPercentage: {
      type: Number,
    },
    HousingType: {
      type: String,
    },

    HousingWithoutFood: {
      type: Boolean,
    },
    withSpecialNeeds: {
      type: Boolean,
    },
    ThefamilyIsOutside: {
      type: Boolean,
    },
    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },
    policy: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model(
  "registrationSchemaForNewEgy",
  registrationSchemaForNewEgy
);
