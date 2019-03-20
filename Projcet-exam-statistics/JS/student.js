function Student (name, surname){
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function (){
    return "Name: "+this.name + " Surname: "+this.surname;
}