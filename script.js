const billAmount = document.getElementById('billAmount');
const serviceQuality = document.getElementById('serviceQuality');
const totalPeople = document.getElementById('totalPeople');
const calculate = document.getElementById('calculate');
const tip = document.getElementById('tip');
const each = document.getElementById('each');

calculate.addEventListener('click', function(event){
    const bill = parseFloat(billAmount.value);
    const percentage = parseFloat(serviceQuality.value);
    const numberOfPeople = totalPeople.value ? parseFloat(totalPeople.value) : 1; // Default to 1 if empty

    // Validation checks
    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (percentage === 0) {
        alert("Please select a service quality.");
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }

    // Calculate tip
    const tipMoney = (bill * percentage) / numberOfPeople;

    // Display the result
    tip.textContent = tipMoney.toFixed(2); // Display with two decimal places

    // Show or hide "each" label
    if (numberOfPeople > 1) {
        each.style.display = 'inline';
    } else {
        each.style.display = 'none';
    }
});
