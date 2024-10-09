export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsByCity = listOfStudents.filter((student) => student.location === city);
  const studentByGrades = studentsByCity.map((currentStudent) => {
    const student = currentStudent;
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (grade.length === 0) student.grade = 'N/A';
    else student.grade = grade[0].grade;
    return student;
  });
  return studentByGrades;
}
