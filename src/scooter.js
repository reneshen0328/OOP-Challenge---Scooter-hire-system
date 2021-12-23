class Scooter {
	constructor(station, charged){
		this.station = station
		this.charged = charged
        
	}

	rent(account) {
        if((this.charged) && (this.station === account.location)){ 
            return 'Enjoy the ride!'
		} else if((!this.charged) && (this.station === account.location)){
            return 'Scooter is not charged, please select another'
        }else {
			return "Something went terribly wrong :("
		}
	}
}

module.exports = Scooter