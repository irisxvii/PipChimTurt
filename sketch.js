let items= [];
let itemCount= 35;
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
      size: random(25,70),
      veloX: random([-1, 1]) *random(0.5,1.5),
      veloY: random([-1, 1]) *random(0.5,1.5)
    })
  }
}

function draw() {
  background(220,220,220,25);

  for(let i=0; i<items.length; i++){
    let item= items[i];
    item.x+= item.veloX;
    item.y+= item.veloY;

    noStroke();
    if (item.type === "pip") fill(135, 206, 250, 150); 
    else if (item.type === "chim") fill(240, 128, 128, 150); 
    else if (item.type === "turt") fill(144, 238, 144, 150); 
    ellipse(item.x, item.y, item.size / 2);

  //makes them bounce if they hit a wall
  if(item.x < 0 || item.x > width)
    item.veloX*= -1;
  if(item.y < 0 || item.y > height)
    item.veloY*= -1;

  drawItem(item.type, item.size, item.x, item.y);

  //checking for collisions
  for (let j = i + 1; j < items.length; j++) {
    let oponent = items[j];
    if (dist(item.x, item.y, oponent.x, oponent.y)< item.size/2+ oponent.size/2)
      handleCollision(item, oponent);
  }

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

function handleCollision(item1, item2) //piplup beats chimchar, chimchar beats turtwig, turtwig beats piplup
{
  if (item1.type === "pip" && item2.type === "chim" || item1.type === "chim" && item2.type === "pip")
  {
    item1.type = "pip";
    item2.type = "pip";
  }

  if (item1.type === "chim" && item2.type === "turt" || item1.type === "turt" && item2.type === "chim") 
  {
    item1.type = "chim";
    item2.type = "chim";
  } 

  if (item1.type === "turt" && item2.type === "pip" || item1.type === "pip" && item2.type === "turt") {
    item1.type = "turt";
    item2.type = "turt";
  }
}