//Mateo Agustín Inchazú DNI:43700371 (91427/6)
//Comisión 5
//arte: Richard Anuszkiewicz. The quickening power.1963
//https://artecomplemento.wordpress.com/op-art/
//VIDEO: https://youtu.be/1v_ML1aRG0w



let fondoColor, colorGrande, colorPeque, maxDiametroGrande, maxDiametroPeque, espacioCirculos, centroX, centroY;
let imagenArte;


function setup() {
  createCanvas(800, 400);
    imagenArte = loadImage("data/art.png");
  valoresIniciales();
}


function draw() {
  background(fondoColor);
 image(imagenArte, 0, 0, 400, 400);
  
  dibujarCirculos(centroX, centroY, colorGrande, maxDiametroGrande, espacioCirculos, 407, 7, 25);
  dibujarCirculos(centroX, centroY, colorPeque, maxDiametroPeque, espacioCirculos, 415, 14, -8);
  
  
}





function keyReleased() {
  if (key == 'x') {
    fondoColor = color(random(255), random(255), random(255));
    colorGrande = color(random(255), random(255), random(255));
    colorPeque = color(random(255), random(255), random(255));
    
    espacioCirculos = random(10, 50);
  } else if (key == 'r') {
    valoresIniciales();
  }
}


function mouseDragged() {
  centroX = mouseX;
  centroY = mouseY;
 
  dibujarCirculoRandom(random(400, 800) + 25, random(400), 15);
}
