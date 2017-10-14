var bg08Width;
var bg08Height;
var bg08Img;
var aboutUsBtn;
var Ratio;
var letsStartBtn;

function onload(){
  bg08Img = document.getElementById("bg08");
  bg08Width = document.body.offsetWidth;
  bg08Height = bg08Width*0.5625;
  Ratio = bg08Width / 3840;

  bg08Img.width=bg08Width;
  bg08Img.height=bg08Height;
}

function onChangeSize(){
  bg08Width = document.body.offsetWidth;
  bg08Height = bg08Width*0.5625;
  Ratio = bg08Width / 3840;

  bg08Img.width=bg08Width;
  bg08Img.height=bg08Height;
}
