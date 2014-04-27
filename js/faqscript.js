$(document).ready(function(){
		$('.faq-trigger').on("click", function(){
			$(this).nextUntil('.faq-trigger').slideToggle();
			$('.faq-section').stop();
			var glyphSelect = $(this).find('.glyphicon');
			if (glyphSelect.hasClass('glyphicon-plus')){
					glyphSelect.removeClass('glyphicon-plus');
					glyphSelect.addClass('glyphicon-minus');
			} else {
				glyphSelect.removeClass('glyphicon-minus');
				glyphSelect.addClass('glyphicon-plus');
			}
		});
});

