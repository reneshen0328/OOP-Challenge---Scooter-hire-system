const Scooter = require("./scooter")

class User {
	constructor(name,dollars,location,accNumb){
		this.name = name
		this.money = dollars
		this.scooter = {}
        this.location = location
        this.accNumb = accNumb
     
	}

	rentScooter(scooter){
		
        this.money = this.money - 20;
		this.scooter = scooter
        return true
	}
}

class Account extends User{
    constructor(name,dollars,location,accNumb){
        super(name,dollars,location)
        this.accNumb = accNumb
    }

    hasCorrectAcc(accNumb){
        if((this.accNumb === accNumb) && ( this.money > 0 )){
            // return `${this.name} has an accurate account, and can rent a scooter with it!`
            return true
        }else if( (this.accNumb === accNumb) && (this.money <= 0 )){
            return `${this.name} has an accurate account, but ${this.name} need more $$ to rent a scooter :()`
        }else{
            return "The account number does not match the user number, please try again!"
        }
    }
}

module.exports = {User,Account}