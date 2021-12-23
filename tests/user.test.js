const {User,Account} = require('../src/user')
const Scooter = require('../src/scooter')

describe('User Object', () => {

    // Practicing standard code
	test('user has payment account', () => {
		const testUser = new User('Jeff', 100);
		expect(testUser.money).toEqual(100)
	})

	test('renting Scooter charges account', () => {
		const testUser = new User("Michael",100,'Palo Alto',1133,true)
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

    // Testing Scenerio: user1 wants to rent scooter1 using account1
    test("Scooter1 is assign to User1",()=>{
        const testAccount1 = new Account("Michael",50,'Palo Alto',1133)
        const testScooter1 = new Scooter("Palo Alto",true,"Michael")
        const testUser1 = new User("Michael",50,'Palo Alto',1133)
       
        // step1: If user1 has an accurate account (account1)
        expect(testAccount1.hasCorrectAcc(testUser1.accNumb)).toBe(`${testAccount1.name} has an accurate account, and can rent a scooter with it!`);

        //step2: If scooter1 is available
        expect(testScooter1 .rent(testAccount1)).toBe('Enjoy the ride!');
		
        //step3: Assign scooter1 to user1/account1
        testAccount1.assignScooterToUser(testScooter1);
        expect(testAccount1.checkStatus).toBeTruthy();

        //step4: Update the account checkStatus indicating scooter1 is being used by user1
        expect(testAccount1.rentScooter(testScooter1)).toBe(`${testAccount1.name} has successfully rent the ${testScooter1}`)

        //step5: Calculate how many scooters have successfully assigned to users
        

    })
})