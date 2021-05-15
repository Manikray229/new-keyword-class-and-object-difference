class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}


const heroPerson = new person ('Manik', 'Ray', 25000);
console.log(heroPerson);


function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName ;
    this.salary = salary;

}

const oldPerson = new Person1 ('Manik', '@Ray', 2131);
console.log(oldPerson);