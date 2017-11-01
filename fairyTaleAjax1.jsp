<%@page import="java.util.Random"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="java.io.*"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@page import="org.json.simple.*"%>


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
	String savePath = root;

	Random random = new Random();
	String filename = String.valueOf(random.nextInt(100000));

	String test = request.getParameter("x");
	JSONParser parser = new JSONParser();
	System.out.println(test);
	Object obj = parser.parse(test);

	System.out.println(obj);




	try {

	//  String command = "ls -al";  // <---- 실행할 쉘명령어
	//  Runtime rt = Runtime.getRuntime();
	//  Process ps = null;
	 //
	//  ps = rt.exec(command);				Runtime.getRuntime().exec("sudo chmod 777 -R /dodam/");

		File file3 = new File(savePath + "/fairytale/1/1.json");
		File file4 = new File(savePath + "/fairytale/1/2.json"); //음성

		if (!file3.renameTo(file4)) {
			System.err.println("이름 변경 에러 : ");
		}

		FileWriter file = new FileWriter(savePath + "/fairytale/1/1.json"); //동화
		file.write(obj.toString());
		file.flush();
		file.close();

	} catch (IOException e) {
		e.printStackTrace();
	}

// Runtime.getRuntime().exec("sudo chmod 777 -R /dodam/");
//
// 	File file1 = new File(savePath + "/wav/1/blob");
// 	File file2 = new File(savePath + "/wav/1/" + filename + ".wav"); //음성
//
// 	if (!file1.renameTo(file2)) {
// 		System.err.println("이름 변경 에러 : " + file1);
// 	}

	JSONObject obj2 = new JSONObject();
	obj2.put("name", "mkyong.com");

	try {

		File file5 = new File(savePath + "/info/1/1.json");
		File file6 = new File(savePath + "/info/1/2.json"); //음성

		if (!file5.renameTo(file6)) {
			System.err.println("이름 변경 에러 : ");
		}

		FileWriter file = new FileWriter(savePath + "/info/1/1.json"); //파일정보
		file.write(obj2.toJSONString());
		file.flush();
		file.close();

	} catch (IOException e) {
		e.printStackTrace();
	}
%>
