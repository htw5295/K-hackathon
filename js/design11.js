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
var mainTitleText,mainTitle,mainTitleDiv,recordedFairyTalePic01,recordedFairyTalePic02,recordedFairyTalePic03,fairyTaleCountUnder;
var fairyTaleCountUnder,recordedFairyTalePlayBtn,playCountDiv,playHumanDiv,fairyTaleStory01,fairyTaleStory02,fairyTaleStory03,fairyTaleStory04,fairyTaleStory05,fairyTaleStory06;
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

  mainTitle = document.getElementById("mainTitle");
  mainTitleDiv = document.getElementById("mainTitleDiv");

  recordedFairyTalePic01 = document.getElementById("recordedFairyTalePic01");
  recordedFairyTalePic02 = document.getElementById("recordedFairyTalePic02");
  recordedFairyTalePic03 = document.getElementById("recordedFairyTalePic03");

  recordedSelected01 = document.getElementById("recordedSelected01");
  recordedUnSelected02 = document.getElementById("recordedUnSelected02");
  recordedUnSelected01 = document.getElementById("recordedUnSelected01");
  fairyTaleCountUnderDiv = document.getElementById("fairyTaleCountUnderDiv");

  playCountDiv = document.getElementById("playCountDiv");
  playHumanDiv = document.getElementById("playHumanDiv");
  recordedFairyTalePlayBtn = document.getElementById("recordedFairyTalePlayBtn");


  fairyTaleStory01 = document.getElementById("fairyTaleStory01");
  fairyTaleStory02 = document.getElementById("fairyTaleStory02");
  fairyTaleStory03 = document.getElementById("fairyTaleStory03");
  fairyTaleStory04 = document.getElementById("fairyTaleStory04");
  fairyTaleStory05 = document.getElementById("fairyTaleStory05");
  fairyTaleStory06 = document.getElementById("fairyTaleStory06");


  bg11Width = document.body.offsetWidth;
  bg11Height = bg11Width*1.121875;
  Ratio = bg11Width / 3840;

  bg11Img.width=bg11Width;
  bg11Img.height=bg11Height;

  menuBtn.width=menuBtn.naturalWidth*Ratio;
  menuBtn.height=menuBtn.naturalHeight*Ratio;
  menuBtn.style.top=(Ratio*36*3)+"px";
  menuBtn.style.left=(Ratio*36*3)+"px";

  googleBtn.width=googleBtn.naturalWidth*Ratio;
  googleBtn.height=googleBtn.naturalHeight*Ratio;
  googleBtn.style.top=(Ratio*36*2.7)+"px";
  googleBtn.style.left=(Ratio*1563*2)-(10*2*Ratio)+"px";

  twitterBtn.width=twitterBtn.naturalWidth*Ratio;
  twitterBtn.height=twitterBtn.naturalHeight*Ratio;
  twitterBtn.style.top=(Ratio*36*2.7)+"px";
  twitterBtn.style.left=(Ratio*1563*2)-(20*2*Ratio)+googleBtn.width+(Ratio*58*2)+"px";

  facebookBtn.width=facebookBtn.naturalWidth*Ratio;
  facebookBtn.height=facebookBtn.naturalHeight*Ratio;
  facebookBtn.style.top=(Ratio*36*2.7)+"px";
  facebookBtn.style.left=(Ratio*1563*2)-(20*2*Ratio)+googleBtn.width+twitterBtn.width+(Ratio*58*2*2)+"px";

  loginBtn.width=loginBtn.naturalWidth*Ratio;
  loginBtn.height=loginBtn.naturalHeight*Ratio;
  loginBtn.style.top=(Ratio*36*3)+"px";
  loginBtn.style.left=bg11.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  selectedMypageBtn.width = selectedMypageBtn.naturalWidth*Ratio;
  selectedMypageBtn.height = selectedMypageBtn.naturalHeight*Ratio;
  selectedMypageBtn.style.top = (Ratio*525*2)+"px";
  selectedMypageBtn.style.left = (Ratio*1715*2)-(200*Ratio)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

  rFairyTaleDiv.style.width = bg11Img.width-(400*Ratio)+"px";
  rFairyTaleDiv.style.height = 850*Ratio+"px";
  rFairyTaleDiv.style.top = (Ratio*800*2)+"px";
  rFairyTaleDiv.style.left = 0+(200*Ratio)+"px";

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
  mainTitleDiv.style.left = (Ratio*99*2)+(200*Ratio)+"px";
  mainTitleDiv.style.top= (1308*Ratio*2)+"px";





  mainTitle.style.fontSize = (60*Ratio)+"px";

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
  bgFairyTale01Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale01Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale02Btn.width = bgFairyTale02Btn.naturalWidth*Ratio;
  bgFairyTale02Btn.height = bgFairyTale02Btn.naturalHeight*Ratio;
  bgFairyTale02Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale02Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale03Btn.width = bgFairyTale03Btn.naturalWidth*Ratio;
  bgFairyTale03Btn.height = bgFairyTale03Btn.naturalHeight*Ratio;
  bgFairyTale03Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale03Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale04Btn.width = bgFairyTale04Btn.naturalWidth*Ratio;
  bgFairyTale04Btn.height = bgFairyTale04Btn.naturalHeight*Ratio;
  bgFairyTale04Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale04Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale05Btn.width = bgFairyTale05Btn.naturalWidth*Ratio;
  bgFairyTale05Btn.height = bgFairyTale05Btn.naturalHeight*Ratio;
  bgFairyTale05Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale05Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale06Btn.width = bgFairyTale06Btn.naturalWidth*Ratio;
  bgFairyTale06Btn.height = bgFairyTale06Btn.naturalHeight*Ratio;
  bgFairyTale06Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale06Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

