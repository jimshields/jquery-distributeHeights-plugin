# Plugin: 
Takes a jQuery Object (and/or an optional child selector) and finds the tallest element, then makes all siblings (or children) the same height
## Author:
Jim Shields / wahilacreative.com
## Options  
	@property children: String - (optional) CSS selector of specific child/grand-child elements to modify rather than the called on jQuery Object

## Examples: 
	
Basic call on a jQuery selector

	$('.nav-item').distributeHeights();

Pass child selector in as an optional property

	$('.site-nav').distributeHeights({
		children : 'li'
	});

Get creative with data attributes to pass in different child selectors for multiple elements

	<div class="js-distributeHeights" data-child="li"> ... </div>
	<div class="js-distributeHeights" data-child=".foo"> ... </div>

	$('.js-distributeHeights').each(function(){

		var childSelector = $(this).data('child');

		$(this).distributeHeights({
			children : childSelector
		});

	});