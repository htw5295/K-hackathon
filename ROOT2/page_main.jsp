<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 처음 메인화면이다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta property="og:title" content="Webolution 제출작 똥피하기">
<meta property="og:image" content="./img/ddong_01_30x30.png">
<meta property="og:description" content="똥피하기를 즐겨보세요!"/>


<!-- 모바일 환경 가능하게함 -->
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>

<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/main_page.css">
<title>webolution 똥피하기!</title>
</head>
<body>
	<div class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<a href="./page_main.jsp" class="navbar-brand"><strong>똥</strong>피하기</a>
				<button class="navbar-toggle" type="button" data-toggle="collapse"
					data-target="#navbar-main">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<div class="navbar-collapse collapse" id="navbar-main">
				<ul class="nav navbar-nav">
					<li><a href="./page_Playmethod.jsp">게임방법</a></li>
					<li><a href="./page_ranking.jsp">랭킹</a></li>
				</ul>
				
			</div>
		</div>
	</div>

	<div id="menubar_space"></div>
	<div id="explanation">
		<h1>Webolution 똥피하기</h1>
	</div>
	<div id="explanation">
		<p>기기를 선택해주세요.</p>
	</div>

	<div id="play_button_div">
		<a href="./page_select_Smart_Phone.jsp" class="btn btn-default">Smart
			Phone</a> <a href="./page_select_PC.jsp" class="btn btn-default">PC</a>
	</div>
	<div id="explanation">
		<h2>플레이 방법</h2>
		<p class="text-success">본 게임은 PC와 SmartPhone이 있어야 플레이 할 수 있습니다.</p>
		<p>1. SmartPhone에서 접속시에 나오는 5자리 코드를 기억해주세요.</p>
		<p>
			2. PC에서 접속 후 <strong>5자리 코드</strong>를 입력하시면 됩니다.
		</p>

	</div>
	<div id="explanation">
		<span class="label label-success">똥피하기</span> <span
			class="label label-primary">Webolution</span> <span
			class="label label-warning">중독 주의</span> <span
			class="label label-danger">꿀잼</span>
	</div>
</body>
</html>
