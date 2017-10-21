var mbg12Width;
var mbg12Height;
var Ratio;

var mbg12Img,mMenuBtn,mMypageBtn,mSearchBarBtn,mRecordingBtn;
var mFairyTale01Btn,mFairyTale02Btn,mFairyTale03Btn,mFairyTale04Btn;
var mFairyTaleBig01Btn,mFairyTaleBig02Btn,mFairyTaleBig03Btn,mFairyTaleBig04Btn;
var mReadyStory01,mReadyStory02,mReadyStory03,mReadyStory04;
var mStoryCard01,mStoryCard02,mStoryCard03,mStoryCard04;
var mMenuCloseBtn,mMenuSlide,mMenuBar,mMenuMainBtn,mMenuBarDiaryBtn,mMenuBarFairyTaleBtn,mMenuBarMarketBtn,mMenuBarMypageBtn,mMenuBarSettingBtn;
function onload(){
  mbg12Img = document.getElementById("mbg12");
  mMenuBtn = document.getElementById("mMenuBtn");
  mMypageBtn = document.getElementById("mMypageBtn");
  mSearchBarBtn = document.getElementById("mSearchBarBtn");
  search = document.getElementById("search");
  searchText = document.getElementById("searchText");
  mRecordingBtn = document.getElementById("mRecordingBtn");

  mFairyTale01Btn = document.getElementById("mFairyTale01Btn");
  mFairyTale02Btn = document.getElementById("mFairyTale02Btn");
  mFairyTale03Btn = document.getElementById("mFairyTale03Btn");
  mFairyTale04Btn = document.getElementById("mFairyTale04Btn");

  mFairyTaleBig01Btn = document.getElementById("mFairyTaleBig01Btn");
  mFairyTaleBig02Btn = document.getElementById("mFairyTaleBig02Btn");
  mFairyTaleBig03Btn = document.getElementById("mFairyTaleBig03Btn");
  mFairyTaleBig04Btn = document.getElementById("mFairyTaleBig04Btn");

  mReadyStory01 = document.getElementById("mReadyStory01");
  mReadyStory02 = document.getElementById("mReadyStory02");
  mReadyStory03 = document.getElementById("mReadyStory03");
  mReadyStory04 = document.getElementById("mReadyStory04");

  mStoryCard01 = document.getElementById("mStoryCard01");
  mStoryCard02 = document.getElementById("mStoryCard02");
  mStoryCard03 = document.getElementById("mStoryCard03");
  mStoryCard04 = document.getElementById("mStoryCard04");

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
  mbg12Width = document.body.offsetWidth;
  mbg12Height = mbg12Width*3.12;
  Ratio = mbg12Width / 750;

  mbg12Img.width=mbg12Width;
  mbg12Img.height=mbg12Height;

  mMenuBtn.width=mMenuBtn.naturalWidth*Ratio;
  mMenuBtn.height=mMenuBtn.naturalHeight*Ratio;
  mMenuBtn.style.top=(Ratio*15*2)+"px";
  mMenuBtn.style.left=(Ratio*15*2)+"px";

  mMypageBtn.width=mMypageBtn.naturalWidth*Ratio;
  mMypageBtn.height=mMypageBtn.naturalHeight*Ratio;
  mMypageBtn.style.top=(Ratio*15*2)+"px";
  mMypageBtn.style.right=(Ratio*15*2)+"px";

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

  mRecordingBtn.width=mRecordingBtn.naturalWidth*Ratio;
  mRecordingBtn.height=mRecordingBtn.naturalHeight*Ratio;
  mRecordingBtn.style.top=(Ratio*1118*2)+"px";
  mRecordingBtn.style.left=(Ratio*15*2)+"px";

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
  mFairyTale02Btn.style.left=(Ratio*(15+(93))*2)+"px";

  mFairyTale03Btn.width=mFairyTale03Btn.naturalWidth*Ratio;
  mFairyTale03Btn.height=mFairyTale03Btn.naturalHeight*Ratio;
  mFairyTale03Btn.style.top=(Ratio*24*2)+"px";
  mFairyTale03Btn.style.left=(Ratio*(15+(93*2))*2)+"px";

  mFairyTale04Btn.width=mFairyTale04Btn.naturalWidth*Ratio;
  mFairyTale04Btn.height=mFairyTale04Btn.naturalHeight*Ratio;
  mFairyTale04Btn.style.top=(Ratio*24*2)+"px";
  mFairyTale04Btn.style.left=(Ratio*(15+(93*3))*2)+"px";

  mFairyTaleBig01Btn.width=mFairyTaleBig01Btn.naturalWidth*Ratio;
  mFairyTaleBig01Btn.height=mFairyTaleBig01Btn.naturalHeight*Ratio;
  mFairyTaleBig01Btn.style.left=(Ratio*7*2)+"px";

  mFairyTaleBig02Btn.width=mFairyTaleBig02Btn.naturalWidth*Ratio;
  mFairyTaleBig02Btn.height=mFairyTaleBig02Btn.naturalHeight*Ratio;
  mFairyTaleBig02Btn.style.left=(Ratio*(15+(80))*2)+"px";

  mFairyTaleBig03Btn.width=mFairyTaleBig03Btn.naturalWidth*Ratio;
  mFairyTaleBig03Btn.height=mFairyTaleBig03Btn.naturalHeight*Ratio;
  mFairyTaleBig03Btn.style.left=(Ratio*(15+(90*2))*2)+"px";

  mFairyTaleBig04Btn.width=mFairyTaleBig04Btn.naturalWidth*Ratio;
  mFairyTaleBig04Btn.height=mFairyTaleBig04Btn.naturalHeight*Ratio;
  mFairyTaleBig04Btn.style.left=(Ratio*(15+(90*3))*2)+"px";

  mReadyStory01.width=mReadyStory01.naturalWidth*Ratio;
  mReadyStory01.height=mReadyStory01.naturalHeight*Ratio;
  mReadyStory01.style.top=(Ratio*530*2)+"px";
  mReadyStory01.style.left=(Ratio*15*2)+"px";

  mReadyStory02.width=mReadyStory02.naturalWidth*Ratio;
  mReadyStory02.height=mReadyStory02.naturalHeight*Ratio;
  mReadyStory02.style.top=(Ratio*530*2)+"px";
  mReadyStory02.style.left=(Ratio*15*2)+"px";

  mReadyStory03.width=mReadyStory03.naturalWidth*Ratio;
  mReadyStory03.height=mReadyStory03.naturalHeight*Ratio;
  mReadyStory03.style.top=(Ratio*530*2)+"px";
  mReadyStory03.style.left=(Ratio*15*2)+"px";

  mReadyStory04.width=mReadyStory04.naturalWidth*Ratio;
  mReadyStory04.height=mReadyStory04.naturalHeight*Ratio;
  mReadyStory04.style.top=(Ratio*530*2)+"px";
  mReadyStory04.style.left=(Ratio*15*2)+"px";

  mStoryCard01.width=mStoryCard01.naturalWidth*Ratio;
  mStoryCard01.height=mStoryCard01.naturalHeight*Ratio;
  mStoryCard01.style.top=(Ratio*806*2)+"px";
  mStoryCard01.style.left=(Ratio*88*2)+"px";

  mStoryCard02.width=mStoryCard02.naturalWidth*Ratio;
  mStoryCard02.height=mStoryCard02.naturalHeight*Ratio;
  mStoryCard02.style.top=(Ratio*806*2)+"px";
  mStoryCard02.style.left=(Ratio*88*2)+"px";

  mStoryCard03.width=mStoryCard03.naturalWidth*Ratio;
  mStoryCard03.height=mStoryCard03.naturalHeight*Ratio;
  mStoryCard03.style.top=(Ratio*806*2)+"px";
  mStoryCard03.style.left=(Ratio*88*2)+"px";

  mStoryCard04.width=mStoryCard04.naturalWidth*Ratio;
  mStoryCard04.height=mStoryCard04.naturalHeight*Ratio;
  mStoryCard04.style.top=(Ratio*806*2)+"px";
  mStoryCard04.style.left=(Ratio*88*2)+"px";
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
function mRecordingBtnClick() {
  locaition.href="mrecordFariyTale.html";
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
  mReadyStory01.style.display="block";
  mReadyStory02.style.display="none";
  mReadyStory03.style.display="none";
  mReadyStory04.style.display="none";
  mStoryCard01.style.display="block";
  mStoryCard02.style.display="none";
  mStoryCard03.style.display="none";
  mStoryCard04.style.display="none";
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
  mReadyStory01.style.display="none";
  mReadyStory02.style.display="block";
  mReadyStory03.style.display="none";
  mReadyStory04.style.display="none";
  mStoryCard01.style.display="none";
  mStoryCard02.style.display="block";
  mStoryCard03.style.display="none";
  mStoryCard04.style.display="none";
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
  mReadyStory01.style.display="none";
  mReadyStory02.style.display="none";
  mReadyStory03.style.display="block";
  mReadyStory04.style.display="none";
  mStoryCard01.style.display="none";
  mStoryCard02.style.display="none";
  mStoryCard03.style.display="block";
  mStoryCard04.style.display="none";
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
  mReadyStory01.style.display="none";
  mReadyStory02.style.display="none";
  mReadyStory03.style.display="none";
  mReadyStory04.style.display="block";
  mStoryCard01.style.display="none";
  mStoryCard02.style.display="none";
  mStoryCard03.style.display="none";
  mStoryCard04.style.display="block";
}
