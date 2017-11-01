
<%@page import="java.io.IOException"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="java.io.File"%>
<%@page import="java.io.FileReader"%>
<%@page import="java.io.BufferedReader"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/DSoWS81e1Qw" frameborder="0" allowfullscreen></iframe>
	<audio controls="controls">
    <source src="../wav/1/1.wav" type="audio/wav" />
</audio>



<!--<audio controls autoplay loop>-->
		<%
			//String root = "/Users/sonjaehyeong/eclipse-workspace/TodamTodam/WebContent/";
			String root = "/dodam/";
			String savePath = root;

			File inFile = new File(savePath + "fairytale", "1.json");

			BufferedReader br = null;
			try {
				br = new BufferedReader(new FileReader(inFile));
				String line;
				while ((line = br.readLine()) != null) {
					System.out.println(line);
				}
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				if (br != null)
					try {
						br.close();
					} catch (IOException e) {
					}
			}
		%>



</body>
</html>
