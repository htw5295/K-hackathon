/**
 * 
 */
//랭킹입력화면에서, 이름을 입력하면, 그에따라 href를 바꾸어 파라미터로 넘겨주는 부분이다.
function change_name(){
	if(document.getElementById("name").value==""){
		alert("이름을 입력해주세요.");
		document.getElementById("save").setAttribute("href","#");
		document.getElementById("save_again").setAttribute("href","#");

	}else{
		document.getElementById("save").setAttribute("href","Ranking_save.jsp?name="+document.getElementById("name").value+"&score="+score);
		document.getElementById("save_again").setAttribute("href","Ranking_save_again.jsp?name="+document.getElementById("name").value+"&score="+score);

	}
	
}
