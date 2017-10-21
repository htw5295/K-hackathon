var mbg06Width;
var mbg06Height;
var Ratio;
function fullscreen() {
    document.documentElement.webkitRequestFullscreen();
    mbg06Img.setAttribute("onClick", "");
}
var mbg06Img,mMenuBtn,mMypageBtn;
var mWriteBtn,mPost01Btn,mPost02Btn,mPost03Btn,mPost04Btn,mPost05Btn,mPost06Btn,div1,div2,div1Empty,div2Empty;
var mLogo,mContactUsBtn,mMenuCloseBtn,mMenuSlide,mMenuBar,mMenuMainBtn,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg06Img = document.getElementById("mbg06");
  mMenuBtn = document.getElementById("mMenuBtn");
  mMypageBtn = document.getElementById("mMypageBtn");

  mWriteBtn = document.getElementById("mWriteBtn");
  mPost01Btn = document.getElementById("mPost01Btn");
  mPost02Btn = document.getElementById("mPost02Btn");
  mPost03Btn = document.getElementById("mPost03Btn");
  mPost04Btn = document.getElementById("mPost04Btn");
  mPost05Btn = document.getElementById("mPost05Btn");
  mPost06Btn = document.getElementById("mPost06Btn");
  div1 = document.getElementById("div1");
  div2 = document.getElementById("div2");
  div1Empty = document.getElementById("div1Empty");
  div2Empty = document.getElementById("div2Empty");

  mMenuSlide = document.getElementById("mMenuSlide");
  mMenuBar = document.getElementById("mMenuBar");
  mMenuMainBtn = document.getElementById("mMenuMainBtn");
  mMenuBarDiaryBtn = document.getElementById("mMenuBarDiaryBtn");
  mMenuBarFairyTaleBtn = document.getElementById("mMenuBarFairyTaleBtn");
  mMenuBarMarketBtn = document.getElementById("mMenuBarMarketBtn");
  mMenuBarMypageBtn = document.getElementById("mMenuBarMypageBtn");
  mMenuBarSettingBtn = document.getElementById("mMenuBarSettingBtn");
  mMenuCloseBtn = document.getElementById("mMenuCloseBtn");
  mLogo = document.getElementById("mLogo");
  mContactUsBtn = document.getElementById("mContactUsBtn");

  resize();
  resizeMenu();
}

function onChangeSize(){
  resize();
  resizeMenu();
}

function resize() {
  mbg06Width = document.body.offsetWidth;
  mbg06Height = mbg06Width*2.33866667;
  Ratio = mbg06Width / 750;

  mbg06Img.width=mbg06Width;
  mbg06Img.height=mbg06Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  mMypageBtn.width=mMypageBtn.naturalWidth*Ratio;
  mMypageBtn.height=mMypageBtn.naturalHeight*Ratio;
  mMypageBtn.style.top=(Ratio*15*2)+"px";
  mMypageBtn.style.right=(Ratio*15*2)+"px";

  mWriteBtn.width = mWriteBtn.naturalWidth*Ratio;
  mWriteBtn.height = mWriteBtn.naturalHeight*Ratio;
  mWriteBtn.style.top = (Ratio*130*2)+"px";
  mWriteBtn.style.right = (Ratio*15*2)+"px";

  mPost01Btn.width = mPost01Btn.naturalWidth*Ratio;
  mPost01Btn.height = mPost01Btn.naturalHeight*Ratio;
  mPost01Btn.style.left = (Ratio*18*2)+"px";

  mPost02Btn.width = mPost02Btn.naturalWidth*Ratio;
  mPost02Btn.height = mPost02Btn.naturalHeight*Ratio;
  mPost02Btn.style.left = (Ratio*(18+(133))*2)+"px";

  mPost03Btn.width = mPost03Btn.naturalWidth*Ratio;
  mPost03Btn.height = mPost03Btn.naturalHeight*Ratio;
  mPost03Btn.style.left = (Ratio*(18+(133*2))*2)+"px";

  mPost04Btn.width = mPost04Btn.naturalWidth*Ratio;
  mPost04Btn.height = mPost04Btn.naturalHeight*Ratio;
  mPost04Btn.style.left = (Ratio*18*2)+"px";

  mPost05Btn.width = mPost05Btn.naturalWidth*Ratio;
  mPost05Btn.height = mPost05Btn.naturalHeight*Ratio;
  mPost05Btn.style.left = (Ratio*(18+(133))*2)+"px";

  mPost06Btn.width = mPost06Btn.naturalWidth*Ratio;
  mPost06Btn.height = mPost06Btn.naturalHeight*Ratio;
  mPost06Btn.style.left = (Ratio*(18+(133*2))*2)+"px";

  div1.style.width = mbg06Width+"px";
  div1.style.height = mPost01Btn.naturalHeight*Ratio+"px";
  div1.style.top = (Ratio*459*2)+"px";

  div2.style.width = mbg06Width+"px";
  div2.style.height = mPost01Btn.naturalHeight*Ratio+"px";
  div2.style.top = (Ratio*744*2)+"px";

  div1Empty.style.width = 1+"px";
  div1Empty.style.height = mPost01Btn.naturalHeight*Ratio+"px";
  div1Empty.style.left = (Ratio*(10+(133*3))*2)+"px";

  div2Empty.style.width = 1+"px";
  div2Empty.style.height = mPost01Btn.naturalHeight*Ratio+"px";
  div2Empty.style.left = (Ratio*(10+(133*3))*2)+"px";
}

