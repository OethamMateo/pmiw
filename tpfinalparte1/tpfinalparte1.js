let dialogo;
let escena = 0;

let botonX, botonY;
let botonWidth = 200;botonHeight = 100;


function setup() {
  
    createCanvas(800, 600);
  background(255);
  botonX = (width - botonWidth) / 2;
  botonY = (height - botonHeight) / 2;  

  cuadro();
  dialogo = "Hola, bienvenido a la novela visual.";
  

}


function draw() {
  
   noFill();
 cuadro();
  textSize(24);
  fill(0);
  text(dialogo, 50, height - 50);

}
