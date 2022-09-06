let NOcanvas = document.querySelector('#Norge');
let c1 = NOcanvas.getContext('2d');

c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(0,0,60,60);
c1.fillStyle = '#002868'; // blå
c1.fillRect(70,0,20,150);
c1.fillStyle = '#002868'; // blå
c1.fillRect(0,70,200,20);
c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(0,100,60,60);
c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(100,0,100,60);
c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(100,100,100,60);

let IScanvas = document.querySelector('#IS');
let c2 = IScanvas.getContext('2d');

c2.fillStyle = '#024f9c'; // blå
c2.fillRect(0,0,60,60);
c2.fillStyle = '#dc1e35'; // rød
c2.fillRect(70,0,20,150);
c2.fillStyle = '#dc1e35'; // rød
c2.fillRect(0,70,200,20);
c2.fillStyle = '#024f9c'; // blå
c2.fillRect(0,100,60,60);
c2.fillStyle = '#024f9c'; // blå
c2.fillRect(100,0,100,60);
c2.fillStyle = '#024f9c'; // blå
c2.fillRect(100,100,100,60);

let SEcanvas = document.querySelector('#SE');
let c3 = SEcanvas.getContext('2d');

c3.fillStyle = '#006AA7';
c3.fillRect(0,0,60,60);
c3.fillStyle = '#FECC02';
c3.fillRect(70,0,20,150);
c3.fillStyle = '#FECC02';
c3.fillRect(0,70,200,20);
c3.fillStyle = '#006AA7';
c3.fillRect(0,100,60,60);
c3.fillStyle = '#006AA7';
c3.fillRect(100,0,100,60);
c3.fillStyle = '#006AA7';
c3.fillRect(100,100,100,60);

let CARcanvas = document.querySelector('#CAR');
let c4 = CARcanvas.getContext('2d');

c4.fillStyle = '#003082'; // blå
c4.fillRect(0,0,225,37.5);
c4.fillStyle = '#ffffff'; // hvit
c4.fillRect(0,37.5,225,37.5);
c4.fillStyle = '#289728'; // grønn
c4.fillRect(0,75,225,37.5);
c4.fillStyle = '#ffce00'; // gul
c4.fillRect(0,112.5,225,37.5);
c4.fillStyle = '#d21034'; // rød
c4.fillRect(93.75,0,37.5,225);
let img = new Image(); // oppretter en variabel på bildet
img.src = "./star.png"; // setter kilde på bildet
img.onload = () => {
    // Tegner inn bildet med canvas
    c4.drawImage(img, 25, 0, 33.75, 33.75);
}
