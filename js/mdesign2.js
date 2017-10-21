var mbg02Width;
var mbg02Height;
var mbg02Img;
var mBackBtn;
var Ratio;
var signCheck = 0;
var mSelectedSignInBtn,mUnSelectedSignInBtn,mSelectedSignUpBtn,mUnSelectedSignUpBtn;
var mGoogleBtn,mTwitterBtn,mFacebookBtn;
var mSignInBtn,mSignUpBtn,mEmailBox,mPwdBox,mPasswordOffBtn,mPasswordOnBtn;
function onload(){
  mbg02Img = document.getElementById("mbg02");
  mBackBtn = document.getElementById("mBackBtn");
  mPasswordOffBtn = document.getElementById("mPasswordOffBtn");
  mPasswordOnBtn = document.getElementById("mPasswordOnBtn");
  mSelectedSignInBtn = document.getElementById("mSelectedSignInBtn");
  mUnSelectedSignInBtn = document.getElementById("mUnSelectedSignInBtn");
  mSelectedSignUpBtn = document.getElementById("mSelectedSignUpBtn");
  mUnSelectedSignUpBtn = document.getElementById("mUnSelectedSignUpBtn");
  mGoogleBtn = document.getElementById("mGoogleBtn");
  mTwitterBtn = document.getElementById("mTwitterBtn");
  mFacebookBtn = document.getElementById("mFacebookBtn");
  mSignInBtn = document.getElementById("mSignInBtn");
  mSignUpBtn = document.getElementById("mSignUpBtn");
  mEmailBox = document.getElementById("mEmailBox");
  mPwdBox = document.getElementById("mPwdBox");

  resize();
  document.documentElement.webkitRequestFullscreen();
}

function onChangeSize(){
  resize();
}

