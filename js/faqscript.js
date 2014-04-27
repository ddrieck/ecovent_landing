$(document).ready(function(){
		$('.faq-question').on("click", function(){
			$(this).nextUntil('.glyphicon').slideToggle();
			var glyphSelect = $(this).prev();
			if (glyphSelect.hasClass('glyphicon-plus')){
					glyphSelect.removeClass('glyphicon-plus');
					glyphSelect.addClass('glyphicon-minus');
			} else {
				glyphSelect.removeClass('glyphicon-minus');
				glyphSelect.addClass('glyphicon-plus');
			}
		});
});

