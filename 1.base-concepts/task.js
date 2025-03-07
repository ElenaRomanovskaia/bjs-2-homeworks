"use strict"
function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	}

	if (d === 0) {
		return [-b / (2 * a)];
	}

	let sqrtD = Math.sqrt(d);
	let root1 = (-b + sqrtD) / (2 * a);
	let root2 = (-b - sqrtD) / (2 * a);

	return [root1, root2];
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	if (loanBody <= 0) {
		return 0;
	}
	let pow = Math.pow(1 + monthlyRate, countMonths);
	let monthlyPayment = loanBody * (monthlyRate * pow) / (pow - 1);
	let totalPayment = monthlyPayment * countMonths + contribution;
	return Number(totalPayment.toFixed(2));
}