let items= [];
let itemCount= 70;
let pipImg, chimImg, turtImg;

function preload(){
  pipImg= loadImage('assets/piplup.png');
  chimImg= loadImage('assets/chimchar.png');
  turtImg= loadImage('assets/turtwig.png');
}

function setup() {
  createCanvas(500, 500);

  for(let i=0; i<itemCount; i++)
  {
    items.push({ 
      type: random(["pip","chim","turt"]),
      x: random(width),
      y: random(height),
      size: 30,
      veloX: random(1,1.5),
      veloY: random(1,1.5)
    })
  }
}

function draw() {
  background(220);

  for(let i=0; i<items.length; i++){
    let item= items[i];
    item.x+= item.veloX;
    item.y+= item.veloY;

  if(item.x < 0 || item.x > width)
    item.veloX*= -1;
  if(item.y < 0 || item.y > height)
    item.veloY*= -1;

  drawItem(item.type, item.size, item.x, item.y);

  function drawItem(type, size, x, y)
  {
    imageMode(CENTER);
    if(type == "pip")
      image(pipImg, x, y, size, size);
    else if (type == "chim")
      image(chimImg, x, y, size, size);
    else if (type == "turt")
      image(turtImg, x, y, size, size);
  }
}}
