export default function getStudentsIdSum(listOfStudents) {
  return listOfStudents.reduce((sum, student) => sum + student.id, 0);
}
