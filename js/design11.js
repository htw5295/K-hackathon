var bg11Width;
var bg11Height;
var bg10Width;
var bg10Height;
var bg11Img;
var Ratio;
var bg10Ratio;

var bg11Img,menuBtn,facebookBtn,googleBtn,loginBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;
var bigBox,finishedRecordingBTN,recordingBTN,reRecordingBTN,smallBox;
var bg10Img,popup,popupCloseBtn,title,titleText,image01,popupPicChangeBtn,titleChange,titleChangeText,popupSaveBtn,scriptCount,scriptArea,recordingStopBTN;
<<<<<<< HEAD
var mainTitleText,mainTitle,mainTitleDiv,fairyTaleCountUnder;
=======
var mainTitleText,mainTitle,mainTitleDiv,recordedFairyTalePic01,recordedFairyTalePic02,recordedFairyTalePic03;
>>>>>>> 18f2ff768858c59942bfd2caa2aff4503297f4f6
function onload(){
  bg11Img = document.getElementById("bg11");
  menuBtn = document.getElementById("menuBtn");
  facebookBtn = document.getElementById("facebookBtn");
  googleBtn = document.getElementById("googleBtn");
  loginBtn = document.getElementById("loginBtn");
  unSelectedDodamBtn = document.getElementById("unSelectedDodamBtn");
  twitterBtn = document.getElementById("twitterBtn");
  unSelectedDiaryBtn = document.getElementById("unSelectedDiaryBtn");
  unSelectedFairytaleBtn = document.getElementById("unSelectedFairytaleBtn");
  selectedMypageBtn = document.getElementById("selectedMypageBtn");
  unSelectedShopBtn = document.getElementById("unSelectedShopBtn");
  fairyTaleCountUnder = document.getElementById("fairyTaleCountUnder");


  rFairyTale01Btn = document.getElementById("rFairyTale01Btn");
  rFairyTale02Btn = document.getElementById("rFairyTale02Btn");
  rFairyTale03Btn = document.getElementById("rFairyTale03Btn");
  rFairyTale04Btn = document.getElementById("rFairyTale04Btn");
  rFairyTale05Btn = document.getElementById("rFairyTale05Btn");
  rFairyTale06Btn = document.getElementById("rFairyTale06Btn");
  rDetailFairyTale01Btn = document.getElementById("rDetailFairyTale01Btn");
  rDetailFairyTale02Btn = document.getElementById("rDetailFairyTale02Btn");
  rDetailFairyTale03Btn = document.getElementById("rDetailFairyTale03Btn");
  rDetailFairyTale04Btn = document.getElementById("rDetailFairyTale04Btn");
  rDetailFairyTale05Btn = document.getElementById("rDetailFairyTale05Btn");
  rDetailFairyTale06Btn = document.getElementById("rDetailFairyTale06Btn");


  fairyTale1count = document.getElementById("fairyTale1count");
  fairyTale2count = document.getElementById("fairyTale2count");
  fairyTale3count = document.getElementById("fairyTale3count");
  fairyTale4count = document.getElementById("fairyTale4count");
  fairyTale5count = document.getElementById("fairyTale5count");
  fairyTale6count = document.getElementById("fairyTale6count");
  fairyTale1CountText = document.getElementById("fairyTaleCount1Text");
  fairyTale2CountText = document.getElementById("fairyTaleCount2Text");
  fairyTale3CountText = document.getElementById("fairyTaleCount3Text");
  fairyTale4CountText = document.getElementById("fairyTaleCount4Text");
  fairyTale5CountText = document.getElementById("fairyTaleCount5Text");
  fairyTale6CountText = document.getElementById("fairyTaleCount6Text");

  bgFairyTale01Btn = document.getElementById("bgFairyTale01Btn");
  bgFairyTale02Btn = document.getElementById("bgFairyTale02Btn");
  bgFairyTale03Btn = document.getElementById("bgFairyTale03Btn");
  bgFairyTale04Btn = document.getElementById("bgFairyTale04Btn");
  bgFairyTale05Btn = document.getElementById("bgFairyTale05Btn");
  bgFairyTale06Btn = document.getElementById("bgFairyTale06Btn");

  mainTitleText = document.getElementById("mainTitleText");
  mainTitle = document.getElementById("mainTitle");
  mainTitleDiv = document.getElementById("mainTitleDiv");
  mainTitleTextDiv = document.getElementById("mainTitleTextDiv");

  recordedFairyTalePic01 = document.getElementById("recordedFairyTalePic01");
  recordedFairyTalePic02 = document.getElementById("recordedFairyTalePic02");
  recordedFairyTalePic03 = document.getElementById("recordedFairyTalePic03");

  recordedSelected01 = document.getElementById("recordedSelected01");
  recordedUnSelected02 = document.getElementById("recordedUnSelected02");
  recordedUnSelected01 = document.getElementById("recordedUnSelected01");


  bg11Width = document.body.offsetWidth;
  bg11Height = bg11Width*1.121875;
  Ratio = bg11Width / 3840;

  bg11Img.width=bg11Width;
  bg11Img.height=bg11Height;

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
  loginBtn.style.left=bg11.width-(Ratio*36)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  selectedMypageBtn.width = selectedMypageBtn.naturalWidth*Ratio;
  selectedMypageBtn.height = selectedMypageBtn.naturalHeight*Ratio;
  selectedMypageBtn.style.top = (Ratio*525*2)+"px";
  selectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

  rFairyTaleDiv.style.width = bg11Img.width+"px";
  rFairyTaleDiv.style.height = 850*Ratio+"px";
  rFairyTaleDiv.style.top = (Ratio*800*2)+"px";
  rFairyTaleDiv.style.left = 0+"px";

  rFairyTale01Btn.width = rFairyTale01Btn.naturalWidth*Ratio;
  rFairyTale01Btn.height = rFairyTale01Btn.naturalHeight*Ratio;
  rFairyTale01Btn.style.left = (Ratio*99*2)+"px";
  rFairyTale01Btn.style.top= (77*Ratio*2)+"px";

  rFairyTale02Btn.width = rFairyTale02Btn.naturalWidth*Ratio;
  rFairyTale02Btn.height = rFairyTale02Btn.naturalHeight*Ratio;
  rFairyTale02Btn.style.left = (Ratio*99*2)+rFairyTale01Btn.width+(Ratio*117*2)+"px";
  rFairyTale02Btn.style.top= (77*Ratio*2)+"px";

  rFairyTale03Btn.width = rFairyTale03Btn.naturalWidth*Ratio;
  rFairyTale03Btn.height = rFairyTale03Btn.naturalHeight*Ratio;
  rFairyTale03Btn.style.left = (Ratio*99*2)+rFairyTale01Btn.width*2+(Ratio*117*2*2)+"px";
  rFairyTale03Btn.style.top= (77*Ratio*2)+"px";

  rFairyTale04Btn.width = rFairyTale04Btn.naturalWidth*Ratio;
  rFairyTale04Btn.height = rFairyTale04Btn.naturalHeight*Ratio;
  rFairyTale04Btn.style.left = (Ratio*99*2)+rFairyTale01Btn.width*3+(Ratio*117*2*3)+"px";
  rFairyTale04Btn.style.top= (77*Ratio*2)+"px";

  rFairyTale05Btn.width = rFairyTale05Btn.naturalWidth*Ratio;
  rFairyTale05Btn.height = rFairyTale05Btn.naturalHeight*Ratio;
  rFairyTale05Btn.style.left = (Ratio*99*2)+rFairyTale01Btn.width*4+(Ratio*117*2*4)+"px";
  rFairyTale05Btn.style.top= (77*Ratio*2)+"px";

  rFairyTale06Btn.width = rFairyTale06Btn.naturalWidth*Ratio;
  rFairyTale06Btn.height = rFairyTale06Btn.naturalHeight*Ratio;
  rFairyTale06Btn.style.left = (Ratio*99*2)+rFairyTale01Btn.width*5+(Ratio*117*2*5)+"px";
  rFairyTale06Btn.style.top= (77*Ratio*2)+"px";


  rDetailFairyTale01Btn.width = rDetailFairyTale01Btn.naturalWidth*Ratio;
  rDetailFairyTale01Btn.height = rDetailFairyTale01Btn.naturalHeight*Ratio;
  rDetailFairyTale01Btn.style.left = (Ratio*52*2)+"px";


  rDetailFairyTale02Btn.width = rDetailFairyTale02Btn.naturalWidth*Ratio;
  rDetailFairyTale02Btn.height = rDetailFairyTale02Btn.naturalHeight*Ratio;
  rDetailFairyTale02Btn.style.left = (Ratio*52*2)+rFairyTale01Btn.width+(Ratio*117*2)+"px";



  rDetailFairyTale03Btn.width = rDetailFairyTale03Btn.naturalWidth*Ratio;
  rDetailFairyTale03Btn.height = rDetailFairyTale03Btn.naturalHeight*Ratio;
  rDetailFairyTale03Btn.style.left = (Ratio*52*2)+rFairyTale01Btn.width*2+(Ratio*117*2*2)+"px";

  rDetailFairyTale04Btn.width = rDetailFairyTale04Btn.naturalWidth*Ratio;
  rDetailFairyTale04Btn.height = rDetailFairyTale04Btn.naturalHeight*Ratio;
  rDetailFairyTale04Btn.style.left = (Ratio*52*2)+rFairyTale01Btn.width*3+(Ratio*117*2*3)+"px";

  rDetailFairyTale05Btn.width = rDetailFairyTale05Btn.naturalWidth*Ratio;
  rDetailFairyTale05Btn.height = rDetailFairyTale05Btn.naturalHeight*Ratio;
  rDetailFairyTale05Btn.style.left = (Ratio*52*2)+rFairyTale01Btn.width*4+(Ratio*117*2*4)+"px";

  rDetailFairyTale06Btn.width = rDetailFairyTale06Btn.naturalWidth*Ratio;
  rDetailFairyTale06Btn.height = rDetailFairyTale06Btn.naturalHeight*Ratio;
  rDetailFairyTale06Btn.style.left = (Ratio*52*2)+rFairyTale01Btn.width*5+(Ratio*117*2*5)+"px";

  mainTitleDiv.width = mainTitleDiv.naturalWidth*Ratio;
  mainTitleDiv.height = mainTitleDiv.naturalHeight*Ratio;
  mainTitleDiv.style.left = (Ratio*99*2)+"px";
  mainTitleDiv.style.top= (1308*Ratio*2)+"px";

  mainTitleTextDiv.width = mainTitleTextDiv.naturalWidth*Ratio;
  mainTitleTextDiv.height = mainTitleTextDiv.naturalHeight*Ratio;
  mainTitleTextDiv.style.left = (Ratio*99*2)+"px";
  mainTitleTextDiv.style.top= (1520*Ratio*2)+"px";



  mainTitle.style.fontSize = (60*Ratio)+"px";
  mainTitleTextDiv.style.fontSize = (40*Ratio)+"px";

  fairyTale1count.width = fairyTale1count.naturalWidth*Ratio;
  fairyTale1count.height = fairyTale1count.naturalHeight*Ratio;
  fairyTale1count.style.left = (Ratio*150*2)+"px";
  fairyTale1count.style.top= (360*Ratio*2)+"px";
  fairyTale1CountText.style.fontSize=(40*Ratio)+"px";

  fairyTale2count.width = fairyTale2count.naturalWidth*Ratio;
  fairyTale2count.height = fairyTale2count.naturalHeight*Ratio;
  fairyTale2count.style.left = (Ratio*(150+350)*2)+"px";
  fairyTale2count.style.top= (360*Ratio*2)+"px";
  fairyTale2CountText.style.fontSize=(40*Ratio)+"px";

  fairyTale3count.width = fairyTale3count.naturalWidth*Ratio;
  fairyTale3count.height = fairyTale3count.naturalHeight*Ratio;
  fairyTale3count.style.left = (Ratio*(150+350+345)*2)+"px";
  fairyTale3count.style.top= (360*Ratio*2)+"px";
  fairyTale3CountText.style.fontSize=(40*Ratio)+"px";

  fairyTale4count.width = fairyTale4count.naturalWidth*Ratio;
  fairyTale4count.height = fairyTale4count.naturalHeight*Ratio;
  fairyTale4count.style.left = (Ratio*(150+350+345+340)*2)+"px";
  fairyTale4count.style.top= (360*Ratio*2)+"px";
  fairyTale4CountText.style.fontSize=(40*Ratio)+"px";

  fairyTale5count.width = fairyTale5count.naturalWidth*Ratio;
  fairyTale5count.height = fairyTale5count.naturalHeight*Ratio;
  fairyTale5count.style.left = (Ratio*(150+350+345+340+340)*2)+"px";
  fairyTale5count.style.top= (360*Ratio*2)+"px";
  fairyTale5CountText.style.fontSize=(40*Ratio)+"px";

  fairyTale6count.width = fairyTale6count.naturalWidth*Ratio;
  fairyTale6count.height = fairyTale6count.naturalHeight*Ratio;
  fairyTale6count.style.left = (Ratio*(150+350+340+340+340+340)*2)+"px";
  fairyTale6count.style.top= (360*Ratio*2)+"px";
  fairyTale6CountText.style.fontSize=(40*Ratio)+"px";

  bgFairyTale01Btn.width = bgFairyTale01Btn.naturalWidth*Ratio;
  bgFairyTale01Btn.height = bgFairyTale01Btn.naturalHeight*Ratio;
  bgFairyTale01Btn.style.left = (Ratio*870*2)+"px";
  bgFairyTale01Btn.style.top= (1290*Ratio*2)+"px";

  bgFairyTale02Btn.width = bgFairyTale02Btn.naturalWidth*Ratio;
  bgFairyTale02Btn.height = bgFairyTale02Btn.naturalHeight*Ratio;
  bgFairyTale02Btn.style.left = (Ratio*870*2)+"px";
  bgFairyTale02Btn.style.top= (1290*Ratio*2)+"px";

  bgFairyTale03Btn.width = bgFairyTale03Btn.naturalWidth*Ratio;
  bgFairyTale03Btn.height = bgFairyTale03Btn.naturalHeight*Ratio;
  bgFairyTale03Btn.style.left = (Ratio*870*2)+"px";
  bgFairyTale03Btn.style.top= (1290*Ratio*2)+"px";

  bgFairyTale04Btn.width = bgFairyTale04Btn.naturalWidth*Ratio;
  bgFairyTale04Btn.height = bgFairyTale04Btn.naturalHeight*Ratio;
  bgFairyTale04Btn.style.left = (Ratio*870*2)+"px";
  bgFairyTale04Btn.style.top= (1290*Ratio*2)+"px";

  bgFairyTale05Btn.width = bgFairyTale05Btn.naturalWidth*Ratio;
  bgFairyTale05Btn.height = bgFairyTale05Btn.naturalHeight*Ratio;
  bgFairyTale05Btn.style.left = (Ratio*870*2)+"px";
  bgFairyTale05Btn.style.top= (1290*Ratio*2)+"px";

  bgFairyTale06Btn.width = bgFairyTale06Btn.naturalWidth*Ratio;
  bgFairyTale06Btn.height = bgFairyTale06Btn.naturalHeight*Ratio;
  bgFairyTale06Btn.style.left = (Ratio*870*2)+"px";
  bgFairyTale06Btn.style.top= (1290*Ratio*2)+"px";

recordedFairyTalePic01.width = recordedFairyTalePic01.naturalWidth*Ratio;
recordedFairyTalePic01.height = recordedFairyTalePic01.naturalHeight*Ratio;
recordedFairyTalePic01.style.left = (Ratio*913*2)+"px";
recordedFairyTalePic01.style.top= (1651*Ratio*2)+"px";

recordedFairyTalePic02.width = recordedFairyTalePic02.naturalWidth*Ratio;
recordedFairyTalePic02.height = recordedFairyTalePic02.naturalHeight*Ratio;
recordedFairyTalePic02.style.left = (Ratio*913*2)+recordedFairyTalePic01.width+"px";
recordedFairyTalePic02.style.top= (1651*Ratio*2)+"px";

recordedFairyTalePic03.width = recordedFairyTalePic03.naturalWidth*Ratio;
recordedFairyTalePic03.height = recordedFairyTalePic03.naturalHeight*Ratio;
recordedFairyTalePic03.style.left = (Ratio*913*2)+recordedFairyTalePic01.width*2+"px";
recordedFairyTalePic03.style.top= (1651*Ratio*2)+"px";

recordedSelected01.width = recordedSelected01.naturalWidth*Ratio;
recordedSelected01.height = recordedSelected01.naturalHeight*Ratio;
recordedSelected01.style.left = (Ratio*345*2)+recordedFairyTalePic01.width*2+"px";
recordedSelected01.style.top= (1930*Ratio*2)+"px";

recordedUnSelected01.width = recordedUnSelected01.naturalWidth*Ratio;
recordedUnSelected01.height = recordedUnSelected01.naturalHeight*Ratio;
recordedUnSelected01.style.left = (Ratio*345*2)+570*Ratio+recordedFairyTalePic01.width*2+"px";
recordedUnSelected01.style.top= (1930*Ratio*2)+"px";

recordedUnSelected02.width = recordedUnSelected02.naturalWidth*Ratio;
recordedUnSelected02.height = recordedUnSelected02.naturalHeight*Ratio;
recordedUnSelected02.style.left = (Ratio*345*2)+1350*Ratio+recordedFairyTalePic01.width*2+"px";
recordedUnSelected02.style.top= (1930*Ratio*2)+"px";


  }


