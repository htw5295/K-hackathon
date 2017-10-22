var bg06Width;
var bg06Height;
var bg06Img;
var Ratio;

var bg06Img,menuBtn,facebookBtn,googleBtn,loginBtn,moreDetailBtn,selectedDiaryBtn,selectedDodamBtn;
var selectedFairytaleBtn,selectedFairytaleBtn,selectedMypageBtn,selectedShopBtn,twitterBtn,unSelectedDiaryBtn;
var unSelectedDodamBtn,unSelectedFairytaleBtn,unSelectedMypageBtn,unSelectedShopBtn;

var selectedCircleBtn1,UnSelectedCircleBtn1,buyDirectlyBtn,bookInfo1,bookInfo2,bookInfo3,tFairyTale01Btn,tFairyTale02Btn,tFairyTale04Btn,tFairyTale03Btn,things01Btn;
var things02Btn,things03Btn,things04Btn,selectedCircleBtn2,selectedCircleBtn3,UnSelectedCircleBtn2,UnSelectedCircleBtn3,cFairyTale01Btn,cFairyTale02Btn,cFairyTale03Btn,cFairyTale04Btn;
var pictureIndex=1;
function onload(){
  bg06Img = document.getElementById("bg06");
  menuBtn = document.getElementById("menuBtn");
  facebookBtn = document.getElementById("facebookBtn");
  googleBtn = document.getElementById("googleBtn");
  loginBtn = document.getElementById("loginBtn");
  unSelectedDodamBtn = document.getElementById("unSelectedDodamBtn");
  twitterBtn = document.getElementById("twitterBtn");
  unSelectedDiaryBtn = document.getElementById("unSelectedDiaryBtn");
  unSelectedFairytaleBtn = document.getElementById("unSelectedFairytaleBtn");
  unSelectedMypageBtn = document.getElementById("unSelectedMypageBtn");
  selectedShopBtn = document.getElementById("selectedShopBtn");

  selectedCircleBtn1 = document.getElementById("selectedCircleBtn1");
  UnSelectedCircleBtn1 = document.getElementById("UnSelectedCircleBtn1");
  selectedCircleBtn2 = document.getElementById("selectedCircleBtn2");
  UnSelectedCircleBtn2 = document.getElementById("UnSelectedCircleBtn2");
  selectedCircleBtn3 = document.getElementById("selectedCircleBtn3");
  UnSelectedCircleBtn3 = document.getElementById("UnSelectedCircleBtn3");
  buyDirectlyBtn = document.getElementById("buyDirectlyBtn");
  bookInfo1 = document.getElementById("bookInfo1");
  bookInfo2 = document.getElementById("bookInfo2");
  bookInfo3 = document.getElementById("bookInfo3");
  tFairyTale01Btn = document.getElementById("tFairyTale01Btn");
  tFairyTale02Btn = document.getElementById("tFairyTale02Btn");
  tFairyTale03Btn = document.getElementById("tFairyTale03Btn");
  tFairyTale04Btn = document.getElementById("tFairyTale04Btn");
  cFairyTale01Btn = document.getElementById("cFairyTale01Btn");
  cFairyTale02Btn = document.getElementById("cFairyTale02Btn");
  cFairyTale03Btn = document.getElementById("cFairyTale03Btn");
  cFairyTale04Btn = document.getElementById("cFairyTale04Btn");
  things01Btn = document.getElementById("things01Btn");
  things02Btn = document.getElementById("things02Btn");
  things03Btn = document.getElementById("things03Btn");
  things04Btn = document.getElementById("things04Btn");


  bg06Width = document.body.offsetWidth;
  bg06Height = bg06Width*2.059895;
  Ratio = bg06Width / 3840;

  bg06Img.width=bg06Width;
  bg06Img.height=bg06Height;

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
  loginBtn.style.left=bg06.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+(200*Ratio)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+(200*Ratio)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)-(200*Ratio)+"px";

  selectedShopBtn.width = selectedShopBtn.naturalWidth*Ratio;
  selectedShopBtn.height = selectedShopBtn.naturalHeight*Ratio;
  selectedShopBtn.style.top = (Ratio*525*2)+"px";
  selectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+(200*Ratio)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

