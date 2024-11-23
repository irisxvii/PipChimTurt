let items= [];
let itemCount= 50;

function setup() {
  createCanvas(400, 400);

  for(let i=0; i<itemCount; i++){
    items.push({ 
      x: random(width),
      y: random(height),
      size: 50,
      veloX: random(1,3),
      veloY: random(1,3)
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

  fill(100, 150, 255);
  noStroke();
  ellipse(item.x, item.y, item.size);
}}
