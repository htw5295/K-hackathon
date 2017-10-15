var bg03Width;
var bg03Height;
var bg03Img;
var Ratio;

var bg03Img,menuBtn,facebookBtn,googleBtn,loginBtn,moreDetailBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;
function onload(){

  bg03Img = document.getElementById("bg03");
  menuBtn = document.getElementById("menuBtn");
  facebookBtn = document.getElementById("facebookBtn");
  googleBtn = document.getElementById("googleBtn");
  loginBtn = document.getElementById("loginBtn");
  moreDetailBtn = document.getElementById("moreDetailBtn");
  selectedDodamBtn = document.getElementById("selectedDodamBtn");
  twitterBtn = document.getElementById("twitterBtn");
  unSelectedDiaryBtn = document.getElementById("unSelectedDiaryBtn");
  unSelectedFairytaleBtn = document.getElementById("unSelectedFairytaleBtn");
  unSelectedMypageBtn = document.getElementById("unSelectedMypageBtn");
  unSelectedShopBtn = document.getElementById("unSelectedShopBtn");


  bg03Width = document.body.offsetWidth;
  bg03Height = bg03Width*0.914523252792933;
  Ratio = bg03Width / 3840;

  bg03Img.width=bg03Width;
  bg03Img.height=bg03Height;

  menuBtn.width=menuBtn.naturalWidth*Ratio;
  menuBtn.height=menuBtn.naturalHeight*Ratio;
  menuBtn.style.top=(Ratio*36)+"px";
  menuBtn.style.left=(Ratio*36)+"px";

  googleBtn.width=googleBtn.naturalWidth*Ratio;
  googleBtn.height=googleBtn.naturalHeight*Ratio;
  googleBtn.style.top=(Ratio*36)+"px";
  googleBtn.style.left=(Ratio*1563*2)+"px";

  twitterBtn.width=twitterBtn.naturalWidth*Ratio;
  twitterBtn.height=twitterBtn.naturalHeight*Ratio;
  twitterBtn.style.top=(Ratio*36)+"px";
  twitterBtn.style.left=(Ratio*1563*2)+googleBtn.width+(Ratio*58*2)+"px";

  facebookBtn.width=facebookBtn.naturalWidth*Ratio;
  facebookBtn.height=facebookBtn.naturalHeight*Ratio;
  facebookBtn.style.top=(Ratio*36)+"px";
  facebookBtn.style.left=(Ratio*1563*2)+googleBtn.width+twitterBtn.width+(Ratio*58*2*2)+"px";

  loginBtn.width=loginBtn.naturalWidth*Ratio;
  loginBtn.height=loginBtn.naturalHeight*Ratio;
  loginBtn.style.top=(Ratio*36)+"px";
  loginBtn.style.left=bg03.width-(Ratio*36)-loginBtn.width+"px";

  selectedDodamBtn.width = selectedDodamBtn.naturalWidth*Ratio;
  selectedDodamBtn.height = selectedDodamBtn.naturalHeight*Ratio;
  selectedDodamBtn.style.top = (Ratio*525*2)+"px";
  selectedDodamBtn.style.left = (Ratio*99*2)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+selectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+selectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+selectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

  moreDetailBtn.width = moreDetailBtn.naturalWidth*Ratio;
  moreDetailBtn.height = moreDetailBtn.naturalHeight*Ratio;
  moreDetailBtn.style.top = (Ratio*1220*2)+"px";
  moreDetailBtn.style.left = (Ratio*99*2)+"px";
  }

function onChangeSize(){
  bg03Width = document.body.offsetWidth;
  bg03Height = bg03Width*0.914523252792933;
  Ratio = bg03Width / 3840;

  bg03Img.width=bg03Width;
  bg03Img.height=bg03Height;

  menuBtn.width=menuBtn.naturalWidth*Ratio;
  menuBtn.height=menuBtn.naturalHeight*Ratio;
  menuBtn.style.top=(Ratio*36)+"px";
  menuBtn.style.left=(Ratio*36)+"px";

  googleBtn.width=googleBtn.naturalWidth*Ratio;
  googleBtn.height=googleBtn.naturalHeight*Ratio;
  googleBtn.style.top=(Ratio*36)+"px";
  googleBtn.style.left=(Ratio*1563*2)+"px";

  twitterBtn.width=twitterBtn.naturalWidth*Ratio;
  twitterBtn.height=twitterBtn.naturalHeight*Ratio;
  twitterBtn.style.top=(Ratio*36)+"px";
  twitterBtn.style.left=(Ratio*1563*2)+googleBtn.width+(Ratio*58*2)+"px";

  facebookBtn.width=facebookBtn.naturalWidth*Ratio;
  facebookBtn.height=facebookBtn.naturalHeight*Ratio;
  facebookBtn.style.top=(Ratio*36)+"px";
  facebookBtn.style.left=(Ratio*1563*2)+googleBtn.width+twitterBtn.width+(Ratio*58*2*2)+"px";

  loginBtn.width=loginBtn.naturalWidth*Ratio;
  loginBtn.height=loginBtn.naturalHeight*Ratio;
  loginBtn.style.top=(Ratio*36)+"px";
  loginBtn.style.left=bg03.width-(Ratio*36)-loginBtn.width+"px";

  selectedDodamBtn.width = selectedDodamBtn.naturalWidth*Ratio;
  selectedDodamBtn.height = selectedDodamBtn.naturalHeight*Ratio;
  selectedDodamBtn.style.top = (Ratio*525*2)+"px";
  selectedDodamBtn.style.left = (Ratio*99*2)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+selectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+selectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+selectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

  moreDetailBtn.width = moreDetailBtn.naturalWidth*Ratio;
  moreDetailBtn.height = moreDetailBtn.naturalHeight*Ratio;
  moreDetailBtn.style.top = (Ratio*1220*2)+"px";
  moreDetailBtn.style.left = (Ratio*99*2)+"px";
}
function unSelectedDodamBTNClick() {
  location.href="main.html"
}
function unSelectedDiaryBTNClick(){
  location.href="diary.html";
}
function unSelectedFairytaleBTNClick(){
  location.href="make.jsp";
}
function unSelectedShopBTNClick() {
  location.href="market.html";
}
