const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
	it("should encode message into numbers", () => {
		const message = "THE QUICK BROWN FOX";
		const encoded = "443251 1454423152 2124432533 124335";
		const actual = polybius(message);
		expect(actual).to.equal(encoded);
	});
	it("should ignore capital letters", () => {
		const message = "THE QUICK BROWN FOX";
		const encoded = "443251 1454423152 2124432533 124335";
		const actual = polybius(message);
		expect(actual).to.equal(encoded);
	});
	it("should return a string after encoding", () => {
		const message = "test";
		const actual = polybius(message);
		expect(actual).to.be.a("string");
	});
	it("should return 42 for both i and j", () => {
		const message = "ijijij";
		const encodedMessage = "424242424242";
		const actual = polybius(message);
		expect(actual).to.equal(encodedMessage);
	});
	it("should maintain spaces after encoding", () => {
		const message = "test test";
		const encodedMessage = "44513444 44513444";
		const actual = polybius(message);
		expect(actual).to.equal(encodedMessage);
	});
	it("should encode i and j to 42", () => {
		const message = "jinkies";
		const encodedMessage = "42423352425134";
		const actual = polybius(message);
		expect(actual).to.equal(encodedMessage);
	});
	it("should decode numbers into message", () => {
		const message = "the qu(i/j)ck brown fox";
		const encoded = "443251 1454423152 2124432533 124335";
		const actual = polybius(encoded, false);
		expect(actual).to.equal(message);
	});
	it("should decode 42 to both i and j", () => {
		const message = "(i/j)(i/j)";
		const encoded = "4242";
		const actual = polybius(encoded, false);
		expect(actual).to.equal(message);
	});
	it("should maintain spaces after decoding", () => {
		const message = "test test";
		const encoded = "44513444 44513444";
		const actual = polybius(encoded, false);
		expect(actual).to.equal(message);
	});
	it("should return false if numbers length is odd", () => {
		const encoded = "44513444 445134444";
		const actual = polybius(encoded, false);
		expect(actual).to.be.false;
	});
});
