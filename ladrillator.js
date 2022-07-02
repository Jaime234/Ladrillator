var canvas;
var ctx;
var barHeight = 20; // Altura de la pala
var barWidth = 200; // Anchura de la pala
var radius = 10; // Radio de la pelota
var x = 640; // Coordenada X de la pelota
var y = 690; // Coordenada Y de la pelota
var a = 0; // Coordenada X de la esfera de powerup
var b = 0;// Coordenada Y de la esfera de powerup
var aux = false; // Comprueba si el ladrillo con powerup ha sido activado
var aux2 = 0; // Almacena el valor del powerup a activar
barX = 540; // Posición de la pala
barAcc = 0;
barAccK = 0.8;
dx = 0; // movimiento eje X de la pelota
dy = -8; // movimiento eje Y de la pelota
fy = 4; // movimiento eje Y de la esfera de powerup
var vidas = 2; // Número de vidas del jugador
color_ball = "red"; // Color de la pelota
var rightPressed = false;
var leftPressed = false;
nivel = 1; // Nivel del juego
//Número de clicks de los botones de play, sonido y de música
var cSnd = 0;
var cStart = 0;
var cMsc = 0;
//variable que sirve para activar/desactivar el modo cine
var cine = false;

// Inicialización de la música del juego
var hit_brick = document.createElement("AUDIO");
var hit_wall = document.createElement("AUDIO");
var fondo = document.createElement("AUDIO");
var game_over = document.createElement("AUDIO");
var up = document.createElement("AUDIO");
var down = document.createElement("AUDIO");
var level_change = document.createElement("AUDIO");
hit_brick.setAttribute("src", "../media/hit_brick.wav");
hit_wall.setAttribute("src", "../media/hit_wall.wav");
fondo.setAttribute("src", "../media/fondo.wav");
fondo.loop = true;
game_over.setAttribute("src", "../media/game_over.wav");
level_change.setAttribute("src", "../media/level_change.mp3");
up.setAttribute("src", "../media/PowerUp.mp3");
down.setAttribute("src", "../media/PowerDown.wav");
// Imagen de powerup
var img = new Image();
img.src = "../img/powerup.png";

