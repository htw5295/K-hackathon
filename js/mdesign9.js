var mbg09Width;
var mbg09Height;
var Ratio;
function fullscreen() {
    document.documentElement.webkitRequestFullscreen();
    mbg09Img.setAttribute("onClick", "");
}
var mbg09Img,mMenuBtn,mMypageBtn;
var mBox,mFinishedRecordingBtn,mRecordingStartBtn,mRecordingStopBtn,mReRecordingBtn;
var scriptCount,number,recordState,recordStateText,recordStateTime,scriptArea;
var popup,mbg10,mPopupCloseBtn,title,titleText,mImage01,mPopupPicChangeBtn,titleChange,titleChangeText,mPopupSaveBtn;
var mMenuCloseBtn,mMenuSlide,mMenuBar,mMenuMainBtn,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg09Img = document.getElementById("mbg09");
  mMenuBtn = document.getElementById("mMenuBtn");
  mMypageBtn = document.getElementById("mMypageBtn");

  mBox = document.getElementById("mBox");
  mFinishedRecordingBtn = document.getElementById("mFinishedRecordingBtn");
  mRecordingStartBtn = document.getElementById("mRecordingStartBtn");
  mRecordingStopBtn = document.getElementById("mRecordingStopBtn");
  mReRecordingBtn = document.getElementById("mReRecordingBtn");

  scriptCount = document.getElementById("scriptCount");
  number = document.getElementById("number");
  recordState = document.getElementById("recordState");
  recordStateText = document.getElementById("recordStateText");
  recordStateTime = document.getElementById("recordStateTime");
  scriptArea = document.getElementById("scriptArea");

  popup = document.getElementById("popup");
  mbg10 = document.getElementById("mbg10");
  mPopupCloseBtn = document.getElementById("mPopupCloseBtn");
  title = document.getElementById("title");
  titleText = document.getElementById("titleText");
  mImage01 = document.getElementById("mImage01");
  mPopupPicChangeBtn = document.getElementById("mPopupPicChangeBtn");
  titleChange = document.getElementById("titleChange");
  titleChangeText = document.getElementById("titleChangeText");
  mPopupSaveBtn = document.getElementById("mPopupSaveBtn");

  mMenuSlide = document.getElementById("mMenuSlide");
  mMenuBar = document.getElementById("mMenuBar");
  mMenuMainBtn = document.getElementById("mMenuMainBtn");
  mMenuBarDiaryBtn = document.getElementById("mMenuBarDiaryBtn");
  mMenuBarFairyTaleBtn = document.getElementById("mMenuBarFairyTaleBtn");
  mMenuBarMarketBtn = document.getElementById("mMenuBarMarketBtn");
  mMenuBarMypageBtn = document.getElementById("mMenuBarMypageBtn");
  mMenuBarSettingBtn = document.getElementById("mMenuBarSettingBtn");
  mMenuCloseBtn = document.getElementById("mMenuCloseBtn");

  resize();
  resizeMenu();
}

function onChangeSize(){
  resize();
  resizeMenu();
}

