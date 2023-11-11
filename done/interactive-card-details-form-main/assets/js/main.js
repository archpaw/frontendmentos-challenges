let cardForm = document.getElementById('cardForm');
cardName.value = '';
cardNumber.value = '';
month.value = '';
year.value = '';
cvc.value = '';
cardForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let cardName = document.getElementById('cardName');
	let cardNumber = document.getElementById('cardNumber');
	let month = document.getElementById('month');
	let year = document.getElementById('year');
	let cvc = document.getElementById('cvc');
	let cardNumberString = cardNumber.value.toString();
	let cvcString = cvc.value.toString();

	if (
		cardName.value != '' &&
		cardNumber.value != '' &&
		cardNumberString.length == 16
	) {
		alert('This form has been successfully submitted');
		console.log(
			`Card name ${cardName.value}\nCard Number ${cardNumber.value}\nCard String length ${cardNumberString.length}`
		);
	} else {
		alert('Ensure you input a value in both fields');
		console.log(cardNumberString.length);
	}
	cardName.value = '';
	cardNumber.value = '';
	month.value = '';
	year.value = '';
	cvc.value = '';
});