//var selectedCircleBtn,UnSelectedCircleBtn,buyDirectlyBtn,bookInfo1,bookInfo2,bookInfo3,tFairyTale01Btn,tFairyTale02Btn,tFairyTale04Btn,tFairyTale03Btn,things01Btn;
//var things02Btn,things03Btn,things04Btn;
selectedCircleBtn1.width = selectedCircleBtn1.naturalWidth*Ratio;
selectedCircleBtn1.height = selectedCircleBtn1.naturalHeight*Ratio;
selectedCircleBtn1.style.top = (Ratio*1153*2)+"px";
selectedCircleBtn1.style.left = (Ratio*1526*2)+"px";

UnSelectedCircleBtn1.width = UnSelectedCircleBtn1.naturalWidth*Ratio;
UnSelectedCircleBtn1.height = UnSelectedCircleBtn1.naturalHeight*Ratio;
UnSelectedCircleBtn1.style.top = (Ratio*1153*2)+"px";
UnSelectedCircleBtn1.style.left = (Ratio*1526*2)+"px";

selectedCircleBtn2.width = selectedCircleBtn2.naturalWidth*Ratio;
selectedCircleBtn2.height = selectedCircleBtn2.naturalHeight*Ratio;
selectedCircleBtn2.style.top = (Ratio*1153*2)+"px";
selectedCircleBtn2.style.left = (Ratio*(1526+36)*2)+selectedCircleBtn1.width+"px";

UnSelectedCircleBtn2.width = UnSelectedCircleBtn2.naturalWidth*Ratio;
UnSelectedCircleBtn2.height = UnSelectedCircleBtn2.naturalHeight*Ratio;
UnSelectedCircleBtn2.style.top = (Ratio*1153*2)+"px";
UnSelectedCircleBtn2.style.left = (Ratio*(1526+36)*2)+selectedCircleBtn1.width+"px";

selectedCircleBtn3.width = selectedCircleBtn3.naturalWidth*Ratio;
selectedCircleBtn3.height = selectedCircleBtn3.naturalHeight*Ratio;
selectedCircleBtn3.style.top = (Ratio*1153*2)+"px";
selectedCircleBtn3.style.left = (Ratio*1626*2)+"px";

UnSelectedCircleBtn3.width = UnSelectedCircleBtn3.naturalWidth*Ratio;
UnSelectedCircleBtn3.height = UnSelectedCircleBtn3.naturalHeight*Ratio;
UnSelectedCircleBtn3.style.top = (Ratio*1153*2)+"px";
UnSelectedCircleBtn3.style.left = (Ratio*1626*2)+"px";

buyDirectlyBtn.width = buyDirectlyBtn.naturalWidth*Ratio;
buyDirectlyBtn.height = buyDirectlyBtn.naturalHeight*Ratio;
buyDirectlyBtn.style.top = (Ratio*1009*2)+"px";
buyDirectlyBtn.style.left = (Ratio*170)+(Ratio*200)+"px";

bookInfo1.width = bookInfo1.naturalWidth*Ratio;
bookInfo1.height = bookInfo1.naturalHeight*Ratio;
bookInfo1.style.top = (Ratio*766*2)+"px";
bookInfo1.style.left = (Ratio*795*2)+"px";

bookInfo2.width = bookInfo2.naturalWidth*Ratio;
bookInfo2.height = bookInfo2.naturalHeight*Ratio;
bookInfo2.style.top = (Ratio*(766*2-10))+"px";
bookInfo2.style.left = (Ratio*795*2)+"px";

bookInfo3.width = bookInfo3.naturalWidth*Ratio;
bookInfo3.height = bookInfo3.naturalHeight*Ratio;
bookInfo3.style.top = (Ratio*766*2)+"px";
bookInfo3.style.left = (Ratio*795*2)+"px";



