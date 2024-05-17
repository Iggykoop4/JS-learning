let targetElement = document.getElementById('target');

let item1 = document.createElement('li');
item1.textContent = 'First item';
targetElement.appendChild(item1);

let item2 = document.createElement('li');
item2.textContent = 'Second item';
item2.className = 'my-item';
targetElement.appendChild(item2);

let item3 = document.createElement('li');
item3.textContent = 'Third item';
targetElement.appendChild(item3);