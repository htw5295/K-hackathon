var bg07Width;
var bg07Height;
var bg07Img;
var Ratio;

var bg07Img,menuBtn,facebookBtn,googleBtn,loginBtn,moreDetailBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;

var searchBar,search,nextFariyTaleLeftBtn,nextFariyTaleRightBtn,rFairyTale01Btn,rFairyTale02Btn,rFairyTale03Btn,rFairyTale04Btn,rFairyTale05Btn,rFairyTale06Btn
var rDetailFairyTale01Btn,rDetailFairyTale02Btn,rDetailFairyTale03Btn,rDetailFairyTale04Btn,rDetailFairyTale05Btn,rDetailFairyTale06Btn,recordingBtn;
var bigFairyTale01Btn,bigFairyTale02Btn,bigFairyTale03Btn,bigFairyTale04Btn,bigFairyTale05Btn,bigFairyTale06Btn;
var storyFairyTale01,storyFairyTale02,storyFairyTale03,storyFairyTale04,storyFairyTale05,storyFairyTale06,emptyCard;
var fairyTale1CountText,fairyTale1count,fairyTale2count,fairyTale3count,fairyTale4count,fairyTale5count,fairyTale6count;
var fairyTale2CountText;
var fairyTale3CountText;
var fairyTale4CountText;
var fairyTale5CountText;
var fairyTale6CountText;
var fairyTaleName1Div,fairyTaleName2Div,fairyTaleName3Div,fairyTaleName4Div,fairyTaleName5Div,fairyTaleName6Div;
var fairyTale1Name,fairyTale2Name,fairyTale3Name,fairyTale4Name,fairyTale5Name,fairyTale6Name;


