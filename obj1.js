// Input array of student objects
const students = [
    { "name": "Alice", "marks": 58 },
    { "name": "Bob", "marks": 85 },
    { "name": "David", "marks": 40 },
    { "name": "Emma", "marks": 76 },
    { "name": "Frank", "marks": 63 },
    { "name": "Grace", "marks": 89 },
    { "name": "Hannah", "marks": 95 },
    { "name": "Ivy", "marks": 55 },
    { "name": "Jack", "marks": 78 },
    { "name": "Kate", "marks": 67 },
    { "name": "Leo", "marks": 88 },
    { "name": "Mia", "marks": 92 },
    { "name": "Nathan", "marks": 72 },
    { "name": "Olivia", "marks": 82 }
  ];
  
  
  function processStudents(students) {
    return students
      .filter(student => student.marks > 60) 
      .sort((a, b) => b.marks - a.marks)    
      .map(student => student.name);         
  }
  
  const sortedNames = processStudents(students);
  console.log(sortedNames);