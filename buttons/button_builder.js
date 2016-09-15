var canvasBox = document.getElementById("canvas");
var val = "blue";
canvasBox.style.background = "#00458c";
var ctx = canvasBox.getContext("2d");
var canvasWidth = 320;
var canvasHeight = 50;
var cornerRadius = 10;
var maxLength = 320;

// Checks which color is selected and changes val accordingly
$('input:radio[name=color]').change(function() {
  if(this.value == "blue") {
    val = "blue";
  } else if (this.value == "gold") {
    val = "gold";
    canvasBox.style.background = "#FFC500";
  }
});

// Takes the text from the input
$("#buttonText").bind("keyup blur paste", function() {
  var canvasText = $(this).val().toUpperCase();
  if (canvasText === "") {
    canvasText = "SAMPLE BUTTON";
  }
  render(canvasText);
});

// Creates the download link
$("#downloadLink").click(function() {
  $(this).attr("href", canvasBox.toDataURL("image/png"));
});

// Writes the text and changes the width
function render(renderText) {
  var textLen = Math.round(ctx.measureText(renderText).width);
  var addNum = 0;
  
  if (textLen < 100) addNum = Math.round((-0.2)*textLen + 47);
  
  if(textLen <= 5) canvasWidth = 35;
  else canvasWidth = Math.round(2.1*textLen + addNum); 
  
  if (canvasWidth < maxLength) {
    canvasFill(canvasWidth);
    ctx.fillText(renderText, canvasWidth/2, 34);
  } else {
    canvasFill(maxLength);
    ctx.fillText("TEXT IS TOO LONG", 160, 34);
  }
  ctx.restore();
}

// Draws canvas with specific width and round edges 
// The 0s are the start/end x and y of the canvas
function roundRect(width) {
  ctx.beginPath();
  ctx.moveTo(cornerRadius, 0);
  ctx.lineTo(width - cornerRadius, 0);
  ctx.quadraticCurveTo(width, 0, width, cornerRadius);
  ctx.lineTo(width, canvasHeight - cornerRadius);
  ctx.quadraticCurveTo(width, canvasHeight, width - cornerRadius, canvasHeight);
  ctx.lineTo(cornerRadius, canvasHeight);
  ctx.quadraticCurveTo(0, canvasHeight, 0, canvasHeight - cornerRadius);
  ctx.lineTo(0, cornerRadius);
  ctx.quadraticCurveTo(0, 0, cornerRadius, 0);
  ctx.closePath();
}

// Clears the canvas, sets the font style
function canvasFill(canWidth) {
  canvasBox.width = canWidth;
  if(val == 'blue') {
    ctx.fillStyle = "#00458c";
  } else if (val == 'gold') {
    ctx.fillStyle = "#FFC500";
  }
  roundRect(canWidth);
  ctx.fill();
  ctx.save();
  ctx.textAlign="center";
  ctx.font = "400 20px Oswald, Arial, -system, sans-serif";
  if(val == 'blue') {
    ctx.fillStyle = "white";
  } else if (val == 'gold') {
    ctx.fillStyle = "#00458c"; 
  }
}
