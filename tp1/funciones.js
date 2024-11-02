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

function dibujarCirculoRandom(xc, yc, tam) {
  fill(random(255), random(255), random(255));
  circle(xc, yc, tam);
}


function dibujarCirculos(cx, cy, color, maxDiametro, espacio, inicioX, inicioY, diametroFinal) {
  for (let x = inicioX; x < width; x += espacio) {
    for (let y = inicioY; y < height; y += espacio) {
      let distCentro = calcularDistanciaCentro(x, y, cx, cy);
      let diametro = calcularDiametro(distCentro, maxDiametro, diametroFinal);
      fill(color);
      ellipse(x, y, diametro, diametro);
    }
  }
}

function calcularDistanciaCentro(x, y, cx, cy) {
  return dist(x, y, cx, cy);
}

function calcularDiametro(distCentro, maxDiametro, diametroFinal) {
  return map(distCentro, 0, dist(0, 0, centroX, centroY), maxDiametro, diametroFinal);
}
