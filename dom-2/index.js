document.addEventListener('DOMContentLoaded', function() {
    const coinForm = document.getElementById('coin-form');
    const moneyContainer = document.getElementById('money-container');

    coinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const countInput = document.getElementById('num-of-coin');
        const coinTypeSelect = document.getElementById('coin-type');
        
        const count = parseInt(countInput.value);
        const coinType = coinTypeSelect.value;

        if (!isNaN(count) && count > 0) { 
            for (let i = 0; i < count; i++) {
                const newCoin = document.createElement('div');
                newCoin.className = 'money';
                newCoin.style.backgroundColor = getCoinColor(coinType);
                newCoin.addEventListener('click', function() {
                    moneyContainer.removeChild(newCoin);
                });

                newCoin.textContent = coinType.charAt(0).toUpperCase() + coinType.slice(1);

                newCoin.id = coinType;

                moneyContainer.appendChild(newCoin);
            }
        } else {
            alert('Please enter a valid positive number for the count.');
        }
    });

    function getCoinColor(coinType) {
        switch (coinType) {
            case 'penny':
                return 'brown';
            case 'nickel':
                return 'gray';
            case 'dime':
                return 'lightgray';
            case 'quarter':
                return 'silver';
            default:
                return '';
        }
    }
});