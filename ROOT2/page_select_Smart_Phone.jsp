<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 스마트폰버전에서 1인용인지 2인용인지 선택하는 화면이다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>똥피하기 - 스마트폰</title>
<meta name="viewport" content="initial-scale=1.0" />
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>

<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/page_select_Smart_Phone.css">
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
	<div id="layout">
	<h2>Smart Phone</h2>
	<h1>인원을 선택해주세요.</h1><br>
		<a href="./page_Smart_Phone_1p.jsp" class="btn btn-default">1인용</a> 
		<a href="./page_Smart_Phone_2p.jsp" class="btn btn-default">2인용</a>
	</div>
</body>
</html>