var index =1;
var pictureIndex=1;
function onload(){
  bg07Img = document.getElementById("bg07");
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

  searchBar = document.getElementById("searchBar");
  search = document.getElementById("search");
  nextFariyTaleLeftBtn = document.getElementById("nextFariyTaleLeftBtn");
  nextFariyTaleRightBtn = document.getElementById("nextFariyTaleRightBtn");
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
  recordingBtn = document.getElementById("recordingBtn");
  bigFairyTale01Btn = document.getElementById("bigFairyTale01Btn");
  bigFairyTale02Btn = document.getElementById("bigFairyTale02Btn");
  bigFairyTale03Btn = document.getElementById("bigFairyTale03Btn");
  bigFairyTale04Btn = document.getElementById("bigFairyTale04Btn");
  bigFairyTale05Btn = document.getElementById("bigFairyTale05Btn");
  bigFairyTale06Btn = document.getElementById("bigFairyTale06Btn");
  storyFairyTale01 = document.getElementById("storyFairyTale01");
  storyFairyTale02 = document.getElementById("storyFairyTale02");
  storyFairyTale03 = document.getElementById("storyFairyTale03");
  storyFairyTale04 = document.getElementById("storyFairyTale04");
  storyFairyTale05 = document.getElementById("storyFairyTale05");
  storyFairyTale06 = document.getElementById("storyFairyTale06");


  emptyCard = document.getElementById("emptyCard");
  fairyTale1CountText = document.getElementById("fairyTaleCount1Text");
  fairyTale2CountText = document.getElementById("fairyTaleCount2Text");
  fairyTale3CountText = document.getElementById("fairyTaleCount3Text");
  fairyTale4CountText = document.getElementById("fairyTaleCount4Text");
  fairyTale5CountText = document.getElementById("fairyTaleCount5Text");
  fairyTale6CountText = document.getElementById("fairyTaleCount6Text");

  fairyTale1count = document.getElementById("fairyTale1count");
  fairyTale2count = document.getElementById("fairyTale2count");
  fairyTale3count = document.getElementById("fairyTale3count");
  fairyTale4count = document.getElementById("fairyTale4count");
  fairyTale5count = document.getElementById("fairyTale5count");
  fairyTale6count = document.getElementById("fairyTale6count");

  fairyTaleCountUnderDiv = document.getElementById("fairyTaleCountUnderDiv");
  fairyTaleCountUnder = document.getElementById("fairyTaleCountUnder");

  fairyTale1Name = document.getElementById("fairyTale1Name");
  fairyTale2Name = document.getElementById("fairyTale2Name");
  fairyTale3Name = document.getElementById("fairyTale3Name");
  fairyTale4Name = document.getElementById("fairyTale4Name");
  fairyTale5Name = document.getElementById("fairyTale5Name");
  fairyTale6Name = document.getElementById("fairyTale6Name");

  fairyTaleName1Div = document.getElementById("fairyTaleName1Div");
  fairyTaleName2Div = document.getElementById("fairyTaleName2Div");
  fairyTaleName3Div = document.getElementById("fairyTaleName3Div");
  fairyTaleName4Div = document.getElementById("fairyTaleName4Div");
  fairyTaleName5Div = document.getElementById("fairyTaleName5Div");
  fairyTaleName6Div = document.getElementById("fairyTaleName6Div");


  bg07Width = document.body.offsetWidth;
  bg07Height = bg07Width*1.0625;
  Ratio = bg07Width / 3840;

  bg07Img.width=bg07Width;
  bg07Img.height=bg07Height;


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
  loginBtn.style.left=bg07.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  selectedFairytaleBtn.width = selectedFairytaleBtn.naturalWidth*Ratio;
  selectedFairytaleBtn.height = selectedFairytaleBtn.naturalHeight*Ratio;
  selectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  selectedFairytaleBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)-(200*Ratio)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+selectedFairytaleBtn.width+"px";



  rFairyTaleDiv.style.width = bg07Width-(600*Ratio)+"px";
  rFairyTaleDiv.style.height= (rFairyTale01Btn.naturalHeight+400)*Ratio+"px";
  rFairyTaleDiv.style.top= (Ratio*823*2)+"px";
  rFairyTaleDiv.style.left= (Ratio*200)+"px";


  rFairyTale01Btn.width = rFairyTale01Btn.naturalWidth*Ratio;
  rFairyTale01Btn.height = rFairyTale01Btn.naturalHeight*Ratio;
  rFairyTale01Btn.style.left = (Ratio*99*2)+"px";
  rFairyTale01Btn.style.top= (77*Ratio*2)+"px";

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


  /*
	 * var
	 * searchBar,search,nextFariyTaleLeftBtn,nextFariyTaleRightBtn,,rFairyTale02Btn,rFairyTale03Btn,rFairyTale04Btn,rFairyTale05Btn,rFairyTale06Btn
	 * var
	 * rDetailFairyTale01Btn,rDetailFairyTale02Btn,rDetailFairyTale03Btn,rDetailFairyTale04Btn,rDetailFairyTale05Btn,rDetailFairyTale06Btn,recordingBtn;
	 * var
	 * bigFairyTale01Btn,bigFairyTale02Btn,bigFairyTale03Btn,bigFairyTale04Btn,bigFairyTale05Btn,bigFairyTale06Btn;
	 * var
	 * storyFairyTale01,storyFairyTale02,storyFairyTale03,storyFairyTale04,storyFairyTale05,storyFairyTale06;
	 */

  recordingBtn.width = recordingBtn.naturalWidth*Ratio;
  recordingBtn.height = recordingBtn.naturalHeight*Ratio;
  recordingBtn.style.left = (100*Ratio*2)+(200*Ratio)+"px";
  recordingBtn.style.top= (1872*Ratio*2)+"px";

  storyFairyTale01.width = storyFairyTale01.naturalWidth*Ratio;
  storyFairyTale01.height = storyFairyTale01.naturalHeight*Ratio;
  storyFairyTale01.style.left = (99*Ratio*2)+(200*Ratio)+"px";
  storyFairyTale01.style.top= (1299*Ratio*2)+"px";

  storyFairyTale02.width = storyFairyTale02.naturalWidth*Ratio;
  storyFairyTale02.height = storyFairyTale02.naturalHeight*Ratio;
  storyFairyTale02.style.left = (99*Ratio*2)+(200*Ratio)+"px";
  storyFairyTale02.style.top= (1299*Ratio*2)+"px";

  storyFairyTale03.width = storyFairyTale03.naturalWidth*Ratio;
  storyFairyTale03.height = storyFairyTale03.naturalHeight*Ratio;
  storyFairyTale03.style.left = (99*Ratio*2)+(200*Ratio)+"px";
  storyFairyTale03.style.top= (1299*Ratio*2)+"px";

  storyFairyTale04.width = storyFairyTale04.naturalWidth*Ratio;
  storyFairyTale04.height = storyFairyTale04.naturalHeight*Ratio;
  storyFairyTale04.style.left = (99*Ratio*2)+(200*Ratio)+"px";
  storyFairyTale04.style.top= (1299*Ratio*2)+"px";

  storyFairyTale05.width = storyFairyTale05.naturalWidth*Ratio;
  storyFairyTale05.height = storyFairyTale05.naturalHeight*Ratio;
  storyFairyTale05.style.left = (99*Ratio*2)+(200*Ratio)+"px";
  storyFairyTale05.style.top= (1299*Ratio*2)+"px";

  storyFairyTale06.width = storyFairyTale06.naturalWidth*Ratio;
  storyFairyTale06.height = storyFairyTale06.naturalHeight*Ratio;
  storyFairyTale06.style.left = (99*Ratio*2)+(200*Ratio)+"px";
  storyFairyTale06.style.top= (1299*Ratio*2)+"px";

  emptyCard.width = emptyCard.naturalWidth*Ratio;
  emptyCard.height = emptyCard.naturalHeight*Ratio;
  emptyCard.style.left = (1124*Ratio*2)-(200*Ratio)+"px";
  emptyCard.style.top= (1299*Ratio*2)+"px";

  fairyTaleCountUnderDiv.width=fairyTaleCountUnderDiv.naturalWidth*Ratio;
  fairyTaleCountUnderDiv.height=fairyTaleCountUnderDiv.naturalHeight*Ratio;
  fairyTaleCountUnderDiv.style.top=(Ratio*1829*2)+"px";
  fairyTaleCountUnderDiv.style.left=(Ratio*1130*2)-(200*Ratio)+"px";
  fairyTaleCountUnder.style.fontSize=(40*Ratio)+"px";

  bigFairyTale01Btn.width = bigFairyTale01Btn.naturalWidth*Ratio;
  bigFairyTale01Btn.height = bigFairyTale01Btn.naturalHeight*Ratio;
  bigFairyTale01Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
  bigFairyTale01Btn.style.top= ((1299+228)*Ratio*2)+"px";

  bigFairyTale02Btn.width = bigFairyTale02Btn.naturalWidth*Ratio;
  bigFairyTale02Btn.height = bigFairyTale02Btn.naturalHeight*Ratio;
  bigFairyTale02Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
  bigFairyTale02Btn.style.top= ((1299+228)*Ratio*2)+"px";

  bigFairyTale03Btn.width = bigFairyTale03Btn.naturalWidth*Ratio;
  bigFairyTale03Btn.height = bigFairyTale03Btn.naturalHeight*Ratio;
  bigFairyTale03Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
  bigFairyTale03Btn.style.top= ((1299+228)*Ratio*2)+"px";

  bigFairyTale04Btn.width = bigFairyTale04Btn.naturalWidth*Ratio;
  bigFairyTale04Btn.height = bigFairyTale04Btn.naturalHeight*Ratio;
  bigFairyTale04Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
  bigFairyTale04Btn.style.top= ((1299+228)*Ratio*2)+"px";

  bigFairyTale05Btn.width = bigFairyTale05Btn.naturalWidth*Ratio;
  bigFairyTale05Btn.height = bigFairyTale05Btn.naturalHeight*Ratio;
  bigFairyTale05Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
  bigFairyTale05Btn.style.top= ((1299+228)*Ratio*2)+"px";

  bigFairyTale06Btn.width = bigFairyTale06Btn.naturalWidth*Ratio;
  bigFairyTale06Btn.height = bigFairyTale06Btn.naturalHeight*Ratio;
  bigFairyTale06Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
  bigFairyTale06Btn.style.top= ((1299+228)*Ratio*2)+"px";

  fairyTaleName1Div.width = fairyTaleName1Div.naturalWidth*Ratio;
  fairyTaleName1Div.height = fairyTaleName1Div.naturalHeight*Ratio;
  fairyTaleName1Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
  fairyTaleName1Div.style.top= ((1299+70)*Ratio*2)+"px";
  fairyTale1Name.style.fontSize=(55*Ratio)+"px";

  fairyTaleName2Div.width = fairyTaleName2Div.naturalWidth*Ratio;
  fairyTaleName2Div.height = fairyTaleName2Div.naturalHeight*Ratio;
  fairyTaleName2Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
  fairyTaleName2Div.style.top= ((1299+70)*Ratio*2)+"px";
  fairyTale2Name.style.fontSize=(55*Ratio)+"px";

  fairyTaleName3Div.width = fairyTaleName3Div.naturalWidth*Ratio;
  fairyTaleName3Div.height = fairyTaleName3Div.naturalHeight*Ratio;
  fairyTaleName3Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
  fairyTaleName3Div.style.top= ((1299+70)*Ratio*2)+"px";
  fairyTale3Name.style.fontSize=(55*Ratio)+"px";

  fairyTaleName4Div.width = fairyTaleName4Div.naturalWidth*Ratio;
  fairyTaleName4Div.height = fairyTaleName4Div.naturalHeight*Ratio;
  fairyTaleName4Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
  fairyTaleName4Div.style.top= ((1299+70)*Ratio*2)+"px";
  fairyTale4Name.style.fontSize=(55*Ratio)+"px";


  fairyTaleName5Div.width = fairyTaleName5Div.naturalWidth*Ratio;
  fairyTaleName5Div.height = fairyTaleName5Div.naturalHeight*Ratio;
  fairyTaleName5Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
  fairyTaleName5Div.style.top= ((1299+70)*Ratio*2)+"px";
  fairyTale5Name.style.fontSize=(55*Ratio)+"px";

  fairyTaleName6Div.width = fairyTaleName6Div.naturalWidth*Ratio;
  fairyTaleName6Div.height = fairyTaleName6Div.naturalHeight*Ratio;
  fairyTaleName6Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
  fairyTaleName6Div.style.top= ((1299+70)*Ratio*2)+"px";
  fairyTale6Name.style.fontSize=(55*Ratio)+"px";




  nextFariyTaleLeftBtn.width = nextFariyTaleLeftBtn.naturalWidth*Ratio;
  nextFariyTaleLeftBtn.height = nextFariyTaleLeftBtn.naturalHeight*Ratio;
  nextFariyTaleLeftBtn.style.left = ((1124)*Ratio*2)-(200*Ratio)+"px";
  nextFariyTaleLeftBtn.style.top= ((1299+635)*Ratio*2)+"px";

  nextFariyTaleRightBtn.width = nextFariyTaleRightBtn.naturalWidth*Ratio;
  nextFariyTaleRightBtn.height = nextFariyTaleRightBtn.naturalHeight*Ratio;
  nextFariyTaleRightBtn.style.left = ((1124+48)*Ratio*2)-(200*Ratio)+"px";
  nextFariyTaleRightBtn.style.top= ((1299+635)*Ratio*2)+"px";

  searchBar.width = searchBar.naturalWidth*Ratio;
  searchBar.height = searchBar.naturalHeight*Ratio;
  searchBar.style.left = ((1310)*Ratio*2)-(200*Ratio)+"px";
  searchBar.style.top= ((687)*Ratio*2)+"px";

  search.width = search.naturalWidth*Ratio;
  search.height = search.naturalHeight*Ratio;
  search.style.left = ((1310+searchBar.width/2-search.width/4)*Ratio*2)-(200*Ratio)+"px";
  search.style.top= ((687+searchBar.height/2-search.width/8)*Ratio*2)+"px";

  fairyTale1count.style.width = 300*Ratio+"px";
  fairyTale2count.style.width = 300*Ratio+"px";
  fairyTale3count.style.width = 300*Ratio+"px";
  fairyTale4count.style.width = 300*Ratio+"px";
  fairyTale5count.style.width = 300*Ratio+"px";
  fairyTale6count.style.width = 300*Ratio+"px";


}


