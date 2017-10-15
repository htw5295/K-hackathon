
<%@page import="com.sun.org.apache.xerces.internal.impl.xpath.regex.ParseException"%>
<%@page import="java.io.IOException"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="java.util.Iterator"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.io.FileReader"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@page import="java.io.File"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset=UTF-8">
		<title>Insert title here</title>
	</head>
	<body>
		<%

		 String root = "/Users/sonjaehyeong/eclipse-workspace/TodamTodam/WebContent/";

		 String savePath=root;
		 	
	
		File dirFile=new File(savePath+"info/");
		File []fileList=dirFile.listFiles();
		for(File tempFile : fileList) {
		  if(tempFile.isFile()) {
 		   String tempPath=tempFile.getParent();
   		 String tempFileName=tempFile.getName();
   		 //System.out.println("Path="+tempPath);
   		out.println("FileName="+tempFileName);
    /*** Do something withd tempPath and temp FileName ^^; ***/
    
    JSONParser parser = new JSONParser();
		 
		try {
	 
			Object obj = parser.parse(new FileReader(tempPath+"/"+tempFileName));
	 
			JSONObject jsonObject = (JSONObject) obj;
	 
			String name = (String) jsonObject.get("name");
			System.out.println(name);
	 
			//long age = (Long) jsonObject.get("age");
			//System.out.println(age);
	 
			// loop array
			//JSONArray msg = (JSONArray) jsonObject.get("messages");
		//	Iterator<String> iterator = msg.iterator();
		//	while (iterator.hasNext()) {
		//		System.out.println(iterator.next());
		//	}
	 
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
    
   		
  }
}
		
		
		
	 
	     


		%>
	</body>
</html>