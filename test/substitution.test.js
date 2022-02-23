const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
	it("should take input that includes spaces, letters, and special characters", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const input = "message";
		const expected = "y&ii$r&";
		const actual = substitution(input, alphabet);
		expect(actual).to.equal(expected);
	});
	it("should encode a given input", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const input = "message";
		const expected = "y&ii$r&";
		const actual = substitution(input, alphabet);
		expect(actual).to.equal(expected);
	});
	it("should maintain spaces when encoding", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const input = "message message";
		const expected = "y&ii$r& y&ii$r&";
		const actual = substitution(input, alphabet);
		expect(actual).to.equal(expected);
	});
	it("should ignore capital letters when encoding", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const input = "MESSAGE";
		const expected = "y&ii$r&";
		const actual = substitution(input, alphabet);
		expect(actual).to.equal(expected);
	});
	it("should decode a given input", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const expected = "message";
		const input = "y&ii$r&";
		const actual = substitution(input, alphabet, false);
		expect(actual).to.equal(expected);
	});
	it("should maintain spaces when decoding", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const input = "y&ii$r& y&ii$r&";
		const expected = "message message";
		const actual = substitution(input, alphabet, false);
		expect(actual).to.equal(expected);
	});
	it("should decode with alphabet containing unique characters", () => {
		const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
		const input = "y&ii$r&";
		const expected = "message";
		const actual = substitution(input, alphabet, false);
		expect(actual).to.equal(expected);
	});
	it("should return false if alphabet doesn't contain 26 characters", () => {
		const alphabet = "$wae&zrdxtfcygvuh";
		const input = "message";
		const actual = substitution(input, alphabet);
		expect(actual).to.be.false;
	});
	it("should return false if alphabet doesn't have unique characters", () => {
		const alphabet = "$wae&zrdxtggggvuhbijnokmpl";
		const input = "message";
		const actual = substitution(input, alphabet);
		expect(actual).to.be.false;
	});
	it("should return false if alphabet is missing", () => {
		const input = "message";
		const actual = substitution(input);
		expect(actual).to.be.false;
	});
});
