const normalPerson = {
    firstName: 'Manik',
    lastName: 'Manik Ray',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargBill();


