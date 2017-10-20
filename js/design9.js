var bg09Width;
var bg09Height;
var bg10Width;
var bg10Height;
var bg09Img;
var Ratio;
var bg10Ratio;

var bg09Img,menuBtn,facebookBtn,googleBtn,loginBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;
var bigBox,finishedRecordingBTN,recordingBTN,reRecordingBTN,smallBox;
var bg10Img,popup,popupCloseBtn,title,titleText,image01,popupPicChangeBtn,titleChange,titleChangeText,popupSaveBtn,modalBg,scriptCount,scriptArea,recordingStopBTN;
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
  recordingBTN = document.getElementById("recordingBTN");
  recordingStopBTN = document.getElementById("recordingStopBTN");
  reRecordingBTN=document.getElementById("reRecordingBTN");
  smallBox1 = document.getElementById("smallBox1");
  smallBox2 = document.getElementById("smallBox2");
  smallBox3 = document.getElementById("smallBox3");
  smallBox4 = document.getElementById("smallBox4");
  smallBox5 = document.getElementById("smallBox5");
  smallBox6 = document.getElementById("smallBox6");
  smallBox = document.getElementById("smallBox");

  bg10Img = document.getElementById("bg10");
  popup=document.getElementById("popup");
  popupCloseBtn = document.getElementById("popupCloseBtn");
  title = document.getElementById("title");
  titleText = document.getElementById("titleText");
  image01 = document.getElementById('image01');
  popupPicChangeBtn = document.getElementById("popupPicChangeBtn");
  titleChange = document.getElementById("titleChange");
  titleChangeText = document.getElementById("titleChangeText");
  popupSaveBtn = document.getElementById("popupSaveBtn");
  scriptCount = document.getElementById("scriptCount");
  scriptArea = document.getElementById("scriptArea");
  modalBg = document.getElementById("modalBg");
  bigBoxImg = document.getElementById("bigBoxImg");

  bg09Width = document.body.offsetWidth;
  bg09Height = bg09Width*0.844791667;
  Ratio = bg09Width / 3840;

  bg09Img.width=bg09Width;
  bg09Img.height=bg09Height;

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
  loginBtn.style.left=bg09.width-(Ratio*36*3)-loginBtn.width+"px";

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

