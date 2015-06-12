//
// Leaf.io - Controller
//

var Controller = (function () {

	'use strict';

	/**
	 * Creates a new controller.
	 */

	function _Controller (map) {

		// 
		// Loop through custom-defined functions and assign them to the Controller's prototype.
		//

		for (var func in map) {
			if (map.hasOwnProperty(func)) {
				_Controller.prototype[func] = map[func];
			}
		}
	}

	// Return controller
	return _Controller;

})();