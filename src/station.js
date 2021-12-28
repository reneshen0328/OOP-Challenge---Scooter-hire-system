class Station{
    constructor(location,rackAmount){
        this.location = location
        this.rackAmount = rackAmount
        this.scooters = []
    }

    hasScooter = () =>
        {return (Math.trunc(this.rackAmount > 0))? "Have a great ride!":"Please find scooters at other locations.";}
    

    calcAssignedScooters(scooter){
        this.scooters.push(scooter)
        return this.scooters.length
    }
}

module.exports = Station