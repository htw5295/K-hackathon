<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String name = new String(request.getParameter("name").getBytes("8859_1"), "UTF-8"); //한글 이름이 파라미터로 들어왔을때 깨지는것을 막아준다.
		String score = request.getParameter("score");
		StringBuffer buf = new StringBuffer();
		String[][] sort_temp = new String[101][2]; //1위부터 100위까지만 저장하지만, 이번에 들어온 점수를 저장하기위해 101개를 만들어준다.
		String[] tempArray;

		int temp_score = 0;
		int i = 0;
		//랭킹파일을 읽어보고, 없으면 만들어주고 있다면 모두 읽어온다.
		//양식은 이름!!점수 <-로 되어있어서 알맞게 split해준다.
		try {
			FileReader fr = new FileReader(getClass().getResource("/").getPath() + "Ranking.txt");
			BufferedReader br = new BufferedReader(fr);
			String temp;
			while ((temp = br.readLine()) != null) {
				sort_temp[i] = temp.split("!!");
				i++;
			}
			br.close();
			fr.close();
		} catch (IOException e) {
			FileWriter fw = new FileWriter(getClass().getResource("/").getPath() + "Ranking.txt");
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write("");
			bw.close();
			fw.close();
		}
		//파라미터로 받아온 값을 배열에 추가시켜준다.
		sort_temp[i][0] = name;
		sort_temp[i][1] = score;
		i++;

		//소팅하는 부분이다.
		for (int j = 0; j < i; j++) {
			for (int k = j; k < i; k++) {
				if (Integer.parseInt(sort_temp[j][1]) < Integer.parseInt(sort_temp[k][1])) {
					tempArray = sort_temp[j];
					sort_temp[j] = sort_temp[k];
					sort_temp[k] = tempArray;
				}
			}
		}
		//소팅을 완료한것을 양식에 맞춰서 Ranking파일에 적어준다.
		for (int j = 0; j < i && j < 100; j++) {
			buf.append(sort_temp[j][0] + "!!" + sort_temp[j][1] + "\n");
		}
		FileWriter fw = new FileWriter(getClass().getResource("/").getPath() + "Ranking.txt");
		BufferedWriter bw = new BufferedWriter(fw);

		bw.write(buf + "");
		bw.close();
		fw.close();
		
		//액션테그를 통해 게임을 페이지로 이동한다.
	%>
	<jsp:forward page="./page_PC_1p.jsp"></jsp:forward>
</body>
</html>