var bg02Width;
var bg02Height;
var bg02Img;
var homeBtn;
var Ratio;
var selectedSignInBtn,unselectedSignInBtn,selectedSignUpBtn,unselectedSignUpBtn;
var googleBtn,twitterBtn,facebookBtn;
var signInBtn,signUpBtn,emailBox,pwdBox;
function onload(){
  bg02Img = document.getElementById("bg02");
  homeBtn = document.getElementById("homeBtn");
  contackUsBtn = document.getElementById("contackUsBtn");
  selectedSignInBtn = document.getElementById("selectedSignInBtn");
  unselectedSignInBtn = document.getElementById("unselectedSignInBtn");
  selectedSignUpBtn = document.getElementById("selectedSignUpBtn");
  unselectedSignUpBtn = document.getElementById("unselectedSignUpBtn");
  googleBtn = document.getElementById("googleBtn");
  twitterBtn = document.getElementById("twitterBtn");
  facebookBtn = document.getElementById("facebookBtn");
  signInBtn = document.getElementById("signInBtn");
  signUpBtn = document.getElementById("signUpBtn");
  emailBox = document.getElementById("emailBox");
  pwdBox = document.getElementById("pwdBox");


  bg02Width = document.body.offsetWidth;
  bg02Height = bg02Width*0.5625;
  Ratio = bg02Width / 3840;

  bg02Img.width=bg02Width;
  bg02Img.height=bg02Height;
  homeBtn.width=homeBtn.naturalWidth*Ratio;
  homeBtn.height=homeBtn.naturalHeight*Ratio;
  homeBtn.style.top=(Ratio*36*3)+"px";
  homeBtn.style.left=(Ratio*36*3)+"px";

  contackUsBtn.width=contackUsBtn.naturalWidth*Ratio;
  contackUsBtn.height=contackUsBtn.naturalHeight*Ratio;
  contackUsBtn.style.top=(Ratio*36*3)+"px";
  contackUsBtn.style.left=bg02Img.width - (Ratio*36*3)-contackUsBtn.width+"px";

  selectedSignInBtn.width = selectedSignInBtn.naturalWidth*Ratio;
  selectedSignInBtn.height = selectedSignInBtn.naturalHeight*Ratio;
  selectedSignInBtn.style.top = (Ratio*380*2)+"px";
  selectedSignInBtn.style.left = (Ratio*825*2)+"px";

  unselectedSignInBtn.width = unselectedSignInBtn.naturalWidth*Ratio;
  unselectedSignInBtn.height = unselectedSignInBtn.naturalHeight*Ratio;
  unselectedSignInBtn.style.top = (Ratio*380*2)+"px";
  unselectedSignInBtn.style.left = (Ratio*825*2)+"px";

  selectedSignUpBtn.width = selectedSignUpBtn.naturalWidth*Ratio;
  selectedSignUpBtn.height = selectedSignUpBtn.naturalHeight*Ratio;
  selectedSignUpBtn.style.top = (Ratio*380*2)+"px";
  selectedSignUpBtn.style.left = (Ratio*994*2)+"px";

  unselectedSignUpBtn.width = unselectedSignUpBtn.naturalWidth*Ratio;
  unselectedSignUpBtn.height = unselectedSignUpBtn.naturalHeight*Ratio;
  unselectedSignUpBtn.style.top = (Ratio*380*2)+"px";
  unselectedSignUpBtn.style.left = (Ratio*994*2)+"px";

  googleBtn.width = googleBtn.naturalWidth*Ratio;
  googleBtn.height = googleBtn.naturalHeight*Ratio;
  googleBtn.style.top = bg02Img.height-(Ratio*180*2)-googleBtn.height+"px";
  googleBtn.style.left = (Ratio*667*2)+"px";

  twitterBtn.width = twitterBtn.naturalWidth*Ratio;
  twitterBtn.height = twitterBtn.naturalHeight*Ratio;
  twitterBtn.style.top =bg02Img.height-(Ratio*180*2)-twitterBtn.height+"px";
  twitterBtn.style.left = (Ratio*667*2)+googleBtn.width+(Ratio*58*2)+"px";

  facebookBtn.width = facebookBtn.naturalWidth*Ratio;
  facebookBtn.height = facebookBtn.naturalHeight*Ratio;
  facebookBtn.style.top =bg02Img.height-(Ratio*180*2)-facebookBtn.height+"px";
  facebookBtn.style.left = (Ratio*852*2)+"px";

  signInBtn.width = signInBtn.naturalWidth*Ratio;
  signInBtn.height = signInBtn.naturalHeight*Ratio;
  signInBtn.style.top =(Ratio*865*2)+"px";
  signInBtn.style.left = (Ratio*1154*2)+"px";

  signUpBtn.width = signUpBtn.naturalWidth*Ratio;
  signUpBtn.height = signUpBtn.naturalHeight*Ratio;
  signUpBtn.style.top =(Ratio*865*2)+"px";
  signUpBtn.style.left = (Ratio*1154*2)+"px";

  emailBox.style.width = 900*Ratio+"px";
  emailBox.style.height = 40*Ratio+"px";
  emailBox.style.top =(Ratio*615*2)+"px";
  emailBox.style.left = (Ratio*765*2)+"px";

  pwdBox.style.width = 810*Ratio+"px";
  pwdBox.style.height = 50*Ratio+"px";
  pwdBox.style.top =(Ratio*729*2)+"px";
  pwdBox.style.left = (Ratio*809*2)+"px";
  emailBox.style.fontSize=(40*Ratio)+"px";
  pwdBox.style.fontSize=(40*Ratio)+"px";
}