//Esta funcion jquery se encarga del correcto funcionamiento de todos los botones, así como de cambiar de música y de fondo en cada nivel.
$(function() {
  $('#jugar').on('click', function() {
    $('#music').prop('disabled',false);
    music.style.cursor = "pointer";
    music.style.opacity = 1;
    cStart++;
    if(cStart%2 != 0){
      document.getElementById("startImg").src = '../img/pause.png';
    switch (nivel) {
      case 0:
        canvas.style.backgroundImage = 'url(../media/PurpleGrid.gif)';
        break;
      case 1:
        canvas.style.backgroundImage = 'url(../media/PurpleGrid.gif)';
        break;
      case 2:
        canvas.style.backgroundImage = 'url(../media/PolarLoop.gif)';
        break;
      case 3:
        canvas.style.backgroundImage = 'url(../media/Gyro.gif)';
        break;
      case 4:
        canvas.style.backgroundImage = 'url(../media/Cristal.gif)';
        break;
      case 5:
        canvas.style.backgroundImage = 'url(../media/blueLight.gif)';
        break;
      default:
        canvas.style.backgroundImage = 'url(../media/PurpleGrid.gif)';
        break;
      }
    }else{
      document.getElementById("startImg").src = '../img/kisspng-computer-icons-button-play-boton-5b4b517fa58c63.5670839615316627196781.png';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (nivel) {
      case 0:
        canvas.style.backgroundImage = 'url(../media/PurpleGridStop2.png)';
        break;
      case 1:
        canvas.style.backgroundImage = 'url(../media/PurpleGridStop2.png)';
        break;
      case 2:
        canvas.style.backgroundImage = 'url(../media/PolarLoopStop2.png)';
        break;
      case 3:
        canvas.style.backgroundImage = 'url(../media/GyroStop2.png)';
        break;
      case 4:
        canvas.style.backgroundImage = 'url(../media/cristalStop2.png)';
        break;
      case 5:
        canvas.style.backgroundImage = 'url(../media/blueLightStop2.png)';
        break;
      default:
        canvas.style.backgroundImage = 'url(../media/PurpleGridStop2.png)';
        break;
    }}
  });
  $('#sonido').on('click', function() {
    if (cSnd % 2 == 0) {
      document.getElementById("sndImg").src = '../img/kisspng-computer-icons-sound-icon-volume-sound-icon-5adbb45313f9c2.3817654115243479870818.png';
      fondo.volume = 0;
      hit_brick.volume = 0;
      hit_wall.volume = 0;
      game_over.volume = 0;
      level_change.volume = 0;
      up.volume = 0;
      down.volume = 0;
    } else {
      document.getElementById("sndImg").src = '../img/kisspng-computer-icons-sound-icon-loudspeaker-volume-5b3902b947bb19.8998510115304629052938.png';
      fondo.volume = 0.8;
      hit_brick.volume = 0.5;
      hit_wall.volume = 0.5;
      game_over.volume = 0.5;
      level_change.volume = 0.5;
      up.volume = 0.5;
      down.volume = 0.5;
    }
    cSnd++;
  });
  $('#completa').on('click', function() {
    if(cine == false){
    $('#cabecera').fadeOut(200);
    document.body.style.backgroundColor = "black";
    cine = true;
  }else{
    $('#cabecera').fadeIn(200);
    document.body.style.backgroundColor = "rgb(53, 53, 53)";
    cine = false;
  }
    });
    $('#music').on('click', function() {
      cMsc++;
      if (cMsc > 6){
        cMsc = 0;
      }
      switch (cMsc) {
        case 0:
          fondo.setAttribute("src", "../media/fondo.wav");
          fondo.play();
          break;
        case 1:
          fondo.setAttribute("src", "../media/fondo8.mp3");
          fondo.play();
          break;
        case 2:
          fondo.setAttribute("src", "../media/fondo2.mp3");
          fondo.play();
          break;
        case 3:
          fondo.setAttribute("src", "../media/fondo4.mp3");
          fondo.play();
          break;
        case 4:
          fondo.setAttribute("src", "../media/fondo5.mp3");
          fondo.play();
          break;
        case 5:
          fondo.setAttribute("src", "../media/fondo6.mp3");
          fondo.play();
          break;
        case 6:
          fondo.setAttribute("src", "../media/fondo7.wav");
          fondo.play();
          break;
      }});


});

//Cuando pulsas el botón el juego se inicia/para
function start() {
  if(cStart%2 == 0){
  fondo.play();
  if (cSnd % 2 == 0) {
    fondo.volume = 0.5;
  }
  init();
  interval = setInterval(function() {
    pintar();
  }, 17);
  interval;
}else {
    clearInterval(interval);
  }
}
//Estas dos funciones DOM se encargan de poder mover la pala
document.addEventListener('keydown', (e) => {
  if (e.code == "ArrowRight") {
    rightPressed = true;
  } else if (e.code == "ArrowLeft") {
    leftPressed = true;
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code == "ArrowRight") {
    rightPressed = false;
  } else if (e.code == "ArrowLeft") {
    leftPressed = false;
  }
});

//inicializamos el canvas
init = function() {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
  }
}

