
    			var onFail = function(e) {
    				console.log('Rejected!', e);
    			};

    			var onSuccess = function(s) {

    				var context;

    				try {
    					  window.AudioContext = window.AudioContext || window.webkitAudioContext;
    					  context = new AudioContext();
    					}
    					catch(e) {
    					  alert('Web Audio API is not supported in this browser');
    					}
    				var mediaStreamSource = context.createMediaStreamSource(s);
    				recorder = new Recorder(mediaStreamSource);
    				recorder.record();

    				// audio loopback
    				// mediaStreamSource.connect(context.destination);
    			}

    			window.URL = window.URL || window.webkitURL;
    			navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    			var recorder;
    			var audio = document.querySelector('audio');

    			function startRecording() {
    				if (navigator.getUserMedia) {
    					navigator.getUserMedia({audio: true}, onSuccess, onFail);
    				} else {
    					console.log('navigator.getUserMedia not present');
    				}
    			}

    			function stopRecording() {
    				recorder.stop;
    				//recorder.stop();
    				recorder.exportWAV(function(s) {

                                 	 var formData = new FormData();
                                     formData.append("file",s);

                                     var request = new XMLHttpRequest();



                                     request.open("POST", "WavUpload2.jsp");
                                     request.send(formData);




                                     var jsonEncode = JSON.stringify(fairytaleContent);

                              //       var formData = new FormData();
                     //                formData.append("file",jsonEncode);

                                     $.ajax({
                                         type : 'POST',
                                         url : "fairyTaleAjax2.jsp",
                                         data :{ x:jsonEncode},
                                         contentType: "application/x-www-form-urlencoded; charset=UTF-8",


                                     });





    				});

    			}
