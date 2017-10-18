var mbg02Width;
var mbg02Height;
var mbg02Img;
var mBackBtn;
var Ratio;
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


  mbg02Width = document.body.offsetWidth;
  mbg02Height = mbg02Width*1.77866667;
  Ratio = mbg02Width / 750;

  mbg02Img.width=mbg02Width;
  mbg02Img.height=mbg02Height;
  mBackBtn.width=mBackBtn.naturalWidth*Ratio;
  mBackBtn.height=mBackBtn.naturalHeight*Ratio;
  mBackBtn.style.top=(Ratio*36)+"px";
  mBackBtn.style.left=(Ratio*36)+"px";

  mPasswordOffBtn.width=mPasswordOffBtn.naturalWidth*Ratio;
  mPasswordOffBtn.height=mPasswordOffBtn.naturalHeight*Ratio;
  mPasswordOffBtn.style.top=(Ratio*36)+"px";
  mPasswordOffBtn.style.left=mbg02Img.width - (Ratio*36)-mPasswordOffBtn.width+"px";

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
  mGoogleBtn.style.top = mbg02Img.height-(Ratio*180*2)-mGoogleBtn.height+"px";
  mGoogleBtn.style.left = (Ratio*667*2)+"px";

  mTwitterBtn.width = mTwitterBtn.naturalWidth*Ratio;
  mTwitterBtn.height = mTwitterBtn.naturalHeight*Ratio;
  mTwitterBtn.style.top =mbg02Img.height-(Ratio*180*2)-mTwitterBtn.height+"px";
  mTwitterBtn.style.left = (Ratio*667*2)+mGoogleBtn.width+(Ratio*58*2)+"px";

  mFacebookBtn.width = mFacebookBtn.naturalWidth*Ratio;
  mFacebookBtn.height = mFacebookBtn.naturalHeight*Ratio;
  mFacebookBtn.style.top =mbg02Img.height-(Ratio*180*2)-mFacebookBtn.height+"px";
  mFacebookBtn.style.left = (Ratio*852*2)+"px";

  mSignInBtn.width = mSignInBtn.naturalWidth*Ratio;
  mSignInBtn.height = mSignInBtn.naturalHeight*Ratio;
  mSignInBtn.style.top =(Ratio*880*2)+"px";
  mSignInBtn.style.left = (Ratio*261*2)+"px";

  mSignUpBtn.width = mSignUpBtn.naturalWidth*Ratio;
  mSignUpBtn.height = mSignUpBtn.naturalHeight*Ratio;
  mSignUpBtn.style.top =(Ratio*880*2)+"px";
  mSignUpBtn.style.left = (Ratio*261*2)+"px";

  mEmailBox.style.width = 900*Ratio+"px";
  mEmailBox.style.height = 40*Ratio+"px";
  mEmailBox.style.top =(Ratio*615*2)+"px";
  mEmailBox.style.left = (Ratio*765*2)+"px";

  mPwdBox.style.width = 810*Ratio+"px";
  mPwdBox.style.height = 50*Ratio+"px";
  mPwdBox.style.top =(Ratio*729*2)+"px";
  mPwdBox.style.left = (Ratio*809*2)+"px";
  mEmailBox.style.fontSize=(40*Ratio)+"px";
  mPwdBox.style.fontSize=(40*Ratio)+"px";
}

