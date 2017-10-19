var mbg03Width;
var mbg03Height;
var Ratio;

var mbg03Img,mMenuBtn,mMypageBtn,mMoreDetailBtn,mMoveBtn1,mMoveBtn2,mMoveBtn3;
var menuRatio,mBlurbg,mMenuSlide,mMenuBar,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg03Img = document.getElementById("mbg03");
  mMenuBtn = document.getElementById("mMenuBtn");
  mMypageBtn = document.getElementById("mMypageBtn");
  mMoreDetailBtn = document.getElementById("mMoreDetailBtn");
  mMoveBtn1 = document.getElementById("mMoveBtn1");
  mMoveBtn2 = document.getElementById("mMoveBtn2");
  mMoveBtn3 = document.getElementById("mMoveBtn3");
  //menubar
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
  mbg03Width = document.body.offsetWidth;
  mbg03Height = mbg03Width*2.38933333;
  Ratio = mbg03Width / 750;

  mbg03Img.width=mbg03Width;
  mbg03Img.height=mbg03Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  mMypageBtn.width=mMypageBtn.naturalWidth*Ratio;
  mMypageBtn.height=mMypageBtn.naturalHeight*Ratio;
  mMypageBtn.style.top=(Ratio*15*2)+"px";
  mMypageBtn.style.right=(Ratio*15*2)+"px";

  mMoreDetailBtn.width = mMoreDetailBtn.naturalWidth*Ratio;
  mMoreDetailBtn.height = mMoreDetailBtn.naturalHeight*Ratio;
  mMoreDetailBtn.style.top = (Ratio*304*2)+"px";
  mMoreDetailBtn.style.left = (Ratio*15*2)+"px";

  mMoveBtn1.width = mMoveBtn1.naturalWidth*Ratio;
  mMoveBtn1.height = mMoveBtn1.naturalHeight*Ratio;
  mMoveBtn1.style.top = (Ratio*538*2)+"px";
  mMoveBtn1.style.right = (Ratio*15*2)+"px";

  mMoveBtn2.width = mMoveBtn2.naturalWidth*Ratio;
  mMoveBtn2.height = mMoveBtn2.naturalHeight*Ratio;
  mMoveBtn2.style.top = (Ratio*693*2)+"px";
  mMoveBtn2.style.right = (Ratio*15*2)+"px";

  mMoveBtn3.width = mMoveBtn3.naturalWidth*Ratio;
  mMoveBtn3.height = mMoveBtn3.naturalHeight*Ratio;
  mMoveBtn3.style.top = (Ratio*848*2)+"px";
  mMoveBtn3.style.right = (Ratio*15*2)+"px";
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
function mMenuBarSettingBtnClick() {

}
function mMoreDetailBtnClick(){
  location.href="mmoreDetail.html";
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
