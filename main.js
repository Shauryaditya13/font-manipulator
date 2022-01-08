var noseY=0;
var noseX=0;

var rightwristX=0;
var leftwristX=0;

var difference=0;

function setup() {
    canvas=createCanvas(600,400);
    canvas.position(600,300);
    video = createCapture(VIDEO);
    video.size(600,400);
    video.position(20,300);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getposes);
}

function modelloaded() {
    console.log("poseNet is initialized");
}

function getposes(results) {
      if(results.length>0){
          console.log(results);
          noseX=results[0].pose.nose.x;
          noseY=results[0].pose.nose.y;
          rightwristX=results[0].pose.rightWrist.x;
          leftwristX=results[0].pose.leftWrist.x;
          difference=floor(leftwristX-rightwristX);
      }
}

function draw() {
    background("gold");
    textSize(difference);
    fill("darkgreen");
    text("Shauryaditya",noseX,noseY);
    document.getElementById("font_size").innerHTML="Font Size: "+difference+"px";
}