function onChangeSize(){


}

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
function finishedRecordingBtnClick() {
  popup.style.display = "block";
  recordingStopBTNClick();
}
function popupCloseBtnClick() {
    popup.style.display = "none";
}
function recordingBTNClick(){
  startRecording();
  startButton(event);
  recordingBTN.style.display="none";
  recordingStopBTN.style.display="block";
}
function recordingStopBTNClick(){

  stopRecording();
  startButton(event);
  recordingBTN.style.display="block";
  recordingStopBTN.style.display="none";
  popup.style.display = "block"
}

function onFairyTale1Click(){
  rFairyTale01Btn.style.display = "none";
  rFairyTale02Btn.style.display = "block";
  rFairyTale03Btn.style.display = "block";
  rFairyTale04Btn.style.display = "block";
  rFairyTale05Btn.style.display = "block";
  rFairyTale06Btn.style.display = "block";
  rDetailFairyTale01Btn.style.display = "block";
  rDetailFairyTale02Btn.style.display = "none";
  rDetailFairyTale03Btn.style.display = "none";
  rDetailFairyTale04Btn.style.display = "none";
  rDetailFairyTale05Btn.style.display = "none";
  rDetailFairyTale06Btn.style.display = "none";






  index=1;
  fairyTale1count.style.display="block";
  fairyTale2count.style.display="none";
  fairyTale3count.style.display="none";
  fairyTale4count.style.display="none";
  fairyTale5count.style.display="none";
  fairyTale6count.style.display="none";
  fairyTale1CountText.style.display="block";
  fairyTale2CountText.style.display="none";
  fairyTale3CountText.style.display="none";
  fairyTale4CountText.style.display="none";
  fairyTale5CountText.style.display="none";
  fairyTale6CountText.style.display="none";

  bgFairyTale01Btn.style.display="block";
  bgFairyTale02Btn.style.display="none";
  bgFairyTale03Btn.style.display="none";
  bgFairyTale04Btn.style.display="none";
  bgFairyTale05Btn.style.display="none";
  bgFairyTale06Btn.style.display="none";
}

