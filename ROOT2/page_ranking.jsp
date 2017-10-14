<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<!-- 게임랭킹을 보여줄 화면이다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>똥피하기 - 랭킹</title>
<!-- 랭킹 순위를 보여주는 페이지이다. -->
<meta name="viewport" content="initial-scale=1.0" />
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>

<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/page_ranking.css">
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
	<%
	String[] tempArray;	//랭킹을 보여주기위해사용하는 임시변순
	try{
		FileReader fr = new FileReader(getClass().getResource("/").getPath() + "Ranking.txt");	//랭킹파일을 읽어온다
		BufferedReader br = new BufferedReader(fr);
		br.close();
		fr.close();
	}catch(IOException e){
		FileWriter fw = new FileWriter(getClass().getResource("/").getPath() + "Ranking.txt");	//랭킹파일이 없다면 만들어준다.
		BufferedWriter bw = new BufferedWriter(fw);
		bw.write("");
		bw.close();
		fw.close();
	}
	StringBuffer buf = new StringBuffer();
	FileReader fr = new FileReader(getClass().getResource("/").getPath() + "Ranking.txt");	//랭킹파일을 읽어온다.
	BufferedReader br = new BufferedReader(fr);
	String temp;
	//int i=0;
	%>
	<h1>순위는 100위까지 제공됩니다.</h1>
	<table class="table table-striped table-hover ">
  <thead>
    <tr>
      <th>순위</th>
      <th>이름</th>
      <th>점수</th>
    </tr>
  </thead>
  <tbody>
 	<% 
	int i=0;
	while((temp=br.readLine())!=null){
		i++;
		//파일의 저장이 이름!!점수\n <-와같은 형식으로 되어있다. 그렇기때문에 !!로 쪼개준다.
		tempArray=temp.split("!!");
		
		//1등부터 3위까지는 강조해서 표시해준다.
		if(i==1){		
			out.println("<tr class='danger'>");
		}else if(i==2){
			out.println("<tr class='warning'>");
		}else if(i==3){
			out.println("<tr class='success'>");
		}else{
			out.println("<tr>");
		}
		
		out.println("<td>"+i+"</td>");
		out.println("<td>"+tempArray[0]+"</td>");
		out.println("<td>"+tempArray[1]+"</td>");
		out.println("</tr>");
		//i++;
	}
	%>
	  </tbody>
</table> 
	<%
//FileReader fw = new FileReader(getClass().getResource("/").getPath() +"\\Ranking\\rank.txt"); // 상대주소 경로 가능 //HW1/WebContent/WEB-INF/classes/에 저장
//BufferedReader bw = new BufferedReader(fw);
//	System.out.println(getClass().getResource("/").getPath());
//String number = bw.readLine();
%>
</body>
</html>