// Objeto pelota
var ball = function(colour, radio, x, y) {
  ctx.fillStyle = colour;
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, 2 * Math.PI, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// Objeto pala
var bar = function(colour1, colour2) {
  ctx.strokeStyle = colour1;
  ctx.fillStyle = colour2;
  ctx.beginPath();
  ctx.rect(barX, canvas.height - barHeight, barWidth, barHeight);
  ctx.fill();
  ctx.closePath();
}

// Objeto ladrillo
var box = function(r, c, vidas) {
  this.vidas = vidas;
  this.r = r; // fila
  this.c = c; // columna
  this.roto = false; // Comprueba si está roto o no.
  this.powerup = 0; // valor de su powerup. 0 = no powerup
}
// Array con todos los ladrillos, aunque se inicialicen rotos.
var bloques = new Array(6);
for (let i = 0; i < 6; i++) {
  bloques[i] = new Array(7);
}
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 7; j++) {
    bloques[i][j] = new Array(6);
  }
}
// Creación de los ladrillos, dependiendo del nivel formarán una estructura u otra. A algunos se le asigna un powerup.
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 7; j++) {
    for (let k = 0; k < 6; k++) {
      switch (k) { //cada caso es un nivel, se pueden ampliar, cambiando la k al numero total de niveles
        case 0:
          if (i == 2 && j == 4) {
            bloques[i][j][k] = new box(i, j, 1);
          }else {
            bloques[i][j][k] = new box(i, j, 0);
            bloques[i][j][k].roto = true;
          } // es importante rellenar todos los ladrillos, los que no hagan falta se inicializan rotos
          break;
        case 1:
          if ((i == 1 && j < 4) || (i == 3 && j > 2) || (i == 5 && j < 4)) {
            bloques[i][j][k] = new box(i, j, 2);
            if (i == 5 && j == 3 && k == 1) {
              bloques[i][j][k].powerup = 3;
            }
          } else if ((i == 1 && j == 4) || (i == 3 && j == 2) || (i == 5 && j == 4)) {
            bloques[i][j][k] = new box(i, j, 1);
            if (i == 1 && j == 4 && k == 1) {
              bloques[i][j][k].powerup = 1;
            }
          } else {
            bloques[i][j][k] = new box(i, j, 0);
            bloques[i][j][k].roto = true;
          }
          break;
        case 2:
          if ((i == 0 && (j == 0 || j == 6)) || (i == 1 && (j == 1 || j == 5)) || (i == 2 && (j == 2 || j == 4)) || (i == 3 && j == 3)) {
            bloques[i][j][k] = new box(i, j, 3);
            if (i == 0 && j == 0 && k == 2) {
              bloques[i][j][k].powerup = 2;
            }
          } else if ((i == 1 && (j == 0 || j == 6)) || (i == 2 && (j == 1 || j == 5)) || (i == 3 && (j == 2 || j == 4)) || (i == 4 && j == 3)) {
            bloques[i][j][k] = new box(i, j, 2);
          } else if ((i == 2 && (j == 0 || j == 6)) || (i == 3 && (j == 1 || j == 5)) || (i == 4 && (j == 2 || j == 4)) || (i == 5 && j == 3)) {
            bloques[i][j][k] = new box(i, j, 1);
            if (i == 2 && j == 0 && k == 2) {
              bloques[i][j][k].powerup = 1;
            }
          } else {
            bloques[i][j][k] = new box(i, j, 0);
            bloques[i][j][k].roto = true;
          }
          break;
        case 3:
          if ((i == 0 && j == 3) || (i == 1 && (j == 2 || j == 4)) || (i == 2 && j == 3)) {
            bloques[i][j][k] = new box(i, j, 4);
            if (i == 0 && j == 3 && k == 3) {
              bloques[i][j][k].powerup = 2;
            }
          } else if ((i == 3 && (j == 1 || j == 5)) || (i == 4 && (j == 0 || j == 2 || j == 4 || j == 6)) || (i == 5 && (j == 1 || j == 5))) {
            bloques[i][j][k] = new box(i, j, 2);
          } else if (i == 1 && j == 3) {
            bloques[i][j][k] = new box(i, j, 1);
            if (i == 1 && j == 3 && k == 3) {
              bloques[i][j][k].powerup = 3;
            }
          } else if (i == 4 && (j == 1 || j == 5)) {
            bloques[i][j][k] = new box(i, j, 3);
          } else {
            bloques[i][j][k] = new box(i, j, 0);
            bloques[i][j][k].roto = true;
          }
          break;
        case 4:
          if (i == 0 || i == 5 || (j == 0 && i < 3) || (j == 6 && i > 2)) {
            bloques[i][j][k] = new box(i, j, 2);
            if (i == 0 && j == 2 && k == 4) {
              bloques[i][j][k].powerup = 2;
            }
          } else if ((i == 2 || i == 3) && j == 3) {
            bloques[i][j][k] = new box(i, j, 4);
            if (i == 2 && j == 3 && k == 4) {
              bloques[i][j][k].powerup = 1;
            }
          } else {
            bloques[i][j][k] = new box(i, j, 0);
            bloques[i][j][k].roto = true;
          }
          break;
        case 5:
          if (i == 5) {
            bloques[i][j][k] = new box(i, j, 4);
            if (i == 5 && j == 3 && k == 5) {
              bloques[i][j][k].powerup = 3;
            }
          }else if (i == 4 && (j != 3 || j != 5)){
            bloques[i][j][k] = new box(i, j, 3);
            if (i == 4 && j == 2 && k == 5) {
              bloques[i][j][k].powerup = 2;
            }
          }else if ((i == 3 && (j == 0 || j == 4 || j == 6)) || (i == 2 && j == 1)){
            bloques[i][j][k] = new box(i, j, 2);
          }else if (i == 2 && (j == 0 || j == 6)){
            bloques[i][j][k] = new box(i, j, 1);
          }else if (i == 0 && (j == 0 || j == 4)){
            bloques[i][j][k] = new box(i, j, 1);
          } else {
            bloques[i][j][k] = new box(i, j, 0);
            bloques[i][j][k].roto = true;
          }
          break;
      }
    }
  }
}
// Esta función se encarga de ver qué valor tenía el powerup del ladrillo, y hacer el cambio correspondiente durante 12 segundos
function powerup(kind) {
  aux = false;
  up.play(); // Música de powerup
  switch (kind) {
    case 1:
      barWidth = 300; // Ensanchar la pala
      setTimeout(function(){ barWidth = 200; down.play(); }, 12000); // En 12 segundos el valor retomará su estado inicial, y sonará música de powerdown
      break;
    case 2:
      radius = 15; // Ensanchar la pelota
      setTimeout(function(){ radius =  10; down.play(); }, 12000); // En 12 segundos el valor retomará su estado inicial, y sonará música de powerdown
      break;
    case 3:
      color_ball = "white"; // Eliminar todas las vidas del ladrillo de un golpe
      setTimeout(function(){ color_ball = "red"; down.play(); }, 12000); // En 12 segundos el valor retomará su estado inicial, y sonará música de powerdown
      break;
  }
}