function onFairyTale2Click(){

  index=2;
  rFairyTale01Btn.style.display = "block";
  rFairyTale02Btn.style.display = "none";
  rFairyTale03Btn.style.display = "block";
  rFairyTale04Btn.style.display = "block";
  rFairyTale05Btn.style.display = "block";
  rFairyTale06Btn.style.display = "block";
  rDetailFairyTale01Btn.style.display = "none";
  rDetailFairyTale02Btn.style.display = "block";
  rDetailFairyTale03Btn.style.display = "none";
  rDetailFairyTale04Btn.style.display = "none";
  rDetailFairyTale05Btn.style.display = "none";
  rDetailFairyTale06Btn.style.display = "none";


  fairyTale1count.style.display="none";
  fairyTale2count.style.display="block";
  fairyTale3count.style.display="none";
  fairyTale4count.style.display="none";
  fairyTale5count.style.display="none";
  fairyTale6count.style.display="none";
  fairyTale1CountText.style.display="none";
  fairyTale2CountText.style.display="block";
  fairyTale3CountText.style.display="none";
  fairyTale4CountText.style.display="none";
  fairyTale5CountText.style.display="none";
  fairyTale6CountText.style.display="none";

  bgFairyTale01Btn.style.display="none";
  bgFairyTale02Btn.style.display="block";
  bgFairyTale03Btn.style.display="none";
  bgFairyTale04Btn.style.display="none";
  bgFairyTale05Btn.style.display="none";
  bgFairyTale06Btn.style.display="none";

}
function onFairyTale3Click(){

  index=3;
  rFairyTale01Btn.style.display = "block";
  rFairyTale02Btn.style.display = "block";
  rFairyTale03Btn.style.display = "none";
  rFairyTale04Btn.style.display = "block";
  rFairyTale05Btn.style.display = "block";
  rFairyTale06Btn.style.display = "block";
  rDetailFairyTale01Btn.style.display = "none";
  rDetailFairyTale02Btn.style.display = "none";
  rDetailFairyTale03Btn.style.display = "block";
  rDetailFairyTale04Btn.style.display = "none";
  rDetailFairyTale05Btn.style.display = "none";
  rDetailFairyTale06Btn.style.display = "none";






  fairyTale1count.style.display="none";
  fairyTale2count.style.display="none";
  fairyTale3count.style.display="block";
  fairyTale4count.style.display="none";
  fairyTale5count.style.display="none";
  fairyTale6count.style.display="none";
  fairyTale1CountText.style.display="none";
  fairyTale2CountText.style.display="none";
  fairyTale3CountText.style.display="block";
  fairyTale4CountText.style.display="none";
  fairyTale5CountText.style.display="none";
  fairyTale6CountText.style.display="none";

  bgFairyTale01Btn.style.display="none";
  bgFairyTale02Btn.style.display="none";
  bgFairyTale03Btn.style.display="block";
  bgFairyTale04Btn.style.display="none";
  bgFairyTale05Btn.style.display="none";
  bgFairyTale06Btn.style.display="none";


}

