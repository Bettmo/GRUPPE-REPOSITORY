let canvas = document.querySelector('#canvas');
let c = canvas.getContext('2d');

c.fillStyle = 'red';
c.fillRect(0,0,60,60);
c.fillStyle = 'blue';
c.fillRect(70,0,20,150);
c.fillStyle = 'blue';
c.fillRect(0,70,200,20);
c.fillStyle = 'red';
c.fillRect(0,100,60,60);
c.fillStyle = 'red';
c.fillRect(100,0,100,60);
c.fillStyle = 'red';
c.fillRect(100,100,100,60);