function resize() {
  mbg02Width = document.body.offsetWidth;
  mbg02Height = mbg02Width*1.77866667;
  Ratio = mbg02Width / 750;

  mbg02Img.width=mbg02Width;
  mbg02Img.height=mbg02Height;
  mBackBtn.width=mBackBtn.naturalWidth*Ratio;
  mBackBtn.height=mBackBtn.naturalHeight*Ratio;
  mBackBtn.style.top = (Ratio*15*2)+"px";
  mBackBtn.style.left = (Ratio*15*2)+"px";

  mPasswordOffBtn.width=mPasswordOffBtn.naturalWidth*Ratio;
  mPasswordOffBtn.height=mPasswordOffBtn.naturalHeight*Ratio;
  mPasswordOffBtn.style.top = (Ratio*448*2)+"px";
  mPasswordOffBtn.style.right = (Ratio*59*2)+"px";

  mPasswordOnBtn.width=mPasswordOnBtn.naturalWidth*Ratio;
  mPasswordOnBtn.height=mPasswordOnBtn.naturalHeight*Ratio;
  mPasswordOnBtn.style.top = (Ratio*448*2)+"px";
  mPasswordOnBtn.style.right = (Ratio*59*2)+"px";

  mSelectedSignInBtn.width = mSelectedSignInBtn.naturalWidth*Ratio;
  mSelectedSignInBtn.height = mSelectedSignInBtn.naturalHeight*Ratio;
  mSelectedSignInBtn.style.top = (Ratio*295*2)+"px";
  mSelectedSignInBtn.style.left = (Ratio*132*2)+"px";

  mUnSelectedSignInBtn.width = mUnSelectedSignInBtn.naturalWidth*Ratio;
  mUnSelectedSignInBtn.height = mUnSelectedSignInBtn.naturalHeight*Ratio;
  mUnSelectedSignInBtn.style.top = (Ratio*295*2)+"px";
  mUnSelectedSignInBtn.style.left = (Ratio*132*2)+"px";

  mSelectedSignUpBtn.width = mSelectedSignUpBtn.naturalWidth*Ratio;
  mSelectedSignUpBtn.height = mSelectedSignUpBtn.naturalHeight*Ratio;
  mSelectedSignUpBtn.style.top = (Ratio*295*2)+"px";
  mSelectedSignUpBtn.style.left = (Ratio*201*2)+"px";

  mUnSelectedSignUpBtn.width = mUnSelectedSignUpBtn.naturalWidth*Ratio;
  mUnSelectedSignUpBtn.height = mUnSelectedSignUpBtn.naturalHeight*Ratio;
  mUnSelectedSignUpBtn.style.top = (Ratio*295*2)+"px";
  mUnSelectedSignUpBtn.style.left = (Ratio*201*2)+"px";

  mGoogleBtn.width = mGoogleBtn.naturalWidth*Ratio;
  mGoogleBtn.height = mGoogleBtn.naturalHeight*Ratio;
  mGoogleBtn.style.top = (Ratio*520*2)+"px";
  mGoogleBtn.style.left = (Ratio*60*2)+"px";

  mTwitterBtn.width = mTwitterBtn.naturalWidth*Ratio;
  mTwitterBtn.height = mTwitterBtn.naturalHeight*Ratio;
  mTwitterBtn.style.top = (Ratio*520*2)+"px";
  mTwitterBtn.style.left = (Ratio*100*2)+"px";

  mFacebookBtn.width = mFacebookBtn.naturalWidth*Ratio;
  mFacebookBtn.height = mFacebookBtn.naturalHeight*Ratio;
  mFacebookBtn.style.top = (Ratio*520*2)+"px";
  mFacebookBtn.style.left = (Ratio*140*2)+"px";

  mSignInBtn.width = mSignInBtn.naturalWidth*Ratio;
  mSignInBtn.height = mSignInBtn.naturalHeight*Ratio;
  mSignInBtn.style.top =(Ratio*515*2)+"px";
  mSignInBtn.style.left = (Ratio*261*2)+"px";

  mSignUpBtn.width = mSignUpBtn.naturalWidth*Ratio;
  mSignUpBtn.height = mSignUpBtn.naturalHeight*Ratio;
  mSignUpBtn.style.top =(Ratio*515*2)+"px";
  mSignUpBtn.style.left = (Ratio*261*2)+"px";

  mEmailBox.style.width = 170*Ratio*2+"px";
  mEmailBox.style.height = 15*Ratio*2+"px";
  mEmailBox.style.top =(Ratio*380*2)+"px";
  mEmailBox.style.left = (Ratio*122*2)+"px";

  mPwdBox.style.width = 170*Ratio*2+"px";
  mPwdBox.style.height = 15*Ratio*2+"px";
  mPwdBox.style.top =(Ratio*445*2)+"px";
  mPwdBox.style.left = (Ratio*122*2)+"px";
  mEmailBox.style.fontSize=(13*Ratio*2)+"px";
  mPwdBox.style.fontSize=(13*Ratio*2)+"px";
}

function mSignInBtnClick() {
  mSelectedSignInBtn.style.display="block";
  mUnSelectedSignInBtn.style.display="none";
  mSelectedSignUpBtn.style.display="none";
  mUnSelectedSignUpBtn.style.display="block";
  mGoogleBtn.style.display="block";
  mTwitterBtn.style.display="block";
  mFacebookBtn.style.display="block";
  mSignInBtn.style.display="block";
  mSignUpBtn.style.display="none";
}
function mSignUpBtnClick() {
  mSelectedSignInBtn.style.display="none";
  mUnSelectedSignInBtn.style.display="block";
  mSelectedSignUpBtn.style.display="block";
  mUnSelectedSignUpBtn.style.display="none";
  mGoogleBtn.style.display="none";
  mTwitterBtn.style.display="none";
  mFacebookBtn.style.display="none";
  mSignInBtn.style.display="none";
  mSignUpBtn.style.display="block";
}
function mLoginInBtnClick(){
  location.href="mmain.html";
}
function mPasswordOnBtnClick() {
  mPasswordOnBtn.style.display="none";
  mPasswordOffBtn.style.display="block";
}
function mPasswordOffBtnClick() {
  mPasswordOnBtn.style.display="block";
  mPasswordOffBtn.style.display="none";
}
function mBackBtnClick() {
  location.href="mintro.html";
}
