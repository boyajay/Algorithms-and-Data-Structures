function decToHex (int, base) {
	var solution = [];
	place = 1;
	while(int>0){
		// console.log(Math.pow(2,place));
		var currentInt = int%Math.pow(base,place);
		solution.unshift(currentInt/(Math.pow(base,place-1)));
		int -= currentInt;
		place++;
	} 
	return solution.join('');
}

console.log('answer is ',decToHex(17, 16));