<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<!-- <script type="text/javascript" src="./js/ajax_PC&Game_2.js"></script> -->
<script type="text/javascript" src="./js/phaser.min.js" charset="utf-8"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<link rel="stylesheet" href="./css/bootstrap.min.css">
</head>
<body>
	<script type="text/javascript">
		//2인용 게임부분이다. 
		//HTML5 오픈 api인 phaser.js를 이용하여 제작하였다.
		var game = new Phaser.Game(1000, 600, Phaser.CANVAS, null, { //게임크기설정
			preload : preload,
			create : create,
			update : update
		});
		var ddong;
		var ddongAlive;
		var ddongArray = [];
		var playerLife = 9;
		var playerLife2 = 9;
		var time = 0;

		var textlife;
		var textlife2;
		var eventlife;

		var game_flag = 0;

		var player1_y_temp = 0;
		var player2_y_temp = 0;

		var player1_flag = 0;
		var player2_flag = 0;

		//점프를 위한 변수(가속도를의미)
		var player1_acc = 0;
		var player2_acc = 0;

		function preload() {
			// 아래의 부분은 이미지를 불러오는 부분이다.
			game.load.spritesheet("player", "./img/player_ani.png", 32, 40);
			game.load.spritesheet("player2", "./img/player2_ani.png", 32, 40);
			game.load.image("ddong", "./img/ddong_01_30x30.png");
			game.load.image("wall", "./img/layout.png");
			game.load.image("sky", "./img/sky.png");
			game.load.image("bottom", "./img/bottom.png");

		}

		function create() {
			// 게임 처음 실행시 수행되는 함수이다.
			game.physics.startSystem(Phaser.Physics.ARCADE); // 게임 속성 설정
			game.stage.backgroundColor = "#FFFFFF"; // 게임 배경색 설청
			wall = game.add.group(); // 테두리가 될 wall 그룹을 만든다.
			wall.enableBody = true; // 벽과 player가 충돌할 수 있도록 충돌속성을 켜준다.

			sky = game.add.group(); //하늘이될 sky그룹생성
			sky.enableBody = true;

			bottom = game.add.group();
			bottom.enableBody = true;

			for (var i = 0; i < 25; i++) {
				var row_sky = sky.create(i * 40, -30, "sky");
				row_sky.body.immovable = true;
				var row_bottom = bottom.create(i * 40, 590, "bottom");
				row_bottom.body.immovable = true; // wall가 움직이지 못하도록 설정합니다.
			}

			for (var j = 0; j < 15; j++) { //벽을 만들어준다.
				var colwall = wall.create(0 - 30, j * 40, "wall");
				colwall.body.immovable = true;
				colwall = wall.create(1000 - 10, j * 40, "wall");
				colwall.body.immovable = true;
			}
			player = game.add.sprite(400, 600 - 40, "player");
			player2 = game.add.sprite(600, 600 - 40, "player2");
			game.physics.arcade.enable(player);
			game.physics.arcade.enable(player2);

			//좌 우 애니메이션을 지정해준다.
			player.animations.add("left", [ 0, 1, 2 ], 10, true);
			player.animations.add("right", [ 4, 5, 6 ], 10, true);
			player2.animations.add("left", [ 0, 1, 2 ], 10, true);
			player2.animations.add("right", [ 4, 5, 6 ], 10, true);
			 //똥그룹을 설정해준다.
			ddong = game.add.group();
			ddong.enableBody = true;
			ddong.physicsBodyType = Phaser.Physics.ARCADE;
			ddong.createMultiple(30, "ddong");
			ddong.setAll("outOfBoundsKill", true);
			ddong.setAll("checkWorldBounds", true);

			keyMove = game.input.keyboard.createCursorKeys();

			//플레이어 1과 2의 라이프를 화면에 띄움
			textlife = game.add.text(20, 10, "Life : " + playerLife, {
				fontSize : "50px",
				fill : "#000000"
			});
			textlife2 = game.add.text(810, 10, "Life : " + playerLife2, {
				fontSize : "50px",
				fill : "#000000"
			});

		}

		function update() {
			// 게임 내내 주기적으로 수행하는 함수이다.
			player.body.velocity.setTo(0, 0); // 관성을 0으로 설정
			player2.body.velocity.setTo(0, 0); // 관성을 0으로 설정
			game.physics.arcade.collide(player, wall);
			game.physics.arcade.collide(player, wall); // player와 wall가 충돌할수 있도록 설정
			game.physics.arcade.overlap(player, ddong, ddongHitsPlayer, null,
					this);

			game.physics.arcade.collide(player, player2);
			game.physics.arcade.collide(player2, wall);
			game.physics.arcade.collide(player2, wall);
			game.physics.arcade.overlap(player2, ddong, ddongHitsPlayer2, null,
					this);

			if (playerLife < 1) { //플레이어 1이 먼저 죽었을경우
				modal_open();
				document.getElementById("score").innerHTML = "<h1>Player 2 Win!!</h1>";
				return;
			}

			if (playerLife2 < 1) { //플레이어 2가 먼저 죽었을경우
				modal_open();
				document.getElementById("score").innerHTML = "<h1>Player 1 Win!!</h1>";
				return;
			}
			//점프를 구현한것, 핸드폰의 y좌표가 순간적으로 2이상 바뀌였을경우 및 이미 점프중이 아닐때 가속도를 부여하여 점프를 함
			if (player1_y_temp < y - 2 && player1_flag == 0) {
				player1_acc = -200;
				player1_flag = 1;
			}
			//플레이어의 y좌표를 가속도를 더해주어 보여주게 구현
			player.body.velocity.y = player1_acc;
			//점프중이라면, 즉 flag가 1일경우 가속도를 5씩 늘려주어 중력을 구현
			if (player1_flag == 1) {
				player1_acc = player1_acc + 5;
			}
			//제자리로 돌아왔을경우 y좌표를 절대적으로 지정해주고, acc를 0으로, 점프가가능하도록 flag를 0으로 지정해줌
			if (player1_acc >= 200) {
				player1_acc = 0;
				player1_flag = 0;
				player.body.y = 550;
			}
			//순간적인 y좌표를 비교하기위해 y를 계속 저장
			player1_y_temp = y;

			//점프를 구현한것, 핸드폰의 y좌표가 순간적으로 2이상 바뀌였을경우 및 이미 점프중이 아닐때 가속도를 부여하여 점프를 함
			if (player2_y_temp < y2 - 2 && player2_flag == 0) {
				player2_acc = -200;
				player2_flag = 1;
			}
			//플레이어의 y좌표를 가속도를 더해주어 보여주게 구현
			player2.body.velocity.y = player2_acc;
			//점프중이라면, 즉 flag가 1일경우 가속도를 5씩 늘려주어 중력을 구현
			if (player2_flag == 1) {
				player2_acc = player2_acc + 5;
			}
			//제자리로 돌아왔을경우 y좌표를 절대적으로 지정해주고, acc를 0으로, 점프가가능하도록 flag를 0으로 지정해줌
			if (player2_acc >= 200) {
				player2_acc = 0;
				player2_flag = 0;
				player2.body.y = 550;
			}
			//순간적인 y좌표를 비교하기위해 y를 계속 저장
			player2_y_temp = y2;

			//플레이어들이 각각 서로를 밟을경우 땅 바닥으로 내려가는경우가 있음, 예외처리
			if (player2.body.y > 550) {
				player2.body.y = 550;
			}
			if (player.body.y > 550) {
				player.body.y = 550;
			}

			//플레이어의 x좌표를 스마트폰에서 받아온 x값에 35(상대적인값)을 곱하여 이동
			player.body.velocity.x = x * 35;
			if (x < 0) {
				player.animations.play("left");
			} else if (x > 0) {
				player.animations.play("right");
			} else {

			}
			//플레이어의 x좌표를 스마트폰에서 받아온 x값에 35(상대적인값)을 곱하여 이동
			player2.body.velocity.x = x2 * 35;
			if (x2 < 0) {
				player2.animations.play("left");
			} else if (x2 > 0) {
				player2.animations.play("right");
			} else {

			}

			ddongAlive = ddong.getFirstExists(false);
			ddongArray.length = 0;
			sky.forEachAlive(function(ddongAlive) { //하늘의 갯수만큼 똥을 만든다.
				ddongArray.push(ddongAlive);
			});

			time = time + 1;

			if (time % 4 == 0) { //똥이 시간에따라 생성되도록 설정

				//똥이 하늘(sky)중에하나에서 랜덤하도록 떨어지게함.
				if (ddongAlive && ddongArray.length > 0) {
					var random = game.rnd.integerInRange(0,
							ddongArray.length - 1);
					var ddongsky = ddongArray[random];
					ddongAlive.reset(ddongsky.body.x, ddongsky.body.y);
					var temp = {};
					temp.x = ddongsky.body.x;
					temp.y = player.y;

					game.physics.arcade.moveToObject(ddongAlive, temp, 300);
				}
			}

		}

		//똥이 벽에 충돌했을겨우 없애준다.
		function ddongHitsSky(sky, ddongs) {
			ddongs.kill();
		}

		//똥이 플레이어 1에게 충돌했을경우 똥을 지워주고, 플레이어 1의 점수를 깍아주고, 하면에 보여준다.
		function ddongHitsPlayer(playerPoint, ddongs) {
			ddongs.kill();
			//게임이 끝나지 않았을때만 점수가 깍이도록 설정
			if (playerLife > 0 && playerLife2 > 0) {
				playerLife--;
				textlife.setText("Life : " + playerLife);

			}
		}
		//똥이 플레이어 1에게 충돌했을경우 똥을 지워주고, 플레이어 1의 점수를 깍아주고, 하면에 보여준다.
		function ddongHitsPlayer2(playerPoint, ddongs) {
			ddongs.kill();
			//게임이 끝나지 않았을때만 점수가 깍이도록 설정
			if (playerLife > 0 && playerLife2 > 0) {
				playerLife2--;
				textlife2.setText("Life : " + playerLife2);
			}

		}
	</script>
</body>
</html>