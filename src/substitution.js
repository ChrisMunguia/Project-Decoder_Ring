// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	// you can add any code you want within this function scope

	function substitution(input, alphabet, encode = true) {
		//check if alphabet is valid
		const uniqueCheck = new Set(alphabet).size;
		if (!alphabet || alphabet.length !== 26 || uniqueCheck !== 26) return false;

		//set input to lower case
		input = input.toLowerCase();

		//control alphabet
		const control = "abcdefghijklmnopqrstuvwxyz";

		if (encode) {
			//if encoding check each character
			return input.split("").reduce((acc, char) => {
				//add to accumulator if space or to new sub char
				char === " " ? (acc += char) : (acc += alphabet[control.indexOf(char)]);
				return acc;
			}, "");
		} else {
			//if decoding reduce input
			return input.split("").reduce((acc, char) => {
				//add to accumulator if space or to control char
				char === " " ? (acc += char) : (acc += control[alphabet.indexOf(char)]);
				return acc;
			}, "");
		}
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };
