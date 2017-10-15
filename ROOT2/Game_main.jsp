<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<!-- <script type="text/javascript" src="./js/ajax_PC&Game.js"></script> -->
<script type="text/javascript" src="./js/phaser.min.js" charset="utf-8"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<link rel="stylesheet" href="./css/bootstrap.min.css">
</head>
<body>
	<script type="text/javascript">
		//1인용 게임부분이다. 
		//HTML5 오픈 api인 phaser.js를 이용하여 제작하였다.

		var game = new Phaser.Game(1000, 600, Phaser.CANVAS, null, { //게임크기 설정
			preload : preload,
			create : create,
			update : update
		});
		var ddong;
		var ddongAlive;
		var ddongArray = [];
		var playerLife = 5;
		var score = 0;
		var txtScore;
		var eventScore;
		var time = 0;

		var textlife;
		var eventlife;

		var game_flag = 0;

		function preload() {
			// 아래의 부분은 이미지를 불러오는 부분이다.
			game.load.spritesheet("player", "./img/player_ani.png", 32, 40);
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

			sky = game.add.group();//하늘이될 sky그룹생성
			sky.enableBody = true;

			bottom = game.add.group();
			bottom.enableBody = true;

			for (var i = 0; i < 25; i++) {
				var row_sky = sky.create(i * 40, -30, "sky");
				row_sky.body.immovable = true;
				var row_bottom = bottom.create(i * 40, 590, "bottom");
				row_bottom.body.immovable = true; // wall가 움직이지 못하도록 설정합니다.

			}

			for (var j = 0; j < 15; j++) {	//벽을 만들어준다.
				var colwall = wall.create(0 - 30, j * 40, "wall");
				colwall.body.immovable = true;
				colwall = wall.create(1000 - 10, j * 40, "wall");
				colwall.body.immovable = true;
			}

			player = game.add.sprite(400, 600 - 40, "player");
			game.physics.arcade.enable(player);
			//좌 우 애니메이션을 지정해준다.
			player.animations.add("left", [ 0, 1, 2 ], 10, true);
			player.animations.add("right", [ 4, 5, 6 ], 10, true);

			//똥 그룹을 지정해준다.
			ddong = game.add.group();
			ddong.enableBody = true;
			ddong.physicsBodyType = Phaser.Physics.ARCADE;
			ddong.createMultiple(30, "ddong");
			ddong.setAll("outOfBoundsKill", true);
			ddong.setAll("checkWorldBounds", true);

			keyMove = game.input.keyboard.createCursorKeys();
			//스코어의 위치를 지정해주고 표시해준다.
			txtScore = game.add.text(20, 10, "Score : 0", {
				fontSize : "50px",
				fill : "#000000"
			});
			//1초마다 1점씩 스코어를 늘려주고 표시해준다.
			eventScore = game.time.events.loop(Phaser.Timer.SECOND, function() {
				score++;
				txtScore.setText("Score : " + score);
			}, this);
			//남은 라이프를 표시해준다.
			textlife = game.add.text(810, 10, "Life : " + playerLife, {
				fontSize : "50px",
				fill : "#000000"
			});

		}

		function update() {
			// 게임 내내 주기적으로 수행하는 함수이다.
			player.body.velocity.setTo(0, 0); // 관성을 0으로 설정
			game.physics.arcade.collide(player, wall);
			game.physics.arcade.collide(player, wall); // player와 wall가 충돌할수 있도록 설정
			game.physics.arcade.overlap(player, ddong, ddongHitsPlayer, null,
					this);

			player.body.velocity.setTo(0, 0); // 관성을 0으로 설정

			//플레이어 생명이 1아래로 떨어졌을경우, 스코어 기능을 종료하고, 게임 종료 화면을 띄워준다.
			if (playerLife < 1) {
				game.time.events.remove(eventScore);
				modal_open();
				document.getElementById("score_submit_btn").setAttribute(
						"href", "./page_Ranking_Submit.jsp?score=" + score);	//랭킹 등록이 가능하도록한다.
				document.getElementById("score").innerHTML = "<h1>GAME OVER</h1><br>당신의 점수는 : "
						+ score;

				return;
			}

			player.body.velocity.x = x * 35;	//플레이어의 x좌표를 스마트폰에서 받아온 x값에 35(상대적인값)을 곱하여 이동
			if (x < 0) {
				player.animations.play("left");
			} else if (x > 0) {
				player.animations.play("right");
			} else {

			}

			ddongAlive = ddong.getFirstExists(false);
			ddongArray.length = 0;
			sky.forEachAlive(function(ddongAlive) {//하늘의 갯수만큼 똥을 만든다.
				ddongArray.push(ddongAlive);
			});

			time = time + 1;

			if (time % 4 == 0) { //똥이 시간에따라 생성되도록 설정
				if (ddongAlive && ddongArray.length > 0) {//똥이 하늘(sky)중에하나에서 랜덤하도록 떨어지게함.
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
			playerLife--;
			if (playerLife >= 0)
				textlife.setText("Life : " + playerLife);

		}
	</script>
</body>
</html>