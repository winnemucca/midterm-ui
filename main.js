$(document).on('ready', function() {
  	$('.draggableSound').draggable({containment: "document", revert: true, stop: function(event, ui){
		$(this)
			.clone()
			.appendTo('.userSoundScape')
			.css({"position": 'absolute', 
			"top": event.pageY, 
			"left": event.pageX });

		console.log($(this));
		}
	
	});
	// the carasoul is the soundscape

	$('.userSoundScape').droppable({drop: function(event, ui) {
		console.log(ui.position);
	
	} 

	});

	// Below I am working to collapse the draggable divs and make them re-appear through mouseover.  click is being used for drag

	$(document).on('mouseover', '.animalIconFinder', function() {
  			$('.blueBox').animate({
  				backgroundColor: "blue",
  				width: 250
  				// display: block;
  			},1000 );
  			
  		
  	$(document).on('mouseleave','.animalIconFinder', function(){
		$('.blueBox').animate({
			backgroundColor: "blue",
			width: 200
			}, 1000);
		
		});
	});




	$(document).on('mouseover', '.humanIconFinder', function() {
  			$('.blueBox').animate({
  				backgroundColor: "blue",
  				width: 200
  				// display: block;
  			},1000 );
  			
  		
  	$(document).on('mouseleave','.humanIconFinder', function(){
		$('.blueBoxTwo').animate({
			backgroundColor: "blue",
			width: 100
			}, 1000);
		
		});
	});

});



























