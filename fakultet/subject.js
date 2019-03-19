(function(){
    class Subject{
        constructor(subjectName){
            this.subjectName = subjectName;
        }
        getSubjectName(){
            return `$(this.subjectName)`
        }
    };
    const js = new Subject ("javascript");
    // console.log(js.getSubjectName());
})


