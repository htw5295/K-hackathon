
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
  <iframe id="fa"width="560" height="315" src="https://www.youtube.com/embed/WJqVpPioTxI" frameborder="0" allowfullscreen></iframe>
	<audio controls="controls">
    <source src="../wav/1/1.wav" type="audio/wav" />
</audio>


<!--<audio controls autoplay loop>-->

		<%
			//String root = "/Users/sonjaehyeong/eclipse-workspace/TodamTodam/WebContent/";
			String root = "/dodam/";
			String savePath = root;

			File inFile = new File(savePath + "fairytale/1/", "1.json");
			String line="TT";
			BufferedReader br = null;

			try {
				br = new BufferedReader(new FileReader(inFile));
				line = br.readLine();
				// while ((line = br.readLine()) != null) {
				// 	line = br.readLine();
				// }
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
		<script type="text/javascript">
			var animel = '<%=line%>';
			var flag=0;
			for(var i=0;i<animel.length;i++){
				if(animel=="사자"){

					flag=1;
				}
			}
			if(flag==1){
				console.log("사자페이지주소로 변경");
				fa.src = "https://www.youtube.com/embed/WJqVpPioTxI";
			}else{
				console.log("토끼페이지로 이동");
				var fa = document.getElementById("fa");
				fa.src = "https://www.youtube.com/embed/eFfb9lmC0K8";


			}


		</script>



</body>
</html>
