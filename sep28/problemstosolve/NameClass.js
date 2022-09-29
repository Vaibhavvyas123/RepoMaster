class Name{
    constructor(fname,lname){
        this.firstName = fname
        this.lastName = lname
    }


    getFullName(){
        return this.firstName+" "+this.lastName
    }

    getInitial(){
        return this.firstName.charAt(0) + "." + this.lastName.charAt(0)
    }
}


let myName = new Name("ujjwal","lade")

console.log(myName.firstName);
console.log(myName.lastName);
console.log(myName.getFullName());
console.log(myName.getInitial());


