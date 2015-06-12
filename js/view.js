//
// Leaf.io - View
//

var View = (function () {

	/**
	 * Creates a new view based on a given set of options.
	 *
	 * @param {object} opts - an object which accepts a template and containing element options.
	 */

	function _View (opts) {
		this.el = opts.el;
		this.template = opts.template;

		if (opts.collection) {
			this.collection = opts.collection
		}

		this.compile();
	}

	/**
	 * Compile template.
	 */

	_View.prototype.compile = function() {
		console.log(this.collection);

		// loop around collection

		var compiledTemplate = this.template,
			toReplace = ['test'], // this will be object's key
			replaceWith = ['hello111']; // this will be object's values
		for(var i = 0; i < toReplace.length; i++) {
		    compiledTemplate = compiledTemplate.replace(new RegExp('{{' + toReplace[i] + '}}', 'gi'), replaceWith[i]);
		}
		// keep appending compiledTemplate to compile all views
		this.template = compiledTemplate; 
	};

	/**
	 * Renders the view.
	 */

	_View.prototype.render = function() {
		document.querySelector(this.el).innerHTML = this.template;
	};

	// Return the view
	return _View;

})();