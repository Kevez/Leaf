//
// Leaf.io - Model
//

var Model = (function () {

	/**
	 * Creates a new model with a given set of attributes.
	 *
	 * @param {object} attrs - an object of key/value pairs.
	 */

	function _Model(attrs) {
		this.attrs = attrs || {};
	}

	/**
	 * Sets the value of a model attribute.
	 *
	 * @param {string} key - the model key to update
	 * @param {string} val - the new value to give the key
	 */

	_Model.prototype.set = function(key, val) {
		this.attrs[key] = val;
	};

	/**
	 * Gets the value of a model attribute.
	 *
	 * @param {string} key - the key which to retrieve
	 */

	_Model.prototype.get = function(key) {
		return this.attrs[key];
	};

	return _Model;
	
})();

// Example usage:

// Create a new model
// ------------------

// var model = new Model({
// 	foo: 1
// });

// Set model value
// ------------------

// model.set('foo', 5);

// Get model value
// ------------------

// model.get('foo');