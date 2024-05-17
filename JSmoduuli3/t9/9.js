document.getElementById('start').addEventListener('click', function() {
    let input = document.getElementById('calculation').value;
    let result;

    if (input.includes('+')) {
        let numbers = input.split('+');
        result = parseInt(numbers[0]) + parseInt(numbers[1]);
    } else if (input.includes('-')) {
        let numbers = input.split('-');
        result = parseInt(numbers[0]) - parseInt(numbers[1]);
    } else if (input.includes('*')) {
        let numbers = input.split('*');
        result = parseInt(numbers[0]) * parseInt(numbers[1]);
    } else if (input.includes('/')) {
        let numbers = input.split('/');
        if(numbers[1] != 0) {
            result = parseInt(numbers[0]) / parseInt(numbers[1]);
        } else {
            result = 'Error: Division by zero';
        }
    } else {
        result = 'Invalid input';
    }

    document.getElementById('result').textContent = result;
});