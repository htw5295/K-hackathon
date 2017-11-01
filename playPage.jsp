
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
	<link rel="stylesheet" href="./css/design11.css">

	</head>
	<body onload="onload()" onresize="onChangeSize()">
		<img src="./img/11/bg11.png" alt="" id="bg11">
		<img src="./img/11/menuBTN.png" alt="" id="menuBtn" class="positionAbsolute">
		<img src="./img/11/facebookBTN.png" alt="" id="facebookBtn"	class="positionAbsolute">
		<img src="./img/11/googleBTN.png" alt="" id="googleBtn"	class="positionAbsolute">
		<img src="./img/11/loginBTN.png" alt="" id="loginBtn"	class="positionAbsolute" onclick="loginBtnClick()">
		<img src="./img/11/unSelectedFairytaleBTN.png" alt=""	id="unSelectedFairytaleBtn" class="positionAbsolute" onclick="makePage()">
		<img src="./img/11/twitterBTN.png" alt="" id="twitterBtn"	class="positionAbsolute">
		<img src="./img/11/unSelectedDiaryBTN.png" alt=""	id="unSelectedDiaryBtn" class="positionAbsolute" onclick="unSelectedDiaryBTNClick()">
		<img src="./img/11/unSelectedDodamBTN.png" alt=""	id="unSelectedDodamBtn" class="positionAbsolute"	onclick="unSelectedDodamBTNClick()">
		<img src="./img/11/selectedMypageBTN.png" alt=""	id="selectedMypageBtn" class="positionAbsolute"onclick="unSelectedMypageBtnClick()">
		<img src="./img/11/unSelectedShopBTN.png" alt="" id="unSelectedShopBtn"	class="positionAbsolute" onclick="unSelectedShopBTNClick()">
	<!--
	<img src="./img/11/searchBar.png" alt="" id="searchBar"	class="positionAbsolute">
	<img src="./img/11/search.png" alt="" id="search"	class="positionAbsolute">
	-->

		<div class="" id="rFairyTaleDiv">
			<img src="./img/11/rFairyTale01BTN.png" alt="" id="rFairyTale01Btn"
				class="positionAbsolute" style="display: none"
				onclick="onFairyTale1Click()">
				<img src="./img/11/rFairyTale02BTN.png" alt="" id="rFairyTale02Btn"class="positionAbsolute" onclick="onFairyTale2Click()">
				<img src="./img/11/rFairyTale03BTN.png" alt="" id="rFairyTale03Btn"	class="positionAbsolute" onclick="onFairyTale3Click()">
				<img src="./img/11/rFairyTale04BTN.png" alt="" id="rFairyTale04Btn" class="positionAbsolute" onclick="onFairyTale4Click()">
				<img src="./img/11/rFairyTale05BTN.png" alt="" id="rFairyTale05Btn"	class="positionAbsolute" onclick="onFairyTale5Click()">
				<img src="./img/11/rFairyTale06BTN.png" alt="" id="rFairyTale06Btn"	class="positionAbsolute" onclick="onFairyTale6Click()">
				<img	src="./img/11/rDetailFairyTale01BTN.png" alt="" id="rDetailFairyTale01Btn" class="positionAbsolute">
				<img	src="./img/11/rDetailFairyTale02BTN.png" alt="" id="rDetailFairyTale02Btn" class="positionAbsolute"	style="display: none">
				<img	src="./img/11/rDetailFairyTale03BTN.png" alt="" id="rDetailFairyTale03Btn" class="positionAbsolute"	style="display: none">
				<img	src="./img/11/rDetailFairyTale04BTN.png" alt=""	id="rDetailFairyTale04Btn" class="positionAbsolute"	style="display: none">
				<img  src="./img/11/rDetailFairyTale05BTN.png" alt=""	id="rDetailFairyTale05Btn" class="positionAbsolute"	style="display: none">
				<img	src="./img/11/rDetailFairyTale06BTN.png" alt=""	id="rDetailFairyTale06Btn" class="positionAbsolute"	style="display: none">
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
		<img src="./img/11/bgFairyTale01.png" alt="" id="bgFairyTale01Btn"
			class="positionAbsolute">
		<img src="./img/11/bgFairyTale02.png" alt="" id="bgFairyTale02Btn"
			class="positionAbsolute" style="display: none">
		<img src="./img/11/bgFairyTale03.png" alt="" id="bgFairyTale03Btn"
			class="positionAbsolute" style="display: none">
		<img src="./img/11/bgFairyTale04.png" alt="" id="bgFairyTale04Btn"
			class="positionAbsolute" style="display: none">
		<img src="./img/11/bgFairyTale05.png" alt="" id="bgFairyTale05Btn"
			class="positionAbsolute" style="display: none">
		<img src="./img/11/bgFairyTale06.png" alt="" id="bgFairyTale06Btn"
			class="positionAbsolute" style="display: none">

		<div id="mainTitleDiv"class="positionAbsolute">
				<span id="mainTitle"><br>토끼와 거북이</span>
		</div>

		<img src="./img/11/recordedFairyTalePic01.png" alt="" id="recordedFairyTalePic01" class="positionAbsolute">

		<img src="./img/11/recordedFairyTalePic02.png" alt="" id="recordedFairyTalePic02"
			class="positionAbsolute">

		<img src="./img/11/recordedFairyTalePic03.png" alt="" id="recordedFairyTalePic03"
			class="positionAbsolute" onclick="recordedFairyTalePic03()">


			<img src="./img/11/recordedSelected01.png" alt="" id="recordedSelected01" class="positionAbsolute">
			<img src="./img/11/recordedUnSelected02.png" alt="" id="recordedUnSelected02" class="positionAbsolute">
			<img src="./img/11/recordedUnSelected01.png" alt="" id="recordedUnSelected01" class="positionAbsolute">
				<img src="./img/11/fairyTaleStory01.png" id="fairyTaleStory01"  class="positionAbsolute"alt="">
				<img src="./img/11/fairyTaleStory02.png" id="fairyTaleStory02"  class="positionAbsolute"alt="" style="display:none">
				<img src="./img/11/fairyTaleStory03.png" id="fairyTaleStory03"  class="positionAbsolute"alt=""style="display:none">
				<img src="./img/11/fairyTaleStory04.png" id="fairyTaleStory04"  class="positionAbsolute"alt=""style="display:none">
				<img src="./img/11/fairyTaleStory05.png" id="fairyTaleStory05"  class="positionAbsolute"alt=""style="display:none">
				<img src="./img/11/fairyTaleStory06.png" id="fairyTaleStory06"  class="positionAbsolute"alt=""style="display:none">


			<div class="positionAbsolute" id ="fairyTaleCountUnderDiv">
				<span id ="fairyTaleCountUnder">위치테스트
				</span>
			</div>

			<div class="positionAbsolute" id ="playCountDiv">
				<span id ="playCountDiv">2번
				</span>
			</div>

			<div class="positionAbsolute" id ="playHumanDiv">
				<span id ="playHumanDiv">모두선택
				</span>
			</div>
			<img src="./img/11/recordedFairyTalePlayBTN.png" alt="" id="recordedFairyTalePlayBtn" class="positionAbsolute"onclick="recordedFairyTalePlayBtnClick()">

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
	<script type="text/javascript" src="./js/design11.js"></script>
	</html>