recordedFairyTalePic01.width = recordedFairyTalePic01.naturalWidth*Ratio;
recordedFairyTalePic01.height = recordedFairyTalePic01.naturalHeight*Ratio;
recordedFairyTalePic01.style.left = (Ratio*913*2)+(Ratio*200)+"px";
recordedFairyTalePic01.style.top= (1651*Ratio*2)+(Ratio*100)+"px";

recordedFairyTalePic02.width = recordedFairyTalePic02.naturalWidth*Ratio;
recordedFairyTalePic02.height = recordedFairyTalePic02.naturalHeight*Ratio;
recordedFairyTalePic02.style.left = (Ratio*913*2)+(Ratio*200)+recordedFairyTalePic01.width+"px";
recordedFairyTalePic02.style.top= (1651*Ratio*2)+(Ratio*100)+"px";

recordedFairyTalePic03.width = recordedFairyTalePic03.naturalWidth*Ratio;
recordedFairyTalePic03.height = recordedFairyTalePic03.naturalHeight*Ratio;
recordedFairyTalePic03.style.left = (Ratio*913*2)+(Ratio*200)+recordedFairyTalePic01.width*2+"px";
recordedFairyTalePic03.style.top= (1651*Ratio*2)+(Ratio*100)+"px";

recordedSelected01.width = recordedSelected01.naturalWidth*Ratio;
recordedSelected01.height = recordedSelected01.naturalHeight*Ratio;
recordedSelected01.style.left = (Ratio*345*2)+(Ratio*200)+recordedFairyTalePic01.width*2+"px";
recordedSelected01.style.top= (1930*Ratio*2)+(Ratio*100)+"px";

recordedUnSelected01.width = recordedUnSelected01.naturalWidth*Ratio;
recordedUnSelected01.height = recordedUnSelected01.naturalHeight*Ratio;
recordedUnSelected01.style.left = (Ratio*345*2)+(Ratio*200)+570*Ratio+recordedFairyTalePic01.width*2+"px";
recordedUnSelected01.style.top= (1930*Ratio*2)+(Ratio*100)+"px";

