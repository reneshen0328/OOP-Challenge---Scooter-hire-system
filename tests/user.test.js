const {User,Account} = require('../src/user')
const Scooter = require('../src/scooter')

describe('User Object', () => {

	test('user has payment account', () => {
		const testUser = new User('Jeff', 100);
		expect(testUser.money).toEqual(100)
	})

	test('renting Scooter charges account', () => {
		const testUser = new User("Michael",100,'Palo Alto',1133,true)
        const testAccount = new Account("Michael",100,'Palo Alto',1133)
        const testScooter = new Scooter("Palo Alto",true,"Michael")
		//testAccount.assignScooterToUser(testScooter);
        testUser.rentScooter()
		expect(testUser.money).toEqual(80)
	})

	test('renting Scooter assigns Scooter to User', () => {
		const testUser = new User("Pam",100,'Palo Alto',1234,true);
		const testScooter = new Scooter('Palo Alto', true);
		testUser.rentScooter(testScooter);
		expect(testUser.scooter).toStrictEqual(testScooter)
	})

    // Testing if the user has the scooter app that is accurate, and can rent the scooter
    test("user has a scooter app",()=>{
        const testUser = new User("Pam",100,'Palo Alto',1234,true);
        expect(testUser.accNumb).toStrictEqual(1234)
    })

    test("account is accurate",()=>{
        const testUser = new User("Michael",100,'Palo Alto',1133);
        const testAccount = new Account("Michael",100,'Palo Alto',1133)
        expect(testAccount.hasCorrectAcc(testUser.accNumb)).toBeTruthy()
    })

    test("account number does not match",()=>{
        const testUser = new User("Michael",100,'Palo Alto',1133);
        const testAccount = new Account("Michael",100,'Palo Alto',1000)
        expect(testAccount.hasCorrectAcc(testUser.accNumb)).toBe("The account number does not match the user number, please try again!")
    })

    test("account is accurate",()=>{
        const testUser = new User("Michael",100,'Palo Alto',1133);
        const testAccount = new Account("Michael",0,'Palo Alto',1133)
        expect(testAccount.hasCorrectAcc(testUser.accNumb)).toBe(`${testUser.name} has an accurate account, but ${testUser.name} need more $$ to rent a scooter :()`)
    })

    // test("used scooters",()=>{
    //     const testUser1 = new User("Michael",100,'Palo Alto',1133)
    //     const testAccount1 = new Account("Michael",100,'Palo Alto',1133)
    //     const usedScooter1 = new Scooter("Chicago",true)
    //     expect(testUser1.calcUsedScooters()).toBeEqual([usedScooter1])
    // })
})