function onFairyTale4Click(){
  index=4;
  rFairyTale01Btn.style.display = "block";
  rFairyTale02Btn.style.display = "block";
  rFairyTale03Btn.style.display = "block";
  rFairyTale04Btn.style.display = "none";
  rFairyTale05Btn.style.display = "block";
  rFairyTale06Btn.style.display = "block";
  rDetailFairyTale01Btn.style.display = "none";
  rDetailFairyTale02Btn.style.display = "none";
  rDetailFairyTale03Btn.style.display = "none";
  rDetailFairyTale04Btn.style.display = "block";
  rDetailFairyTale05Btn.style.display = "none";
  rDetailFairyTale06Btn.style.display = "none";

  fairyTale1count.style.display="none";
  fairyTale2count.style.display="none";
  fairyTale3count.style.display="none";
  fairyTale4count.style.display="block";
  fairyTale5count.style.display="none";
  fairyTale6count.style.display="none";
  fairyTale1CountText.style.display="none";
  fairyTale2CountText.style.display="none";
  fairyTale3CountText.style.display="none";
  fairyTale4CountText.style.display="block";
  fairyTale5CountText.style.display="none";
  fairyTale6CountText.style.display="none";


    bgFairyTale01Btn.style.display="none";
    bgFairyTale02Btn.style.display="none";
    bgFairyTale03Btn.style.display="none";
    bgFairyTale04Btn.style.display="block";
    bgFairyTale05Btn.style.display="none";
    bgFairyTale06Btn.style.display="none";

}