recordedUnSelected02.width = recordedUnSelected02.naturalWidth*Ratio;
recordedUnSelected02.height = recordedUnSelected02.naturalHeight*Ratio;
recordedUnSelected02.style.left = (Ratio*345*2)+(Ratio*200)+1350*Ratio+recordedFairyTalePic01.width*2+"px";
recordedUnSelected02.style.top= (1930*Ratio*2)+(Ratio*100)+"px";

playCountDiv.style.left = (Ratio*589*2)+"px";
playCountDiv.style.top= (1772*Ratio*2)+"px";
playCountDiv.style.fontSize = (20*Ratio)+"pt";

fairyTaleCountUnderDiv.style.left = (Ratio*589*2)+"px";
fairyTaleCountUnderDiv.style.top= (1820*Ratio*2)+"px";
fairyTaleCountUnderDiv.style.fontSize = (20*Ratio)+"pt";

playHumanDiv.style.left = (Ratio*589*2)+"px";
playHumanDiv.style.top= (1867*Ratio*2)+"px";
playHumanDiv.style.fontSize = (20*Ratio)+"pt";


recordedFairyTalePlayBtn.width = recordedFairyTalePlayBtn.naturalWidth*Ratio;
recordedFairyTalePlayBtn.height = recordedFairyTalePlayBtn.naturalHeight*Ratio;
recordedFairyTalePlayBtn.style.left = (Ratio*99*2)+(Ratio*150)+"px";
recordedFairyTalePlayBtn.style.top= (1950*Ratio*2)+"px";

fairyTaleStory01.width = fairyTaleStory01.naturalWidth*Ratio;
fairyTaleStory01.height = fairyTaleStory01.naturalHeight*Ratio;
fairyTaleStory01.style.left = (Ratio*200*2)+"px";
fairyTaleStory01.style.top= (1519*Ratio*2)+"px";

fairyTaleStory02.width = fairyTaleStory02.naturalWidth*Ratio;
fairyTaleStory02.height = fairyTaleStory02.naturalHeight*Ratio;
fairyTaleStory02.style.left = (Ratio*200*2)+"px";
fairyTaleStory02.style.top= (1519*Ratio*2)+"px";

fairyTaleStory03.width = fairyTaleStory03.naturalWidth*Ratio;
fairyTaleStory03.height = fairyTaleStory03.naturalHeight*Ratio;
fairyTaleStory03.style.left = (Ratio*200*2)+"px";
fairyTaleStory03.style.top= (1519*Ratio*2)+"px";

fairyTaleStory04.width = fairyTaleStory04.naturalWidth*Ratio;
fairyTaleStory04.height = fairyTaleStory04.naturalHeight*Ratio;
fairyTaleStory04.style.left = (Ratio*200*2)+"px";
fairyTaleStory04.style.top= (1519*Ratio*2)+"px";

fairyTaleStory05.width = fairyTaleStory05.naturalWidth*Ratio;
fairyTaleStory05.height = fairyTaleStory05.naturalHeight*Ratio;
fairyTaleStory05.style.left = (Ratio*200*2)+"px";
fairyTaleStory05.style.top= (1519*Ratio*2)+"px";


fairyTaleStory06.width = fairyTaleStory06.naturalWidth*Ratio;
fairyTaleStory06.height = fairyTaleStory06.naturalHeight*Ratio;
fairyTaleStory06.style.left = (Ratio*200*2)+"px";
fairyTaleStory06.style.top= (1519*Ratio*2)+"px";


  }


