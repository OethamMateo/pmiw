function cambiarEscena() {
  if (escena == 1) {

    fill(100, 199, 200);
    cubo();
    cuadro();
    dialogo = "E 1";
  } else if (escena == 2) {
    cuadro();

    fill(244, 100, 100);
    cubo();
    dialogo = "E 2";
  } else if (escena ==3) {
    cuadro();
    fill(200, 200, 200);
    cubo();
    dialogo = "E 3";
  }
}

function mouseClicked() {

  if (escena == 3) {
    fill(255, 100, 255);
    rect(botonX, botonY, botonWidth, botonHeight);
  } else if (mouseX > botonX && mouseX < botonX + botonWidth &&
    mouseY > botonY && mouseY < botonY + botonHeight) {

    escena = 0 ;
  }
}