function onFairyTale5Click(){
  index=5;
  rFairyTale01Btn.style.display = "block"
  rFairyTale02Btn.style.display = "block";
  rFairyTale03Btn.style.display = "block";
  rFairyTale04Btn.style.display = "block";
  rFairyTale05Btn.style.display = "none";
  rFairyTale06Btn.style.display = "block";
  rDetailFairyTale01Btn.style.display = "none";
  rDetailFairyTale02Btn.style.display = "none";
  rDetailFairyTale03Btn.style.display = "none";
  rDetailFairyTale04Btn.style.display = "none";
  rDetailFairyTale05Btn.style.display = "block";
  rDetailFairyTale06Btn.style.display = "none";


    fairyTale1count.style.display="none";
    fairyTale2count.style.display="none";
    fairyTale3count.style.display="none";
    fairyTale4count.style.display="none";
    fairyTale5count.style.display="block";
    fairyTale6count.style.display="none";
    fairyTale1CountText.style.display="none";
    fairyTale2CountText.style.display="none";
    fairyTale3CountText.style.display="none";
    fairyTale4CountText.style.display="none";
    fairyTale5CountText.style.display="block";
    fairyTale6CountText.style.display="none";

    bgFairyTale01Btn.style.display="none";
    bgFairyTale02Btn.style.display="none";
    bgFairyTale03Btn.style.display="none";
    bgFairyTale04Btn.style.display="none";
    bgFairyTale05Btn.style.display="block";
    bgFairyTale06Btn.style.display="none";


}
function onFairyTale6Click(){
  index=6;
  rFairyTale01Btn.style.display = "block";
  rFairyTale02Btn.style.display = "block";
  rFairyTale03Btn.style.display = "block";
  rFairyTale04Btn.style.display = "block";
  rFairyTale05Btn.style.display = "block";
  rFairyTale06Btn.style.display = "none";
  rDetailFairyTale01Btn.style.display = "none";
  rDetailFairyTale02Btn.style.display = "none";
  rDetailFairyTale03Btn.style.display = "none";
  rDetailFairyTale04Btn.style.display = "none";
  rDetailFairyTale05Btn.style.display = "none";
  rDetailFairyTale06Btn.style.display = "block";
  bgFairyTale01Btn.style.display = "none";
  bgFairyTale02Btn.style.display = "none";
  bgFairyTale03Btn.style.display = "none";
  bgFairyTale04Btn.style.display = "none";
  bgFairyTale05Btn.style.display = "none";
  bgFairyTale06Btn.style.display = "block";





  fairyTale1count.style.display="none";
  fairyTale2count.style.display="none";
  fairyTale3count.style.display="none";
  fairyTale4count.style.display="none";
  fairyTale5count.style.display="none";
  fairyTale6count.style.display="block";
  fairyTale1CountText.style.display="none";
  fairyTale2CountText.style.display="none";
  fairyTale3CountText.style.display="none";
  fairyTale4CountText.style.display="none";
  fairyTale5CountText.style.display="none";
  fairyTale6CountText.style.display="block";

  bgFairyTale01Btn.style.display="none";
  bgFairyTale02Btn.style.display="none";
  bgFairyTale03Btn.style.display="none";
  bgFairyTale04Btn.style.display="none";
  bgFairyTale05Btn.style.display="none";
  bgFairyTale06Btn.style.display="block";


}