tFairyTale01Btn.width = tFairyTale01Btn.naturalWidth*Ratio;
tFairyTale01Btn.height = tFairyTale01Btn.naturalHeight*Ratio;
tFairyTale01Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale01Btn.style.left = (Ratio*96*1.5)+"px";

tFairyTale02Btn.width = tFairyTale02Btn.naturalWidth*Ratio;
tFairyTale02Btn.height = tFairyTale02Btn.naturalHeight*Ratio;
tFairyTale02Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale02Btn.style.left = (Ratio*(96+112)*1.5)+tFairyTale01Btn.width+"px";

tFairyTale03Btn.width = tFairyTale03Btn.naturalWidth*Ratio;
tFairyTale03Btn.height = tFairyTale03Btn.naturalHeight*Ratio;
tFairyTale03Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale03Btn.style.left = (Ratio*(96+(112*2))*1.5)+tFairyTale01Btn.width+tFairyTale02Btn.width+"px";

tFairyTale04Btn.width = tFairyTale04Btn.naturalWidth*Ratio;
tFairyTale04Btn.height = tFairyTale04Btn.naturalHeight*Ratio;
tFairyTale04Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale04Btn.style.left = (Ratio*(96+(112*3))*1.5)+tFairyTale01Btn.width+tFairyTale02Btn.width+tFairyTale03Btn.width+"px";

cFairyTale01Btn.width = cFairyTale01Btn.naturalWidth*Ratio;
cFairyTale01Btn.height = cFairyTale01Btn.naturalHeight*Ratio;
cFairyTale01Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale01Btn.style.left = (Ratio*96*1.5)+"px";

cFairyTale02Btn.width = cFairyTale02Btn.naturalWidth*Ratio;
cFairyTale02Btn.height = cFairyTale02Btn.naturalHeight*Ratio;
cFairyTale02Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale02Btn.style.left = (Ratio*(96+112)*1.5)+cFairyTale01Btn.width+"px";

cFairyTale03Btn.width = cFairyTale03Btn.naturalWidth*Ratio;
cFairyTale03Btn.height = cFairyTale03Btn.naturalHeight*Ratio;
cFairyTale03Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale03Btn.style.left = (Ratio*(96+(112*2))*1.5)+cFairyTale01Btn.width+cFairyTale02Btn.width+"px";

cFairyTale04Btn.width = cFairyTale04Btn.naturalWidth*Ratio;
cFairyTale04Btn.height = cFairyTale04Btn.naturalHeight*Ratio;
cFairyTale04Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale04Btn.style.left = (Ratio*(96+(112*3))*1.5)+cFairyTale01Btn.width+cFairyTale02Btn.width+cFairyTale03Btn.width+"px";


things01Btn.width = things01Btn.naturalWidth*Ratio;
things01Btn.height = things01Btn.naturalHeight*Ratio;
things01Btn.style.top = (Ratio*3328*2)+"px";
things01Btn.style.left = (Ratio*96*1.5)+"px";

things02Btn.width = things02Btn.naturalWidth*Ratio;
things02Btn.height = things02Btn.naturalHeight*Ratio;
things02Btn.style.top = (Ratio*3328*2)+"px";
things02Btn.style.left = (Ratio*(96+112)*1.5)+things01Btn.width+"px";

things03Btn.width = things03Btn.naturalWidth*Ratio;
things03Btn.height = things03Btn.naturalHeight*Ratio;
things03Btn.style.top = (Ratio*3328*2)+"px";
things03Btn.style.left = (Ratio*(96+(112*2))*1.5)+things01Btn.width+things02Btn.width+"px";

things04Btn.width = things04Btn.naturalWidth*Ratio;
things04Btn.height = things04Btn.naturalHeight*Ratio;
things04Btn.style.top = (Ratio*3328*2)+"px";
things04Btn.style.left = (Ratio*(96+(112*3))*1.5)+things01Btn.width+things02Btn.width+things03Btn.width+"px";

}


