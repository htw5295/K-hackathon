<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 1인용일때, 게임화면을 보여주는 화면이다. 액션테그를 이용하여 game의 jsp를 가져오도록 하였다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 모바일 환경 가능하게함 -->
<title>똥피하기 - PC 1p</title>
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<!--  -->
<script type="text/javascript" src="./js/ajax_PC&Game.js"></script>
<script type="text/javascript" src="./js/Page_PC.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>

<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/PC_Page.css">
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

	<jsp:include page="./Game_main.jsp" flush="true" />
	<script type="text/javascript">
		alert("아래의 '확인' 버튼을 누르면 게임이 시작됩니다.")
	</script>

	<div id="modal_background"></div>
	<div id="modal" onclick="modal_close()">
		<div id="modal_Layout" onclick="modal_close()"></div>
		<div id="score_left_layout" onclick="modal_close()"></div>
		<div id=score onclick="modal_close()"></div>
		<div>
			<br>
			<div id="ranking_layout"></div>
			<a href="#" id="score_submit_btn" class="btn btn-primary">점수등록</a><a
				href="#" onclick="refresh()" class="btn btn-primary">다시하기</a>
		</div>
	</div>
	<a href="./page_select_PC.jsp" class="btn btn-default btn-lg btn-block"
		id="reset_button" onclick="sessionStorage.id='null';">Block level
		button</a>
	<script type="text/javascript">
		document.getElementById("reset_button").innerHTML = "당신의 ID는 "
				+ sessionStorage.id + "입니다. 변경을 원하시면 본 버튼을 눌러주세요."
	</script>
	<br>

</body>

</html>