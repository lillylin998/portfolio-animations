//color palette
//light purple: H 261, S varies, B 100
// R 159 G 107 B 255
//light green: H 82, S varies, B 100
// R 201 G 255 B 107
//light orange: H 35, S varies, B 100
// R 255 G 193 B 107
//light blue: H 192, S varies, B 100
// R 107 G 255 B 255

let yellow = [252, 217, 121];
let purple =[150,107,255];
let brightyellow = [255, 248, 181];
let green = [201, 255, 107];
let orange = [255, 193, 107];
let blue = [107, 255, 255];
let white = [255,255,255]
let fairies = [];

//milk tea palette lol
let lavender = [227, 223, 255];
let darklavender = [211, 192, 205];
let lightbrown = [177, 153, 148];
let medbrown = [147, 118, 102];
let darkpurple = [61, 58, 75];

let darkblue = [39, 93, 173];
let anotherblue = [171, 169, 195];
let lightgrey = [206, 211, 220];
let snow = [252, 247, 248];
let salmon = [255, 104, 107];

let terracotta = [237, 106, 90];
let columbiablue = [204, 230, 244]
let olivine = [181, 202, 141];
let denimblue = [57, 67, 183];
let champagne = [241, 224, 197];

//blues
let oldlavender = [97, 93, 108];
let glaucous = [111, 138, 183];
let frenchskyblue = [137, 187, 254];
let blizzardblue = [172, 237, 255];
let beaublue = [202, 229, 255];


let colors = [ terracotta, orange, olivine ,columbiablue];

let font;
let chnfont;

let stars = [];
let cnv;

function preload(){
  font = loadFont('https://cdn.jsdelivr.net/gh/lillylin998/portfolio-animations@main/Montserrat-Regular.ttf');
  chnfont = loadFont('https://cdn.jsdelivr.net/gh/lillylin998/portfolio-animations@main/Montserrat-Regular.ttf');
}

function setup() {
  cnv = createCanvas(windowWidth, 700);
  cnv.parent('sketch-holder');
  print('changed');
 // colorMode(HSB);
  angleMode(DEGREES);

      fairies.push(new Dot(width/2,height/2,width/2,colors));
      fairies.push(new Dot(width/2,height/2,width/2-100,colors));
 // fairies.push(new Dot(width/2,height/2,width/2-200,colors));

}

function draw() {
  //background('#efeaff');
  background(39, 39, 39)
  cnv.mouseMoved(drawStars);
  for(let i in stars){
    stars[i].display();
    stars[i].update();
    if(stars[i].x>=width || stars[i].x<=0 || stars[i].y>=height || stars[i].height <=height){
      stars.splice(i,1);
    }
  }
  //background(oldlavender[0],oldlavender[1],oldlavender[2])
  for(let i in fairies){
    fairies[i].display();
    fairies[i].update();
  }

 

  let box = font.textBounds("Hi I'm Lilly",width/2-150,height/2-50,60);
  
  let box2=font.textBounds("I'm a scientist-turned-designer",width/2-450,height/2-50+box.h+20,60);
  let box3=font.textBounds("based in NYC",width/2-200,height/2-50+box.h+box2.h +50,60);
  fill(241, 224, 197);
  box.x=width/2-box.w/2;
  box2.x=width/2-box2.w/2;
  box3.x=width/2-box3.w/2;
  rect(box.x-20, box.y-10, box.w+40, box.h+20); 
  rect(box2.x-20,box2.y,box2.w+40,box2.h+20);
  rect(box3.x-20,box3.y-10,box3.w+40,box3.h+30);
  textSize(60)
  stroke(57, 67, 183)
  strokeWeight(1);
  textFont(font);
  fill(57, 67, 183) //denim blue
  text("Hi I'm Lilly",box.x,box.y+box.h-5);
  text("I'm a scientist-turned-designer",box2.x,box2.y+box2.h);
  text("based in NYC",box3.x,box3.y+box3.h)
  // textFont(chnfont);
  // text('莉莉',width/2,100);

}

function drawStars(){
  stars.push(new Star(mouseX,mouseY,8));
}

class Star{
  constructor(x,y,size){
    this.x=x;
    this.y=y;
    this.d=size;
    this.jitterx=random(-2,2);
    this.jittery=random(-2,2);
  }
  display(){
    fill(255,255,255,90);
    noStroke(0);
    ellipse(this.x,this.y,this.d,this.d);
  }

  update(){
    this.x+=this.jitterx;
    this.y+=this.jittery;
  }
}

class Dot{
  constructor(x,y,size,color){
    this.x=x;
    this.y=y;
    this.vx=random(0.05,0.8);
    this.vy=random(-0.05,-1);
    this.endr=size;
    this.r=size;
    this.color=0;
    this.timer=0;
    this.a = 255;
    this.va = -50;
    this.vva = random(-0.03,-0.01);
  }
  
  display(){
   // fill(this.color[0],this.color[1],this.color[2],this.a);

    while(this.a>0){
      
  
        noStroke();

      if(this.r>=this.endr && this.r <=this.endr+40 || this.color>=colors.length){
         this.color=0;
      } else if(this.r>this.endr+40  && this.r <=this.endr+80){
        this.color=1;
      } else if(this.r>this.endr+80  && this.r <=this.endr+120){
        this.color=2;
      }else if(this.r>this.endr+120  && this.r <=this.endr+160){
        this.color=3;
      }
      //print(this.color)

      // if(this.color >= colors.length){
      //   this.color=0;
      // }
      fill(colors[this.color][0],colors[this.color][1],colors[this.color][2],this.a); 
      ellipse(this.x,this.y,this.r,this.r);  
        strokeWeight(5);
        fill(0);
        point(this.x,this.y);
        this.r+=20;
        this.a += this.va;
      this.va+=this.vva;
      if(this.va<=-60 ||this.va>=-30){
        this.vva*=-1;
      }
    }     
   // this.cc++;

    if(this.a<=0){
      this.a=255;
      this.r=this.endr;
      //  this.va += 10;
    }

    
  }
  
  update(){

  }
}

