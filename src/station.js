class Station{
    constructor(location,rackAmount){
        this.location = location
        this.rackAmount = rackAmount
    }

    hasScooter(){
        if (Math.trunc(this.rackAmount > 0)){
            return "Have a great ride!"
        }else{
            return "Please find scooters at other locations."
        }
    }
}

module.exports = Station