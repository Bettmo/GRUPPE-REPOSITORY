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
img.src = "https://cdn.discordapp.com/attachments/1018493490935627776/1018493821941710948/unknown.png"; // setter kilde på bildet
img.onload = () => {
    // Tegner inn bildet med canvas
    c4.drawImage(img, 25, 0, 33.75, 33.75);
}


let gronnland = document.querySelector('#gronnland');
let c5 = gronnland.getContext('2d');

c5.fillStyle = '#D00C33'; // rød firkant
c5.fillRect(0,75,225,150);
c5.fillStyle = '#FFFFFF'; // hvit firkant
c5.fillRect(0,0,225,75);
c5.beginPath(); // hvit halvsirkel
c5.arc(90,75,50,50.25, 1* Math.PI);
c5.fill();
c5.fillstyle = '#FFFFFF';
c5.closePath();
c5.beginPath(); // rød halvsirkel
c5.arc(90,75,50, 40.84, 2 * Math.PI);
c5.closePath();
c5.fillStyle = '#D00C33';
c5.fill();

let japan = document.querySelector('#japan');
let c6 = japan.getContext('2d');

c6.fillStyle = '#FFFFFF'; // hvit
c6.fillRect(1,1,225,150);
c6.beginPath(); // rød sirkel
c6.arc(112.5, 75, 40, 0, 2 * Math.PI);
c6.closePath();
c6.fillStyle = '#BC002D';
c6.fill();

let TYcanvas = document.querySelector('#TY');
let c7 = TYcanvas.getContext('2d');

c7.fillStyle = '#E30A17'; // rød
c7.fillRect(0,0,225,150);
let img2 = new Image(); // oppretter en variabel på bildet
img2.src = "https://cdn.discordapp.com/attachments/1018493490935627776/1018493881035259914/unknown.png"; // setter kilde på bildet
img2.onload = () => {
    // Tegner inn bildet med canvas
    c7.drawImage(img2, 35, 20, 143, 104);
}

let basedcanvas = document.querySelector('#based');
let c8 = basedcanvas.getContext('2d');

c8.fillStyle = '#CC0000'; // rød
c8.fillRect(0,0,225,130);
let img3 = new Image(); // oppretter en variabel på bildet
img3.src = "https://cdn.discordapp.com/attachments/1012068343194341487/1017395953583538307/unknown.png"; // setter kilde på bildet
img3.onload = () => {
    // Tegner inn bildet med canvas
    c8.drawImage(img3, 15, 15, 30, 30);
}

let CUcanvas = document.querySelector('#CU');
let c9 = CUcanvas.getContext('2d');

c9.fillStyle = '#002590'; // blå
c9.fillRect(0,0,225,30);
c9.fillStyle = '#ffffff'; // hvit
c9.fillRect(0,30,225,30);
c9.fillStyle = '#002590'; // blå
c9.fillRect(0,60,225,30);
c9.fillStyle = '#ffffff'; // hvit
c9.fillRect(0,90,225,30);
c9.fillStyle = '#002590'; // blå
c9.fillRect(0,120,225,30); 90.93
c9.fillStyle = '#CC0D0D';
c9.beginPath();
c9.moveTo(0, 0);
c9.lineTo(95, 75);
c9.lineTo(0, 150);
c9.fill();
let img4 = new Image(); // oppretter en variabel på bildet
img4.src = "./star2.png"; // setter kilde på bildet
img4.onload = () => {
    // Tegner inn bildet med canvas
    c9.drawImage(img4, 6,47, 50, 50);
}


let AZcanvas = document.querySelector('#AZ');
let c10 = AZcanvas.getContext('2d');

c10.fillStyle = '#00B5E2';
c10.fillRect(0, 0, 225, 50);
c10.fillStyle = '#EF3340';
c10.fillRect(0, 50, 225, 50);
c10.fillStyle = '#509E2F';
c10.fillRect(0, 100, 225, 50);
let img5 = new Image(); // oppretter en variabel på bildet
img5.src = "https://cdn.discordapp.com/attachments/1018493490935627776/1018493745974476810/unknown.png"; // setter kilde på bildet
img5.onload = () => {
    // Tegner inn bildet med canvas
    c10.drawImage(img5, 90, 60, 48, 34);
}

let DEcanvas = document.querySelector('#Tyskland');
let c11 = DEcanvas.getContext('2d');

c11.fillStyle = '#000000';
c11.fillRect(0, 0, 225, 50);
c11.fillStyle = '#DD0000';
c11.fillRect(0, 50, 225, 50);
c11.fillStyle = '#FFCC00';
c11.fillRect(0, 100, 225, 50);

let NKcanvas = document.querySelector('#NKorea');
let c12 = NKcanvas.getContext('2d');

