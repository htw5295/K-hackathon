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
var bg10Img,popup,popupCloseBtn,title,titleText,image01,popupPicChangeBtn,titleChange,titleChangeText,popupSaveBtn;
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
  reRecordingBTN=document.getElementById("reRecordingBTN");
  smallBox1 = document.getElementById("smallBox1");
  smallBox2 = document.getElementById("smallBox2");
  smallBox3 = document.getElementById("smallBox3");
  smallBox4 = document.getElementById("smallBox4");
  smallBox5 = document.getElementById("smallBox5");
  smallBox6 = document.getElementById("smallBox6");

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

  bg09Width = document.body.offsetWidth;
  bg09Height = bg09Width*0.844791667;
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

//var bigBox,finishedRecordingBTN,recordingBTN,smallBox;
  bigBox.width = bigBox.naturalWidth*Ratio;
  bigBox.height = bigBox.naturalHeight*Ratio;
  bigBox.style.top = (Ratio*694*2)+"px";
  bigBox.style.left = (Ratio*352*2)+"px";

  finishedRecordingBTN.width = finishedRecordingBTN.naturalWidth*Ratio;
  finishedRecordingBTN.height = finishedRecordingBTN.naturalHeight*Ratio;
  finishedRecordingBTN.style.top = (Ratio*1531*2)+"px";
  finishedRecordingBTN.style.left = (Ratio*1689*2)+"px";

  recordingBTN.width = recordingBTN.naturalWidth*Ratio;
  recordingBTN.height = recordingBTN.naturalHeight*Ratio;
  recordingBTN.style.top = (Ratio*1151*2)+"px";
  recordingBTN.style.left = (Ratio*132*2)+"px";

  reRecordingBTN.width = reRecordingBTN.naturalWidth*Ratio;
  reRecordingBTN.height = reRecordingBTN.naturalHeight*Ratio;
  reRecordingBTN.style.top = (Ratio*1179*2)+"px";
  reRecordingBTN.style.left = (Ratio*1293*2)+"px";

  smallBox1.width = smallBox1.naturalWidth*Ratio;
  smallBox1.height = smallBox1.naturalHeight*Ratio;
  smallBox1.style.top = (Ratio*769*2)+"px";
  smallBox1.style.left = (Ratio*1488*2)+"px";

  smallBox2.width = smallBox2.naturalWidth*Ratio;
  smallBox2.height = smallBox2.naturalHeight*Ratio;
  smallBox2.style.top = (Ratio*769*2)+"px";
  smallBox2.style.left = (Ratio*(1488+(84+smallBox1.naturalWidth*Ratio))*2)+"px";

  smallBox3.width = smallBox3.naturalWidth*Ratio;
  smallBox3.height = smallBox3.naturalHeight*Ratio;
  smallBox3.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio))*2)+"px";
  smallBox3.style.left = (Ratio*1488*2)+"px";

  smallBox4.width = smallBox4.naturalWidth*Ratio;
  smallBox4.height = smallBox4.naturalHeight*Ratio;
  smallBox4.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio))*2)+"px";
  smallBox4.style.left = (Ratio*(1488+(84+smallBox1.naturalWidth*Ratio))*2)+"px";

  smallBox5.width = smallBox5.naturalWidth*Ratio;
  smallBox5.height = smallBox5.naturalHeight*Ratio;
  smallBox5.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio)*2)*2)+"px";
  smallBox5.style.left = (Ratio*1488*2)+"px";

  smallBox6.width = smallBox6.naturalWidth*Ratio;
  smallBox6.height = smallBox6.naturalHeight*Ratio;
  smallBox6.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio)*2)*2)+"px";
  smallBox6.style.left = (Ratio*(1488+(84+smallBox1.naturalWidth*Ratio))*2)+"px";

  //popup
  bg10Width = 2260;
  bg10Height = bg10Width*0.653982301;
  bg10Ratio = bg10Width / 3840;

  bg10Img.width = bg10Img.naturalWidth*Ratio;
  bg10Img.height = bg10Img.naturalHeight*Ratio;

  popup.width = bg10Img.width;
  popup.height = bg10Img.height;
  popup.style.top = (Ratio*170*2)+"px";
  popup.style.left = (Ratio*390*2)+"px";

  popupCloseBtn.width = popupCloseBtn.naturalWidth*0.8;
  popupCloseBtn.height = popupCloseBtn.naturalHeight*0.8;
  popupCloseBtn.style.top = (bg10Ratio*20*2)+"px";
  popupCloseBtn.style.left = (bg10Ratio*620*2)+"px";

  title.width = title.naturalWidth*bg10Ratio;
  title.height = title.naturalHeight*bg10Ratio;
  title.style.top = (bg10Ratio*59*2)+"px";
  title.style.left = (bg10Ratio*403*2)+"px";

  image01.width = image01.naturalWidth*bg10Ratio*0.8;
  image01.height = image01.naturalHeight*bg10Ratio*0.8;
  image01.style.top = (bg10Ratio*60*2)+"px";
  image01.style.left = (bg10Ratio*245*2)+"px";

  popupPicChangeBtn.width = popupPicChangeBtn.naturalWidth*bg10Ratio*0.8;
  popupPicChangeBtn.height = popupPicChangeBtn.naturalHeight*bg10Ratio*0.8;
  popupPicChangeBtn.style.top = (bg10Ratio*240*2)+"px";
  popupPicChangeBtn.style.left = (bg10Ratio*440*2)+"px";

  titleChange.width = titleChange.naturalWidth*bg10Ratio;
  titleChange.height = titleChange.naturalHeight*bg10Ratio;
  titleChange.style.top = (bg10Ratio*333*2)+"px";
  titleChange.style.left = (bg10Ratio*709*2)+"px";

  popupSaveBtn.width = popupSaveBtn.naturalWidth*bg10Ratio*0.8;
  popupSaveBtn.height = popupSaveBtn.naturalHeight*bg10Ratio*0.8;
  popupSaveBtn.style.top = (bg10Ratio*385*2)+"px";
  popupSaveBtn.style.left = (bg10Ratio*305.5*2)+"px";
  }