function resize() {
  mbg09Width = document.body.offsetWidth;
  mbg09Height = mbg09Width*2.33866667;
  Ratio = mbg09Width / 750;

  mbg09Img.width=mbg09Width;
  mbg09Img.height=mbg09Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  mMypageBtn.width=mMypageBtn.naturalWidth*Ratio;
  mMypageBtn.height=mMypageBtn.naturalHeight*Ratio;
  mMypageBtn.style.top=(Ratio*15*2)+"px";
  mMypageBtn.style.right=(Ratio*15*2)+"px";

  mBox.width=mBox.naturalWidth*Ratio;
  mBox.height=mBox.naturalHeight*Ratio;
  mBox.style.top=(Ratio*282*2)+"px";
  mBox.style.left=(Ratio*64*2)+"px";

  mFinishedRecordingBtn.width=mFinishedRecordingBtn.naturalWidth*Ratio;
  mFinishedRecordingBtn.height=mFinishedRecordingBtn.naturalHeight*Ratio;
  mFinishedRecordingBtn.style.top=(Ratio*819*2)+"px";
  mFinishedRecordingBtn.style.left=(Ratio*15*2)+"px";

  mRecordingStartBtn.width=mRecordingStartBtn.naturalWidth*Ratio;
  mRecordingStartBtn.height=mRecordingStartBtn.naturalHeight*Ratio;
  mRecordingStartBtn.style.top=(Ratio*426*2)+"px";
  mRecordingStartBtn.style.left=(Ratio*15*2)+"px";

  mRecordingStopBtn.width=mRecordingStopBtn.naturalWidth*Ratio;
  mRecordingStopBtn.height=mRecordingStopBtn.naturalHeight*Ratio;
  mRecordingStopBtn.style.top=(Ratio*426*2)+"px";
  mRecordingStopBtn.style.left=(Ratio*15*2)+"px";

  mReRecordingBtn.width=mReRecordingBtn.naturalWidth*Ratio;
  mReRecordingBtn.height=mReRecordingBtn.naturalHeight*Ratio;
  mReRecordingBtn.style.top=(Ratio*449*2)+"px";
  mReRecordingBtn.style.right=(Ratio*15*2)+"px";

  //text,script
  scriptCount.width=scriptCount.naturalWidth*Ratio;
  scriptCount.height=scriptCount.naturalHeight*Ratio;
  scriptCount.style.top=(Ratio*267*2)+"px";
  scriptCount.style.left=(Ratio*337*2)+"px";

  recordState.width=recordState.naturalWidth*Ratio;
  recordState.height=recordState.naturalHeight*Ratio;
  recordState.style.top=(Ratio*480*2)+"px";
  recordState.style.left=(Ratio*15*2)+"px";

  recordStateTime.style.top=(Ratio*17*2)+"px";

  //popup
  mbg10.width=mbg10.naturalWidth*Ratio;
  mbg10.height=mbg10.naturalHeight*Ratio;

  popup.width=mbg10.width;
  popup.height=mbg10.height;
  popup.style.top=(Ratio*200*2)+"px";
  popup.style.left=(Ratio*45*2)+"px";

  mPopupCloseBtn.width=mPopupCloseBtn.naturalWidth*Ratio;
  mPopupCloseBtn.height=mPopupCloseBtn.naturalHeight*Ratio;
  mPopupCloseBtn.style.top=(Ratio*12*2)+"px";
  mPopupCloseBtn.style.left=(Ratio*287*2)+"px";

  title.style.width=titleText.naturalWidth*Ratio+"px";
  title.style.height=titleText.naturalHeight*Ratio+"px";
  title.style.top=(Ratio*34*2)+"px";
  title.style.left=(Ratio*69*2)+"px";

  mImage01.width=mImage01.naturalWidth*Ratio;
  mImage01.height=mImage01.naturalHeight*Ratio;
  mImage01.style.top=(Ratio*70*2)+"px";
  mImage01.style.left=(Ratio*118*2)+"px";

  mPopupPicChangeBtn.width=mPopupPicChangeBtn.naturalWidth*Ratio;
  mPopupPicChangeBtn.height=mPopupPicChangeBtn.naturalHeight*Ratio;
  mPopupPicChangeBtn.style.top=(Ratio*119*2)+"px";
  mPopupPicChangeBtn.style.left=(Ratio*198*2)+"px";

  titleChange.width=titleChange.naturalWidth*Ratio;
  titleChange.height=titleChange.naturalHeight*Ratio;
  titleChange.style.top=(Ratio*162*2)+"px";
  titleChange.style.left=(Ratio*96*2)+"px";

  mPopupSaveBtn.width=mPopupSaveBtn.naturalWidth*Ratio;
  mPopupSaveBtn.height=mPopupSaveBtn.naturalHeight*Ratio;
  mPopupSaveBtn.style.top=(Ratio*257*2)+"px";
  mPopupSaveBtn.style.left=(Ratio*131*2)+"px";
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
function mFinishedRecordingBtnClick() {
  popup.style.display="block";
}
function mRecordingStartBtnClick() {
  mRecordingStartBtn.style.display = "none";
  mRecordingStopBtn.style.display = "block";
}
function mRecordingStopBtnClick() {
  mRecordingStartBtn.style.display = "block";
  mRecordingStopBtn.style.display = "none";
}
function mReRecordingBtnClick() {

}
function popupCloseBtnClick() {
    popup.style.display = "none";
}