//var bigBox,finishedRecordingBTN,recordingBTN,smallBox;
  bigBox.width = bigBox.naturalWidth*Ratio;
  bigBox.height = bigBox.naturalHeight*Ratio;
  bigBox.style.top = (Ratio*694*2)+"px";
  bigBox.style.left = (Ratio*352*2)+"px";

  bigBoxImg.width = bigBox.naturalWidth*Ratio -(Ratio*90);
  bigBoxImg.height = bigBox.naturalHeight*Ratio-(Ratio*110);
  bigBoxImg.style.top = (Ratio*694*2)+"px";
  bigBoxImg.style.left = (Ratio*352*2)+(Ratio*50)+"px";

  finishedRecordingBTN.width = finishedRecordingBTN.naturalWidth*Ratio;
  finishedRecordingBTN.height = finishedRecordingBTN.naturalHeight*Ratio;
  finishedRecordingBTN.style.top = (Ratio*1531*2)+"px";
  finishedRecordingBTN.style.left = (Ratio*1689*2)+"px";

  recordingBTN.width = recordingBTN.naturalWidth*Ratio;
  recordingBTN.height = recordingBTN.naturalHeight*Ratio;
  recordingBTN.style.top = (Ratio*1151*2)+"px";
  recordingBTN.style.left = (Ratio*132*2)+"px";


  recordingStopBTN.width = recordingStopBTN.naturalWidth*Ratio;
  recordingStopBTN.height = recordingStopBTN.naturalHeight*Ratio;
  recordingStopBTN.style.top = (Ratio*1151*2)+"px";
  recordingStopBTN.style.left = (Ratio*132*2)+"px";

  reRecordingBTN.width = reRecordingBTN.naturalWidth*Ratio;
  reRecordingBTN.height = reRecordingBTN.naturalHeight*Ratio;
  reRecordingBTN.style.top = (Ratio*1179*2)+"px";
  reRecordingBTN.style.left = (Ratio*1293*2)+"px";

  smallBox1.width = smallBox.naturalWidth*Ratio;
  smallBox1.height = smallBox.naturalHeight*Ratio;
  smallBox1.style.top = (Ratio*769*2)+"px";
  smallBox1.style.left = (Ratio*1488*2)+"px";

  smallBox2.width = smallBox.naturalWidth*Ratio;
  smallBox2.height = smallBox.naturalHeight*Ratio;
  smallBox2.style.top = (Ratio*769*2)+"px";
  smallBox2.style.left = (Ratio*1488*2)+ smallBox1.width+(59*2*Ratio)+"px";

  smallBox3.width = smallBox.naturalWidth*Ratio;
  smallBox3.height = smallBox.naturalHeight*Ratio;
  smallBox3.style.top = (Ratio*769*2)+smallBox1.height+(59*2*Ratio)+"px";
  smallBox3.style.left = (Ratio*1488*2)+"px";

  smallBox4.width = smallBox.naturalWidth*Ratio;
  smallBox4.height = smallBox.naturalHeight*Ratio;
  smallBox4.style.top = (Ratio*769*2)+smallBox1.height+(59*2*Ratio)+"px";
  smallBox4.style.left = (Ratio*1488*2)+ smallBox1.width+(59*2*Ratio)+"px";

  smallBox5.width = smallBox.naturalWidth*Ratio;
  smallBox5.height = smallBox.naturalHeight*Ratio;
  smallBox5.style.top = (Ratio*769*2)+(smallBox1.height*2)+(59*4*Ratio)+"px";
  smallBox5.style.left = (Ratio*1488*2)+"px";

  smallBox6.width = smallBox.naturalWidth*Ratio;
  smallBox6.height = smallBox.naturalHeight*Ratio;
  smallBox6.style.top = (Ratio*769*2)+(smallBox1.height*2)+(59*4*Ratio)+"px";
  smallBox6.style.left = (Ratio*1488*2)+ smallBox1.width+(59*2*Ratio)+"px";

  recordState.width = recordState.naturalWidth*Ratio*0.8;
  recordState.height = recordState.naturalHeight*Ratio*0.8;
  recordState.style.top = (Ratio*1286*2)+"px";
  recordState.style.left = (Ratio*97*2)+"px";


  scriptCount.width = scriptCount.naturalWidth*Ratio*0.8;
  scriptCount.height = scriptCount.naturalHeight*Ratio*0.8;
  scriptCount.style.top = (Ratio*712*2)+"px";
  scriptCount.style.left = (Ratio*1490*2)+"px";

  bg10Img.width = bg10Img.naturalWidth*Ratio;
  bg10Img.height = bg10Img.naturalHeight*Ratio;

  popup.width = bg10Img.width+"px";
  popup.height = bg10Img.height+"px";
  popup.style.top = (Ratio*170*2)+"px";
  popup.style.left = (Ratio*390*2)+"px";

  title.style.width = 900*Ratio+"px";
  title.style.top = (Ratio*59*2)+"px";
  title.style.left = (Ratio*363*2)+"px";

  titleChange.style.width = 700*Ratio+"px";
  titleChange.style.top = (Ratio*420*2)+"px";
  titleChange.style.left = (Ratio*405*2)+"px";

  image01.width = image01.naturalWidth*Ratio;
  image01.height = image01.naturalHeight*Ratio;
  image01.style.top = (Ratio*122*2)+"px";
  image01.style.left = (Ratio*448*2)+"px";

  popupCloseBtn.width = popupCloseBtn.naturalWidth*Ratio;
  popupCloseBtn.height = popupCloseBtn.naturalHeight*Ratio;
  popupCloseBtn.style.top = (Ratio*33*2)+"px";
  popupCloseBtn.style.left = bg10Img.width-(Ratio*33*2)-popupCloseBtn.width+"px";

  popupPicChangeBtn.width = popupPicChangeBtn.naturalWidth*Ratio;
  popupPicChangeBtn.height = popupPicChangeBtn.naturalHeight*Ratio;
  popupPicChangeBtn.style.top = (Ratio*333*2)+"px";
  popupPicChangeBtn.style.left = (Ratio*709*2)+"px";

  popupSaveBtn.width = popupSaveBtn.naturalWidth*Ratio;
  popupSaveBtn.height = popupSaveBtn.naturalHeight*Ratio;
  popupSaveBtn.style.top = (Ratio*650*2)+"px";
  popupSaveBtn.style.left = (Ratio*520*2)+"px";

  titleText.style.fontSize=(60*Ratio)+"px";
  titleChange.style.fontSize=(70*Ratio)+"px";

  scriptArea.style.width = 2150*Ratio+"px";
  scriptArea.style.height = 700*Ratio+"px";
  scriptArea.style.top = (Ratio*1250*2)+"px";
  scriptArea.style.left = (Ratio*400*2)+"px";
  scriptArea.style.fontSize=(50*Ratio)+"px";

  recordStateText.style.fontSize = (60*Ratio)+"px";
  recordStateTime.style.fontSize = (40*Ratio)+"px";

  }


