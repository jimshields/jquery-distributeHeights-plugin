# Plugin: 
**Takes a jQuery Object (and/or an optional child selector) and finds the tallest element, then makes all siblings (or children) the same height**

On more than one occasion a design I've implemented called for a grid of perfectly aligned elements with imperfectly aligned content. Instead of using a table I opted to simply use javascript to distribute the tallest height in the set of elements across all elements. I made this simple jQuery plugin for ease of use.

**Note**: This plugin assumes the layout is broken and attempts to fix it. So there will be a fraction of a second where the layout will be broken and then fall into place. That's not ideal, but it can be hidden with some clever CSS and by using the Callback function to add a class that reveals the elements after the heights have been applied. I typically just apply a 0 opacity to the elements and then a class to their parent that transitions their opacities to 1 when they've been normalized.

## Author:
Jim Shields / wahilacreative.com

## Options Object:
	{  
		children : null  
	}

**property** *children*: String - (optional) CSS selector of specific child/grand-child elements to modify rather than the called on jQuery Object

## Callback
Callback function that can be called after the heights have been applied

## Examples: 
	
Basic call on a jQuery selector

	$('.nav-item').distributeHeights();

Pass child selector in as an optional property

	$('.site-nav').distributeHeights({
		children : 'li'
	});

Pass a callback function to be called after heights have been applied. This example fires a class that

	var nav = $('.site-nav');
	
	nav.distributeHeights({
		children: 'li'
	}, function () {
		nav.addClass('normalized')
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