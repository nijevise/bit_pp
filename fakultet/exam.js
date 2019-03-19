(function(){
    class Exam extends Subject extends Student{
        constructor(subject, student, grade){
            super(subjectName);
            super(getStudentData());
            this.grade = grade;
        }
        getExamInfo(){
            return `${super.subjectName}, ${super.getStudentData()}`
        }
        hasPassed(grade){
            if(grade > 5){
                return true
            }else{
                return false
            }
        }
    };
    const javaScript = new Exam("js","Pera Peric",10);
    // console.log(javaScript.getExamInfo());
    // console.log(javaScript.hasPassed());
})