function onChangeSize(){
  bg09Width = document.body.offsetWidth;
  bg09Height = bg09Width*0.844791667;
  Ratio = bg09Width / 3840;

  bg09Img.width=bg09Width;
  bg09Img.height=bg09Height;

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
  loginBtn.style.left=bg09.width-(Ratio*36*3)-loginBtn.width+"px";

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

  //var bigBox,finishedRecordingBTN,recordingBTN,smallBox;
  bigBox.width = bigBox.naturalWidth*Ratio;
  bigBox.height = bigBox.naturalHeight*Ratio;
  bigBox.style.top = (Ratio*694*2)+"px";
  bigBox.style.left = (Ratio*352*2)+"px";

  bigBoxImg.width = bigBox.naturalWidth*Ratio -(Ratio*90);
  bigBoxImg.height = bigBox.naturalHeight*Ratio-(Ratio*110);
  bigBoxImg.style.top = (Ratio*694*2)+"px";
  bigBoxImg.style.left = (Ratio*352*2)+(Ratio*50)+"px";

  finishedRecordingBTN.width = finishedRecordingBTN.naturalWidth*Ratio;
  finishedRecordingBTN.height = finishedRecordingBTN.naturalHeight*Ratio;
  finishedRecordingBTN.style.top = (Ratio*1531*2)+"px";
  finishedRecordingBTN.style.left = (Ratio*1689*2)+"px";

  recordingBTN.width = recordingBTN.naturalWidth*Ratio;
  recordingBTN.height = recordingBTN.naturalHeight*Ratio;
  recordingBTN.style.top = (Ratio*1151*2)+"px";
  recordingBTN.style.left = (Ratio*132*2)+"px";


  recordingStopBTN.width = recordingStopBTN.naturalWidth*Ratio;
  recordingStopBTN.height = recordingStopBTN.naturalHeight*Ratio;
  recordingStopBTN.style.top = (Ratio*1151*2)+"px";
  recordingStopBTN.style.left = (Ratio*132*2)+"px";

  reRecordingBTN.width = reRecordingBTN.naturalWidth*Ratio;
  reRecordingBTN.height = reRecordingBTN.naturalHeight*Ratio;
  reRecordingBTN.style.top = (Ratio*1179*2)+"px";
  reRecordingBTN.style.left = (Ratio*1293*2)+"px";

  smallBox1.width = smallBox.naturalWidth*Ratio;
  smallBox1.height = smallBox.naturalHeight*Ratio;
  smallBox1.style.top = (Ratio*769*2)+"px";
  smallBox1.style.left = (Ratio*1488*2)+"px";

  smallBox2.width = smallBox.naturalWidth*Ratio;
  smallBox2.height = smallBox.naturalHeight*Ratio;
  smallBox2.style.top = (Ratio*769*2)+"px";
  smallBox2.style.left = (Ratio*1488*2)+ smallBox1.width+(59*2*Ratio)+"px";

  smallBox3.width = smallBox.naturalWidth*Ratio;
  smallBox3.height = smallBox.naturalHeight*Ratio;
  smallBox3.style.top = (Ratio*769*2)+smallBox1.height+(59*2*Ratio)+"px";
  smallBox3.style.left = (Ratio*1488*2)+"px";

  smallBox4.width = smallBox.naturalWidth*Ratio;
  smallBox4.height = smallBox.naturalHeight*Ratio;
  smallBox4.style.top = (Ratio*769*2)+smallBox1.height+(59*2*Ratio)+"px";
  smallBox4.style.left = (Ratio*1488*2)+ smallBox1.width+(59*2*Ratio)+"px";

  smallBox5.width = smallBox.naturalWidth*Ratio;
  smallBox5.height = smallBox.naturalHeight*Ratio;
  smallBox5.style.top = (Ratio*769*2)+(smallBox1.height*2)+(59*4*Ratio)+"px";
  smallBox5.style.left = (Ratio*1488*2)+"px";

  smallBox6.width = smallBox.naturalWidth*Ratio;
  smallBox6.height = smallBox.naturalHeight*Ratio;
  smallBox6.style.top = (Ratio*769*2)+(smallBox1.height*2)+(59*4*Ratio)+"px";
  smallBox6.style.left = (Ratio*1488*2)+ smallBox1.width+(59*2*Ratio)+"px";

  recordState.width = recordState.naturalWidth*Ratio*0.8;
  recordState.height = recordState.naturalHeight*Ratio*0.8;
  recordState.style.top = (Ratio*1286*2)+"px";
  recordState.style.left = (Ratio*97*2)+"px";


  scriptCount.width = scriptCount.naturalWidth*Ratio*0.8;
  scriptCount.height = scriptCount.naturalHeight*Ratio*0.8;
  scriptCount.style.top = (Ratio*712*2)+"px";
  scriptCount.style.left = (Ratio*1490*2)+"px";

  bg10Img.width = bg10Img.naturalWidth*Ratio;
  bg10Img.height = bg10Img.naturalHeight*Ratio;

  popup.width = bg10Img.width+"px";
  popup.height = bg10Img.height+"px";
  popup.style.top = (Ratio*170*2)+"px";
  popup.style.left = (Ratio*390*2)+"px";

  title.style.width = 900*Ratio+"px";
  title.style.top = (Ratio*59*2)+"px";
  title.style.left = (Ratio*363*2)+"px";

  titleChange.style.width = 700*Ratio+"px";
  titleChange.style.top = (Ratio*420*2)+"px";
  titleChange.style.left = (Ratio*405*2)+"px";

  image01.width = image01.naturalWidth*Ratio;
  image01.height = image01.naturalHeight*Ratio;
  image01.style.top = (Ratio*122*2)+"px";
  image01.style.left = (Ratio*448*2)+"px";

  popupCloseBtn.width = popupCloseBtn.naturalWidth*Ratio;
  popupCloseBtn.height = popupCloseBtn.naturalHeight*Ratio;
  popupCloseBtn.style.top = (Ratio*33*2)+"px";
  popupCloseBtn.style.left = bg10Img.width-(Ratio*33*2)-popupCloseBtn.width+"px";

  popupPicChangeBtn.width = popupPicChangeBtn.naturalWidth*Ratio;
  popupPicChangeBtn.height = popupPicChangeBtn.naturalHeight*Ratio;
  popupPicChangeBtn.style.top = (Ratio*333*2)+"px";
  popupPicChangeBtn.style.left = (Ratio*709*2)+"px";

  popupSaveBtn.width = popupSaveBtn.naturalWidth*Ratio;
  popupSaveBtn.height = popupSaveBtn.naturalHeight*Ratio;
  popupSaveBtn.style.top = (Ratio*650*2)+"px";
  popupSaveBtn.style.left = (Ratio*520*2)+"px";

  titleText.style.fontSize=(60*Ratio)+"px";
  titleChange.style.fontSize=(70*Ratio)+"px";

  scriptArea.style.width = 2150*Ratio+"px";
  scriptArea.style.height = 700*Ratio+"px";
  scriptArea.style.top = (Ratio*1250*2)+"px";
  scriptArea.style.left = (Ratio*400*2)+"px";
  scriptArea.style.fontSize=(50*Ratio)+"px";

  recordStateText.style.fontSize = (60*Ratio)+"px";
  recordStateTime.style.fontSize = (40*Ratio)+"px";



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
function unSelectedMypageBtnClick(){
  location.href="playPage.jsp";
}
function finishedRecordingBtnClick() {
  popup.style.display = "block";
  recordingStopBTNClick();
}
function popupCloseBtnClick() {
    popup.style.display = "none";
      modalBg.style.display="none";
}
function recordingBTNClick(){
  startRecording();
  startButton(event);
  recordingBTN.style.display="none";
  recordingStopBTN.style.display="block";
}
function recordingStopBTNClick(){
  modalBg.style.display="block";
  stopRecording();
  startButton(event);
  recordingBTN.style.display="block";
  recordingStopBTN.style.display="none";
  popup.style.display = "block";

}
