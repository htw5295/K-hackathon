var mbg01Width;
var mbg01Height;
var mbg01Img;
var mAboutUsBtn;
var Ratio;
var mLetsStartBtn;

function onload(){
  mbg01Img = document.getElementById("mbg01");
  mAboutUsBtn = document.getElementById("mAboutUsBtn");
  mLoginBtn = document.getElementById("mLoginBtn");
  mLetsStartBtn = document.getElementById("mLetsStartBtn");

  resize();
  document.body.webkitRequestFullscreen();
}

function onChangeSize(){
  resize();
}

function resize() {
  mbg01Width = document.body.offsetWidth;
  mbg01Height = mbg01Width*1.77866667;
  Ratio = mbg01Width / 750;

  mbg01Img.width=mbg01Width;
  mbg01Img.height=mbg01Height;
  mAboutUsBtn.width=mAboutUsBtn.naturalWidth*Ratio;
  mAboutUsBtn.height=mAboutUsBtn.naturalHeight*Ratio;
  mAboutUsBtn.style.top=(Ratio*15*2)+"px";
  mAboutUsBtn.style.left=(Ratio*15*2)+"px";

  mLoginBtn.width=mLoginBtn.naturalWidth*Ratio;
  mLoginBtn.height=mLoginBtn.naturalHeight*Ratio;
  mLoginBtn.style.top=(Ratio*15*2)+"px";
  mLoginBtn.style.right=(Ratio*15*2)+"px";

  mLetsStartBtn.width = mLetsStartBtn.naturalWidth*Ratio;
  mLetsStartBtn.height = mLetsStartBtn.naturalHeight*Ratio;
  mLetsStartBtn.style.top=(Ratio*535*2)+"px";
  mLetsStartBtn.style.left=(Ratio*86*2)+"px";
}

function mSignInBtnClick() {
  location.href="mlogin.html"
}
function mLetsStartBtnClick(){
  location.href="mmain.html";
}
