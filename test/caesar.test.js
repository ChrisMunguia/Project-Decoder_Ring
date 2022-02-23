const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
	const shift = 5;
	//tests for shift value
	it("should return false if shift isn't present", () => {
		const normalString = "test.";
		const actual = caesar(normalString);
		expect(actual).to.be.false;
	});
	it("should return false if shift is 0", () => {
		const normalString = "test";
		const shift = 0;
		const actual = caesar(normalString, shift);
		expect(actual).to.be.false;
	});
	it("should return false if shift is less than -25", () => {
		const normalString = "test";
		const shift = -26;
		const actual = caesar(normalString, shift);
		expect(actual).to.be.false;
	});
	it("should return false if shift is greater than 25", () => {
		const normalString = "test";
		const shift = 26;
		const actual = caesar(normalString, shift);
		expect(actual).to.be.false;
	});
	//tests for encoding
	it("should leave spaces and nonalphabetic symbols untouched", () => {
		const normalString = "$secret message!";
		const encodedString = "$amkzmb umaaiom!";
		const shift = 8;
		const actual = caesar(normalString, shift, true);
		expect(actual).to.equal(encodedString);
	});
	it("should ignore capital letters", () => {
		const normalString = "SECRET MESSAGE";
		const encodedString = "amkzmb umaaiom";
		const shift = 8;
		const actual = caesar(normalString, shift, true);
		expect(actual).to.equal(encodedString);
	});
	it("should wrap around front of alphabet", () => {
		const normalString = "lazy";
		const encodedString = "qfed";
		const shift = 5;
		const actual = caesar(normalString, shift, true);
		expect(actual).to.equal(encodedString);
	});
	it("should wrap around end of alphabet", () => {
		const normalString = "abc";
		const encodedString = "vwx";
		const shift = -5;
		const actual = caesar(normalString, shift, true);
		expect(actual).to.equal(encodedString);
	});
	it("should encode the input string", () => {
		const normalString = "The quick brown fox jumps over the lazy dog.";
		const encodedString = "ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl.";
		const actual = caesar(normalString, shift, true);
		expect(actual).to.equal(encodedString);
	});
	//tests for decoding
	it("should decode the input string", () => {
		const encodedString = "ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl.";
		const normalString = "the quick brown fox jumps over the lazy dog.";
		const actual = caesar(encodedString, shift, false);
		expect(actual).to.equal(normalString);
	});
});
