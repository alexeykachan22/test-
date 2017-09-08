$(document).ready(function() {
	$('button#stoim').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '44%'}, 200); 
		});
	});
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '50%'}, 200,  
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
});