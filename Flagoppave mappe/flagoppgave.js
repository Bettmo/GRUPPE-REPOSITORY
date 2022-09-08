let NOcanvas = document.querySelector('#Norge');
let c1 = NOcanvas.getContext('2d');

c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(0,0,60,60);
c1.fillStyle = '#002868'; // blå v
c1.fillRect(70,0,20,150);
c1.fillStyle = '#002868'; // blå h
c1.fillRect(0,70,220,20);
c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(0,100,60,60);
c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(100,0,120,60);
c1.fillStyle = '#EF2B2D'; // rød
c1.fillRect(100,100,120,60);

let IScanvas = document.querySelector('#IS');
let c2 = IScanvas.getContext('2d');

c2.fillStyle = '#024f9c'; // blå
c2.fillRect(0,0,60,60);
c2.fillStyle = '#dc1e35'; // rød v
c2.fillRect(70,0,20,150);
c2.fillStyle = '#dc1e35'; // rød h
c2.fillRect(0,70,217,20);
c2.fillStyle = '#024f9c'; // blå
c2.fillRect(0,100,60,60);
c2.fillStyle = '#024f9c'; // blå
c2.fillRect(100,0,117,60);
c2.fillStyle = '#024f9c'; // blå
c2.fillRect(100,100,117,60);

let SEcanvas = document.querySelector('#SE');
let c3 = SEcanvas.getContext('2d');

c3.fillStyle = '#006AA7'; // blå
c3.fillRect(0,0,75,60);
c3.fillStyle = '#FECC02'; // gul v
c3.fillRect(60,0,30,150);
c3.fillStyle = '#FECC02'; // gul h
c3.fillRect(0,60,240,30);
c3.fillStyle = '#006AA7'; // blå
c3.fillRect(0,90,60,75);
c3.fillStyle = '#006AA7'; // blå
c3.fillRect(90,0,150,60);
c3.fillStyle = '#006AA7'; // blå
c3.fillRect(90,90,150, 60);

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


let gronnland = document.querySelector('#gronnland');
let c5 = gronnland.getContext('2d');

c5.fillStyle = 'red'; // rød firkant
c5.fillRect(0,75,225,150);
c5.fillStyle = 'white'; // hvit firkant
c5.fillRect(0,0,225,75);
c5.beginPath(); // hvit halvsirkel
c5.arc(90,75,50,50.25, 1* Math.PI);
c5.fill();
c5.fillstyle = 'white';
c5.closePath();
c5.beginPath(); // rød halvsirkel
c5.arc(90,75,50, 40.84, 2 * Math.PI);
c5.closePath();
c5.fillStyle = 'red';
c5.fill();

let japan = document.querySelector('#japan');
let c6 = japan.getContext('2d');

c6.fillStyle = 'white'; // hvit
c6.fillRect(1,1,225,150);
c6.beginPath(); // rød sirkel
c6.arc(112.5, 75, 40, 0, 2 * Math.PI);
c6.closePath();
c6.fillStyle = 'red';
c6.fill();

let TYcanvas = document.querySelector('#TY');
let c7 = TYcanvas.getContext('2d');

c7.fillStyle = 'red'; // rød
c7.fillRect(0,0,225,150);
let img2 = new Image(); // oppretter en variabel på bildet
img2.src = "./tyrkia.png"; // setter kilde på bildet
img2.onload = () => {
    // Tegner inn bildet med canvas
    c7.drawImage(img2, 35, 20, 143, 104);
}

let basedcanvas = document.querySelector('#based');
let c8 = basedcanvas.getContext('2d');

c8.fillStyle = 'red'; // rød
c8.fillRect(0,0,225,130);
let img3 = new Image(); // oppretter en variabel på bildet
img3.src = "https://cdn.discordapp.com/attachments/1012068343194341487/1017395953583538307/unknown.png"; // setter kilde på bildet
img3.onload = () => {
    // Tegner inn bildet med canvas
    c8.drawImage(img3, 15, 15, 30, 30);
}