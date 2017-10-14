/**
 * 아래의 코드는 ajax를 이용하여 100ms마다 데이터를 서버와 주고받는 코드이다. 
 */


var x = 0;
var x2=0;
var y=0;
var y2=0;
//세션에서 id값을 가져온다.
var random_id=sessionStorage.getItem('id'); 
var random_id2=sessionStorage.getItem('id2');
var id;
var id2;
if(random_id==null||random_id==""||random_id=="null"||random_id2==null||random_id2==""||random_id2=="null"){
	random_id= prompt("SmartPhone의 5자리이하의 수를 입력해주세요. (Player1)");	// 사용자로부터 ID코드를 입력받는 부분
	random_id2= prompt("SmartPhone의 5자리이하의 수를 입력해주세요. (Player2)");	// 사용자로부터 ID코드를 입력받는 부분
	sessionStorage.setItem('id',random_id);	//세션스토리지에 저장해준다.
	sessionStorage.setItem('id2',random_id2);
	if( random_id==null ||random_id==""||random_id2==null ||random_id2==""){	//값이 비어있거나 한경우
		alert("코드를 다시 확인 후 접속해주세요.");
		location.href="./page_select_PC.jsp";	
	}
	
}
 

//ajax를통해 해당 ID값을 재대로 받아오는지 확인을 한다.
//확인을 하고 정상적인 값을 받아온다면, Interval을통해 데이터를 주고받는다.
$(document).ready(function(){
    $.ajax({     
        type : "GET",
        url : "ajax_communication.jsp?",
        data : {x: 0, id:random_id, identity: "2"},	//스마트폰일경우 0 PC일경우 1, PC2인용일경우 2
        error : function(){
        },
        success : function(data){
      	  if(data=="false"){
      		  clearInterval(id2);
      		  clearInterval(id);
      		  alert("Player1 코드를 다시 확인 후 접속해주세요.");
      		  sessionStorage.setItem('id',"null");
      		  location.href="./page_select_PC.jsp";
      		  
      	  }else{
      		id = setInterval(frame, 10); 
      	  }
        }	
    });   

	});
//ajax를통해 해당 ID값을 재대로 받아오는지 확인을 한다.
//확인을 하고 정상적인 값을 받아온다면, Interval을통해 데이터를 주고받는다.
$(document).ready(function(){
    $.ajax({     
        type : "GET",
        url : "ajax_communication.jsp?",
        data : {x: 0, id:random_id2, identity: "2"},	//스마트폰일경우 0 PC일경우 1, x=스마트폰의 x좌표, id는 입력한 id
        error : function(){
        },
        success : function(data){
      	  if(data=="false"){
      		  clearInterval(id);
      		  clearInterval(id2);
      		  alert("Player2 코드를 다시 확인 후 접속해주세요.");
      		  sessionStorage.setItem('id2',"null");
      		  location.href="./page_select_PC.jsp";
      		  
      	  }else{
      		id2 = setInterval(frame2, 10);
      	  }
        }	
    });   

	});




//ajax를 통해 플레이어 1의 x,y좌표를 받아오는 부분이다.
function frame() {

	  $(document).ready(function(){
	      $.ajax({     
	          type : "GET",
	          url : "ajax_communication.jsp?",
	          data : {x: 0, id:random_id, identity: "2"},	//스마트폰일경우 0 PC일경우 1, x=스마트폰의 x좌표, id는 입력한 id
	          error : function(){
	          },
	          success : function(data){
	        	  if(data=="false"){
	        		  clearInterval(id2);
	        		  clearInterval(id);
	        		  alert("Player1 코드를 다시 확인 후 접속해주세요.");
	        		  sessionStorage.setItem('id',"null");
	        		  location.href="./page_select_PC.jsp";
	        		  
	        	  }else{
	        		  var sprit;
	        		  sprit=data.split('!');
	        		  x=sprit[0];
	        		  y=sprit[1];
	        	  }
	          }	
	      });   

	  	});
	  }

//ajax를 통해 플레이어 2의 x,y좌표를 받아오는 부분이다.
function frame2() {

	  $(document).ready(function(){
	      $.ajax({     
	          type : "GET",
	          url : "ajax_communication.jsp?",
	          data : {x: 0, id:random_id2, identity: "2"},	//스마트폰일경우 0 PC일경우 1, x=스마트폰의 x좌표, id는 입력한 id
	          error : function(){
	          },
	          success : function(data){
	        	  if(data=="false"){
	        		  clearInterval(id);
	        		  clearInterval(id2);
	        		  alert("Player2 코드를 다시 확인 후 접속해주세요.");
	        		  sessionStorage.setItem('id2',"null");
	        		  location.href="./page_select_PC.jsp";
	        		  
	        	  }else{
	        		  var sprit;
	        		  sprit=data.split('!');
	        		  x2=sprit[0];
	        		  y2=sprit[1];
	        	  }
	          }	
	      });   

	  	});
	  }

function reset_idnum(){
	sessionStorage.id='null';
	sessionStorage.id2='null';
}