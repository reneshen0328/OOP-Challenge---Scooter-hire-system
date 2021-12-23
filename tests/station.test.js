const Station = require("../src/station")

describe("Station class",()=>{
    test("Has at least one scooter available",()=>{
        const testStation = new Station("Chicago",5)
        expect(testStation.hasScooter()).toBe("Have a great ride!")
    })
})