function onChangeSize(){
  bg09Width = document.body.offsetWidth;
  bg09Height = bg09Width*0.844791667;
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

//var bigBox,finishedRecordingBTN,recordingBTN,smallBox;
  bigBox.width = bigBox.naturalWidth*Ratio;
  bigBox.height = bigBox.naturalHeight*Ratio;
  bigBox.style.top = (Ratio*694*2)+"px";
  bigBox.style.left = (Ratio*352*2)+"px";

  finishedRecordingBTN.width = finishedRecordingBTN.naturalWidth*Ratio;
  finishedRecordingBTN.height = finishedRecordingBTN.naturalHeight*Ratio;
  finishedRecordingBTN.style.top = (Ratio*1531*2)+"px";
  finishedRecordingBTN.style.left = (Ratio*1689*2)+"px";

  recordingBTN.width = recordingBTN.naturalWidth*Ratio;
  recordingBTN.height = recordingBTN.naturalHeight*Ratio;
  recordingBTN.style.top = (Ratio*1151*2)+"px";
  recordingBTN.style.left = (Ratio*132*2)+"px";

  reRecordingBTN.width = reRecordingBTN.naturalWidth*Ratio;
  reRecordingBTN.height = reRecordingBTN.naturalHeight*Ratio;
  reRecordingBTN.style.top = (Ratio*1179*2)+"px";
  reRecordingBTN.style.left = (Ratio*1293*2)+"px";

  smallBox1.width = smallBox1.naturalWidth*Ratio;
  smallBox1.height = smallBox1.naturalHeight*Ratio;
  smallBox1.style.top = (Ratio*769*2)+"px";
  smallBox1.style.left = (Ratio*1488*2)+"px";

  smallBox2.width = smallBox2.naturalWidth*Ratio;
  smallBox2.height = smallBox2.naturalHeight*Ratio;
  smallBox2.style.top = (Ratio*769*2)+"px";
  smallBox2.style.left = (Ratio*(1488+(84+smallBox1.naturalWidth*Ratio))*2)+"px";

  smallBox3.width = smallBox3.naturalWidth*Ratio;
  smallBox3.height = smallBox3.naturalHeight*Ratio;
  smallBox3.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio))*2)+"px";
  smallBox3.style.left = (Ratio*1488*2)+"px";

  smallBox4.width = smallBox4.naturalWidth*Ratio;
  smallBox4.height = smallBox4.naturalHeight*Ratio;
  smallBox4.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio))*2)+"px";
  smallBox4.style.left = (Ratio*(1488+(84+smallBox1.naturalWidth*Ratio))*2)+"px";

  smallBox5.width = smallBox5.naturalWidth*Ratio;
  smallBox5.height = smallBox5.naturalHeight*Ratio;
  smallBox5.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio)*2)*2)+"px";
  smallBox5.style.left = (Ratio*1488*2)+"px";

  smallBox6.width = smallBox6.naturalWidth*Ratio;
  smallBox6.height = smallBox6.naturalHeight*Ratio;
  smallBox6.style.top = (Ratio*(769+(84+smallBox1.naturalHeight*Ratio)*2)*2)+"px";
  smallBox6.style.left = (Ratio*(1488+(84+smallBox1.naturalWidth*Ratio))*2)+"px";

  //popup
  bg10Width = 2260;
  bg10Height = bg10Width*0.653982301;
  bg10Ratio = bg10Width / 3840;

  bg10Img.width = bg10Img.naturalWidth*Ratio;
  bg10Img.height = bg10Img.naturalHeight*Ratio;

  popup.width = bg10Img.width;
  popup.height = bg10Img.height;
  popup.style.top = (Ratio*170*2)+"px";
  popup.style.left = (Ratio*390*2)+"px";

  popupCloseBtn.width = popupCloseBtn.naturalWidth*0.8;
  popupCloseBtn.height = popupCloseBtn.naturalHeight*0.8;
  popupCloseBtn.style.top = (bg10Ratio*20*2)+"px";
  popupCloseBtn.style.left = (bg10Ratio*620*2)+"px";

  title.width = title.naturalWidth*bg10Ratio;
  title.height = title.naturalHeight*bg10Ratio;
  title.style.top = (bg10Ratio*59*2)+"px";
  title.style.left = (bg10Ratio*403*2)+"px";

  image01.width = image01.naturalWidth*bg10Ratio*0.8;
  image01.height = image01.naturalHeight*bg10Ratio*0.8;
  image01.style.top = (bg10Ratio*60*2)+"px";
  image01.style.left = (bg10Ratio*245*2)+"px";

  popupPicChangeBtn.width = popupPicChangeBtn.naturalWidth*bg10Ratio*0.8;
  popupPicChangeBtn.height = popupPicChangeBtn.naturalHeight*bg10Ratio*0.8;
  popupPicChangeBtn.style.top = (bg10Ratio*240*2)+"px";
  popupPicChangeBtn.style.left = (bg10Ratio*440*2)+"px";

  titleChange.width = titleChange.naturalWidth*bg10Ratio;
  titleChange.height = titleChange.naturalHeight*bg10Ratio;
  titleChange.style.top = (bg10Ratio*333*2)+"px";
  titleChange.style.left = (bg10Ratio*709*2)+"px";

  popupSaveBtn.width = popupSaveBtn.naturalWidth*bg10Ratio*0.8;
  popupSaveBtn.height = popupSaveBtn.naturalHeight*bg10Ratio*0.8;
  popupSaveBtn.style.top = (bg10Ratio*385*2)+"px";
  popupSaveBtn.style.left = (bg10Ratio*305.5*2)+"px";
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
}
function popupCloseBtnClick() {
    popup.style.display = "none";
}
