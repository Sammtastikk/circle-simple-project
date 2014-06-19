var delta = 0;
var currentSlideIndex = 0;

function elementScroll (e) {
	e.preventDefault();
	console.log('scroll', e, e.originalEvent.wheelDelta , e.originalEvent.detail);
	// --- Scrolling up ---
	if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {	

		delta--;

		if ( Math.abs(delta) >= scrollThreshold) {
		prevSlide();
		}
	}

	// --- Scrolling down ---
	else {

		delta++;

		if (delta >= scrollThreshold) {
			nextSlide();
		}
	}

	// Prevent page from scrolling
	return false;
}


function showSlide() {

	// reset
	delta = 0;

	$('.slide').each(function(i, slide) {
		$(slide).toggleClass('active', (i >= currentSlideIndex));
	});

}


function prevSlide() {

	currentSlideIndex--;

	if (currentSlideIndex < 0) {
		currentSlideIndex = 0;
	}

	showSlide();
}

function nextSlide() {

	currentSlideIndex++;

	if (currentSlideIndex > 3) { 
		currentSlideIndex = 3;
	}

	showSlide();
}

$(function(){
	scrollThreshold = 0;

})

var l = (new Date()).getTime();
function throttledScrollHandler(e){
    var now = (new Date()).getTime();

    if(now - l > 1000){
        elementScroll(e);
        l = now;
    }
}




$(window).on({
	'DOMMouseScroll mousewheel': throttledScrollHandler
});







