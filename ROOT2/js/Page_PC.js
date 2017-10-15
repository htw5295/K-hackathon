	/**
 * 아래는 게임종료시 뜨는 모달창부분이다.
 */
function modal_close(){
	document.getElementById("modal_background").style.display="none";
	document.getElementById("modal").style.display="none";	
	console.log("close");
}
function modal_open(){
	document.getElementById("modal_background").style.display="block";
	document.getElementById("modal").style.display="block";	
}
function refresh(){
	location.reload();
}