// Función encargada de dibujar un ladrillo. Caben 7 columnas y 25 filas, con col y row le asignas su posición dentro del canvas. El tamaño no varía.
function createBrick(row, col, colour) {
  ctx.strokeStyle = "black";
  ctx.fillStyle = colour;
  ctx.beginPath();
  ctx.rect((col * canvas.width / 7) + 5, (row * canvas.height / 25) + 5, canvas.width / 7 - 5, canvas.height / 25 - 5);
  ctx.fill();
  ctx.closePath();
}
// Función que se activa cuando has perdido.
function gameover() {
  clearInterval(interval);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas.
  canvas.style.backgroundImage = 'url(../media/GameOver2.gif)'; // Se aplica un fondo de GameOver.
  $('#music').prop('disabled',true);
  down.volume = 0;
}

//Función que comprueba y gestiona el cambio de niveles
function endgame() {
  var fin = true;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (bloques[i][j][nivel].roto == false) fin = false;
    }
  }
  if (fin == true) {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundImage = 'url(../media/NextLevel2.gif)';
    nivel++;
    aux = false;
    level_change.play();
    level_change.onended = function(){
      str1 = "Vidas restantes: "
      str2 = (vidas + 1).toString();
      str = str1.concat(str2);
      alert("Nuevo nivel \n\n"+str);
    }
    setTimeout(Reanudar, 7500);
    function Reanudar() {
    init();
    interval = setInterval(function() {
      pintar();
    }, 17);
    interval;
    switch (nivel) {
      case 0:
        canvas.style.backgroundImage = 'url(../media/PurpleGrid.gif)';
        break;
      case 1:
        canvas.style.backgroundImage = 'url(../media/PurpleGrid.gif)';
        break;
      case 2:
        canvas.style.backgroundImage = 'url(../media/PolarLoop.gif)';
        break;
      case 3:
        canvas.style.backgroundImage = 'url(../media/Gyro.gif)';
        break;
      case 4:
        canvas.style.backgroundImage = 'url(../media/Cristal.gif)';
        break;
      case 5:
        canvas.style.backgroundImage = 'url(../media/blueLight.gif)';
        break;
      default:
        canvas.style.backgroundImage = 'url(../media/PurpleGrid.gif)';
        break;

      }
    }
    if (nivel == 6) {
      nivel = 0;
      alert("Fin del juego");
      document.location.reload();
    }
    x = 640;
    y = 690;
    barX = 540;
    dx = 0;
    dy = -8;
  }

}
// Función que pinta los ladrillos si no están rotos, y de un color diferente dependiendo del número de vidas.
function pintarLadrillos() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (bloques[i][j][nivel].roto == false) {
        switch (bloques[i][j][nivel].vidas) {
          case 1:
            createBrick(bloques[i][j][nivel].r, bloques[i][j][nivel].c, "red");
            break;
          case 2:
            createBrick(bloques[i][j][nivel].r, bloques[i][j][nivel].c, "orange");
            break;
          case 3:
            createBrick(bloques[i][j][nivel].r, bloques[i][j][nivel].c, "yellow");
            break;
          case 4:
            createBrick(bloques[i][j][nivel].r, bloques[i][j][nivel].c, "green");
            break;
          
        }
      }
    }
  }
}
//Función que se encarga de que la bola rebote contra el canvas
function reboteCanvas() {
  if (x <= radius || x >= canvas.width - radius) {
    dx = -dx;
    hit_wall.pause();
    hit_wall.currentTime = 0;
    hit_wall.play();
  }
  barCenter = barX + barWidth / 2;
  if (y <= 10) {
    dy = -dy;
    hit_wall.pause();
    hit_wall.currentTime = 0;
    hit_wall.play();
  } else if (((y >= canvas.height - barHeight && y < canvas.height) && x - radius <= barX + barWidth && x + radius >= barX)) {
    if (x <= barX + barWidth && x >= barX) {
      dy = -dy;
    } else if(x >= barX + barWidth && x <= barX && vidas == 0){
      dx = -2 * dx;
      fondo.pause();
      game_over.play();
      setTimeout(gameover, 200);
    }
    hit_wall.pause();
    hit_wall.currentTime = 0;
    hit_wall.play();
    if (x <= barCenter) {
      dx = 0;
      dx += (x - barCenter) * 0.01;
    } else  {
      dx = 0;
      dx += (x - barCenter) * 0.01;
    }
    if (leftPressed == true && barX > -4) {
      dx += barAcc / 3;
      if (dx < -5) dx = -5;
    }
    if (rightPressed == true && barX < 1084 && dx) {
      dx += barAcc / 3;
      if (dx > 8) dx = 8;
    }
  } else if (y >= canvas.height && vidas == 0) {
    $('#jugar').prop('disabled',true);
    fondo.pause();
    hit_wall.pause();
    hit_brick.pause();
    game_over.play();
    setTimeout(gameover, 1000);
  }else if(y >= canvas.height && vidas > 0){
    x = 640;
    y = 690;
    barX = 540;
    dx = 0;
    dy = -8;
    vidas--;
  }
}
// Función encargada de ver si la pelota rebota con algún ladrillo
function reboteLadrillos() {
  // Se utiliza la música del rebote como timer
  if (hit_brick.currentTime > 1) {
    hit_brick.currentTime = 0;
  }
  // Recorremos todos los bloques
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
       // Si han pasado más de 25 ms desde que tocó el último ladrillo (para evitar bugs) ó si hace más de un segundo que no se toca ninguno
      if (hit_brick.currentTime > 0.0025 || hit_brick.currentTime == 0) {
        if (bloques[i][j][nivel].roto == false) { // Que el ladrillo no esté roto
          // Comprueba que la pelota esté en contacto con el ladrillo
          if (((dy < 0 && y - radius <= (bloques[i][j][nivel].r + 1) * canvas.height / 25 && y - radius >= (bloques[i][j][nivel].r) * canvas.height / 25) || (dy > 0 && y + radius >= (bloques[i][j][nivel].r) * canvas.height / 25 && y + radius <= (bloques[i][j][nivel].r + 1) * canvas.height / 25)) && x - radius <= (bloques[i][j][nivel].c + 1) * canvas.width / 7 && x + radius >= bloques[i][j][nivel].c * canvas.width / 7) {
            if (color_ball == "white"){ // Si se ha activado el powerup que elimina todas las vidas
              bloques[i][j][nivel].vidas = 0;
            }else{
              bloques[i][j][nivel].vidas -= 1;
            }
            hit_brick.pause();
            hit_brick.currentTime = 0;
            hit_brick.play(); // Música de golpe con ladrillo
            if (bloques[i][j][nivel].vidas == 0) {
              bloques[i][j][nivel].roto = true;
              if (bloques[i][j][nivel].powerup != 0) { // Comprueba si tenía powerup
                a = (bloques[i][j][nivel].c + 0.5) * canvas.width / 7;
                b = bloques[i][j][nivel].r * canvas.height / 25;
                aux = true;
                aux2 = bloques[i][j][nivel].powerup;
              }
            }
            // Comprueba si el rebote es horizontal o vertical. Y sale del bucle, para evitar el cancelamiento de movimientos
            if ((dx > 0 && x <= bloques[i][j][nivel].c * canvas.width / 7) || (dx < 0 && x >= (bloques[i][j][nivel].c + 1) * canvas.width / 7)) {
              if (bloques[i][j+1][nivel].roto == false && dx < 0){
                dy = -dy;
                i = 7;
                j = 8;
              }
              dx = -dx;
            } else {
              dy = -dy;
              i = 7;
              j = 8;
            }
          }
        }
      }
    }
  }
}
//Función que se encarga de cambiar la velocidad de la barra según los eventos correspondientes a el pulsado de teclas
function movimientoBarra() {
  if (barX >= 1080 || barX <= 0) {
    barAcc = 0;
  }
  if (rightPressed == true && barX <= canvas.width - barWidth) {
    if (barAcc < 12) {
      barAcc += barAccK;
    } else {
      barAcc = 12;
    }
    barX += barAcc;
  } else if (leftPressed == true && barX >= 0) {
    if (barAcc > -12) {
      barAcc -= barAccK;
    } else {
      barAcc = -12;
    }
    barX += barAcc;
  }
  if (rightPressed == false && leftPressed == false) {
    if (barAcc > 0) {
      barAcc -= barAccK;
    }
    if (barAcc < 0) {
      barAcc += barAccK;
    }
    if (barAcc <= 2 * barAccK && barAcc >= -2 * barAccK) {
      barAcc = 0;
    }
    barX += barAcc;
  }
}
// Pinta el canvas entero
function pintar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
  bola = new ball(color_ball, radius, x, y);
  barra = new bar("black", "pink");
  pintarLadrillos();
  if (aux == true) { // Comprueba si tiene que pintar esfera de powerup
    ctx.drawImage(img, a - 24/2, b - 25/2); // Imagen de powerup con forma de esfera
    if (b >= canvas.height - barHeight && a - 10 <= barX + barWidth && a + 10 >= barX) { // Si la pala "coge" la esfera de powerup
      powerup(aux2);
    }
    b += fy;
    if (b >= canvas.height) { // Si no se coge la esfera y se pasa el límite del canvas
      aux = false;
    }
  }
  x += dx;
  y += dy;
  reboteCanvas();
  reboteLadrillos();
  endgame();
  movimientoBarra();
}
