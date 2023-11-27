const NewEgy = require("../../../../DB/model/newComers/registrationEgyption");
const NewExp = require("../../../../DB/model/newComers/registrationExpatriates");
const oldExp = require("../../../../DB/model/oldStudent/registrationExpartriates");
const oldEgy = require("../../../../DB/model/oldStudent/registrationEgyption");
const errorHandling = require("../../../utils/errorHandling.js");
const httpStatusText = require("../../../utils/httpStatusText.js");
const {
  getCoordinatesAndCalculateDistance,
} = require("../../../utils/getCoordinates.js");

const classifyStudents = errorHandling.asyncHandler(async (req, res, next) => {
  const egyOld = await oldEgy.find().lean();
  const expOld = await oldExp.find().lean();
  const expNew = await NewExp.find().lean();
  const egyNew = await NewEgy.find().lean();
  const allOld = egyOld.concat(expOld).concat(expNew).concat(egyNew);



  // Calculate distances and ages for all students
  const studentsWithDistancesAndAges = await Promise.all(
    allOld.map(async (student) => {
      const distance = await getCoordinatesAndCalculateDistance(
        student.placeOfBirth // replace with the actual property
      );

      // Calculate age from date of birth
      const birthDate = new Date(student.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      return { ...student, distance, age };
    })
  );

  // Sort first by distance, then by age, gradePercentage, and grade
  const sortedAllOld = studentsWithDistancesAndAges.sort((a, b) => {
    if (a.grade !== b.grade) {
      return b.grade - a.grade; // Sort by grade (highest to lowest)
    } else if (a.gradePercentage !== b.gradePercentage) {
      return b.gradePercentage - a.gradePercentage; // Sort by gradePercentage (highest to lowest)
    } else if (a.age !== b.age) {
      return b.age - a.age; // Sort by age (youngest to oldest)
    } else {
      return b.distance - a.distance; // Sort by distance (biggest to smallest)
    }
  });

  return res
    .status(201)
    .json({ status: httpStatusText.SUCCESS, data: { sortedAllOld } });
});

module.exports = { classifyStudents };
