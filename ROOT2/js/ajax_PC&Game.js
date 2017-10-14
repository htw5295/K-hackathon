/**
 * 아래의 코드는 ajax를 이용하여 100ms마다 데이터를 서버와 주고받는 코드이다. 
 */
var x = 0;
//세션에서 id값을 가져온다.
var random_id=sessionStorage.getItem('id'); 	
var id;
//렌덤한 값이 유효한지 확인을 한다.
if(random_id==null||random_id==""||random_id=="null"){
	random_id= prompt("SmartPhone의 5자리이하의 수를 입력해주세요.");	// 사용자로부터 ID코드를 입력받는 부분
	sessionStorage.setItem('id',random_id);
	if( random_id==null ||random_id==""){
		alert("코드를 다시 확인 후 접속해주세요.");
		history.back();	
	}
}
//ajax를 통해 100ms마다 값을 갱신한다.
id = setInterval(frame, 100); 

function frame() {
  $(document).ready(function(){
      $.ajax({     
          type : "GET",
          url : "ajax_communication.jsp?",
          data : {x: 0, id:random_id, identity: "1"},	//스마트폰일경우 0 PC일경우 1, x=스마트폰의 x좌표, id는 입력한 id
          error : function(){
          },
          success : function(data){
        	  if(data=="false"){
        		  clearInterval(id);
        		  alert("코드를 다시 확인 후 접속해주세요.");
        		  sessionStorage.setItem('id',"null");
        		  history.back();
        		  
        	  }else{
        		  x=data;
        	  }
          }	
      });   

  	});
  }