function onChangeSize(){
	 bg07Img = document.getElementById("bg07");
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

	  searchBar = document.getElementById("searchBar");
	  search = document.getElementById("search");
	  nextFariyTaleLeftBtn = document.getElementById("nextFariyTaleLeftBtn");
	  nextFariyTaleRightBtn = document.getElementById("nextFariyTaleRightBtn");
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
	  recordingBtn = document.getElementById("recordingBtn");
	  bigFairyTale01Btn = document.getElementById("bigFairyTale01Btn");
	  bigFairyTale02Btn = document.getElementById("bigFairyTale02Btn");
	  bigFairyTale03Btn = document.getElementById("bigFairyTale03Btn");
	  bigFairyTale04Btn = document.getElementById("bigFairyTale04Btn");
	  bigFairyTale05Btn = document.getElementById("bigFairyTale05Btn");
	  bigFairyTale06Btn = document.getElementById("bigFairyTale06Btn");
	  storyFairyTale01 = document.getElementById("storyFairyTale01");
	  storyFairyTale02 = document.getElementById("storyFairyTale02");
	  storyFairyTale03 = document.getElementById("storyFairyTale03");
	  storyFairyTale04 = document.getElementById("storyFairyTale04");
	  storyFairyTale05 = document.getElementById("storyFairyTale05");
	  storyFairyTale06 = document.getElementById("storyFairyTale06");


	  emptyCard = document.getElementById("emptyCard");
	  fairyTale1CountText = document.getElementById("fairyTaleCount1Text");
	  fairyTale2CountText = document.getElementById("fairyTaleCount2Text");
	  fairyTale3CountText = document.getElementById("fairyTaleCount3Text");
	  fairyTale4CountText = document.getElementById("fairyTaleCount4Text");
	  fairyTale5CountText = document.getElementById("fairyTaleCount5Text");
	  fairyTale6CountText = document.getElementById("fairyTaleCount6Text");

	  fairyTale1count = document.getElementById("fairyTale1count");
	  fairyTale2count = document.getElementById("fairyTale2count");
	  fairyTale3count = document.getElementById("fairyTale3count");
	  fairyTale4count = document.getElementById("fairyTale4count");
	  fairyTale5count = document.getElementById("fairyTale5count");
	  fairyTale6count = document.getElementById("fairyTale6count");

	  fairyTaleCountUnderDiv = document.getElementById("fairyTaleCountUnderDiv");
	  fairyTaleCountUnder = document.getElementById("fairyTaleCountUnder");

	  fairyTale1Name = document.getElementById("fairyTale1Name");
	  fairyTale2Name = document.getElementById("fairyTale2Name");
	  fairyTale3Name = document.getElementById("fairyTale3Name");
	  fairyTale4Name = document.getElementById("fairyTale4Name");
	  fairyTale5Name = document.getElementById("fairyTale5Name");
	  fairyTale6Name = document.getElementById("fairyTale6Name");

	  fairyTaleName1Div = document.getElementById("fairyTaleName1Div");
	  fairyTaleName2Div = document.getElementById("fairyTaleName2Div");
	  fairyTaleName3Div = document.getElementById("fairyTaleName3Div");
	  fairyTaleName4Div = document.getElementById("fairyTaleName4Div");
	  fairyTaleName5Div = document.getElementById("fairyTaleName5Div");
	  fairyTaleName6Div = document.getElementById("fairyTaleName6Div");


    bg07Width = document.body.offsetWidth;
    bg07Height = bg07Width*1.0625;
    Ratio = bg07Width / 3840;

    bg07Img.width=bg07Width;
    bg07Img.height=bg07Height;


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
    loginBtn.style.left=bg07.width-(Ratio*36*3)-loginBtn.width+"px";

    unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
    unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
    unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
    unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

    unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
    unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
    unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
    unSelectedDiaryBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

    selectedFairytaleBtn.width = selectedFairytaleBtn.naturalWidth*Ratio;
    selectedFairytaleBtn.height = selectedFairytaleBtn.naturalHeight*Ratio;
    selectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
    selectedFairytaleBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*2)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

    unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
    unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
    unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
    unSelectedMypageBtn.style.left = (Ratio*1715*2)-(200*Ratio)+"px";

    unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
    unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
    unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
    unSelectedShopBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*3)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+selectedFairytaleBtn.width+"px";



    rFairyTaleDiv.style.width = bg07Width-(600*Ratio)+"px";
    rFairyTaleDiv.style.height= (rFairyTale01Btn.naturalHeight+400)*Ratio+"px";
    rFairyTaleDiv.style.top= (Ratio*823*2)+"px";
    rFairyTaleDiv.style.left= (Ratio*200)+"px";


    rFairyTale01Btn.width = rFairyTale01Btn.naturalWidth*Ratio;
    rFairyTale01Btn.height = rFairyTale01Btn.naturalHeight*Ratio;
    rFairyTale01Btn.style.left = (Ratio*99*2)+"px";
    rFairyTale01Btn.style.top= (77*Ratio*2)+"px";

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


    /*
  	 * var
  	 * searchBar,search,nextFariyTaleLeftBtn,nextFariyTaleRightBtn,,rFairyTale02Btn,rFairyTale03Btn,rFairyTale04Btn,rFairyTale05Btn,rFairyTale06Btn
  	 * var
  	 * rDetailFairyTale01Btn,rDetailFairyTale02Btn,rDetailFairyTale03Btn,rDetailFairyTale04Btn,rDetailFairyTale05Btn,rDetailFairyTale06Btn,recordingBtn;
  	 * var
  	 * bigFairyTale01Btn,bigFairyTale02Btn,bigFairyTale03Btn,bigFairyTale04Btn,bigFairyTale05Btn,bigFairyTale06Btn;
  	 * var
  	 * storyFairyTale01,storyFairyTale02,storyFairyTale03,storyFairyTale04,storyFairyTale05,storyFairyTale06;
  	 */

    recordingBtn.width = recordingBtn.naturalWidth*Ratio;
    recordingBtn.height = recordingBtn.naturalHeight*Ratio;
    recordingBtn.style.left = (100*Ratio*2)+(200*Ratio)+"px";
    recordingBtn.style.top= (1872*Ratio*2)+"px";

    storyFairyTale01.width = storyFairyTale01.naturalWidth*Ratio;
    storyFairyTale01.height = storyFairyTale01.naturalHeight*Ratio;
    storyFairyTale01.style.left = (99*Ratio*2)+(200*Ratio)+"px";
    storyFairyTale01.style.top= (1299*Ratio*2)+"px";

    storyFairyTale02.width = storyFairyTale02.naturalWidth*Ratio;
    storyFairyTale02.height = storyFairyTale02.naturalHeight*Ratio;
    storyFairyTale02.style.left = (99*Ratio*2)+(200*Ratio)+"px";
    storyFairyTale02.style.top= (1299*Ratio*2)+"px";

    storyFairyTale03.width = storyFairyTale03.naturalWidth*Ratio;
    storyFairyTale03.height = storyFairyTale03.naturalHeight*Ratio;
    storyFairyTale03.style.left = (99*Ratio*2)+(200*Ratio)+"px";
    storyFairyTale03.style.top= (1299*Ratio*2)+"px";

    storyFairyTale04.width = storyFairyTale04.naturalWidth*Ratio;
    storyFairyTale04.height = storyFairyTale04.naturalHeight*Ratio;
    storyFairyTale04.style.left = (99*Ratio*2)+(200*Ratio)+"px";
    storyFairyTale04.style.top= (1299*Ratio*2)+"px";

    storyFairyTale05.width = storyFairyTale05.naturalWidth*Ratio;
    storyFairyTale05.height = storyFairyTale05.naturalHeight*Ratio;
    storyFairyTale05.style.left = (99*Ratio*2)+(200*Ratio)+"px";
    storyFairyTale05.style.top= (1299*Ratio*2)+"px";

    storyFairyTale06.width = storyFairyTale06.naturalWidth*Ratio;
    storyFairyTale06.height = storyFairyTale06.naturalHeight*Ratio;
    storyFairyTale06.style.left = (99*Ratio*2)+(200*Ratio)+"px";
    storyFairyTale06.style.top= (1299*Ratio*2)+"px";

    emptyCard.width = emptyCard.naturalWidth*Ratio;
    emptyCard.height = emptyCard.naturalHeight*Ratio;
    emptyCard.style.left = (1124*Ratio*2)-(200*Ratio)+"px";
    emptyCard.style.top= (1299*Ratio*2)+"px";

    fairyTaleCountUnderDiv.width=fairyTaleCountUnderDiv.naturalWidth*Ratio;
    fairyTaleCountUnderDiv.height=fairyTaleCountUnderDiv.naturalHeight*Ratio;
    fairyTaleCountUnderDiv.style.top=(Ratio*1829*2)+"px";
    fairyTaleCountUnderDiv.style.left=(Ratio*1130*2)-(200*Ratio)+"px";
    fairyTaleCountUnder.style.fontSize=(40*Ratio)+"px";

    bigFairyTale01Btn.width = bigFairyTale01Btn.naturalWidth*Ratio;
    bigFairyTale01Btn.height = bigFairyTale01Btn.naturalHeight*Ratio;
    bigFairyTale01Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
    bigFairyTale01Btn.style.top= ((1299+228)*Ratio*2)+"px";

    bigFairyTale02Btn.width = bigFairyTale02Btn.naturalWidth*Ratio;
    bigFairyTale02Btn.height = bigFairyTale02Btn.naturalHeight*Ratio;
    bigFairyTale02Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
    bigFairyTale02Btn.style.top= ((1299+228)*Ratio*2)+"px";

    bigFairyTale03Btn.width = bigFairyTale03Btn.naturalWidth*Ratio;
    bigFairyTale03Btn.height = bigFairyTale03Btn.naturalHeight*Ratio;
    bigFairyTale03Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
    bigFairyTale03Btn.style.top= ((1299+228)*Ratio*2)+"px";

    bigFairyTale04Btn.width = bigFairyTale04Btn.naturalWidth*Ratio;
    bigFairyTale04Btn.height = bigFairyTale04Btn.naturalHeight*Ratio;
    bigFairyTale04Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
    bigFairyTale04Btn.style.top= ((1299+228)*Ratio*2)+"px";

    bigFairyTale05Btn.width = bigFairyTale05Btn.naturalWidth*Ratio;
    bigFairyTale05Btn.height = bigFairyTale05Btn.naturalHeight*Ratio;
    bigFairyTale05Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
    bigFairyTale05Btn.style.top= ((1299+228)*Ratio*2)+"px";

    bigFairyTale06Btn.width = bigFairyTale06Btn.naturalWidth*Ratio;
    bigFairyTale06Btn.height = bigFairyTale06Btn.naturalHeight*Ratio;
    bigFairyTale06Btn.style.left = ((1124+102*2+50)*Ratio*2)-(200*Ratio)+"px";
    bigFairyTale06Btn.style.top= ((1299+228)*Ratio*2)+"px";

    fairyTaleName1Div.width = fairyTaleName1Div.naturalWidth*Ratio;
    fairyTaleName1Div.height = fairyTaleName1Div.naturalHeight*Ratio;
    fairyTaleName1Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
    fairyTaleName1Div.style.top= ((1299+70)*Ratio*2)+"px";
    fairyTale1Name.style.fontSize=(55*Ratio)+"px";

    fairyTaleName2Div.width = fairyTaleName2Div.naturalWidth*Ratio;
    fairyTaleName2Div.height = fairyTaleName2Div.naturalHeight*Ratio;
    fairyTaleName2Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
    fairyTaleName2Div.style.top= ((1299+70)*Ratio*2)+"px";
    fairyTale2Name.style.fontSize=(55*Ratio)+"px";

    fairyTaleName3Div.width = fairyTaleName3Div.naturalWidth*Ratio;
    fairyTaleName3Div.height = fairyTaleName3Div.naturalHeight*Ratio;
    fairyTaleName3Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
    fairyTaleName3Div.style.top= ((1299+70)*Ratio*2)+"px";
    fairyTale3Name.style.fontSize=(55*Ratio)+"px";

    fairyTaleName4Div.width = fairyTaleName4Div.naturalWidth*Ratio;
    fairyTaleName4Div.height = fairyTaleName4Div.naturalHeight*Ratio;
    fairyTaleName4Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
    fairyTaleName4Div.style.top= ((1299+70)*Ratio*2)+"px";
    fairyTale4Name.style.fontSize=(55*Ratio)+"px";


    fairyTaleName5Div.width = fairyTaleName5Div.naturalWidth*Ratio;
    fairyTaleName5Div.height = fairyTaleName5Div.naturalHeight*Ratio;
    fairyTaleName5Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
    fairyTaleName5Div.style.top= ((1299+70)*Ratio*2)+"px";
    fairyTale5Name.style.fontSize=(55*Ratio)+"px";

    fairyTaleName6Div.width = fairyTaleName6Div.naturalWidth*Ratio;
    fairyTaleName6Div.height = fairyTaleName6Div.naturalHeight*Ratio;
    fairyTaleName6Div.style.left = ((1124+102*2+60)*Ratio*2)-(200*Ratio)+"px";
    fairyTaleName6Div.style.top= ((1299+70)*Ratio*2)+"px";
    fairyTale6Name.style.fontSize=(55*Ratio)+"px";




    nextFariyTaleLeftBtn.width = nextFariyTaleLeftBtn.naturalWidth*Ratio;
    nextFariyTaleLeftBtn.height = nextFariyTaleLeftBtn.naturalHeight*Ratio;
    nextFariyTaleLeftBtn.style.left = ((1124)*Ratio*2)-(200*Ratio)+"px";
    nextFariyTaleLeftBtn.style.top= ((1299+635)*Ratio*2)+"px";

    nextFariyTaleRightBtn.width = nextFariyTaleRightBtn.naturalWidth*Ratio;
    nextFariyTaleRightBtn.height = nextFariyTaleRightBtn.naturalHeight*Ratio;
    nextFariyTaleRightBtn.style.left = ((1124+48)*Ratio*2)-(200*Ratio)+"px";
    nextFariyTaleRightBtn.style.top= ((1299+635)*Ratio*2)+"px";

    searchBar.width = searchBar.naturalWidth*Ratio;
    searchBar.height = searchBar.naturalHeight*Ratio;
    searchBar.style.left = ((1310)*Ratio*2)-(200*Ratio)+"px";
    searchBar.style.top= ((687)*Ratio*2)+"px";

    search.width = search.naturalWidth*Ratio;
    search.height = search.naturalHeight*Ratio;
    search.style.left = ((1310+searchBar.width/2-search.width/4)*Ratio*2)-(200*Ratio)+"px";
    search.style.top= ((687+searchBar.height/2-search.width/8)*Ratio*2)+"px";

    fairyTale1count.style.width = 300*Ratio+"px";
    fairyTale2count.style.width = 300*Ratio+"px";
    fairyTale3count.style.width = 300*Ratio+"px";
    fairyTale4count.style.width = 300*Ratio+"px";
    fairyTale5count.style.width = 300*Ratio+"px";
    fairyTale6count.style.width = 300*Ratio+"px";



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
  bigFairyTale01Btn.style.display = "block";
  bigFairyTale02Btn.style.display = "none";
  bigFairyTale03Btn.style.display = "none";
  bigFairyTale04Btn.style.display = "none";
  bigFairyTale05Btn.style.display = "none";
  bigFairyTale06Btn.style.display = "none";
  storyFairyTale01.style.display = "block";
  storyFairyTale02.style.display = "none";
  storyFairyTale03.style.display = "none";
  storyFairyTale04.style.display = "none";
  storyFairyTale05.style.display = "none";
  storyFairyTale06.style.display = "none";
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
  fairyTaleName1Div.style.display="block";
  fairyTaleName2Div.style.display="none";
  fairyTaleName3Div.style.display="none";
  fairyTaleName4Div.style.display="none";
  fairyTaleName5Div.style.display="none";
  fairyTaleName6Div.style.display="none";
  fairyTaleCountUnder.innerHTML = fairyTaleCount1Text.innerHTML;
  recordingBtn.setAttribute("onclick","recordingBtn1Click()");
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
  bigFairyTale01Btn.style.display = "none";
  bigFairyTale02Btn.style.display = "block";
  bigFairyTale03Btn.style.display = "none";
  bigFairyTale04Btn.style.display = "none";
  bigFairyTale05Btn.style.display = "none";
  bigFairyTale06Btn.style.display = "none";
  storyFairyTale01.style.display = "none";
  storyFairyTale02.style.display = "block";
  storyFairyTale03.style.display = "none";
  storyFairyTale04.style.display = "none";
  storyFairyTale05.style.display = "none";
  storyFairyTale06.style.display = "none";

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

  fairyTaleName1Div.style.display="none";
  fairyTaleName2Div.style.display="block";
  fairyTaleName3Div.style.display="none";
  fairyTaleName4Div.style.display="none";
  fairyTaleName5Div.style.display="none";
  fairyTaleName6Div.style.display="none";
  fairyTaleCountUnder.innerHTML = fairyTaleCount2Text.innerHTML;
  recordingBtn.setAttribute("onclick","recordingBtn2Click()");
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
  bigFairyTale01Btn.style.display = "none";
  bigFairyTale02Btn.style.display = "none";
  bigFairyTale03Btn.style.display = "block";
  bigFairyTale04Btn.style.display = "none";
  bigFairyTale05Btn.style.display = "none";
  bigFairyTale06Btn.style.display = "none";
  storyFairyTale01.style.display = "none";
  storyFairyTale02.style.display = "none";
  storyFairyTale03.style.display = "block";
  storyFairyTale04.style.display = "none";
  storyFairyTale05.style.display = "none";
  storyFairyTale06.style.display = "none";

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

  fairyTaleName1Div.style.display="none";
  fairyTaleName2Div.style.display="none";
  fairyTaleName3Div.style.display="block";
  fairyTaleName4Div.style.display="none";
  fairyTaleName5Div.style.display="none";
  fairyTaleName6Div.style.display="none";
  fairyTaleCountUnder.innerHTML = fairyTaleCount3Text.innerHTML;
  recordingBtn.setAttribute("onclick","recordingBtn3Click()");
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
  bigFairyTale01Btn.style.display = "none";
  bigFairyTale02Btn.style.display = "none";
  bigFairyTale03Btn.style.display = "none";
  bigFairyTale04Btn.style.display = "block";
  bigFairyTale05Btn.style.display = "none";
  bigFairyTale06Btn.style.display = "none";
  storyFairyTale01.style.display = "none";
  storyFairyTale02.style.display = "none";
  storyFairyTale03.style.display = "none";
  storyFairyTale04.style.display = "block";
  storyFairyTale05.style.display = "none";
  storyFairyTale06.style.display = "none";

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

  fairyTaleName1Div.style.display="none";
  fairyTaleName2Div.style.display="none";
  fairyTaleName3Div.style.display="none";
  fairyTaleName4Div.style.display="block";
  fairyTaleName5Div.style.display="none";
  fairyTaleName6Div.style.display="none";
  fairyTaleCountUnder.innerHTML = fairyTaleCount4Text.innerHTML;
  recordingBtn.setAttribute("onclick","recordingBtn4Click()");
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
  bigFairyTale01Btn.style.display = "none";
  bigFairyTale02Btn.style.display = "none";
  bigFairyTale03Btn.style.display = "none";
  bigFairyTale04Btn.style.display = "none";
  bigFairyTale05Btn.style.display = "block";
  bigFairyTale06Btn.style.display = "none";
  storyFairyTale01.style.display = "none";
  storyFairyTale02.style.display = "none";
  storyFairyTale03.style.display = "none";
  storyFairyTale04.style.display = "none";
  storyFairyTale05.style.display = "block";
  storyFairyTale06.style.display = "none";

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
    fairyTaleName1Div.style.display="none";
    fairyTaleName2Div.style.display="none";
    fairyTaleName3Div.style.display="none";
    fairyTaleName4Div.style.display="none";
    fairyTaleName5Div.style.display="block";
    fairyTaleName6Div.style.display="none";
    fairyTaleCountUnder.innerHTML = fairyTaleCount5Text.innerHTML;
    recordingBtn.setAttribute("onclick","recordingBtn5Click()");
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
  bigFairyTale01Btn.style.display = "none";
  bigFairyTale02Btn.style.display = "none";
  bigFairyTale03Btn.style.display = "none";
  bigFairyTale04Btn.style.display = "none";
  bigFairyTale05Btn.style.display = "none";
  bigFairyTale06Btn.style.display = "block";
  storyFairyTale01.style.display = "none";
  storyFairyTale02.style.display = "none";
  storyFairyTale03.style.display = "none";
  storyFairyTale04.style.display = "none";
  storyFairyTale05.style.display = "none";
  storyFairyTale06.style.display = "block";
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

  fairyTaleName1Div.style.display="none";
  fairyTaleName2Div.style.display="none";
  fairyTaleName3Div.style.display="none";
  fairyTaleName4Div.style.display="none";
  fairyTaleName5Div.style.display="none";
  fairyTaleName6Div.style.display="block";
  fairyTaleCountUnder.innerHTML = fairyTaleCount6Text.innerHTML;
  recordingBtn.setAttribute("onclick","recordingBtn6Click()");
}
function nextFariyTaleLeftBtnClick(){
  if(index==1){
    onFairyTale6Click();
  }else if(index==2){
    onFairyTale1Click();
  }else if(index==3){
    onFairyTale2Click();
  }else if(index==4){
    onFairyTale3Click();
  }else if(index==5){
    onFairyTale4Click();
  }else if(index==6){
    onFairyTale5Click();
  }
}
function nextFariyTaleRightBtnClick(){
  if(index==5){
    onFairyTale6Click();
  }else if(index==6){
    onFairyTale1Click();
  }else if(index==1){
    onFairyTale2Click();
  }else if(index==2){
    onFairyTale3Click();
  }else if(index==3){
    onFairyTale4Click();
  }else if(index==4){
    onFairyTale5Click();
  }
}

function unSelectedDodamBTNClick() {
  location.href="main.html"
}
function unSelectedDiaryBTNClick(){
  location.href="diary.html";
}
function unSelectedFairytaleBTNClick(){
  location.href="make.jsp";
}
function unSelectedShopBTNClick() {
  location.href="market.html";
}
function unSelectedMypageBtnClick(){
  location.href="playPage.jsp";
}
function recordingBtn1Click(){
	location.href="recordFairyTale.html";
}
function recordingBtn2Click(){
	location.href="recordFairyTale.html";
}
function recordingBtn3Click(){
	location.href="recordFairyTale.html";
}
function recordingBtn4Click(){
	location.href="recordFairyTale.html";
}
function recordingBtn5Click(){

}
function recordingBtn6Click(){

}
