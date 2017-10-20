
<%@page
	import="com.sun.org.apache.xerces.internal.impl.xpath.regex.ParseException"%>
<%@page import="java.io.IOException"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="java.util.Iterator"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.io.FileReader"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@page import="java.io.File"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<style>
	@font-face {
		font-famliy: 'nbg';
		src: url('./font/NanumBarunGothic.ttf');
	}
	.fairyTaleName, .fairyTaleCount {
		font-family: nbg;
	}
</style>
<head>
<meta charset="utf-8">
<title>Dodam Doam</title>
<link rel="stylesheet" href="./css/design7.css">
<script type="text/javascript" src="./js/design7.js"></script>
</head>
<body onload="onload()" onresize="onChangeSize()">
	<img src="./img/07/bg07.png" alt="" id="bg07">
	<img src="./img/07/menuBTN.png" alt="" id="menuBtn"
		class="positionAbsolute">
	<img src="./img/07/facebookBTN.png" alt="" id="facebookBtn"
		class="positionAbsolute">
	<img src="./img/07/googleBTN.png" alt="" id="googleBtn"
		class="positionAbsolute">
	<img src="./img/07/loginBTN.png" alt="" id="loginBtn"
		class="positionAbsolute">
	<img src="./img/07/selectedFairytaleBTN.png" alt=""
		id="selectedFairytaleBtn" class="positionAbsolute">
	<img src="./img/07/twitterBTN.png" alt="" id="twitterBtn"
		class="positionAbsolute">
	<img src="./img/07/unSelectedDiaryBTN.png" alt=""
		id="unSelectedDiaryBtn" class="positionAbsolute"
		onclick="unSelectedDiaryBTNClick()">
	<img src="./img/07/unSelectedDodamBTN.png" alt=""
		id="unSelectedDodamBtn" class="positionAbsolute"
		onclick="unSelectedDodamBTNClick()">
	<img src="./img/07/unSelectedMypageBTN.png" alt=""
		id="unSelectedMypageBtn" class="positionAbsolute"onclick="unSelectedMypageBtnClick()">
	<img src="./img/07/unSelectedShopBTN.png" alt="" id="unSelectedShopBtn"
		class="positionAbsolute" onclick="unSelectedShopBTNClick()">

	<img src="./img/07/searchBar.png" alt="" id="searchBar"
		class="positionAbsolute">
	<img src="./img/07/search.png" alt="" id="search"
		class="positionAbsolute">

	<div class="" id="rFairyTaleDiv">
		<img src="./img/07/rFairyTale01BTN.png" alt="" id="rFairyTale01Btn"
			class="positionAbsolute" style="display: none"
			onclick="onFairyTale1Click()"> <img
			src="./img/07/rFairyTale02BTN.png" alt="" id="rFairyTale02Btn"
			class="positionAbsolute" onclick="onFairyTale2Click()"> <img
			src="./img/07/rFairyTale03BTN.png" alt="" id="rFairyTale03Btn"
			class="positionAbsolute" onclick="onFairyTale3Click()"> <img
			src="./img/07/rFairyTale04BTN.png" alt="" id="rFairyTale04Btn"
			class="positionAbsolute" onclick="onFairyTale4Click()"> <img
			src="./img/07/rFairyTale05BTN.png" alt="" id="rFairyTale05Btn"
			class="positionAbsolute" onclick="onFairyTale5Click()"> <img
			src="./img/07/rFairyTale06BTN.png" alt="" id="rFairyTale06Btn"
			class="positionAbsolute" onclick="onFairyTale6Click()"> <img
			src="./img/07/rDetailFairyTale01BTN.png" alt=""
			id="rDetailFairyTale01Btn" class="positionAbsolute"> <img
			src="./img/07/rDetailFairyTale02BTN.png" alt=""
			id="rDetailFairyTale02Btn" class="positionAbsolute"
			style="display: none"> <img
			src="./img/07/rDetailFairyTale03BTN.png" alt=""
			id="rDetailFairyTale03Btn" class="positionAbsolute"
			style="display: none"> <img
			src="./img/07/rDetailFairyTale04BTN.png" alt=""
			id="rDetailFairyTale04Btn" class="positionAbsolute"
			style="display: none"> <img
			src="./img/07/rDetailFairyTale05BTN.png" alt=""
			id="rDetailFairyTale05Btn" class="positionAbsolute"
			style="display: none"> <img
			src="./img/07/rDetailFairyTale06BTN.png" alt=""
			id="rDetailFairyTale06Btn" class="positionAbsolute"
			style="display: none">
		<div id="fairyTale1count" class="fairyTaleCount">
			<span id="fairyTaleCount1Text">1개의 녹음파일</span>
		</div>
		<div id="fairyTale2count" class="fairyTaleCount" style="display: none">
			<span id="fairyTaleCount2Text">1개의 녹음파일</span>
		</div>
		<div id="fairyTale3count" class="fairyTaleCount" style="display: none">
			<span id="fairyTaleCount3Text">1개의 녹음파일</span>
		</div>
		<div id="fairyTale4count" class="fairyTaleCount" style="display: none">
			<span id="fairyTaleCount4Text">1개의 녹음파일</span>
		</div>
		<div id="fairyTale5count" class="fairyTaleCount" style="display: none">
			<span id="fairyTaleCount5Text">1개의 녹음파일</span>
		</div>
		<div id="fairyTale6count" class="fairyTaleCount" style="display: none">
			<span id="fairyTaleCount6Text">1개의 녹음파일</span>
		</div>
	</div>

	<img src="./img/07/emptyCard.png" alt="" id="emptyCard"
		class="positionAbsolute">
	<img src="./img/07/recordingBTN.png" alt="" id="recordingBtn"
		class="positionAbsolute" onclick="recordingBtn1Click()">
	<img src="./img/07/bigFairyTale01BTN.png" alt="" id="bigFairyTale01Btn"
		class="positionAbsolute">
	<img src="./img/07/bigFairyTale02BTN.png" alt="" id="bigFairyTale02Btn"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/bigFairyTale03BTN.png" alt="" id="bigFairyTale03Btn"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/bigFairyTale04BTN.png" alt="" id="bigFairyTale04Btn"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/bigFairyTale05BTN.png" alt="" id="bigFairyTale05Btn"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/bigFairyTale06BTN.png" alt="" id="bigFairyTale06Btn"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/storyFairyTale01.png" alt="" id="storyFairyTale01"
		class="positionAbsolute">
	<img src="./img/07/storyFairyTale02.png" alt="" id="storyFairyTale02"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/storyFairyTale03.png" alt="" id="storyFairyTale03"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/storyFairyTale04.png" alt="" id="storyFairyTale04"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/storyFairyTale05.png" alt="" id="storyFairyTale05"
		class="positionAbsolute" style="display: none">
	<img src="./img/07/storyFairyTale06.png" alt="" id="storyFairyTale06"
		class="positionAbsolute" style="display: none">

	<img src="./img/07/nextFariyTaleLeftBTN.png" alt=""
		id="nextFariyTaleLeftBtn" class="positionAbsolute"
		onclick="nextFariyTaleLeftBtnClick()">
	<img src="./img/07/nextFariyTaleRightBTN.png" alt=""
		id="nextFariyTaleRightBtn" class="positionAbsolute"
		onclick="nextFariyTaleRightBtnClick()">


	<div id="fairyTaleCountUnderDiv" class="fairyTaleCount">
		<span id="fairyTaleCountUnder">1개의 녹음파일</span>
	</div>
	<div id="fairyTaleName1Div" class="fairyTaleName">
		<span id="fairyTale1Name">토끼와 거북이</span>
	</div>
	<div id="fairyTaleName2Div" class="fairyTaleName" style="display: none">
		<span id="fairyTale2Name">Magic Castle 마법의성</span>
	</div>
	<div id="fairyTaleName3Div" class="fairyTaleName" style="display: none">
		<span id="fairyTale3Name">장난감 파티</span>
	</div>
	<div id="fairyTaleName4Div" class="fairyTaleName" style="display: none">
		<span id="fairyTale4Name">바다 여행</span>
	</div>
	<div id="fairyTaleName5Div" class="fairyTaleName" style="display: none">
		<span id="fairyTale5Name">두더지의 여행</span>
	</div>
	<div id="fairyTaleName6Div" class="fairyTaleName" style="display: none">
		<span id="fairyTale6Name">도형의 비밀</span>
	</div>
	<%
		// String root = "/Users/sonjaehyeong/eclipse-workspace/TodamTodam/WebContent/";
  		String root = "/dodam/";
		String savePath = root;
		int count=0;

		File dirFile = new File(savePath + "info/1/");

		File[] fileList = dirFile.listFiles();
		for (File tempFile : fileList) {
			if (tempFile.isFile()) {
				count++;
			}
		}
		%>
	<script>
	var temp = <%=count%>;
			if(temp==0){
				document.getElementById("fairyTaleCount1Text").innerHTML = "녹음파일 없음";
					}else{
						document.getElementById("fairyTaleCount1Text").innerHTML = <%=count%>+"개의 녹음파일";
					}
			fairyTaleCountUnder.innerHTML = fairyTaleCount1Text.innerHTML;
			</script>
	<%

		count=0;

		dirFile = new File(savePath + "info/2/");

		fileList = dirFile.listFiles();
		for (File tempFile : fileList) {
			if (tempFile.isFile()) {
				count++;
			}
		}
		%>
	<script>
	var temp = <%=count%>;
			if(temp==0){
				document.getElementById("fairyTaleCount2Text").innerHTML = "녹음파일 없음";
					}else{
						document.getElementById("fairyTaleCount2Text").innerHTML = <%=count%>+"개의 녹음파일";
					}

			</script>
	<%

	count=0;

	dirFile = new File(savePath + "info/3/");

	fileList = dirFile.listFiles();
	for (File tempFile : fileList) {
		if (tempFile.isFile()) {
			count++;
		}
	}
	%>
