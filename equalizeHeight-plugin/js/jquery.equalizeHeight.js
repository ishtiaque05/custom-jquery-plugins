(function($){
		"use strict";

		$.fn.equalizeHeight = function(){
			var tallestHeight = 0,
			$elements = this;
			
			$elements.each(function (i, el) {
				var elHeight = $(el).outerHeight();
	
				if (elHeight > tallestHeight) {
					tallestHeight = elHeight;
				}
			});

			$elements.css('min-height', tallestHeight);
			return $elements;
		}
	}(jQuery));