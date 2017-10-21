var bg05Width;
var bg05Height;
var bg05Img;
var Ratio;

var bg05Img,menuBtn,facebookBtn,googleBtn,loginBtn,moreDetailBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;
var editBtn,selectedMenu1Btn,unSelectedMenu1Btn,selectedMenu2Btn,unSelectedMenu2Btn;
var post1Pic1,post1Pic2,post1Pic3,sendMessageToBtn,selectedLikeBtn,unSelectedLikeBtn,nextPicLeftBtn,nextPicRightBtn;

var pictureIndex=1;
function onload(){
  bg05Img = document.getElementById("bg05");
  menuBtn = document.getElementById("menuBtn");
  facebookBtn = document.getElementById("facebookBtn");
  googleBtn = document.getElementById("googleBtn");
  loginBtn = document.getElementById("loginBtn");
  unSelectedDodamBtn = document.getElementById("unSelectedDodamBtn");
  twitterBtn = document.getElementById("twitterBtn");
  selectedDiaryBtn = document.getElementById("selectedDiaryBtn");
  unSelectedFairytaleBtn = document.getElementById("unSelectedFairytaleBtn");
  unSelectedMypageBtn = document.getElementById("unSelectedMypageBtn");
  unSelectedShopBtn = document.getElementById("unSelectedShopBtn");

  post1Pic1 = document.getElementById("post1Pic1");
  post1Pic2 = document.getElementById("post1Pic2");
  post1Pic3 = document.getElementById("post1Pic3");
  sendMessageToBtn = document.getElementById("sendMessageToBtn");

  nextPicLeftBtn = document.getElementById("nextPicLeftBtn");
  nextPicRightBtn = document.getElementById("nextPicRightBtn");

  bg05Width = document.body.offsetWidth;
  bg05Height = bg05Width*1.176041;
  Ratio = bg05Width / 3840;

  bg05Img.width=bg05Width;
  bg05Img.height=bg05Height;

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
  loginBtn.style.left=bg05.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  selectedDiaryBtn.width = selectedDiaryBtn.naturalWidth*Ratio;
  selectedDiaryBtn.height = selectedDiaryBtn.naturalHeight*Ratio;
  selectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  selectedDiaryBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*2)+selectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)- (200*Ratio)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*3)+selectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

//var post1Pic1,post1Pic2,post1Pic3,sendMessageToBTN,selectedLikeBTN,unSelectedLikeBTN,nextPicLeftBTN,nextPicRightBTN;

  sendMessageToBtn.width = sendMessageToBtn.naturalWidth*Ratio;
  sendMessageToBtn.height = sendMessageToBtn.naturalHeight*Ratio;
  sendMessageToBtn.style.top = (Ratio*1491*2)+"px";
  sendMessageToBtn.style.left = (Ratio*865*2)+"px";



  nextPicLeftBtn.width = nextPicLeftBtn.naturalWidth*Ratio;
  nextPicLeftBtn.height = nextPicLeftBtn.naturalHeight*Ratio;
  nextPicLeftBtn.style.top = (Ratio*(798+57)*2)+"px";
  nextPicLeftBtn.style.left = (Ratio*(1092+555)*2)+"px";

  nextPicRightBtn.width = nextPicRightBtn.naturalWidth*Ratio;
  nextPicRightBtn.height = nextPicRightBtn.naturalHeight*Ratio;
  nextPicRightBtn.style.top = (Ratio*(798+57)*2)+"px";
  nextPicRightBtn.style.left = (Ratio*(1092+555+69)*2)+nextPicLeftBtn.width+"px";

  post1Pic1.width = post1Pic1.naturalWidth*Ratio;
  post1Pic1.height = post1Pic1.naturalHeight*Ratio;
  post1Pic1.style.top = (Ratio*798*2)+"px";
  post1Pic1.style.left = (Ratio*1092*2)+"px";

  post1Pic2.width = post1Pic2.naturalWidth*Ratio;
  post1Pic2.height = post1Pic2.naturalHeight*Ratio;
  post1Pic2.style.top = (Ratio*798*2)+"px";
  post1Pic2.style.left = (Ratio*1092*2)+"px";

  post1Pic3.width = post1Pic3.naturalWidth*Ratio;
  post1Pic3.height = post1Pic3.naturalHeight*Ratio;
  post1Pic3.style.top = (Ratio*798*2)+"px";
  post1Pic3.style.left = (Ratio*1092*2)+"px";

  }


