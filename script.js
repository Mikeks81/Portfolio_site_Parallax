function home(){
	$('html, body').animate({scrollTop: 0},700);
}

function about(){
	$('html, body').animate({scrollTop: 483},700);
}

function portfolio(){
	$('html, body').animate({scrollTop: 1324},700);
}

function contact(){
	$('html, body').animate({scrollTop: 2439},700);
}

// function typing(){
// 	var greeting = "Michael Simonitsch".split("");
// 	var a = [];
// 	for (var i = 0; i < greeting.length; i++) {
// 		a.push(greeting[i]);
// 		$('.greeting').delay(500).html(a.join());
// 		console.log(greeting[i]);
// 	}
// }

$(document).ready(
	function(){
		$('.parallax-window').parallax({imageSrc: 'Images/NewYork.jpg'});


		$(window).scroll(function(){
			$('.greeting').css({'opacity': 1-(($(this).scrollTop())/250)
			});
			$('.wrapper').css({'opacity': 1-(($(this).scrollTop())/250)
			});

			if ( $('header').css('opacity') < 1){
				$('header').css({'opacity':0+(
					($(this).scrollTop())/470)
				});
			}

			if ( $(window).scrollTop() > 900 ) {
				$('.one').fadeTo(400,1);
				$('.three').delay(500).fadeTo(400,1);
				$('.two').delay(1000).fadeTo(400,1);
				$('.four').delay(1500).fadeTo(400,1);
			}	
		});
});		


// #### header animation ##### 





