//Mateo Agustín Inchazú DNI:43700371 (91427/6)
//Comisión 5
//arte: Richard Anuszkiewicz. The quickening power.1963
//https://artecomplemento.wordpress.com/op-art/
//VIDEO: https://youtu.be/mIVRAcnuDeQ

let cr, ca, cv, maxDia, maxDia2, espacio, centrox, centroy;


function preload() {
  art = loadImage("data/art.png");
}


function setup() {
  createCanvas(800, 400);

  ogvalores();
}


function draw() {
  background(cr);
  image(art, 0, 0, 400, 400);

  // Círculos grandes
  circulogrande();
  // Círculos pequeños
  circulochico();
}


function keyReleased() {
  if (key == 'x') {


    cr = color(random(255), random(255), random(255));
    ca = color(random(255), random(255), random(255));
    cv = color(random(255), random(255), random(255));
    maxDia -= 1;
    maxDia2 += 1;
    espacio = random(10, 50);
  } else if (key == 'r') {
    maxDia = 2;
    maxDia2 = 12;
    espacio = 15;
    cr= color(255, 0, 0);
    ca= color(56, 78, 216);
    cv= color(13, 228, 94);
    centrox = 600;
    centroy = 200;
  }
}


function mouseDragged() {

  centrox = mouseX;
  centroy = mouseY;
  circulo();
}
