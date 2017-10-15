<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.io.PrintWriter"%>
<%@ page import="java.io.*"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<body>
	<%
		/*
			아래의 부분은 pc와 스마트폰이 연결하도록위해 jsp서버에 중간에서 text파일을 기준으로 통신을 하게된다.
			스마트폰은 x좌표를 전달해야하기때문에 writer로 txt파일을 작성해주고,
			PC는 작성한 파일을 계속 읽어서 갱신한다.
		*/

		String Phone_x = "";
		String phone_y = "";
		int id = Integer.parseInt(request.getParameter("id")); //같은 id끼리 게임할수있도록하기위해 id를 받아온다.

		if (request.getParameter("identity").equals("1")) { //PC의 ajax부분( 1인용일경우 )
			PrintWriter writer = response.getWriter();
			try {
				FileReader fw = new FileReader(getClass().getResource("/").getPath() + id + ".txt");
				BufferedReader bw = new BufferedReader(fw);
				String number = bw.readLine();
				bw.close();
				writer.print(number);	//1인용은 x좌표만 필요하기에 x좌표만을 보내준다.
				writer.flush();
				writer.close();
			} catch (IOException ex) {	//파일 열기에 실패했을경우
				writer.print(false);	
				writer.flush();
				writer.close();
			}
		} else if (request.getParameter("identity").equals("0")) { //SmartPhone일경우 (x좌표와 y좌표 수신)

			Phone_x = request.getParameter("x");
			phone_y = request.getParameter("y");
			PrintWriter writer = response.getWriter();

			FileWriter fw = new FileWriter(getClass().getResource("/").getPath() + id + ".txt");	//파일에 저장
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(Phone_x + "\n" + phone_y);

			bw.close();

			writer.print(phone_y);
			writer.flush();
			writer.close();
		} else {	//PC의 ajax부분( 2인용일경우 )
			PrintWriter writer = response.getWriter();
			try {
				FileReader fw = new FileReader(getClass().getResource("/").getPath() + id + ".txt");
				BufferedReader bw = new BufferedReader(fw);

				String number = bw.readLine();
				String y = bw.readLine();
				bw.close();

				writer.print(number + "!" + y);
				writer.flush();
				writer.close();
			} catch (IOException ex) {

				writer.print(false);
				writer.flush();
				writer.close();
			}
		}
	%>
</body>
</body>
</html>