function onChangeSize(){
  mbg02Width = document.body.offsetWidth;
  mbg02Height = mbg02Width*1.77866667;
  Ratio = mbg02Width / 750;

  mbg02Img.width=mbg02Width;
  mbg02Img.height=mbg02Height;
  mBackBtn.width=mBackBtn.naturalWidth*Ratio;
  mBackBtn.height=mBackBtn.naturalHeight*Ratio;
  mBackBtn.style.top=(Ratio*36)+"px";
  mBackBtn.style.left=(Ratio*36)+"px";

  mPasswordOffBtn.width=mPasswordOffBtn.naturalWidth*Ratio;
  mPasswordOffBtn.height=mPasswordOffBtn.naturalHeight*Ratio;
  mPasswordOffBtn.style.top=(Ratio*36)+"px";
  mPasswordOffBtn.style.left=mbg02Img.width - (Ratio*36)-mPasswordOffBtn.width+"px";

  mSelectedSignInBtn.width = mSelectedSignInBtn.naturalWidth*Ratio;
  mSelectedSignInBtn.height = mSelectedSignInBtn.naturalHeight*Ratio;
  mSelectedSignInBtn.style.top = (Ratio*380*2)+"px";
  mSelectedSignInBtn.style.left = (Ratio*825*2)+"px";

  mUnSelectedSignInBtn.width = mUnSelectedSignInBtn.naturalWidth*Ratio;
  mUnSelectedSignInBtn.height = mUnSelectedSignInBtn.naturalHeight*Ratio;
  mUnSelectedSignInBtn.style.top = (Ratio*380*2)+"px";
  mUnSelectedSignInBtn.style.left = (Ratio*825*2)+"px";

  mSelectedSignUpBtn.width = mSelectedSignUpBtn.naturalWidth*Ratio;
  mSelectedSignUpBtn.height = mSelectedSignUpBtn.naturalHeight*Ratio;
  mSelectedSignUpBtn.style.top = (Ratio*380*2)+"px";
  mSelectedSignUpBtn.style.left = (Ratio*994*2)+"px";

  mUnSelectedSignUpBtn.width = mUnSelectedSignUpBtn.naturalWidth*Ratio;
  mUnSelectedSignUpBtn.height = mUnSelectedSignUpBtn.naturalHeight*Ratio;
  mUnSelectedSignUpBtn.style.top = (Ratio*380*2)+"px";
  mUnSelectedSignUpBtn.style.left = (Ratio*994*2)+"px";

  mGoogleBtn.width = mGoogleBtn.naturalWidth*Ratio;
  mGoogleBtn.height = mGoogleBtn.naturalHeight*Ratio;
  mGoogleBtn.style.top = mbg02Img.height-(Ratio*180*2)-mGoogleBtn.height+"px";
  mGoogleBtn.style.left = (Ratio*667*2)+"px";

  mTwitterBtn.width = mTwitterBtn.naturalWidth*Ratio;
  mTwitterBtn.height = mTwitterBtn.naturalHeight*Ratio;
  mTwitterBtn.style.top =mbg02Img.height-(Ratio*180*2)-mTwitterBtn.height+"px";
  mTwitterBtn.style.left = (Ratio*667*2)+mGoogleBtn.width+(Ratio*58*2)+"px";

  mFacebookBtn.width = mFacebookBtn.naturalWidth*Ratio;
  mFacebookBtn.height = mFacebookBtn.naturalHeight*Ratio;
  mFacebookBtn.style.top =mbg02Img.height-(Ratio*180*2)-mFacebookBtn.height+"px";
  mFacebookBtn.style.left = (Ratio*852*2)+"px";

  mSignInBtn.width = mSignInBtn.naturalWidth*Ratio;
  mSignInBtn.height = mSignInBtn.naturalHeight*Ratio;
  mSignInBtn.style.top =(Ratio*865*2)+"px";
  mSignInBtn.style.left = (Ratio*1154*2)+"px";

  mSignUpBtn.width = mSignUpBtn.naturalWidth*Ratio;
  mSignUpBtn.height = mSignUpBtn.naturalHeight*Ratio;
  mSignUpBtn.style.top =(Ratio*865*2)+"px";
  mSignUpBtn.style.left = (Ratio*1154*2)+"px";

  mEmailBox.style.width = 900*Ratio+"px";
  mEmailBox.style.height = 40*Ratio+"px";
  mEmailBox.style.top =(Ratio*615*2)+"px";
  mEmailBox.style.left = (Ratio*765*2)+"px";

  mPwdBox.style.width = 810*Ratio+"px";
  mPwdBox.style.height = 50*Ratio+"px";
  mPwdBox.style.top =(Ratio*729*2)+"px";
  mPwdBox.style.left = (Ratio*809*2)+"px";
  //#mEmailBox,#mPwdBox
  mEmailBox.style.fontSize=(40*Ratio)+"px";
  mPwdBox.style.fontSize=(40*Ratio)+"px";

}

function mSignInBtnClick() {
  mSelectedSignInBtn.style.display="block";
  mUnSelectedSignInBtn.style.display="none";
  mSelectedSignUpBtn.style.display="none";
  mUnSelectedSignUpBtn.style.display="block";
  mSignInBtn.style.display="block";
  mSignUpBtn.style.display="none";
}
function mSignUpBtnClick() {
  mSelectedSignInBtn.style.display="none";
  mUnSelectedSignInBtn.style.display="block";
  mSelectedSignUpBtn.style.display="block";
  mUnSelectedSignUpBtn.style.display="none";
  mSignInBtn.style.display="none";
  mSignUpBtn.style.display="block";
}
function mSignInBtnClick(){
  location.href="main.html";
}
