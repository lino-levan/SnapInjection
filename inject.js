let canvas = document.getElementById("world")
let ctx = canvas.getContext('2d');
canvas.parentNode.removeChild(canvas);

canvas = document.createElement("canvas");
ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

let show = false;
let menu = 0;
let changeMenu = false;
let alpha = 0;
let timer = 0;

document.documentElement.requestFullscreen();
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let img = new Image();
img.src="https://github.com/lino-levan/SnapInjection/raw/master/logoInject.png";
img.onload = ()=>{
  show=true;
}

let playerimg = new Image();
playerimg.src="https://github.com/lino-levan/SnapInjection/raw/master/heart.png";

document.body.style="padding:0;margin:0;width:100vw;height:100vh;position:fixed;overflow:hidden;"
function loop(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  ctx.fillStyle="black";
  ctx.fillRect(0,0,canvas.width,canvas.height)
  if(show){
    if(changeMenu){
      if(alpha>0){
        alpha-=0.02;
      }else{
        menu++;
        changeMenu=false;
      }
    }else{
      if(alpha<1){
        alpha+=0.01;
      }
    }
    if(alpha<0){
      alpha=0;
    }
    ctx.globalAlpha=alpha;
    if(menu===0){
      ctx.drawImage(img, (canvas.width-img.width)/2,(canvas.height-img.height)/2);
      ctx.fillStyle="white";
      ctx.font = "10px Arial";
      ctx.fillText("(Press Any Button)",(canvas.width-ctx.measureText("(Press Enter)").width)/2,2*canvas.height/3);
    }else if(menu===1){
      ctx.fillStyle="white";
      ctx.font = "20px Arial";
      ctx.fillText("Please select a file.",(canvas.width-ctx.measureText("Please select a file.").width)/2,canvas.height/5);

      ctx.lineWidth=4;
      for(let i = 0;i<3;i++){
        ctx.strokeStyle="rgb(140,140,140)";
        ctx.fillStyle="rgb(140,140,140)";
        if(i==0){
          ctx.strokeStyle="white";
          ctx.fillStyle="white";
        }
        ctx.strokeRect((canvas.width-600)/2,canvas.height/5+15+(115*i),600,100);
        ctx.fillText("Empty",(canvas.width-600)/2+100,canvas.height/5+60+(115*i));
      }
      ctx.fillText("Copy",(canvas.width-600)/2,canvas.height/5+370);
      ctx.fillText("Erase",(canvas.width-600)/2+200,canvas.height/5+370);

      //player
      ctx.drawImage(playerimg, (canvas.width-600)/2+30,canvas.height/5+15+(50+25)/2,25,25);
    }else{
      timer++;
      if(timer>200){
        location.reload();
      }
      ctx.font = "50px Arial";
      ctx.fillStyle="white";
      ctx.fillText("No... Not Yet",(canvas.width-ctx.measureText("No... Not Yet").width)/2+((Math.random()*100)-50),canvas.height/2+((Math.random()*100)-50));
    }
  }
  setTimeout(loop,1000/60);
}
loop();

document.onkeydown = (e)=>{
  if(menu===0){
    changeMenu=true;
  }else if(menu===1){
    changeMenu=true;
  }else{
    location.reload();
  }
}
