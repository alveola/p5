
// let xspacing = 16; // Distance between each horizontal location
// let w; // Width of entire wave
// let theta = 0.0; // Start angle at 0
// let amplitude = 75.0; // Height of wave
// let period = 500.0; // How many pixels before the wave repeats
// let dx; // Value for incrementing x
// let yvalues; // Using an array to store height values for the wave

// function setup() {
//   createCanvas(710, 600);
//   w = width + 16;
//   dx = (TWO_PI / period) * xspacing;
//   yvalues = new Array(floor(w / xspacing));
// }

// function draw() {
//   background(0);
//   calcWave();
//   renderWave();
// }

// function calcWave() {
//   // Increment theta (try different values for
//   // 'angular velocity' here)
//   theta += 0.02;

//   // For every x value, calculate a y value with sine function
//   let x = theta;
//   for (let i = 0; i < yvalues.length; i++) {
//     yvalues[i] = sin(x) * amplitude;
//     x += dx;
//   }
// }

// function renderWave() {
//   noStroke();
//   fill(255);
//   // A simple way to draw the wave with an ellipse at each location
//   for (let x = 0; x < yvalues.length; x++) {
//     ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
//   }
// }

/**
 * Sine Wave
 * by Daniel Shiffman.  
 * 
 * Render a simple sine wave. 
 */
 
 let xspacing = 8;   // How far apart should each horizontal location be spaced
 let w;              // Width of entire wave
 let theta = 0.0;  // Start angle at 0
 let amplitude = 135.0;  // Height of wave
 let period = 350.0;  // How many pixels before the wave repeats
 let dx;  // Value for incrementing X, a function of period and xspacing
 let yvalues;  // Using an array to store height values for the wave
 let yv;
 let yvlen;
 
 function setup() {
  createCanvas(1000, 500);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvlen = w/xspacing;
  //yvalues = new let[w/xspacing];
 }
 
 function draw() {
   background(0);
   //calcWave();
   //renderWave();
   displayWave();
 }
 
 function displayWave() {
   // Increment theta (try different values for 'angular velocity' here
   theta += 0.01;
   noStroke();
   fill(255);
 
   // For every x value, calculate a y value with sine function
   let x = theta;
   //for (int i = 0; i < yvalues.length; i++) {
   for (let i = 0; i < yvlen; i++) {
     //yvalues[i] = sin(x)*amplitude;
     yv = sin(x)*amplitude;
     // A simple way to draw the wave with an ellipse at each location
     switch (i) {
       case 10:
       case 50:
       case 60:
         //ellipse(i*xspacing, height/2+yvalues[i], 6, 6);
         fill(136, 255, 0);
         ellipse(i*xspacing, height/2+yv, 12, 12);
         fill(255);
         break;
       default:
         //ellipse(i*xspacing, height/2+yvalues[i], 2, 2);
         ellipse(i*xspacing, height/2+yv, 4, 4);
         break;
     }
     x+=dx;
   }
 }
 
 