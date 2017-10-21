var mbg13Width;
var mbg13Height;
var Ratio;

var mbg13Img,mBackBtn,mPayNowBtn;
function onload(){
  mbg13Img = document.getElementById("mbg13");
  mBackBtn = document.getElementById("mBackBtn");
  mPayNowBtn = document.getElementById("mPayNowBtn");

  resize();
  document.body.webkitRequestFullscreen();
}

function onChangeSize(){
  resize();
}

function resize() {
  mbg13Width = document.body.offsetWidth;
  mbg13Height = mbg13Width*1.77866667;
  Ratio = mbg13Width / 750;

  mbg13Img.width=mbg13Width;
  mbg13Img.height=mbg13Height;

  mBackBtn.width=mBackBtn.naturalWidth*Ratio;
  mBackBtn.height=mBackBtn.naturalHeight*Ratio;
  mBackBtn.style.top=(Ratio*15*2)+"px";
  mBackBtn.style.left=(Ratio*15*2)+"px";

  mPayNowBtn.width=mPayNowBtn.naturalWidth*Ratio;
  mPayNowBtn.height=mPayNowBtn.naturalHeight*Ratio;
  mPayNowBtn.style.left=(Ratio*164*2)+"px";
  mPayNowBtn.style.bottom=(Ratio*30*2)+"px";
}

function mBackBtnClick() {
  window.history.back();
}
function mPayNowBtnClick(){
  location.href="mdiary.html";
}
