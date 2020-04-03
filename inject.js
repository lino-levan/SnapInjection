let canvas = document.getElementById("world")
let ctx = canvas.getContext('2d');
canvas.parentNode.removeChild(canvas);

canvas = document.createElement("canvas");
ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

let show = false;
let img = new Image();
img.src="https://github.com/lino-levan/SnapInjection/raw/master/logoInject.png";
img.onload = ()=>{
  show=true;
}

function loop(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  ctx.fillStyle="black";
  ctx.fillRect(0,0,canvas.width,canvas.height)
  if(show){
    ctx.drawImage(img, (canvas.width-img.width)/2,0);
  }
  setTimeout(loop,100);
}
loop();