function onChangeSize(){
  bg11Width = document.body.offsetWidth;
  bg11Height = bg11Width*1.121875;
  Ratio = bg11Width / 3840;

  bg11Img.width=bg11Width;
  bg11Img.height=bg11Height;

  menuBtn.width=menuBtn.naturalWidth*Ratio;
  menuBtn.height=menuBtn.naturalHeight*Ratio;
  menuBtn.style.top=(Ratio*36*3)+"px";
  menuBtn.style.left=(Ratio*36*3)+"px";

  googleBtn.width=googleBtn.naturalWidth*Ratio;
  googleBtn.height=googleBtn.naturalHeight*Ratio;
  googleBtn.style.top=(Ratio*36*2.7)+"px";
  googleBtn.style.left=(Ratio*1563*2)-(10*2*Ratio)+"px";

  twitterBtn.width=twitterBtn.naturalWidth*Ratio;
  twitterBtn.height=twitterBtn.naturalHeight*Ratio;
  twitterBtn.style.top=(Ratio*36*2.7)+"px";
  twitterBtn.style.left=(Ratio*1563*2)-(20*2*Ratio)+googleBtn.width+(Ratio*58*2)+"px";

  facebookBtn.width=facebookBtn.naturalWidth*Ratio;
  facebookBtn.height=facebookBtn.naturalHeight*Ratio;
  facebookBtn.style.top=(Ratio*36*2.7)+"px";
  facebookBtn.style.left=(Ratio*1563*2)-(20*2*Ratio)+googleBtn.width+twitterBtn.width+(Ratio*58*2*2)+"px";

  loginBtn.width=loginBtn.naturalWidth*Ratio;
  loginBtn.height=loginBtn.naturalHeight*Ratio;
  loginBtn.style.top=(Ratio*36*3)+"px";
  loginBtn.style.left=bg11.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  selectedMypageBtn.width = selectedMypageBtn.naturalWidth*Ratio;
  selectedMypageBtn.height = selectedMypageBtn.naturalHeight*Ratio;
  selectedMypageBtn.style.top = (Ratio*525*2)+"px";
  selectedMypageBtn.style.left = (Ratio*1715*2)-(200*Ratio)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

  rFairyTaleDiv.style.width = bg11Img.width-(400*Ratio)+"px";
  rFairyTaleDiv.style.height = 850*Ratio+"px";
  rFairyTaleDiv.style.top = (Ratio*800*2)+"px";
  rFairyTaleDiv.style.left = 0+(200*Ratio)+"px";

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
  mainTitleDiv.style.left = (Ratio*99*2)+(200*Ratio)+"px";
  mainTitleDiv.style.top= (1308*Ratio*2)+"px";





  mainTitle.style.fontSize = (60*Ratio)+"px";

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
  bgFairyTale01Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale01Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale02Btn.width = bgFairyTale02Btn.naturalWidth*Ratio;
  bgFairyTale02Btn.height = bgFairyTale02Btn.naturalHeight*Ratio;
  bgFairyTale02Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale02Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale03Btn.width = bgFairyTale03Btn.naturalWidth*Ratio;
  bgFairyTale03Btn.height = bgFairyTale03Btn.naturalHeight*Ratio;
  bgFairyTale03Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale03Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale04Btn.width = bgFairyTale04Btn.naturalWidth*Ratio;
  bgFairyTale04Btn.height = bgFairyTale04Btn.naturalHeight*Ratio;
  bgFairyTale04Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale04Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale05Btn.width = bgFairyTale05Btn.naturalWidth*Ratio;
  bgFairyTale05Btn.height = bgFairyTale05Btn.naturalHeight*Ratio;
  bgFairyTale05Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale05Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

  bgFairyTale06Btn.width = bgFairyTale06Btn.naturalWidth*Ratio;
  bgFairyTale06Btn.height = bgFairyTale06Btn.naturalHeight*Ratio;
  bgFairyTale06Btn.style.left = (Ratio*870*2)+(Ratio*200)+"px";
  bgFairyTale06Btn.style.top= (1290*Ratio*2)+(Ratio*150)+"px";

recordedFairyTalePic01.width = recordedFairyTalePic01.naturalWidth*Ratio;
recordedFairyTalePic01.height = recordedFairyTalePic01.naturalHeight*Ratio;
recordedFairyTalePic01.style.left = (Ratio*913*2)+(Ratio*200)+"px";
recordedFairyTalePic01.style.top= (1651*Ratio*2)+(Ratio*100)+"px";

recordedFairyTalePic02.width = recordedFairyTalePic02.naturalWidth*Ratio;
recordedFairyTalePic02.height = recordedFairyTalePic02.naturalHeight*Ratio;
recordedFairyTalePic02.style.left = (Ratio*913*2)+(Ratio*200)+recordedFairyTalePic01.width+"px";
recordedFairyTalePic02.style.top= (1651*Ratio*2)+(Ratio*100)+"px";

recordedFairyTalePic03.width = recordedFairyTalePic03.naturalWidth*Ratio;
recordedFairyTalePic03.height = recordedFairyTalePic03.naturalHeight*Ratio;
recordedFairyTalePic03.style.left = (Ratio*913*2)+(Ratio*200)+recordedFairyTalePic01.width*2+"px";
recordedFairyTalePic03.style.top= (1651*Ratio*2)+(Ratio*100)+"px";

recordedSelected01.width = recordedSelected01.naturalWidth*Ratio;
recordedSelected01.height = recordedSelected01.naturalHeight*Ratio;
recordedSelected01.style.left = (Ratio*345*2)+(Ratio*200)+recordedFairyTalePic01.width*2+"px";
recordedSelected01.style.top= (1930*Ratio*2)+(Ratio*100)+"px";

recordedUnSelected01.width = recordedUnSelected01.naturalWidth*Ratio;
recordedUnSelected01.height = recordedUnSelected01.naturalHeight*Ratio;
recordedUnSelected01.style.left = (Ratio*345*2)+(Ratio*200)+570*Ratio+recordedFairyTalePic01.width*2+"px";
recordedUnSelected01.style.top= (1930*Ratio*2)+(Ratio*100)+"px";

recordedUnSelected02.width = recordedUnSelected02.naturalWidth*Ratio;
recordedUnSelected02.height = recordedUnSelected02.naturalHeight*Ratio;
recordedUnSelected02.style.left = (Ratio*345*2)+(Ratio*200)+1350*Ratio+recordedFairyTalePic01.width*2+"px";
recordedUnSelected02.style.top= (1930*Ratio*2)+(Ratio*100)+"px";

playCountDiv.style.left = (Ratio*589*2)+"px";
playCountDiv.style.top= (1772*Ratio*2)+"px";
playCountDiv.style.fontSize = (20*Ratio)+"pt";

fairyTaleCountUnderDiv.style.left = (Ratio*589*2)+"px";
fairyTaleCountUnderDiv.style.top= (1820*Ratio*2)+"px";
fairyTaleCountUnderDiv.style.fontSize = (20*Ratio)+"pt";

playHumanDiv.style.left = (Ratio*589*2)+"px";
playHumanDiv.style.top= (1867*Ratio*2)+"px";
playHumanDiv.style.fontSize = (20*Ratio)+"pt";


recordedFairyTalePlayBtn.width = recordedFairyTalePlayBtn.naturalWidth*Ratio;
recordedFairyTalePlayBtn.height = recordedFairyTalePlayBtn.naturalHeight*Ratio;
recordedFairyTalePlayBtn.style.left = (Ratio*99*2)+(Ratio*150)+"px";
recordedFairyTalePlayBtn.style.top= (1950*Ratio*2)+"px";

fairyTaleStory01.width = fairyTaleStory01.naturalWidth*Ratio;
fairyTaleStory01.height = fairyTaleStory01.naturalHeight*Ratio;
fairyTaleStory01.style.left = (Ratio*200*2)+"px";
fairyTaleStory01.style.top= (1519*Ratio*2)+"px";

fairyTaleStory02.width = fairyTaleStory02.naturalWidth*Ratio;
fairyTaleStory02.height = fairyTaleStory02.naturalHeight*Ratio;
fairyTaleStory02.style.left = (Ratio*200*2)+"px";
fairyTaleStory02.style.top= (1519*Ratio*2)+"px";

fairyTaleStory03.width = fairyTaleStory03.naturalWidth*Ratio;
fairyTaleStory03.height = fairyTaleStory03.naturalHeight*Ratio;
fairyTaleStory03.style.left = (Ratio*200*2)+"px";
fairyTaleStory03.style.top= (1519*Ratio*2)+"px";

fairyTaleStory04.width = fairyTaleStory04.naturalWidth*Ratio;
fairyTaleStory04.height = fairyTaleStory04.naturalHeight*Ratio;
fairyTaleStory04.style.left = (Ratio*200*2)+"px";
fairyTaleStory04.style.top= (1519*Ratio*2)+"px";

fairyTaleStory05.width = fairyTaleStory05.naturalWidth*Ratio;
fairyTaleStory05.height = fairyTaleStory05.naturalHeight*Ratio;
fairyTaleStory05.style.left = (Ratio*200*2)+"px";
fairyTaleStory05.style.top= (1519*Ratio*2)+"px";


fairyTaleStory06.width = fairyTaleStory06.naturalWidth*Ratio;
fairyTaleStory06.height = fairyTaleStory06.naturalHeight*Ratio;
fairyTaleStory06.style.left = (Ratio*200*2)+"px";
fairyTaleStory06.style.top= (1519*Ratio*2)+"px";


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

  fairyTaleStory01.style.display = "block";
  fairyTaleStory02.style.display = "none";
  fairyTaleStory03.style.display = "none";
  fairyTaleStory04.style.display = "none";
  fairyTaleStory05.style.display = "none";
  fairyTaleStory06.style.display = "none";








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
  fairyTaleCountUnder.innerHTML = fairyTaleCount1Text.innerHTML;
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

  fairyTaleCountUnder.innerHTML = fairyTaleCount2Text.innerHTML;

  fairyTaleStory01.style.display = "none";
  fairyTaleStory02.style.display = "block";
  fairyTaleStory03.style.display = "none";
  fairyTaleStory04.style.display = "none";
  fairyTaleStory05.style.display = "none";
  fairyTaleStory06.style.display = "none";
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


    fairyTaleCountUnder.innerHTML = fairyTaleCount3Text.innerHTML;

    fairyTaleStory01.style.display = "none";
    fairyTaleStory02.style.display = "none";
    fairyTaleStory03.style.display = "block";
    fairyTaleStory04.style.display = "none";
    fairyTaleStory05.style.display = "none";
    fairyTaleStory06.style.display = "none";
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


    fairyTaleStory01.style.display = "none";
    fairyTaleStory02.style.display = "none";
    fairyTaleStory03.style.display = "none";
    fairyTaleStory04.style.display = "block";
    fairyTaleStory05.style.display = "none";
    fairyTaleStory06.style.display = "none";
        fairyTaleCountUnder.innerHTML = fairyTaleCount4Text.innerHTML;
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
    fairyTaleCountUnder.innerHTML = fairyTaleCount5Text.innerHTML;


        fairyTaleStory01.style.display = "none";
        fairyTaleStory02.style.display = "none";
        fairyTaleStory03.style.display = "none";
        fairyTaleStory04.style.display = "none";
        fairyTaleStory05.style.display = "block";
        fairyTaleStory06.style.display = "none";


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
  fairyTaleCountUnder.innerHTML = fairyTaleCount6Text.innerHTML;

  fairyTaleStory01.style.display = "none";
  fairyTaleStory02.style.display = "none";
  fairyTaleStory03.style.display = "none";
  fairyTaleStory04.style.display = "none";
  fairyTaleStory05.style.display = "none";
  fairyTaleStory06.style.display = "block";


}