function resizeMenu() {
  mMenuSlide.width = document.body.offsetWidth;
  mMenuSlide.height = window.innerHeight;

  mMenuBar.width = document.body.offsetWidth;
  mMenuBar.height = window.innerHeight;

  mMenuMainBtn.width = mMenuMainBtn.naturalWidth*Ratio;
  mMenuMainBtn.height = mMenuMainBtn.naturalHeight*Ratio;
  mMenuMainBtn.style.top = (Ratio*157*2)+"px";
  mMenuMainBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarMypageBtn.width = mMenuBarMypageBtn.naturalWidth*Ratio;
  mMenuBarMypageBtn.height = mMenuBarMypageBtn.naturalHeight*Ratio;
  mMenuBarMypageBtn.style.top = (Ratio*(157+27*2)*2)+"px";
  mMenuBarMypageBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarDiaryBtn.width = mMenuBarDiaryBtn.naturalWidth*Ratio;
  mMenuBarDiaryBtn.height = mMenuBarDiaryBtn.naturalHeight*Ratio;
  mMenuBarDiaryBtn.style.top = (Ratio*(157+27*4)*2)+"px";
  mMenuBarDiaryBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarFairyTaleBtn.width = mMenuBarFairyTaleBtn.naturalWidth*Ratio;
  mMenuBarFairyTaleBtn.height = mMenuBarFairyTaleBtn.naturalHeight*Ratio;
  mMenuBarFairyTaleBtn.style.top = (Ratio*(157+(27*6))*2)+"px";
  mMenuBarFairyTaleBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarMarketBtn.width = mMenuBarMarketBtn.naturalWidth*Ratio;
  mMenuBarMarketBtn.height = mMenuBarMarketBtn.naturalHeight*Ratio;
  mMenuBarMarketBtn.style.top = (Ratio*(157+(27*8))*2)+"px";
  mMenuBarMarketBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarSettingBtn.width = mMenuBarSettingBtn.naturalWidth*Ratio;
  mMenuBarSettingBtn.height = mMenuBarSettingBtn.naturalHeight*Ratio;
  mMenuBarSettingBtn.style.top = (Ratio*(157+(27*10))*2)+"px";
  mMenuBarSettingBtn.style.left = (Ratio*21*2)+"px";

  mMenuCloseBtn.width = mMenuCloseBtn.naturalWidth*Ratio;
  mMenuCloseBtn.Height = mMenuCloseBtn.naturalHeight*Ratio;
  mMenuCloseBtn.style.top = (Ratio*24*2)+"px";
  mMenuCloseBtn.style.left = (Ratio*335*2)+"px";

  mLogo.width = mLogo.naturalWidth*Ratio;
  mLogo.Height = mLogo.naturalHeight*Ratio;
  mLogo.style.top = (Ratio*24*2)+"px";
  mLogo.style.left = (Ratio*21*2)+"px";

  mContactUsBtn.width = mContactUsBtn.naturalWidth*Ratio;
  mContactUsBtn.Height = mContactUsBtn.naturalHeight*Ratio;
  mContactUsBtn.style.top = (Ratio*633*2)+"px";
  mContactUsBtn.style.left = (Ratio*21*2)+"px";
}

function mMenuBtnClick() {
  mMenuSlide.style.display="block";
}
function mMypageBtnClick(){
  location.href="mmypage.html";
}
function mMenuMainBtnClick() {
  location.href="mmain.html";
}
function mMenuBarDiaryBtnClick() {
  location.href="mdiary.html";
}
function mMenuBarFairyTaleBtnClick() {
  location.href="mfairyTaleList.html";
}
function mMenuBarMarketBtnClick() {
  location.href="mmarket.html";
}
function mMenuCloseBtnClick() {
  mMenuSlide.style.display="none";
}
function mWriteBtnClick() {
  location.href="mdiaryWrite.html";
}
function mMoreDetailBtnClick() {
  location.href="mmoreDetail.html"
}
