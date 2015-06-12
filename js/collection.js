//
// Leaf.io - Collection
//

var Collection = (function () {

	/**
	 * Creates a new collection of models, given an array of objects.
	 *
	 * @param {object} _collection - an array of objects.
	 */

	function _Collection(_collection) {
		this.collection = _collection || {};
	}

	return _Collection;
	
})();