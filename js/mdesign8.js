var mbg08Width;
var mbg08Height;
var Ratio;

var mbg08Img,mMenuBtn,mMypageBtn;
var writeText,mUpdateBtn;
var menuRatio,mBlurbg,mMenuSlide,mMenuBar,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg08Img = document.getElementById("mbg08");
  mMenuBtn = document.getElementById("mMenuBtn");
  mMypageBtn = document.getElementById("mMypageBtn");

  writeText = document.getElementById("writeText");
  mUpdateBtn = document.getElementById("mUpdateBtn");

  mBlurbg = document.getElementById("mBlurbg");
  mMenuSlide = document.getElementById("mMenuSlide");
  mMenuBar = document.getElementById("mMenuBar");
  mMenuBarDiaryBtn = document.getElementById("mMenuBarDiaryBtn");
  mMenuBarFairyTaleBtn = document.getElementById("mMenuBarFairyTaleBtn");
  mMenuBarMarketBtn = document.getElementById("mMenuBarMarketBtn");
  mMenuBarMypageBtn = document.getElementById("mMenuBarMypageBtn");
  mMenuBarSettingBtn = document.getElementById("mMenuBarSettingBtn");

  resize();
  resizeMenu();
}

function onChangeSize(){
  resize();
  resizeMenu();
}

function resize() {
  mbg08Width = document.body.offsetWidth;
  mbg08Height = mbg08Width*2.33866667;
  Ratio = mbg08Width / 750;

  mbg08Img.width=mbg08Width;
  mbg08Img.height=mbg08Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  mMypageBtn.width=mMypageBtn.naturalWidth*Ratio;
  mMypageBtn.height=mMypageBtn.naturalHeight*Ratio;
  mMypageBtn.style.top=(Ratio*15*2)+"px";
  mMypageBtn.style.right=(Ratio*15*2)+"px";

  writeText.style.top=(Ratio*585*2)+"px";
  writeText.style.left=(Ratio*38*2)+"px";

  mUpdateBtn.width=mUpdateBtn.naturalWidth*Ratio;
  mUpdateBtn.height=mUpdateBtn.naturalHeight*Ratio;
  mUpdateBtn.style.top=(Ratio*774*2)+"px";
  mUpdateBtn.style.left=(Ratio*15*2)+"px";
}

function resizeMenu() {
  menuRatio = 0.430045872;
  mMenuSlide.height = window.innerHeight;
  mMenuSlide.width = mMenuSlide.height*menuRatio;

  mMenuBar.height = window.innerHeight;
  mMenuBar.width = mMenuBar.height*menuRatio;

  mBlurbg.height = window.innerHeight;
  mBlurbg.width = document.body.offsetWidth;

  mMenuBarMypageBtn.width = mMenuBarMypageBtn.naturalWidth*Ratio;
  mMenuBarMypageBtn.height = mMenuBarMypageBtn.naturalHeight*Ratio;
  mMenuBarMypageBtn.style.top = (Ratio*157*2)+"px";
  mMenuBarMypageBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarDiaryBtn.width = mMenuBarDiaryBtn.naturalWidth*Ratio;
  mMenuBarDiaryBtn.height = mMenuBarDiaryBtn.naturalHeight*Ratio;
  mMenuBarDiaryBtn.style.top = (Ratio*(157+27*2)*2)+"px";
  mMenuBarDiaryBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarFairyTaleBtn.width = mMenuBarFairyTaleBtn.naturalWidth*Ratio;
  mMenuBarFairyTaleBtn.height = mMenuBarFairyTaleBtn.naturalHeight*Ratio;
  mMenuBarFairyTaleBtn.style.top = (Ratio*(157+(27*4))*2)+"px";
  mMenuBarFairyTaleBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarMarketBtn.width = mMenuBarMarketBtn.naturalWidth*Ratio;
  mMenuBarMarketBtn.height = mMenuBarMarketBtn.naturalHeight*Ratio;
  mMenuBarMarketBtn.style.top = (Ratio*(157+(27*6))*2)+"px";
  mMenuBarMarketBtn.style.left = (Ratio*21*2)+"px";

  mMenuBarSettingBtn.width = mMenuBarSettingBtn.naturalWidth*Ratio;
  mMenuBarSettingBtn.height = mMenuBarSettingBtn.naturalHeight*Ratio;
  mMenuBarSettingBtn.style.top = (Ratio*(157+(27*8))*2)+"px";
  mMenuBarSettingBtn.style.left = (Ratio*21*2)+"px";
}

function mMenuBtnClick() {
  mMenuSlide.style.display="block";
  mBlurbg.style.display="block";
}
function mMypageBtnClick(){
  location.href="mmypage.html";
}
function mMenuBarDiaryBtnClick() {
  location.href="mdiary.html";
}
function mMenuBarFairyTaleBtnClick() {
  location.href="mrecordFairyTale.html";
}
function mMenuBarMarketBtnClick() {
  location.href="mmarket.html";
}
