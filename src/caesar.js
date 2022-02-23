// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	function caesar(input, shift, encode = true) {
		//check for bad shift value
		if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
		//apply unary operator to shift
		!encode ? (shift = -shift) : null;

		//return input after shifting each character
		return input
			.toLowerCase()
			.split("")
			.reduce((acc, char) => {
				let asciiCode = char.charCodeAt(0);
				if (asciiCode > 96 && asciiCode < 123) {
					asciiCode += shift;
					asciiCode > 122 ? (asciiCode = asciiCode - 122 + 96) : null;
					asciiCode < 97 ? (asciiCode = asciiCode - 97 + 123) : null;
				}
				//add char from asciicode
				return (acc += String.fromCharCode(asciiCode));
			}, "");
	}

	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };
