var hr,mn,sc;
var hrAngle,mnAngle,scAngle;



function setup(){

  createCanvas(400,400);

  angleMode(DEGREES);

}

function draw(){

background(0);

translate(200,200);
rotate(-90);

hr = hour();
mn = minute();
sc = second();

strokeWeight(8);
noFill();

stroke("red");
scAngle = map(sc,0,60,0,360);
arc(0,0,300,300,0,scAngle);

push();
rotate(scAngle);
stroke("red");
strokeWeight(8);
line(0,0,100,0);
pop();

stroke("green");
mnAngle = map(mn,0,60,0,360);
arc(0,0,280,280,0,mnAngle);

push();
rotate(mnAngle);
stroke("green");
strokeWeight(8);
line(0,0,100,0);
pop();

stroke("blue");
hrAngle = map(hr % 12 ,0,12,0,360);
arc(0,0,260,260,0,hrAngle);

push();
rotate(hrAngle);
stroke("blue");
strokeWeight(8);
line(0,0,100,0);
pop();

}