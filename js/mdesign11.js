var mbg11Width;
var mbg11Height;
var Ratio;

var mbg11Img,mMenuBtn,mFairyTalePlayBtn,mSearchBarBtn,search,searchText;
var mFairyTale01Btn,mFairyTale02Btn,mFairyTale03Btn,mFairyTale04Btn;
var mFairyTaleBig01Btn,mFairyTaleBig02Btn,mFairyTaleBig03Btn,mFairyTaleBig04Btn;
var mStory01,mStory02,mStory03,mStory04;
var recordedFairyTalePic01,recordedFairyTalePic02,recordedFairyTalePic03;
var mFairyTale,mStory;
var mMenuCloseBtn,mMenuSlide,mMenuBar,mMenuMainBtn,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg11Img = document.getElementById("mbg11");
  mMenuBtn = document.getElementById("mMenuBtn");
  mFairyTalePlayBtn = document.getElementById("mFairyTalePlayBtn");
  mSearchBarBtn = document.getElementById("mSearchBarBtn");
  search = document.getElementById("search");
  searchText = document.getElementById("searchText");

  mFairyTale01Btn = document.getElementById("mFairyTale01Btn");
  mFairyTale02Btn = document.getElementById("mFairyTale02Btn");
  mFairyTale03Btn = document.getElementById("mFairyTale03Btn");
  mFairyTale04Btn = document.getElementById("mFairyTale04Btn");

  mFairyTaleBig01Btn = document.getElementById("mFairyTaleBig01Btn");
  mFairyTaleBig02Btn = document.getElementById("mFairyTaleBig02Btn");
  mFairyTaleBig03Btn = document.getElementById("mFairyTaleBig03Btn");
  mFairyTaleBig04Btn = document.getElementById("mFairyTaleBig04Btn");

  mStory01 = document.getElementById("mStory01");
  mStory02 = document.getElementById("mStory02");
  mStory03 = document.getElementById("mStory03");
  mStory04 = document.getElementById("mStory04");

  recordedFairyTalePic01 = document.getElementById("recordedFairyTalePic01");
  recordedFairyTalePic02 = document.getElementById("recordedFairyTalePic02");
  recordedFairyTalePic03 = document.getElementById("recordedFairyTalePic03");

  mFairyTale = document.getElementById("mFairyTale");
  mStory = document.getElementById("mStory");

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
  mbg11Width = document.body.offsetWidth;
  mbg11Height = mbg11Width*3.09333333;
  Ratio = mbg11Width / 750;

  mbg11Img.width=mbg11Width;
  mbg11Img.height=mbg11Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  search.style.width=mSearchBarBtn.naturalWidth*Ratio+"px";
  search.style.height=mSearchBarBtn.naturalHeight*Ratio+"px";
  search.style.top=(Ratio*125*2)+"px";
  search.style.left=(Ratio*15*2)+"px";

  mSearchBarBtn.width=mSearchBarBtn.naturalWidth*Ratio;
  mSearchBarBtn.height=mSearchBarBtn.naturalHeight*Ratio;

  searchText.style.width=260*Ratio*2+"px";
  searchText.style.height=20*Ratio*2+"px";
  searchText.style.top=(Ratio*15*2)+"px";
  searchText.style.left=(Ratio*60*2)+"px";

  mFairyTalePlayBtn.width=mFairyTalePlayBtn.naturalWidth*Ratio;
  mFairyTalePlayBtn.height=mFairyTalePlayBtn.naturalHeight*Ratio;
  mFairyTalePlayBtn.style.top=(Ratio*1108*2)+"px";
  mFairyTalePlayBtn.style.left=(Ratio*15*2)+"px";

  mFairyTale.style.width=document.body.offsetWidth+"px";
  mFairyTale.style.height=mFairyTaleBig01Btn.naturalHeight*Ratio+"px";
  mFairyTale.style.top=(Ratio*367*2)+"px";

  mFairyTale01Btn.width=mFairyTale01Btn.naturalWidth*Ratio;
  mFairyTale01Btn.height=mFairyTale01Btn.naturalHeight*Ratio;
  mFairyTale01Btn.style.top=(Ratio*24*2)+"px";
  mFairyTale01Btn.style.left=(Ratio*15*2)+"px";

  mFairyTale02Btn.width=mFairyTale02Btn.naturalWidth*Ratio;
  mFairyTale02Btn.height=mFairyTale02Btn.naturalHeight*Ratio;
  mFairyTale02Btn.style.top=(Ratio*24*2)+"px";
  mFairyTale02Btn.style.left=(Ratio*(15+(100))*2)+"px";

  mFairyTale03Btn.width=mFairyTale03Btn.naturalWidth*Ratio;
  mFairyTale03Btn.height=mFairyTale03Btn.naturalHeight*Ratio;
  mFairyTale03Btn.style.top=(Ratio*24*2)+"px";
  mFairyTale03Btn.style.left=(Ratio*(15+(100*2))*2)+"px";

  mFairyTale04Btn.width=mFairyTale04Btn.naturalWidth*Ratio;
  mFairyTale04Btn.height=mFairyTale04Btn.naturalHeight*Ratio;
  mFairyTale04Btn.style.top=(Ratio*24*2)+"px";
  mFairyTale04Btn.style.left=(Ratio*(15+(100*3))*2)+"px";

  mFairyTaleBig01Btn.width=mFairyTaleBig01Btn.naturalWidth*Ratio;
  mFairyTaleBig01Btn.height=mFairyTaleBig01Btn.naturalHeight*Ratio;
  mFairyTaleBig01Btn.style.left=(Ratio*7*2)+"px";

  mFairyTaleBig02Btn.width=mFairyTaleBig02Btn.naturalWidth*Ratio;
  mFairyTaleBig02Btn.height=mFairyTaleBig02Btn.naturalHeight*Ratio;
  mFairyTaleBig02Btn.style.left=(Ratio*(15+(87))*2)+"px";

  mFairyTaleBig03Btn.width=mFairyTaleBig03Btn.naturalWidth*Ratio;
  mFairyTaleBig03Btn.height=mFairyTaleBig03Btn.naturalHeight*Ratio;
  mFairyTaleBig03Btn.style.left=(Ratio*(15+(96*2))*2)+"px";

  mFairyTaleBig04Btn.width=mFairyTaleBig04Btn.naturalWidth*Ratio;
  mFairyTaleBig04Btn.height=mFairyTaleBig04Btn.naturalHeight*Ratio;
  mFairyTaleBig04Btn.style.left=(Ratio*(15+(97*3))*2)+"px";

  mStory.style.whidth=document.body.offsetWidth+"px";
  mStory.style.height=mStory01.naturalHeight*Ratio+"px";
  mStory.style.top=(Ratio*530*2)+"px";

  mStory01.width=mStory01.naturalWidth*Ratio;
  mStory01.height=mStory01.naturalHeight*Ratio;
  mStory01.style.left=(Ratio*15*2)+"px";

  mStory02.width=mStory02.naturalWidth*Ratio;
  mStory02.height=mStory02.naturalHeight*Ratio;
  mStory02.style.left=(Ratio*15*2)+"px";

  mStory03.width=mStory03.naturalWidth*Ratio;
  mStory03.height=mStory03.naturalHeight*Ratio;
  mStory03.style.left=(Ratio*15*2)+"px";

  mStory04.width=mStory04.naturalWidth*Ratio;
  mStory04.height=mStory04.naturalHeight*Ratio;
  mStory04.style.left=(Ratio*15*2)+"px";

  recordedFairyTalePic01.width=recordedFairyTalePic01.naturalWidth*Ratio;
  recordedFairyTalePic01.height=recordedFairyTalePic01.naturalHeight*Ratio;
  recordedFairyTalePic01.style.top=(Ratio*991*2)+"px";
  recordedFairyTalePic01.style.left=(Ratio*15*2)+"px";

  recordedFairyTalePic02.width=recordedFairyTalePic02.naturalWidth*Ratio;
  recordedFairyTalePic02.height=recordedFairyTalePic02.naturalHeight*Ratio;
  recordedFairyTalePic02.style.top=(Ratio*991*2)+"px";
  recordedFairyTalePic02.style.left=(Ratio*(15+(102))*2)+"px";

  recordedFairyTalePic03.width=recordedFairyTalePic03.naturalWidth*Ratio;
  recordedFairyTalePic03.height=recordedFairyTalePic03.naturalHeight*Ratio;
  recordedFairyTalePic03.style.top=(Ratio*991*2)+"px";
  recordedFairyTalePic03.style.left=(Ratio*(15+(102*2))*2)+"px";
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
  location.href="mrecordFairyTale.html";
}
function mMenuBarMarketBtnClick() {
  location.href="mmarket.html";
}
function mMenuCloseBtnClick() {
  mMenuSlide.style.display="none";
}
function mFairyTalePlayBtnClick() {
  location.href="mfairyTaleList.html";
}
function mFairyTale01BtnClick() {
  mFairyTale01Btn.style.display="none";
  mFairyTale02Btn.style.display="block";
  mFairyTale03Btn.style.display="block";
  mFairyTale04Btn.style.display="block";
  mFairyTaleBig01Btn.style.display="block";
  mFairyTaleBig02Btn.style.display="none";
  mFairyTaleBig03Btn.style.display="none";
  mFairyTaleBig04Btn.style.display="none";
  mStory01.style.display="block";
  mStory02.style.display="none";
  mStory03.style.display="none";
  mStory04.style.display="none";
}
function mFairyTale02BtnClick() {
  mFairyTale01Btn.style.display="block";
  mFairyTale02Btn.style.display="none";
  mFairyTale03Btn.style.display="block";
  mFairyTale04Btn.style.display="block";
  mFairyTaleBig01Btn.style.display="none";
  mFairyTaleBig02Btn.style.display="block";
  mFairyTaleBig03Btn.style.display="none";
  mFairyTaleBig04Btn.style.display="none";
  mStory01.style.display="none";
  mStory02.style.display="block";
  mStory03.style.display="none";
  mStory04.style.display="none";
}
function mFairyTale03BtnClick() {
  mFairyTale01Btn.style.display="block";
  mFairyTale02Btn.style.display="block";
  mFairyTale03Btn.style.display="none";
  mFairyTale04Btn.style.display="block";
  mFairyTaleBig01Btn.style.display="none";
  mFairyTaleBig02Btn.style.display="none";
  mFairyTaleBig03Btn.style.display="block";
  mFairyTaleBig04Btn.style.display="none";
  mStory01.style.display="none";
  mStory02.style.display="none";
  mStory03.style.display="block";
  mStory04.style.display="none";
}
function mFairyTale04BtnClick() {
  mFairyTale01Btn.style.display="block";
  mFairyTale02Btn.style.display="block";
  mFairyTale03Btn.style.display="block";
  mFairyTale04Btn.style.display="none";
  mFairyTaleBig01Btn.style.display="none";
  mFairyTaleBig02Btn.style.display="none";
  mFairyTaleBig03Btn.style.display="none";
  mFairyTaleBig04Btn.style.display="block";
  mStory01.style.display="none";
  mStory02.style.display="none";
  mStory03.style.display="none";
  mStory04.style.display="block";
}
