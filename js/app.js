//
// app.js
//

(function () {

	//
	// 
	//

	var controller = new Controller({

		init: function () {

			var obj = [
				{ foo: 1 },
				{ foo: 7 }
			];

			this.collection = new Collection(obj);
			this.createView();
		},

		createView: function () {

			var view = new View({
				el: '.container',
				template: '<p>{{test}}</p>',
				collection: this.collection
			});

			this.showView(view);

		},

		showView: function (_view) {
			_view.render();
		}
	});

	controller.init();
})();