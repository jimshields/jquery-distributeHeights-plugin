
/*
	
	Author: Jim Shields / wahilacreative.com
	Plugin: Takes a jQuery Object (and/or an optional child selector) and finds the tallest element, then makes all siblings (or children) the same height
	Options: {
		@property children: String - (optional) CSS selector of specific child/grand-child elements to modify rather than the called on jQuery Object
	}
	
	callback: Function - (optional) callback function to call after the heights have been distributed

	Examples: 
		
		Basic call on a jQuery selector

		| $('.nav-item').distributeHeights();

		--- or ---

		Pass child selector in as an optional property

		| $('.site-nav').distributeHeights({
		| 	children : 'li'
		| });

		--- or ---

		Pass a callback function to be called after heights have been applied. This example fires a class that

		| function addFadeClass (elem) {
		| 	elem.addClass('show');
		| }
		| 
		| var nav = $('.site-nav');
		| 
		| nav.distributeHeights({
		| 	children: 'li'
		| }, function () {
		| 	nav.addClass('normalized')
		| });

		--- or ---

		Get creative with data attributes to pass in different child selectors for multiple elements

		| <div class="js-distributeHeights" data-child="li"> ... </div>
		| <div class="js-distributeHeights" data-child=".foo"> ... </div>
		|
		| $('.js-distributeHeights').each(function(){
		|
		|	 var childSelector = $(this).data('child');
		|
		|	 $(this).distributeHeights({
		|	 	children : childSelector
		|	 });
		|
		| });

*/

(function($){

	$.fn.distributeHeights = function (options, callback) {

		// Loop over a jQuery Object and record the height if it's larger than the previous record
		// @param elementCollection: jQuery Object - collection of HTML nodes to loop over to collect the largest height of
		function getLargestHeight(elementCollection) {

			var largestHeight = 0;

			elementCollection.each(function(){

				// Reset the height
				$(this)[0].style.height = 'auto';
				var elementHeight = $(this).height();

				// If this elements height is larger than the largestHeight, replace the current value with it.
				largestHeight = (elementHeight > largestHeight) ? elementHeight : largestHeight;

			});

			return largestHeight; 

		}

		// Loop over a jQuery Object and apply a single arbitrary height to each element
		// @param elementCollection: jQuery Object - collection of HTML nodes to apply the "height" parameter to
		// @param newHeight: Int - height value to be apply to each element in elementCollection
		function applyHeight (elementCollection, newHeight) {

			elementCollection.each(function(){

				$(this).height(newHeight);
				
			});

		}	

		// Apply options if any
		var config = $.extend({
			children : null
		}, options);

		// If a child selector is passed in then find those children, otherwise distribute the heights of this
		var elements = (config.children) ? this.find(config.children) : this;

		// The Magic
		applyHeight(elements, getLargestHeight(elements));

		if (callback && typeof callback === 'function') {
			callback();
		}

		// Make plugin "chainable"
		return this;

	};

})(jQuery);
