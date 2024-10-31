
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
  

  dibujarCirculosGrandes(centroX, centroY, colorGrande, maxDiametroGrande, espacioCirculos);
  dibujarCirculosPequeños(centroX, centroY, colorPeque, maxDiametroPeque, espacioCirculos);
}

function keyReleased() {
  if (key == 'x') {
    fondoColor = color(random(255), random(255), random(255));
    colorGrande = color(random(255), random(255), random(255));
    colorPeque = color(random(255), random(255), random(255));
    maxDiametroGrande = max(1, maxDiametroGrande - 1);
    maxDiametroPeque = max(1, maxDiametroPeque + 1);
    espacioCirculos = random(10, 50);
  } else if (key == 'r') {
    valoresIniciales();
  }
}

function mouseDragged() {
  centroX = mouseX;
  centroY = mouseY;
  dibujarCírculoRandom(random(400, 800) + 25, random(400), 15);
}
