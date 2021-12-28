const Scooter = require('../src/scooter');
const {User,Account} = require('../src/user')

describe('Scooter Object Properties', () => {

	test('Scooter is an object, with a location', () => {
		const testScooter = new Scooter('Brooklyn');

		expect(typeof testScooter).toBe('object');
		expect(testScooter.station).toBe('Brooklyn');
	})	
})

describe('Scooter Object Methods', () => {

	//Testing if the scooter is rentable
    test('charged scooter can be rented', () => {
		const testScooter = new Scooter('Chicago', true);
        const testUser = new User("Pam",100,'Chicago',1234,true);
		expect(testScooter.rent(testUser)).toBe("Have a great ride!");
	})

    test(`scooter cannot be rented until it's charged`, () => {
		const testScooter = new Scooter('Chicago', false);
        const testUser = new User("Pam",100,'Chicago',1234);
		expect(testScooter.rent(testUser)).toBe('Scooter is not charged, please select another');
	})

	test('scooter cannot be rented for some reason', () => {
		const testScooter = new Scooter('Chicago', true);
        const testUser = new User("Pam",100,'Palo Alto',1234);
		expect(testScooter.rent(testUser)).toBe('Something went terribly wrong :(');
	})
})