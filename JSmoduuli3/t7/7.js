let triggerElement = document.getElementById('trigger');
let targetElement = document.getElementById('target');

let originalSrc = targetElement.src;

triggerElement.addEventListener('mouseover', function() {
  targetElement.src = 'img/picB.jpg';
});

triggerElement.addEventListener('mouseout', function() {
  targetElement.src = originalSrc;
});