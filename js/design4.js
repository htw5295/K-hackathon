var bg04Width;
var bg04Height;
var bg04Img;
var Ratio;

var bg04Img,menuBtn,facebookBtn,googleBtn,loginBtn,moreDetailBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;
var editBtn,selectedMenu1Btn,unSelectedMenu1Btn,selectedMenu2Btn,unSelectedMenu2Btn;
var post1Btn,post2Btn,post3Btn,post4Btn,post5Btn,postDiv;
function onload(){
  bg04Img = document.getElementById("bg04");
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

  editBtn = document.getElementById("editBtn");
  selectedMenu1Btn = document.getElementById("selectedMenu1Btn");
  unSelectedMenu1Btn = document.getElementById("unSelectedMenu1Btn");
  selectedMenu2Btn=document.getElementById("selectedMenu2Btn");
  unSelectedMenu2Btn=document.getElementById("unSelectedMenu2Btn");
  post1Btn = document.getElementById("post1Btn");
  post2Btn = document.getElementById("post2Btn");
  post3Btn = document.getElementById("post3Btn");
  post4Btn = document.getElementById("post4Btn");
  post5Btn = document.getElementById("post5Btn");
  postDiv = document.getElementById("postDiv");
  bg04Width = document.body.offsetWidth;
  bg04Height = bg04Width*1.1296875;
  Ratio = bg04Width / 3840;

  bg04Img.width=bg04Width;
  bg04Img.height=bg04Height;

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
  loginBtn.style.left=bg04.width-(Ratio*36)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+"px";

  selectedDiaryBtn.width = selectedDiaryBtn.naturalWidth*Ratio;
  selectedDiaryBtn.height = selectedDiaryBtn.naturalHeight*Ratio;
  selectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  selectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+selectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+selectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

//var editBtn,selectedMenu1BTN,unSelectedMenu1BTN,selectedMenu2BTN,unSelectedMenu2BTN;
  editBtn.width = editBtn.naturalWidth*Ratio;
  editBtn.height = editBtn.naturalHeight*Ratio;
  editBtn.style.top = (Ratio*665*2)+"px";
  editBtn.style.left = (Ratio*1774*2)+"px";

  selectedMenu1Btn.width = selectedMenu1Btn.naturalWidth*Ratio;
  selectedMenu1Btn.height = selectedMenu1Btn.naturalHeight*Ratio;
  selectedMenu1Btn.style.top = (Ratio*1322*2)+"px";
  selectedMenu1Btn.style.left = (Ratio*1695*2)+"px";

  unSelectedMenu1Btn.width = unSelectedMenu1Btn.naturalWidth*Ratio;
  unSelectedMenu1Btn.height = unSelectedMenu1Btn.naturalHeight*Ratio;
  unSelectedMenu1Btn.style.top = (Ratio*1322*2)+"px";
  unSelectedMenu1Btn.style.left = (Ratio*1695*2)+"px";

  selectedMenu2Btn.width = selectedMenu2Btn.naturalWidth*Ratio;
  selectedMenu2Btn.height = selectedMenu2Btn.naturalHeight*Ratio;
  selectedMenu2Btn.style.top = (Ratio*1322*2)+"px";
  selectedMenu2Btn.style.left = (Ratio*1787*2)+"px";

  unSelectedMenu2Btn.width = unSelectedMenu2Btn.naturalWidth*Ratio;
  unSelectedMenu2Btn.height = unSelectedMenu2Btn.naturalHeight*Ratio;
  unSelectedMenu2Btn.style.top = (Ratio*1322*2)+"px";
  unSelectedMenu2Btn.style.left = (Ratio*1787*2)+"px";

  post1Btn.width = post1Btn.naturalWidth*Ratio;
  post1Btn.height = post1Btn.naturalHeight*Ratio;
  post1Btn.style.left = (Ratio*95*2)+"px";

  post2Btn.width = post2Btn.naturalWidth*Ratio;
  post2Btn.height = post2Btn.naturalHeight*Ratio;
  post2Btn.style.left = (Ratio*95*2)+post1Btn.width+(Ratio*78*2)+"px";

  post3Btn.width = post3Btn.naturalWidth*Ratio;
  post3Btn.height = post3Btn.naturalHeight*Ratio;
  post3Btn.style.left = (Ratio*95*2)+post1Btn.width+post2Btn.width+(Ratio*78*2*2)+"px";

  post4Btn.width = post4Btn.naturalWidth*Ratio;
  post4Btn.height = post4Btn.naturalHeight*Ratio;
  post4Btn.style.left = (Ratio*95*2)+post1Btn.width+post2Btn.width+post3Btn.width+(Ratio*78*2*3)+"px";

  post5Btn.width = post5Btn.naturalWidth*Ratio;
  post5Btn.height = post5Btn.naturalHeight*Ratio;
  post5Btn.style.left = (Ratio*95*2)+post1Btn.width+post2Btn.width+post3Btn.width+post4Btn.width+(Ratio*78*2*4)+"px";

  postDiv.style.width = bg04Width+"px";
  postDiv.style.height= (post1Btn.naturalHeight+100)*Ratio+"px";
  postDiv.style.top=(Ratio*1468*2)+"px";
  }


