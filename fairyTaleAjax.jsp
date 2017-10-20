<%@page import="java.util.Random"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<%@page import="com.oreilly.servlet.MultipartRequest" %>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy" %>
<%@page import="java.io.*" %>
<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat" %>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@page import="org.json.simple.*" %>


<%
    request.setCharacterEncoding("UTF-8");
	response.setContentType("text/html; charset=utf-8");
//	String root = request.getSession().getServletContext().getRealPath("/");
//	String savePath = root + "upload";

		//String root = "/Users/sonjaehyeong/eclipse-workspace/TodamTodam/WebContent/";
		String root = "/dodam/";
		System.out.println(root);
    // 파일 저장 경로(ex : /home/tour/web/ROOT/upload)
  //  String savePath = root + "upload";
 	String savePath=root;

	 Random random = new Random();
	 String filename=String.valueOf(random.nextInt(100000));




	String test = request.getParameter("x");
	JSONParser parser = new JSONParser();
	System.out.println(test);
	Object obj = parser.parse(test);

	System.out.println(obj);


	try {

		FileWriter file = new FileWriter(savePath+"/fairytale/"+filename+".json");		//동화
		file.write(obj.toString());
		file.flush();
		file.close();

	} catch (IOException e) {
		e.printStackTrace();
	}

	

	File file1 = new File(savePath+"/wav/blob");
    File file2 = new File(savePath+"/wav/"+filename+".wav");									//음성

    if (!file1.renameTo(file2)) {
      System.err.println("이름 변경 에러 : " + file1);
    }

    JSONObject obj2 = new JSONObject();
	obj2.put("name", "mkyong.com");

	try {

		FileWriter file = new FileWriter(savePath+"/info/"+filename+".json");					//파일정보
		file.write(obj2.toJSONString());
		file.flush();
		file.close();

	} catch (IOException e) {
		e.printStackTrace();
	}




%>