function onChangeSize(){
  bg02Width = document.body.offsetWidth;
  bg02Height = bg02Width*0.5625;
  Ratio = bg02Width / 3840;

  bg02Img.width=bg02Width;
  bg02Img.height=bg02Height;
  homeBtn.width=homeBtn.naturalWidth*Ratio;
  homeBtn.height=homeBtn.naturalHeight*Ratio;
  homeBtn.style.top=(Ratio*36*3)+"px";
  homeBtn.style.left=(Ratio*36*3)+"px";

  contackUsBtn.width=contackUsBtn.naturalWidth*Ratio;
  contackUsBtn.height=contackUsBtn.naturalHeight*Ratio;
  contackUsBtn.style.top=(Ratio*36*3)+"px";
  contackUsBtn.style.left=bg02Img.width - (Ratio*36*3)-contackUsBtn.width+"px";

  selectedSignInBtn.width = selectedSignInBtn.naturalWidth*Ratio;
  selectedSignInBtn.height = selectedSignInBtn.naturalHeight*Ratio;
  selectedSignInBtn.style.top = (Ratio*380*2)+"px";
  selectedSignInBtn.style.left = (Ratio*825*2)+"px";

  unselectedSignInBtn.width = unselectedSignInBtn.naturalWidth*Ratio;
  unselectedSignInBtn.height = unselectedSignInBtn.naturalHeight*Ratio;
  unselectedSignInBtn.style.top = (Ratio*380*2)+"px";
  unselectedSignInBtn.style.left = (Ratio*825*2)+"px";

  selectedSignUpBtn.width = selectedSignUpBtn.naturalWidth*Ratio;
  selectedSignUpBtn.height = selectedSignUpBtn.naturalHeight*Ratio;
  selectedSignUpBtn.style.top = (Ratio*380*2)+"px";
  selectedSignUpBtn.style.left = (Ratio*994*2)+"px";

  unselectedSignUpBtn.width = unselectedSignUpBtn.naturalWidth*Ratio;
  unselectedSignUpBtn.height = unselectedSignUpBtn.naturalHeight*Ratio;
  unselectedSignUpBtn.style.top = (Ratio*380*2)+"px";
  unselectedSignUpBtn.style.left = (Ratio*994*2)+"px";

  googleBtn.width = googleBtn.naturalWidth*Ratio;
  googleBtn.height = googleBtn.naturalHeight*Ratio;
  googleBtn.style.top = bg02Img.height-(Ratio*180*2)-googleBtn.height+"px";
  googleBtn.style.left = (Ratio*667*2)+"px";

  twitterBtn.width = twitterBtn.naturalWidth*Ratio;
  twitterBtn.height = twitterBtn.naturalHeight*Ratio;
  twitterBtn.style.top =bg02Img.height-(Ratio*180*2)-twitterBtn.height+"px";
  twitterBtn.style.left = (Ratio*667*2)+googleBtn.width+(Ratio*58*2)+"px";

  facebookBtn.width = facebookBtn.naturalWidth*Ratio;
  facebookBtn.height = facebookBtn.naturalHeight*Ratio;
  facebookBtn.style.top =bg02Img.height-(Ratio*180*2)-facebookBtn.height+"px";
  facebookBtn.style.left = (Ratio*852*2)+"px";

  signInBtn.width = signInBtn.naturalWidth*Ratio;
  signInBtn.height = signInBtn.naturalHeight*Ratio;
  signInBtn.style.top =(Ratio*865*2)+"px";
  signInBtn.style.left = (Ratio*1154*2)+"px";

  signUpBtn.width = signUpBtn.naturalWidth*Ratio;
  signUpBtn.height = signUpBtn.naturalHeight*Ratio;
  signUpBtn.style.top =(Ratio*865*2)+"px";
  signUpBtn.style.left = (Ratio*1154*2)+"px";

  emailBox.style.width = 900*Ratio+"px";
  emailBox.style.height = 40*Ratio+"px";
  emailBox.style.top =(Ratio*615*2)+"px";
  emailBox.style.left = (Ratio*765*2)+"px";

  pwdBox.style.width = 810*Ratio+"px";
  pwdBox.style.height = 50*Ratio+"px";
  pwdBox.style.top =(Ratio*729*2)+"px";
  pwdBox.style.left = (Ratio*809*2)+"px";
  emailBox.style.fontSize=(40*Ratio)+"px";
  pwdBox.style.fontSize=(40*Ratio)+"px";

}

function signInBtnClick() {
  selectedSignInBtn.style.display="block";
  unselectedSignInBtn.style.display="none";
  selectedSignUpBtn.style.display="none";
  unselectedSignUpBtn.style.display="block";
  signInBtn.style.display="block";
  signUpBtn.style.display="none";

  googleBtn.style.display="block";
  twitterBtn.style.display="block";
  facebookBtn.style.display="block";
}
function signUpBtnClick() {
  selectedSignInBtn.style.display="none";
  unselectedSignInBtn.style.display="block";
  selectedSignUpBtn.style.display="block";
  unselectedSignUpBtn.style.display="none";
  signInBtn.style.display="none";
  signUpBtn.style.display="block";

  googleBtn.style.display="none";
  twitterBtn.style.display="none";
  facebookBtn.style.display="none";
}
function signInBTNClick(){
  location.href="main.html";
}