c12.fillStyle = '#024fa2'; // Blå
c12.fillRect(0, 0, 225, 50);
c12.fillStyle = '#ffffff'; // Hvitt
c12.fillRect(0, 18, 225, 50);
c12.fillStyle = '#ed1c27'; // Rød
c12.fillRect(0, 21, 225, 50);
c12.fillStyle = '#ed1c27'; // Rød
c12.fillRect(0, 51, 225, 50);
c12.fillStyle = '#ffffff'; // Hvitt
c12.fillRect(0, 84, 225, 50);
c12.fillStyle = '#024fa2'; // Blå
c12.fillRect(0, 87, 225, 50);
c12.fillStyle = '#ffffff'; // Hvitt
c12.fillRect(0, 108, 225, 50);
c12.beginPath(); // Lage smexy sirkel
c12.arc(60, 53, 29, 0, 2 * Math.PI);
c12.fill()
c12.fillStyle = '#ffffff';
let img6 = new Image(); // Kommunist stjerne greie
img6.src = "https://www.pngall.com/wp-content/uploads/12/Red-Star-PNG-HD-Image.png"; // setter kilde på bildet
img6.onload = () => {
    // Tegner inn bildet med canvas 
    c12.drawImage(img6, 19, 15, 80, 80);
}

let FRcanvas = document.querySelector('#Frankrike');
let c13 = FRcanvas.getContext('2d');

c13.fillStyle = '#024fa2'; // Blå
c13.fillRect(0, 0, 75, 150);
c13.fillStyle = '#ed1c27'; // Rød
c13.fillRect(150, 0, 75, 150);
c13.fillStyle = '#ffffff'; // Hvit
c13.fillRect(75, 0, 75, 150);

let BEcanvas = document.querySelector('#Benin');
let c14 = BEcanvas.getContext('2d');

c14.fillStyle = '#008850'; // Grønn 
c14.fillRect(0, 0, 75, 150);
c14.fillStyle = '#FCD20F'; // Gul
c14.fillRect(75, 0, 150, 150);
c14.fillStyle = '#E90929'; // Rød
c14.fillRect(75, 75, 150, 150);

let URcanvas = document.querySelector('#USA');
let c15 = URcanvas.getContext('2d');

c15.fillStyle = '#B31942'; // Rød
c15.fillRect(0, 0, 225, 150);
c15.fillStyle = '#FFFFFF'; // Hvitt
c15.fillRect(0, 11.5, 225, 150);
c15.fillStyle = '#B31942'; // Rød
c15.fillRect(0, 23, 225, 150);
c15.fillStyle = '#FFFFFF'; // Hvitt 
c15.fillRect(0, 34.5, 225, 150);
c15.fillStyle = '#B31942'; // Rød
c15.fillRect(0, 46, 225, 150);
c15.fillStyle = '#FFFFFF'; // Hvitt
c15.fillRect(0, 57.5, 225, 150);
c15.fillStyle = '#B31942'; // Rød 
c15.fillRect(0, 69, 225, 150);
c15.fillStyle = '#FFFFFF'; // Hvitt
c15.fillRect(0, 80.5, 225, 150);
c15.fillStyle = '#B31942'; // Rød
c15.fillRect(0, 92, 225, 150);
c15.fillStyle = '#FFFFFF'; // Hvitt 
c15.fillRect(0, 103.5, 225, 150);
c15.fillStyle = '#B31942'; // Rød
c15.fillRect(0, 115, 225, 150);
c15.fillStyle = '#FFFFFF'; // Hvitt stripe
c15.fillRect(0, 126.5, 225, 150);
c15.fillStyle = '#B31942'; // rød stripe
c15.fillRect(0, 138, 225, 150);
let img69 = new Image(); // Ga opp på å lage 50 ind stjerner :derp:
img69.src = "https://freepikpsd.com/file/2019/10/us-flag-stars-png-3-Transparent-Images.png"; // setter kilde på bildet
img69.onload = () => {
    // Tegner inn bildet med canvas 
    c15.drawImage(img69, 0, 0, 100, 80.5);
}



let BUcanvas = document.querySelector('#BU');
let c16 = BUcanvas.getContext('2d');

c16.fillStyle = '#FFFFFF'; // hvit
c16.fillRect(0, 0, 225, 50);
c16.fillStyle = '#00966E'; // grønn
c16.fillRect(0, 50, 225, 50);
c16.fillStyle = '#D62612'; // rød
c16.fillRect(0, 100, 225, 50);



let IRcanvas = document.querySelector('#IR');
let c17 = IRcanvas.getContext('2d');

c17.fillStyle = '#169B62'; // grønn
c17.fillRect(0, 0, 75, 150);
c17.fillStyle = '#FFFFFF'; // Hvit
c17.fillRect(75, 0, 75, 150);
c17.fillStyle = '#FF883E'; // oranjse
c17.fillRect(150, 0, 75, 150);


let PAcanvas = document.querySelector('#PA');
let c18 = PAcanvas.getContext('2d');

