var inp,words,buls,cows,button; 
var number;
var computer;
var player;
var lower;
var result1;
var result2;
var result3;
var y=150;


function setup() {
  createCanvas(window.innerWidth,innerHeight);
  inp=createInput().position(50,50).attribute("placeholder","enter your word")
button=createButton("sumbit").position(60,200);

words=createElement("h2").html("words").position(500,60);
buls=createElement("h2").html("buls").position(700,60);
cows=createElement("h2").html("cows").position(900,60);


number=Math.round(random(0,s.length-1));


computer=s[number]
console.log(computer);
button.mousePressed(complete)
button.style("width","70px")
button.style("height","70px")
button.style("borderRadius","70px")
button.style("background","yellow")





}

function draw() {
  background("red");  



}


function complete(){
  lower=inp.value();
  player=lower.toLowerCase();
console.log(player);
var bn=0;
var cn=0;
if(inp.value().length!=4){
alert("enter only four letter words")
}
if(player.charAt(0)===computer.charAt(0)){
bn=bn+1;

}
if(player.charAt(1)===computer.charAt(1)){
bn=bn+1; 

}
if (player.charAt(2)===computer.charAt(2)){
bn=bn+1;

}
if(player.charAt(3)===computer.charAt(3)){
bn=bn+1;

}
if(player.charAt(0)===computer.charAt(1)||player.charAt(0)===computer.charAt(2)||player.charAt(0)===computer.charAt(3)){
cn=cn+1;

}

if(player.charAt(1)===computer.charAt(0)||player.charAt(1)===computer.charAt(2)||player.charAt(1)===computer.charAt(3)){
  cn=cn+1;
  
  }
  if(player.charAt(2)===computer.charAt(0)||player.charAt(2)===computer.charAt(1)||player.charAt(2)===computer.charAt(3)){
    cn=cn+1;
    
    }
    if(player.charAt(3)===computer.charAt(1)||player.charAt(3)===computer.charAt(2)||player.charAt(3)===computer.charAt(0)){
      cn=cn+1;
      
      }
      
if(inp.value().length===4){
for(var i=0;i<s.length;i=i+1){
  if(s[i].includes(player)){break}

}


if(i<s.length){
result1 = createElement("h2").html(player).position(500,y)
result2 = createElement("h2").html(bn).position(700,y)
result3 = createElement("h2").html(cn).position(900,y)
y=y+70;
}
else{

alert("enter valid word");


}


}
}