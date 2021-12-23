class Scooter {
	constructor(station, charged){
		this.station = station
		this.charged = charged
       
	}

	rent(user) {
        if((this.charged) && (this.station === user.location)){ 
            return 'Enjoy the ride!'
		} else if((!this.charged) && (this.station === user.location)){
            return 'Scooter is not charged, please select another'
        }else {
			return "Something went terribly wrong :("
		}
	}
}

module.exports = Scooter