
let angle = 0;


function rotateLine() {
 
  const line = document.getElementById('line');

 
  angle += 2;


  line.style.transform = `rotate(${angle}deg)`;

  
  if (angle >= 360) {
    angle -= 360;
  }
}


setInterval(rotateLine, 20);