function onChangeSize(){
  bg06Width = document.body.offsetWidth;
  bg06Height = bg06Width*2.059895;
  Ratio = bg06Width / 3840;

  bg06Img.width=bg06Width;
  bg06Img.height=bg06Height;

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
  loginBtn.style.left=bg06.width-(Ratio*36*3)-loginBtn.width+"px";

  unSelectedDodamBtn.width = unSelectedDodamBtn.naturalWidth*Ratio;
  unSelectedDodamBtn.height = unSelectedDodamBtn.naturalHeight*Ratio;
  unSelectedDodamBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDodamBtn.style.left = (Ratio*99*2)+(200*Ratio)+"px";

  unSelectedDiaryBtn.width = unSelectedDiaryBtn.naturalWidth*Ratio;
  unSelectedDiaryBtn.height = unSelectedDiaryBtn.naturalHeight*Ratio;
  unSelectedDiaryBtn.style.top = (Ratio*525*2)+"px";
  unSelectedDiaryBtn.style.left = (Ratio*99*2)+(Ratio*69*2)+(200*Ratio)+unSelectedDodamBtn.width+"px";

  unSelectedFairytaleBtn.width = unSelectedFairytaleBtn.naturalWidth*Ratio;
  unSelectedFairytaleBtn.height = unSelectedFairytaleBtn.naturalHeight*Ratio;
  unSelectedFairytaleBtn.style.top = (Ratio*525*2)+"px";
  unSelectedFairytaleBtn.style.left = (Ratio*99*2)+(Ratio*69*2*2)+(200*Ratio)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+"px";

  unSelectedMypageBtn.width = unSelectedMypageBtn.naturalWidth*Ratio;
  unSelectedMypageBtn.height = unSelectedMypageBtn.naturalHeight*Ratio;
  unSelectedMypageBtn.style.top = (Ratio*525*2)+"px";
  unSelectedMypageBtn.style.left = (Ratio*1715*2)-(200*Ratio)+"px";

  selectedShopBtn.width = selectedShopBtn.naturalWidth*Ratio;
  selectedShopBtn.height = selectedShopBtn.naturalHeight*Ratio;
  selectedShopBtn.style.top = (Ratio*525*2)+"px";
  selectedShopBtn.style.left = (Ratio*99*2)+(Ratio*69*2*3)+(200*Ratio)+unSelectedDiaryBtn.width+unSelectedDodamBtn.width+unSelectedFairytaleBtn.width+"px";

//var selectedCircleBtn,UnSelectedCircleBtn,buyDirectlyBtn,bookInfo1,bookInfo2,bookInfo3,tFairyTale01Btn,tFairyTale02Btn,tFairyTale04Btn,tFairyTale03Btn,things01Btn;
//var things02Btn,things03Btn,things04Btn;
selectedCircleBtn1.width = selectedCircleBtn1.naturalWidth*Ratio;
selectedCircleBtn1.height = selectedCircleBtn1.naturalHeight*Ratio;
selectedCircleBtn1.style.top = (Ratio*1153*2)+"px";
selectedCircleBtn1.style.left = (Ratio*1526*2)+"px";

UnSelectedCircleBtn1.width = UnSelectedCircleBtn1.naturalWidth*Ratio;
UnSelectedCircleBtn1.height = UnSelectedCircleBtn1.naturalHeight*Ratio;
UnSelectedCircleBtn1.style.top = (Ratio*1153*2)+"px";
UnSelectedCircleBtn1.style.left = (Ratio*1526*2)+"px";

selectedCircleBtn2.width = selectedCircleBtn2.naturalWidth*Ratio;
selectedCircleBtn2.height = selectedCircleBtn2.naturalHeight*Ratio;
selectedCircleBtn2.style.top = (Ratio*1153*2)+"px";
selectedCircleBtn2.style.left = (Ratio*(1526+36)*2)+selectedCircleBtn1.width+"px";

UnSelectedCircleBtn2.width = UnSelectedCircleBtn2.naturalWidth*Ratio;
UnSelectedCircleBtn2.height = UnSelectedCircleBtn2.naturalHeight*Ratio;
UnSelectedCircleBtn2.style.top = (Ratio*1153*2)+"px";
UnSelectedCircleBtn2.style.left = (Ratio*(1526+36)*2)+selectedCircleBtn1.width+"px";

selectedCircleBtn3.width = selectedCircleBtn3.naturalWidth*Ratio;
selectedCircleBtn3.height = selectedCircleBtn3.naturalHeight*Ratio;
selectedCircleBtn3.style.top = (Ratio*1153*2)+"px";
selectedCircleBtn3.style.left = (Ratio*1626*2)+"px";

UnSelectedCircleBtn3.width = UnSelectedCircleBtn3.naturalWidth*Ratio;
UnSelectedCircleBtn3.height = UnSelectedCircleBtn3.naturalHeight*Ratio;
UnSelectedCircleBtn3.style.top = (Ratio*1153*2)+"px";
UnSelectedCircleBtn3.style.left = (Ratio*1626*2)+"px";

buyDirectlyBtn.width = buyDirectlyBtn.naturalWidth*Ratio;
buyDirectlyBtn.height = buyDirectlyBtn.naturalHeight*Ratio;
buyDirectlyBtn.style.top = (Ratio*1009*2)+"px";
buyDirectlyBtn.style.left = (Ratio*99*2)+(Ratio*200)+"px";

bookInfo1.width = bookInfo1.naturalWidth*Ratio;
bookInfo1.height = bookInfo1.naturalHeight*Ratio;
bookInfo1.style.top = (Ratio*766*2)+"px";
bookInfo1.style.left = (Ratio*795*2)+"px";

bookInfo2.width = bookInfo2.naturalWidth*Ratio;
bookInfo2.height = bookInfo2.naturalHeight*Ratio;
bookInfo2.style.top = (Ratio*(766*2-10))+"px";
bookInfo2.style.left = (Ratio*795*2)+"px";

bookInfo3.width = bookInfo3.naturalWidth*Ratio;
bookInfo3.height = bookInfo3.naturalHeight*Ratio;
bookInfo3.style.top = (Ratio*766*2)+"px";
bookInfo3.style.left = (Ratio*795*2)+"px";



tFairyTale01Btn.width = tFairyTale01Btn.naturalWidth*Ratio;
tFairyTale01Btn.height = tFairyTale01Btn.naturalHeight*Ratio;
tFairyTale01Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale01Btn.style.left = (Ratio*96*1.5)+"px";

tFairyTale02Btn.width = tFairyTale02Btn.naturalWidth*Ratio;
tFairyTale02Btn.height = tFairyTale02Btn.naturalHeight*Ratio;
tFairyTale02Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale02Btn.style.left = (Ratio*(96+112)*1.5)+tFairyTale01Btn.width+"px";

tFairyTale03Btn.width = tFairyTale03Btn.naturalWidth*Ratio;
tFairyTale03Btn.height = tFairyTale03Btn.naturalHeight*Ratio;
tFairyTale03Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale03Btn.style.left = (Ratio*(96+(112*2))*1.5)+tFairyTale01Btn.width+tFairyTale02Btn.width+"px";

tFairyTale04Btn.width = tFairyTale04Btn.naturalWidth*Ratio;
tFairyTale04Btn.height = tFairyTale04Btn.naturalHeight*Ratio;
tFairyTale04Btn.style.top = (Ratio*1565*2)+"px";
tFairyTale04Btn.style.left = (Ratio*(96+(112*3))*1.5)+tFairyTale01Btn.width+tFairyTale02Btn.width+tFairyTale03Btn.width+"px";

cFairyTale01Btn.width = cFairyTale01Btn.naturalWidth*Ratio;
cFairyTale01Btn.height = cFairyTale01Btn.naturalHeight*Ratio;
cFairyTale01Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale01Btn.style.left = (Ratio*96*1.5)+"px";

cFairyTale02Btn.width = cFairyTale02Btn.naturalWidth*Ratio;
cFairyTale02Btn.height = cFairyTale02Btn.naturalHeight*Ratio;
cFairyTale02Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale02Btn.style.left = (Ratio*(96+112)*1.5)+cFairyTale01Btn.width+"px";

cFairyTale03Btn.width = cFairyTale03Btn.naturalWidth*Ratio;
cFairyTale03Btn.height = cFairyTale03Btn.naturalHeight*Ratio;
cFairyTale03Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale03Btn.style.left = (Ratio*(96+(112*2))*1.5)+cFairyTale01Btn.width+cFairyTale02Btn.width+"px";

cFairyTale04Btn.width = cFairyTale04Btn.naturalWidth*Ratio;
cFairyTale04Btn.height = cFairyTale04Btn.naturalHeight*Ratio;
cFairyTale04Btn.style.top = (Ratio*2438*2)+"px";
cFairyTale04Btn.style.left = (Ratio*(96+(112*3))*1.5)+cFairyTale01Btn.width+cFairyTale02Btn.width+cFairyTale03Btn.width+"px";


things01Btn.width = things01Btn.naturalWidth*Ratio;
things01Btn.height = things01Btn.naturalHeight*Ratio;
things01Btn.style.top = (Ratio*3328*2)+"px";
things01Btn.style.left = (Ratio*96*1.5)+"px";

things02Btn.width = things02Btn.naturalWidth*Ratio;
things02Btn.height = things02Btn.naturalHeight*Ratio;
things02Btn.style.top = (Ratio*3328*2)+"px";
things02Btn.style.left = (Ratio*(96+112)*1.5)+things01Btn.width+"px";

things03Btn.width = things03Btn.naturalWidth*Ratio;
things03Btn.height = things03Btn.naturalHeight*Ratio;
things03Btn.style.top = (Ratio*3328*2)+"px";
things03Btn.style.left = (Ratio*(96+(112*2))*1.5)+things01Btn.width+things02Btn.width+"px";

things04Btn.width = things04Btn.naturalWidth*Ratio;
things04Btn.height = things04Btn.naturalHeight*Ratio;
things04Btn.style.top = (Ratio*3328*2)+"px";
things04Btn.style.left = (Ratio*(96+(112*3))*1.5)+things01Btn.width+things02Btn.width+things03Btn.width+"px";


}


