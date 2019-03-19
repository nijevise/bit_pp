(function(){
    class Student{
        constructor(studentName,studentSurname){
            this.studentName = studentName;
            this.studentSurname = studentSurname;
        }
            getStudentData(){
                return `${this.studentName} ${this.studentSurname}`
            }
    };
    var pera = new Student("Pera", "Peric");
    // console.log(pera.getStudentData());
})
