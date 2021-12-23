const Scooter = require("./scooter")

class User {
	constructor(name,dollars,location,accNumb,checkStatus){
		this.name = name
		this.money = dollars
		this.scooter = {}
        this.location = location
        this.accNumb = accNumb
        this.checkStatus=checkStatus
	}

	rentScooter(scooter){
		if(this.checkStatus){
        this.money = this.money - 20;
		this.scooter = scooter
        return `${this.name} has successfully rent the ${scooter}`
    }else{
        return "cannot rent the scooter for some reason..."
    }
	}
}

class Account extends User{
    constructor(name,dollars,location,accNumb,checkStatus){
        super(name,dollars,location,checkStatus)
        this.accNumb = accNumb
    }

    hasCorrectAcc(accNumb){
        if((this.accNumb === accNumb) && ( this.money > 0 )){
            return `${this.name} has an accurate account, and can rent a scooter with it!`
        }else if( (this.accNumb === accNumb) && (this.money <= 0 )){
            return `${this.name} has an accurate account, but ${this.name} need more $$ to rent a scooter :()`
        }else{
            return "The account number does not match the user number, please try again!"
        }
    }

    assignScooterToUser(scooter){
        if((this.hasCorrectAcc()) && ((scooter.rent(scooter.station)))){
            this.checkStatus = true
        }
    }

    // calcUsedScooters(){
    //     if(){}
    // }
}

module.exports = {User,Account}