function valoresIniciales() {
  fondoColor = color(255, 0, 0);
  colorGrande = color(56, 78, 216);
  colorPeque = color(13, 228, 94);
  maxDiametroGrande = 2;
  maxDiametroPeque = 12;
  espacioCirculos = 15;
  centroX = 600;
  centroY = 200;
}

function dibujarCírculoRandom(x, y, diametro) {
  fill(random(255), random(255), random(255));
  circle(x, y, diametro);
}


function dibujarCirculosGrandes(centroX, centroY, color, maxDiametro, espacio) {
  for (let x = 407; x < width; x += espacio) {
    for (let y = 7; y < height; y += espacio) {
      let distCentro = dist(x, y, centroX, centroY);
      let diametro = map(distCentro, 0, dist(0, 0, centroX, centroY), maxDiametro, 25);
      fill(color);
      ellipse(x, y, diametro, diametro);
    }
  }
}


function dibujarCirculosPequeños(centroX, centroY, color, maxDiametro, espacio) {
  for (let x = 415; x < width; x += espacio) {
    for (let y = 14; y < height; y += espacio) {
      let distCentro = dist(x, y, centroX, centroY);
      let diametroPeque = map(distCentro, 0, dist(0, 0, centroX, centroY), maxDiametro, -8);
      fill(color);
      ellipse(x, y, diametroPeque, diametroPeque);
    }
  }
}
