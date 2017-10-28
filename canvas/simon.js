const canvas = document.getElementById('canvas');
canvas.setAttribute('height', '500px');
canvas.setAttribute('width', '960px');

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(10, 30, 440, 440);

ctx.fillStyle = 'green';
ctx.fillRect(550, 110, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(750, 110, 100, 100);

ctx.fillStyle = 'yellow';
ctx.fillRect(550, 310, 100, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(750, 310, 100, 100);