<script>
var temp = <%=count%>;
		if(temp==0){
			document.getElementById("fairyTaleCount3Text").innerHTML = "녹음파일 없음";
				}else{
					document.getElementById("fairyTaleCount3Text").innerHTML = <%=count%>+"개의 녹음파일";
				}

		</script>
<%
count=0;

dirFile = new File(savePath + "info/4/");

fileList = dirFile.listFiles();
for (File tempFile : fileList) {
	if (tempFile.isFile()) {
		count++;
	}
}
%>
<script>
var temp = <%=count%>;
	if(temp==0){
		document.getElementById("fairyTaleCount4Text").innerHTML = "녹음파일 없음";
			}else{
				document.getElementById("fairyTaleCount4Text").innerHTML = <%=count%>+"개의 녹음파일";
			}

	</script>
<%

count=0;

dirFile = new File(savePath + "info/5/");

fileList = dirFile.listFiles();
for (File tempFile : fileList) {
	if (tempFile.isFile()) {
		count++;
	}
}
%>
<script>
var temp = <%=count%>;
	if(temp==0){
		document.getElementById("fairyTaleCount5Text").innerHTML = "녹음파일 없음";
			}else{
				document.getElementById("fairyTaleCount5Text").innerHTML = <%=count%>+"개의 녹음파일";
			}

	</script>
<%
count=0;

dirFile = new File(savePath + "info/6/");

fileList = dirFile.listFiles();
for (File tempFile : fileList) {
	if (tempFile.isFile()) {
		count++;
	}
}
%>
<script>
var temp = <%=count%>;
	if(temp==0){
		document.getElementById("fairyTaleCount6Text").innerHTML = "녹음파일 없음";
			}else{
				document.getElementById("fairyTaleCount6Text").innerHTML = <%=count%>+"개의 녹음파일";
			}

	</script>
<%
	%>
</body>
</html>

</html>
