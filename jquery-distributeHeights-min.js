!function($){$.fn.distributeHeights=function(n){function i(n){var i=0;return n.each(function(){var n=$(this).height();i=n>i?n:i}),i}function t(n,i){n.each(function(){$(this).height(i)})}var h=$.extend({children:null},n),e=h.children?this.find(h.children):this;return t(e,i(e)),this}}(jQuery);