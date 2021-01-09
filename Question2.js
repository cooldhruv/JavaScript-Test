const binaryInput = 1100111111111011;
const binaryString = binaryInput.toString();
let binarySplit = binaryString.split("0");
const n = binarySplit.length;

if (n>15) {
	console.log('The no. of digits cannot be greater than 15');
}

else{
	const maximum = Math.max.apply(Math, binarySplit);
	const maxString = maximum.toString();
	console.log(maxString.length);
}


