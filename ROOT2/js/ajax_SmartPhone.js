/**
 * 아래의 코드는 스마트폰에서의 부분으로서, 1~100000사이의 랜덤한 ID값을 부여하고 서버로 x좌표를 100ms마다 
 * 서버로 전송해주는 코드이다.
 */


/**
 * 아래의 이벤트리스너부분은 HTML5부터 지원하는 핸드폰의 센서를 가져오는 부분이다.
 */
var x = 0;
var y=0;
var random_id = Math.floor(Math.random() * 100000);
play_id.innerHTML = random_id;

window.addEventListener("devicemotion", function(event1) {
	x = Math.round(event1.accelerationIncludingGravity.x * 10) / 10;
	y = event1.accelerationIncludingGravity.y;
}, true);

/**
 * 아래의 코드는 스마트폰에서의 부분으로서, 1~100000사이의 랜덤한 ID값을 부여하고 서버로 x좌표를 100ms마다 
 * 서버로 전송해주는 코드이다.
 */
var id = setInterval(frame, 100);

function frame() {
	$(document).ready(function() {

		$.ajax({
			type : "GET",
			url : "ajax_communication.jsp?",
			data : {
				x : x,
				id : random_id,
				identity : "0", //스마트폰일경우"0", 1인용 PC일경우 "1", 2인용 PC일경우 "2"
				y : y
			},
			error : function() {

			},
			success : function(data) {

			}
		});

	});
}