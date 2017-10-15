var bg09Width;
var bg09Height;
var bg09Img;
var Ratio;

var bg09Img,menuBtn,facebookBtn,googleBtn,loginBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;
var bigBox,finishedRecordingBTN,recordingStartBTN,recordingStopBTN,reRecordingBTN,smallBox;
function onload(){
  bg09Img = document.getElementById("bg09");
  menuBtn = document.getElementById("menuBtn");
  facebookBtn = document.getElementById("facebookBtn");
  googleBtn = document.getElementById("googleBtn");
  loginBtn = document.getElementById("loginBtn");
  unSelectedDodamBtn = document.getElementById("unSelectedDodamBtn");
  twitterBtn = document.getElementById("twitterBtn");
  unSelectedDiaryBtn = document.getElementById("unSelectedDiaryBtn");
  selectedFairytaleBtn = document.getElementById("selectedFairytaleBtn");
  unSelectedMypageBtn = document.getElementById("unSelectedMypageBtn");
  unSelectedShopBtn = document.getElementById("unSelectedShopBtn");

  bigBox = document.getElementById("bigBox");
  finishedRecordingBTN = document.getElementById("finishedRecordingBTN");
  recordingStartBTN = document.getElementById("recordingStartBTN");
  recordingStopBTN=document.getElementById("recordingStopBTN");
  reRecordingBTN=document.getElementById("reRecordingBTN");
  smallBox = document.getElementById("smallBox");
  bg09Width = document.body.offsetWidth;
  bg09Height = bg09Width*1.1296875;
  Ratio = bg09Width / 3840;

  bg09Img.width=bg09Width;
  bg09Img.height=bg09Height;

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
  loginBtn.style.left=bg09.width-(Ratio*36)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  selectedFairytaleBtn.width = selectedFairytaleBtn.naturalWidth*Ratio;
  selectedFairytaleBtn.height = selectedFairytaleBtn.naturalHeight*Ratio;
  selectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  selectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+selectedFairytaleBtn.width+"px";

//var bigBox,finishedRecordingBTN,recordingStartBTN,recordingStopBTN;
  bigBox.width = bigBox.naturalWidth*Ratio;
  bigBox.height = bigBox.naturalHeight*Ratio;
  bigBox.style.top = (Ratio*694*2)+"px";
  bigBox.style.left = (Ratio*352*2)+"px";

  finishedRecordingBTN.width = finishedRecordingBTN.naturalWidth*Ratio;
  finishedRecordingBTN.height = finishedRecordingBTN.naturalHeight*Ratio;
  finishedRecordingBTN.style.top = (Ratio*1531*2)+"px";
  finishedRecordingBTN.style.left = (Ratio*1689*2)+"px";

  recordingStartBTN.width = recordingStartBTN.naturalWidth*Ratio;
  recordingStartBTN.height = recordingStartBTN.naturalHeight*Ratio;
  recordingStartBTN.style.top = (Ratio*1151*2)+"px";
  recordingStartBTN.style.left = (Ratio*132*2)+"px";

  recordingStopBTN.width = recordingStopBTN.naturalWidth*Ratio;
  recordingStopBTN.height = recordingStopBTN.naturalHeight*Ratio;
  recordingStopBTN.style.top = (Ratio*1322*2)+"px";
  recordingStopBTN.style.left = (Ratio*1787*2)+"px";

  reRecordingBTN.width = reRecordingBTN.naturalWidth*Ratio;
  reRecordingBTN.height = reRecordingBTN.naturalHeight*Ratio;
  recordingStopBTN.style.top = (Ratio*1179*2)+"px";
  recordingStopBTN.style.left = (Ratio*1293*2)+"px";
  }


function onChangeSize(){
  bg09Width = document.body.offsetWidth;
  bg09Height = bg09Width*1.1296875;
  Ratio = bg09Width / 3840;

  bg09Img.width=bg09Width;
  bg09Img.height=bg09Height;

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
  loginBtn.style.left=bg09.width-(Ratio*36)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  selectedFairytaleBtn.width = selectedFairytaleBtn.naturalWidth*Ratio;
  selectedFairytaleBtn.height = selectedFairytaleBtn.naturalHeight*Ratio;
  selectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  selectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+selectedFairytaleBtn.width+"px";

  //var bigBox,finishedRecordingBTN,recordingStartBTN,recordingStopBTN;
    bigBox.width = bigBox.naturalWidth*Ratio;
    bigBox.height = bigBox.naturalHeight*Ratio;
    bigBox.style.top = (Ratio*694*2)+"px";
    bigBox.style.left = (Ratio*352*2)+"px";

    finishedRecordingBTN.width = finishedRecordingBTN.naturalWidth*Ratio;
    finishedRecordingBTN.height = finishedRecordingBTN.naturalHeight*Ratio;
    finishedRecordingBTN.style.top = (Ratio*1531*2)+"px";
    finishedRecordingBTN.style.left = (Ratio*1689*2)+"px";

    recordingStartBTN.width = recordingStartBTN.naturalWidth*Ratio;
    recordingStartBTN.height = recordingStartBTN.naturalHeight*Ratio;
    recordingStartBTN.style.top = (Ratio*1151*2)+"px";
    recordingStartBTN.style.left = (Ratio*132*2)+"px";

    recordingStopBTN.width = recordingStopBTN.naturalWidth*Ratio;
    recordingStopBTN.height = recordingStopBTN.naturalHeight*Ratio;
    recordingStopBTN.style.top = (Ratio*1322*2)+"px";
    recordingStopBTN.style.left = (Ratio*1787*2)+"px";

    reRecordingBTN.width = reRecordingBTN.naturalWidth*Ratio;
    reRecordingBTN.height = reRecordingBTN.naturalHeight*Ratio;
    recordingStopBTN.style.top = (Ratio*1179*2)+"px";
    recordingStopBTN.style.left = (Ratio*1293*2)+"px";}
function unSelectedDodamBTNClick() {
  location.href="main.html"
}
function unSelectedDiaryBtnClick(){
  location.href="diary.html";
}
function selectedFairytaleBtnClick(){
  location.href="make.jsp";
}
function unSelectedShopBTNClick() {
  location.href="market.html";
}
