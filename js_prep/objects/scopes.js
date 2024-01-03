var student = "One";


function printStudent(student){
    /*
     * The BLUE(2) studentName variable (parameter) shadows the RED(1) studentName
     * all three student references in the function are blue
     * the parameter always shadow the global variable
     * That's why the re-assignment of studentName affects 
     * only the inner (parameter) variable: the BLUE(2) studentName,
     */
    

    student = student.toUpperCase();
    console.log(student);
}

printStudent(student);

console.log(student);
