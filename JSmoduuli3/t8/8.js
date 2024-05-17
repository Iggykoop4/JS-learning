document.getElementById('start').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if(num2 != 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
    }

    document.getElementById('result').textContent = result;
});