function onChangeSize(){
  bg04Width = document.body.offsetWidth;
  bg04Height = bg04Width*1.1296875;
  Ratio = bg04Width / 3840;

  bg04Img.width=bg04Width;
  bg04Img.height=bg04Height;

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
  loginBtn.style.left=bg04.width-(Ratio*36)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+"px";

  selectedDiaryBtn.width = selectedDiaryBtn.naturalWidth*Ratio;
  selectedDiaryBtn.height = selectedDiaryBtn.naturalHeight*Ratio;
  selectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  selectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+selectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)+"px";

  unSelectedShopBtn.width = unSelectedShopBtn.naturalWidth*Ratio;
  unSelectedShopBtn.height = unSelectedShopBtn.naturalHeight*Ratio;
  unSelectedShopBtn.style.top = (Ratio*525*2)+"px";
  unSelectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+selectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

//var editBtn,selectedMenu1BTN,unSelectedMenu1BTN,selectedMenu2BTN,unSelectedMenu2BTN;
  editBtn.width = editBtn.naturalWidth*Ratio;
  editBtn.height = editBtn.naturalHeight*Ratio;
  editBtn.style.top = (Ratio*665*2)+"px";
  editBtn.style.left = (Ratio*1774*2)+"px";

  selectedMenu1Btn.width = selectedMenu1Btn.naturalWidth*Ratio;
  selectedMenu1Btn.height = selectedMenu1Btn.naturalHeight*Ratio;
  selectedMenu1Btn.style.top = (Ratio*1322*2)+"px";
  selectedMenu1Btn.style.left = (Ratio*1695*2)+"px";

  unSelectedMenu1Btn.width = unSelectedMenu1Btn.naturalWidth*Ratio;
  unSelectedMenu1Btn.height = unSelectedMenu1Btn.naturalHeight*Ratio;
  unSelectedMenu1Btn.style.top = (Ratio*1322*2)+"px";
  unSelectedMenu1Btn.style.left = (Ratio*1695*2)+"px";

  selectedMenu2Btn.width = selectedMenu2Btn.naturalWidth*Ratio;
  selectedMenu2Btn.height = selectedMenu2Btn.naturalHeight*Ratio;
  selectedMenu2Btn.style.top = (Ratio*1322*2)+"px";
  selectedMenu2Btn.style.left = (Ratio*1787*2)+"px";

  unSelectedMenu2Btn.width = unSelectedMenu2Btn.naturalWidth*Ratio;
  unSelectedMenu2Btn.height = unSelectedMenu2Btn.naturalHeight*Ratio;
  unSelectedMenu2Btn.style.top = (Ratio*1322*2)+"px";
  unSelectedMenu2Btn.style.left = (Ratio*1787*2)+"px";

  post1Btn.width = post1Btn.naturalWidth*Ratio;
  post1Btn.height = post1Btn.naturalHeight*Ratio;
  post1Btn.style.left = (Ratio*95*2)+"px";

  post2Btn.width = post2Btn.naturalWidth*Ratio;
  post2Btn.height = post2Btn.naturalHeight*Ratio;
  post2Btn.style.left = (Ratio*95*2)+post1Btn.width+(Ratio*78*2)+"px";

  post3Btn.width = post3Btn.naturalWidth*Ratio;
  post3Btn.height = post3Btn.naturalHeight*Ratio;
  post3Btn.style.left = (Ratio*95*2)+post1Btn.width+post2Btn.width+(Ratio*78*2*2)+"px";

  post4Btn.width = post4Btn.naturalWidth*Ratio;
  post4Btn.height = post4Btn.naturalHeight*Ratio;
  post4Btn.style.left = (Ratio*95*2)+post1Btn.width+post2Btn.width+post3Btn.width+(Ratio*78*2*3)+"px";

  post5Btn.width = post5Btn.naturalWidth*Ratio;
  post5Btn.height = post5Btn.naturalHeight*Ratio;
  post5Btn.style.left = (Ratio*95*2)+post1Btn.width+post2Btn.width+post3Btn.width+post4Btn.width+(Ratio*78*2*4)+"px";

  postDiv.style.width = bg04Width+"px";
  postDiv.style.height= (post1Btn.naturalHeight+100)*Ratio+"px";
  postDiv.style.top=(Ratio*1468*2)+"px";
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
function postBTNClick() {
  location.href="diaryDetail.html";
}
function editBTNClick() {
  location.href="diaryEdit.html";
}
