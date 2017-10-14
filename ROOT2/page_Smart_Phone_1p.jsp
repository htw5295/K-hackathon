<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 1인용일때, 아이디를 띄워주고, 스마트폰의 좌표를 보내는 페이지이다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="initial-scale=1.0" />
<title>똥피하기 - 스마트폰 1p</title>
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>

<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/page_Smart_Phone.css">
<link rel="stylesheet" href="./css/page_Smart_Phone_1p.css">
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
	<h2>1인용 조작페이지</h2>
	<p>
		당신의 아이디는 <strong><span id="play_id"></span></strong> 입니다.	
	</p>
	<p><strong>****플레이방법****</strong></p>
	<p>
		<small>1. PC에서 접속해주세요.</small>
	</p>
	<p>
		<small>2. 위의 아이디를 PC화면에 입력해주세요.</small>
	</p>
	<p>
		<small>3. 게임을 즐기시면 됩니다.</small>
	</p>
	<p>
		<small>새로 ID를 발급받고 싶다면 </small><a href="" onclick="./page_Smart_Phone_1p.jsp">여기를 눌러주세요.</a>
	</p>	
	
<!-- 	<div id="result1"></div> -->
<!--	<div id="result2"></div>-->
<!--	데이터 에어리어-->
<!--	<div id="dataArea"></div>-->

</body>
<script type="text/javascript" src="./js/ajax_SmartPhone.js"></script>
</html>
