let canvas = document.getElementById("world")
let ctx = canvas.getContext('2d');
let img = new Image();
img.src="http://pixelartmaker.com/art/46d78f55877c5d2.png";
img.onload = ()=>{
  ctx.drawImage(img, 0,0)
}
