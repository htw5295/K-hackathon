var mbg05Width;
var mbg05Height;
var Ratio;

var mbg05Img,mMenuBtn,mMypageBtn;
var mBuyBtn,mcFairyTale01Btn,mcFairyTale02Btn,mcFairyTale03Btn,mtFairyTale01Btn,mtFairyTale02Btn,mtFairyTale03Btn,mcDiv,mtDiv;
var menuRatio,mBlurbg,mMenuSlide,mMenuBar,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg05Img = document.getElementById("mbg05");
  mMenuBtn = document.getElementById("mMenuBtn");
  mMypageBtn = document.getElementById("mMypageBtn");

  mBuyBtn = document.getElementById("mBuyBtn");
  mcFairyTale01Btn = document.getElementById("mcFairyTale01Btn");
  mcFairyTale02Btn = document.getElementById("mcFairyTale02Btn");
  mcFairyTale03Btn = document.getElementById("mcFairyTale03Btn");
  mtFairyTale01Btn = document.getElementById("mtFairyTale01Btn");
  mtFairyTale02Btn = document.getElementById("mtFairyTale02Btn");
  mtFairyTale03Btn = document.getElementById("mtFairyTale03Btn");
  mcDiv = document.getElementById("mcDiv");
  mtDiv = document.getElementById("mtDiv");

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
  mbg05Width = document.body.offsetWidth;
  mbg05Height = mbg05Width*2.62933333;
  Ratio = mbg05Width / 750;

  mbg05Img.width=mbg05Width;
  mbg05Img.height=mbg05Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  mMypageBtn.width=mMypageBtn.naturalWidth*Ratio;
  mMypageBtn.height=mMypageBtn.naturalHeight*Ratio;
  mMypageBtn.style.top=(Ratio*15*2)+"px";
  mMypageBtn.style.right=(Ratio*15*2)+"px";

  mBuyBtn.width = mBuyBtn.naturalWidth*Ratio;
  mBuyBtn.height = mBuyBtn.naturalHeight*Ratio;
  mBuyBtn.style.top = (Ratio*324*2)+"px";
  mBuyBtn.style.left = (Ratio*15*2)+"px";

  mcFairyTale01Btn.width = mcFairyTale01Btn.naturalWidth*Ratio;
  mcFairyTale01Btn.height = mcFairyTale01Btn.naturalHeight*Ratio;
  mcFairyTale01Btn.style.left = (Ratio*15*2)+"px";

  mcFairyTale02Btn.width = mcFairyTale02Btn.naturalWidth*Ratio;
  mcFairyTale02Btn.height = mcFairyTale02Btn.naturalHeight*Ratio;
  mcFairyTale02Btn.style.left = (Ratio*(15+(145))*2)+"px";

  mcFairyTale03Btn.width = mcFairyTale03Btn.naturalWidth*Ratio;
  mcFairyTale03Btn.height = mcFairyTale03Btn.naturalHeight*Ratio;
  mcFairyTale03Btn.style.left = (Ratio*(15+(145*2))*2)+"px";

  mtFairyTale01Btn.width = mtFairyTale01Btn.naturalWidth*Ratio;
  mtFairyTale01Btn.height = mtFairyTale01Btn.naturalHeight*Ratio;
  mtFairyTale01Btn.style.left = (Ratio*15*2)+"px";

  mtFairyTale02Btn.width = mtFairyTale02Btn.naturalWidth*Ratio;
  mtFairyTale02Btn.height = mtFairyTale02Btn.naturalHeight*Ratio;
  mtFairyTale02Btn.style.left = (Ratio*(15+(145))*2)+"px";

  mtFairyTale03Btn.width = mtFairyTale03Btn.naturalWidth*Ratio;
  mtFairyTale03Btn.height = mtFairyTale03Btn.naturalHeight*Ratio;
  mtFairyTale03Btn.style.left = (Ratio*(15+(145*2))*2)+"px";

  mcDiv.style.width = mbg05Width+"px";
  mcDiv.style.height = mcFairyTale01Btn.naturalHeight*Ratio+"px";
  mcDiv.style.top = (Ratio*533*2)+"px";

  mtDiv.style.width = mbg05Width+"px";
  mtDiv.style.height = mtFairyTale01Btn.naturalHeight*Ratio+"px";
  mtDiv.style.top = (Ratio*805*2)+"px";
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