function selectedLikeBtnClick(){
  selectedLikeBtn.style.display="none";
  unSelectedLikeBtn.style.display="block";
}
function unSelectedLikeBtnClick(){
  unSelectedLikeBtn.style.display="none";
  selectedLikeBtn.style.display="block";
}

function selectedCircleBtn1Click(){
  selectedCircleBtn1.style.display="block";
  selectedCircleBtn2.style.display="none";
  selectedCircleBtn3.style.display="none";
  UnSelectedCircleBtn1.style.display="none";
  UnSelectedCircleBtn2.style.display="block";
  UnSelectedCircleBtn3.style.display="block";
  bookInfo1.style.display="block";
  bookInfo2.style.display="none";
  bookInfo3.style.display="none";
}
function selectedCircleBtn2Click(){
  selectedCircleBtn1.style.display="none";
  selectedCircleBtn2.style.display="block";
  selectedCircleBtn3.style.display="none";
  UnSelectedCircleBtn1.style.display="block";
  UnSelectedCircleBtn2.style.display="none";
  UnSelectedCircleBtn3.style.display="block";
  bookInfo1.style.display="none";
  bookInfo2.style.display="block";
  bookInfo3.style.display="none";
}
function selectedCircleBtn3Click(){
  selectedCircleBtn1.style.display="none";
  selectedCircleBtn2.style.display="none";
  selectedCircleBtn3.style.display="block";
  UnSelectedCircleBtn1.style.display="block";
  UnSelectedCircleBtn2.style.display="block";
  UnSelectedCircleBtn3.style.display="none";
  bookInfo1.style.display="none";
  bookInfo2.style.display="none";
  bookInfo3.style.display="block";
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
function payClick() {
  location.href="pay.html";
}