c18.fillStyle = '#D52B1E'; // rød
c18.fillRect(0, 0, 225, 50);
c18.fillStyle = '#FFFFFF'; // hvit
c18.fillRect(0, 50, 225, 50);
c18.fillStyle = '#0038A8'; // blå
c18.fillRect(0, 100, 225, 50);

let img70 = new Image(); // oppretter en variabel på bildet
img70.src = "https://cdn.discordapp.com/attachments/1018493490935627776/1018493799204392990/unknown.png"; // setter kilde på bildet
img70.onload = () => {
    // Tegner inn bildet med canvas
    c18.drawImage(img70, 80,50, 50, 50);
}

let PALcanvas = document.querySelector('#PAL');
let c19 = PALcanvas.getContext('2d');

c19.fillStyle = '#0085CA'; // blå
c19.fillRect(1,1,225,150);
c19.beginPath(); // gul sirkel
c19.arc(100, 75, 40, 0, 2 * Math.PI);
c19.closePath();
c19.fillStyle = '#FFD100';
c19.fill();




let ITcanvas = document.querySelector('#IT');
let c20 = ITcanvas.getContext('2d');

c20.fillStyle = '#009246'; // Grønn
c20.fillRect(0, 0, 75, 150);
c20.fillStyle = '#F1F2F1'; // Hvit
c20.fillRect(75, 0, 75, 150);
c20.fillStyle = '#CE2B37'; // Rød
c20.fillRect(150, 0, 75, 150);

let ABcanvas = document.querySelector('#AB');
let c21 = ABcanvas.getContext('2d');

c21.fillStyle = '#000000'; // Sort Stripe
c21.fillRect(0, 0, 225, 150);
c21.fillStyle = '#0072C6'; // Blå stripe
c21.fillRect(0, 57.9, 225, 150);
c21.fillStyle = '#FFFFFF'; // Hvit stripe
c21.fillRect(0, 91.8, 225, 150);
c21.fillStyle = '#CE1126'; //Rød triangel
c21.beginPath();
c21.moveTo(0, 0);
c21.lineTo(112.5, 150);
c21.lineTo(0, 150);
c21.fill();
c21.closePath();
c21.fillStyle = '#CE1126'; //Rød triangel andre side
c21.beginPath();
c21.moveTo(225, 0);
c21.lineTo(112.5, 150);
c21.lineTo(225, 150);
c21.fill();
c21.closePath();
c21.fillStyle = '#FCD116'; //Gull
c21.beginPath(); // Start på soloppgange (Halv Sirkel)
c21.arc(112.5,57.9,25,0, 1* Math.PI,90);
c21.fill();
c21.closePath()



let SYcanvas = document.getElementById("seychelles");
let c22 = SYcanvas.getContext("2d");


c22.beginPath();
c22.moveTo(0,150);
c22.lineTo(60,0);
c22.lineTo(0,0);
c22.closePath();
c22.fillStyle="#003f87"; //blå
c22.fill();

c22.beginPath();
c22.moveTo(0,150);
c22.lineTo(175,0);
c22.lineTo(60,0);
c22.closePath();
c22.fillStyle="#fcd856"; //gul
c22.fill();

c22.beginPath();
c22.moveTo(0,150);
c22.lineTo(225,40);
c22.lineTo(225,0);
c22.lineTo(175,0);
c22.closePath();
c22.fillStyle="#d62828"; //rød
c22.fill();

c22.beginPath();
c22.moveTo(0,150);
c22.lineTo(225,100);
c22.lineTo(225,40);
c22.closePath();
c22.fillStyle="#FFFFFF"; //hvit
c22.fill();

c22.beginPath();
c22.moveTo(0,150);
c22.lineTo(225,150);
c22.lineTo(225,100);
c22.closePath();
c22.fillStyle="#007a3d"; //grønn
c22.fill();

let Bangcanvas = document.querySelector('#Bang');
let c23 = Bangcanvas.getContext('2d');

c23.fillStyle = '#006a4e'; // grønn
c23.fillRect(0,0,250,150);
c23.beginPath(); // rød sirkel
c23.arc(112.5, 75, 50, 0, 2 * Math.PI);
c23.closePath();
c23.fillStyle = '#f42a41';
c23.fill();

let COLcanvas = document.querySelector('#COL');
let c24 = COLcanvas.getContext('2d');

c24.fillStyle = '#FCD116'; //gul
c24.fillRect(0,0,225,75);
c24.fillStyle = '#003893'; //blå
c24.fillRect(0,75,225,37.5);
c24.fillStyle = '#CE1126'; //rød
c24.fillRect(0,112.5,225,37.5);

let CHADcanvas = document.querySelector('#CHAD');
let c25 = CHADcanvas.getContext('2d');

c25.fillStyle = '#002664'; //blå
c25.fillRect(0,0,75,150)
c25.fillStyle = '#FECB00'; //gul
c25.fillRect(75,0,75,150);
c25.fillStyle = '#C60C30'; //rød
c25.fillRect(150,0,75,150);