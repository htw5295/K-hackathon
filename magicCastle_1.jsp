
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
	<audio controls autoplay loop>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/k7cF71Z8zB4?" frameborder="0" allowfullscreen></iframe>

		<source src="../wav/1/1.wav" type="audio/wav"></source>
		<%
			//String root = "/Users/sonjaehyeong/eclipse-workspace/TodamTodam/WebContent/";
			String root = "/dodam/";
			String savePath = root;

			File inFile = new File(savePath + "fairytale", "87763.json");

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
	</audio>


</body>
</html>
