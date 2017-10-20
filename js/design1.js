var bg01Width;
var bg01Height;
var bg01Img;
var aboutUsBtn;
var Ratio;
var letsStartBtn;

function onload(){
  if (screen.width <= 750) {
    location.href = "mintro.html";
  }
  bg01Img = document.getElementById("bg01");
  aboutUsBtn = document.getElementById("aboutUsBtn");
  contackUsBtn = document.getElementById("contackUsBtn");
  letsStartBtn = document.getElementById("letsStartBtn");
  bg01Width = document.body.offsetWidth;
  bg01Height = bg01Width*0.5625;
  Ratio = bg01Width / 3840;

  bg01Img.width=bg01Width;
  bg01Img.height=bg01Height;
  aboutUsBtn.width=aboutUsBtn.naturalWidth*Ratio;
  aboutUsBtn.height=aboutUsBtn.naturalHeight*Ratio;
  aboutUsBtn.style.top=(Ratio*36*3)+"px";
  aboutUsBtn.style.left=(Ratio*36*3)+"px";

  contackUsBtn.width=contackUsBtn.naturalWidth*Ratio;
  contackUsBtn.height=contackUsBtn.naturalHeight*Ratio;
  contackUsBtn.style.top=(Ratio*36*3)+"px";
  contackUsBtn.style.left=bg01Img.width - (Ratio*36*3)-contackUsBtn.width+"px";

  letsStartBtn.width = letsStartBtn.naturalWidth*Ratio;
  letsStartBtn.height = letsStartBtn.naturalHeight*Ratio;
  letsStartBtn.style.top = bg01Img.height-(Ratio*90)-letsStartBtn.height+"px";
  letsStartBtn.style.left = (bg01Img.width/2)-(letsStartBtn.width/2)+"px";
}

function onChangeSize(){
  bg01Width = document.body.offsetWidth;
  bg01Height = bg01Width*0.5625;
  Ratio = bg01Width / 3840;

  bg01Img.width=bg01Width;
  bg01Img.height=bg01Height;
  aboutUsBtn.width=aboutUsBtn.naturalWidth*Ratio;
  aboutUsBtn.height=aboutUsBtn.naturalHeight*Ratio;
  aboutUsBtn.style.top=(Ratio*36*3)+"px";
  aboutUsBtn.style.left=(Ratio*36*3)+"px";

  contackUsBtn.width=contackUsBtn.naturalWidth*Ratio;
  contackUsBtn.height=contackUsBtn.naturalHeight*Ratio;
  contackUsBtn.style.top=(Ratio*36*3)+"px";
  contackUsBtn.style.left=bg01Img.width - (Ratio*36*3)-contackUsBtn.width+"px";

  letsStartBtn.width = letsStartBtn.naturalWidth*Ratio;
  letsStartBtn.height = letsStartBtn.naturalHeight*Ratio;
  letsStartBtn.style.top = bg01Img.height-(Ratio*90)-letsStartBtn.height+"px";
  letsStartBtn.style.left = (bg01Img.width/2)-(letsStartBtn.width/2)+"px";
}
function letsStartBtnClick(){
  location.href="login.html";
}
