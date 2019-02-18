function drawArr(){
  elmax = 10;
  for (el of arr) {
    fill(25*el, 250/el, 0);
    rect(0, arr.indexOf(el)*height/arr.length,el*width/elmax, height/arr.length);
  }
}
var arr = [];
var func = (x, y) => x > y;
function random(min, max) {
  return min + Math.random() * (max - min + 1);
}
for(var i = 0; i < 50; i++){
  arr.push(random(1, 10));
}
function setup(){
  createCanvas(600, 600);
  frameRate(10);
}
function draw(){
  background(0);
  drawArr(arr)
  for(var i = 0; i < arr.length-1; i++){
    if(func(arr[i], arr[i + 1])){
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
}
document.getElementById('restart').addEventListener('click', () => {
  arr = [];
  for(var i = 0; i < 50; i++){
    arr.push(random(1, 10));
  }
});
