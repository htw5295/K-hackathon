var bg12Width;
var bg12Height;
var bg12Img;
var aboutUsBtn;
var Ratio;
var letsStartBtn;

function onload(){
  bg12Img = document.getElementById("bg12");
  aboutUsBtn = document.getElementById("aboutUsBtn");
  payNowBtn = document.getElementById("payNowBtn");

  bg12Width = document.body.offsetWidth;
  bg12Height = bg12Width*0.5625;
  Ratio = bg12Width / 3840;

  bg12Img.width=bg12Width;
  bg12Img.height=bg12Height;
  aboutUsBtn.width=aboutUsBtn.naturalWidth*Ratio;
  aboutUsBtn.height=aboutUsBtn.naturalHeight*Ratio;
  aboutUsBtn.style.top=(Ratio*36*3)+"px";
  aboutUsBtn.style.left=(Ratio*36*3)+"px";

  payNowBtn.width=payNowBtn.naturalWidth*Ratio;
  payNowBtn.height=payNowBtn.naturalHeight*Ratio;
  payNowBtn.style.top=(Ratio*803*2)+"px";
  payNowBtn.style.left=(Ratio*1383*2)+"px";
}

function onChangeSize(){
  bg12Width = document.body.offsetWidth;
  bg12Height = bg12Width*0.5625;
  Ratio = bg12Width / 3840;

  bg12Img.width=bg12Width;
  bg12Img.height=bg12Height;
  aboutUsBtn.width=aboutUsBtn.naturalWidth*Ratio;
  aboutUsBtn.height=aboutUsBtn.naturalHeight*Ratio;
  aboutUsBtn.style.top=(Ratio*36*3)+"px";
  aboutUsBtn.style.left=(Ratio*36*3)+"px";

    payNowBtn.width=payNowBtn.naturalWidth*Ratio;
    payNowBtn.height=payNowBtn.naturalHeight*Ratio;
    payNowBtn.style.top=(Ratio*803*2)+"px";
    payNowBtn.style.left=(Ratio*1383*2)+"px";
}
function backBtnClick(){
  location.href="market.html";
}
