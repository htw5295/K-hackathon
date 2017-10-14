<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 렝킹을 저장하는 페이지이다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 모바일 환경 가능하게함 -->
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/Ranking_Submit.js"></script>

<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/main_page.css">
<title>재형이의 똥피하기!</title>
</head>
<body>
	<%
		int score = Integer.parseInt(request.getParameter("score"));	//파라미터로 받아온 score를 가져온다.
	%>
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
		<h1>랭킹등록 페이지</h1>
	</div>
	<div>
		<script>
			score =
		<%=score%></script>
		<h2>
			당신의 점수는
			<%=score%>
			점입니다.
		</h2>
		<br>
		<form class="form-horizontal">
			<fieldset>
				<legend>정보입력</legend>
				<div class="form-group">
					<label for="inputEmail" class="col-lg-2 control-label">이름(영어로 입력해주세요)</label>
					<div class="col-lg-10">
						<input id="name" type="text" class="form-control" id="inputEmail"
							placeholder="이름을입력해주세요." onchange="change_name()">
					</div>
				</div>
				<a id="save" href="#" class="btn btn-primary">저장하고 메인페이지로</a> <a 
					href="./page_main.jsp" class="btn btn-default">저장하지 않고 메인페이지로</a> <a
					id="save_again" href="#" class="btn btn-danger">저장하고 한판더하기</a> <a
					href="./page_PC_1p.jsp" class="btn btn-warning">저장하지않고 한판더하기</a>
			</fieldset>
		</form>
	</div>


</body>
</html>