function onChangeSize(){
  bg05Width = document.body.offsetWidth;
  bg05Height = bg05Width*1.176041;
  Ratio = bg05Width / 3840;

  bg05Img.width=bg05Width;
  bg05Img.height=bg05Height;

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
  loginBtn.style.left=bg05.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  selectedDiaryBtn.width = selectedDiaryBtn.naturalWidth*Ratio;
  selectedDiaryBtn.height = selectedDiaryBtn.naturalHeight*Ratio;
  selectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  selectedDiaryBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*2)+selectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)- (200*Ratio)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(200*Ratio)+(Ratio*69*2*3)+selectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

//var post1Pic1,post1Pic2,post1Pic3,sendMessageToBTN,selectedLikeBTN,unSelectedLikeBTN,nextPicLeftBTN,nextPicRightBTN;

  sendMessageToBtn.width = sendMessageToBtn.naturalWidth*Ratio;
  sendMessageToBtn.height = sendMessageToBtn.naturalHeight*Ratio;
  sendMessageToBtn.style.top = (Ratio*1491*2)+"px";
  sendMessageToBtn.style.left = (Ratio*865*2)+"px";



  nextPicLeftBtn.width = nextPicLeftBtn.naturalWidth*Ratio;
  nextPicLeftBtn.height = nextPicLeftBtn.naturalHeight*Ratio;
  nextPicLeftBtn.style.top = (Ratio*(798+57)*2)+"px";
  nextPicLeftBtn.style.left = (Ratio*(1092+555)*2)+"px";

  nextPicRightBtn.width = nextPicRightBtn.naturalWidth*Ratio;
  nextPicRightBtn.height = nextPicRightBtn.naturalHeight*Ratio;
  nextPicRightBtn.style.top = (Ratio*(798+57)*2)+"px";
  nextPicRightBtn.style.left = (Ratio*(1092+555+69)*2)+nextPicLeftBtn.width+"px";

  post1Pic1.width = post1Pic1.naturalWidth*Ratio;
  post1Pic1.height = post1Pic1.naturalHeight*Ratio;
  post1Pic1.style.top = (Ratio*798*2)+"px";
  post1Pic1.style.left = (Ratio*1092*2)+"px";

  post1Pic2.width = post1Pic2.naturalWidth*Ratio;
  post1Pic2.height = post1Pic2.naturalHeight*Ratio;
  post1Pic2.style.top = (Ratio*798*2)+"px";
  post1Pic2.style.left = (Ratio*1092*2)+"px";

  post1Pic3.width = post1Pic3.naturalWidth*Ratio;
  post1Pic3.height = post1Pic3.naturalHeight*Ratio;
  post1Pic3.style.top = (Ratio*798*2)+"px";
  post1Pic3.style.left = (Ratio*1092*2)+"px";
}




function nextPicLeftBtnClick(){
  if(pictureIndex==1){
    pictureIndex=3;
    post1Pic3.style.display="block";
    post1Pic1.style.display="none";
  }else if(pictureIndex==2){
    pictureIndex=1;
    post1Pic1.style.display="block";
    post1Pic2.style.display="none";
  }else if(pictureIndex==3){
    pictureIndex=2;
    post1Pic2.style.display="block";
    post1Pic3.style.display="none";
  }
}
function nextPicRightBtnClick(){
  if(pictureIndex==1){
    pictureIndex=2;
    post1Pic2.style.display="block";
    post1Pic1.style.display="none";
  }else if(pictureIndex==2){
    pictureIndex=3;
    post1Pic3.style.display="block";
    post1Pic2.style.display="none";
  }else if(pictureIndex==3){
    pictureIndex=1;
    post1Pic1.style.display="block";
    post1Pic3.style.display="none";
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
function loginBtnClick(){
  location.href="login.html";
}
