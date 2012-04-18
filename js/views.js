var SquareView = Backbone.View.extend({
	
	tagName: 'input',
	className: 'square',
	model: Square,
	
	attributes: {
		maxlength: "1"
	},
	
	events: {
	  "keypress": "handleKeyPress"
	},
	
	initialize: function () {
		this.paintSquare();
	},
	
	paintSquare: function () {
		if(this.model.get('isUsed') === false) {
			this.$el.addClass('notUsed');
			this.$el.attr('readonly','readonly');
		} else if (this.model.get('isUsed') === true) {
			this.$el.addClass('isUsed');
		}
	},

	handleKeyPress: function (event) {
		
		// event = event || window.event;
		console.log(" ");
    	console.log("handleKeyPress");
		
		var theInput   = event.target;
		var charCode   = event.which || event.keyCode;
		var charTyped  = String.fromCharCode(charCode);
		theInput.value = charTyped.replace(/[^a-z]/gi,' ').toUpperCase();
		
		if ((theInput.value !== "") && (theInput.value !== " ")) {
			console.log("move to the next input");
		} else {
			console.log("keep it here");
		};
		
		var index = this.model.collection.indexOf(this.model);
		console.log("index = " + index);
		
		// theInput.val = theInput.value.replace(/[^a-z0-9]/gi,'');
		console.log("theInput.value  = " + theInput.value);
		console.log("this            = " + this);
		console.log("this.model      = " + this.model);
		console.log("this.model.get('row') = " + this.model.get('row'));
		console.log("this.model.get('col') = " + this.model.get('col'));
		
	}

});

var PuzzleView = Backbone.View.extend({
	
	el: '.crossword',
	
	model: function (config) {
		return config.puzzle
	},
	
	initialize: function (config) {
		var dummy = new Square(),
			dummyView = new SquareView({model: dummy}),
			i = 0,
			j = 0;
		function calcBorderWidth(ele) {
			return (parseInt(ele.css('borderLeftWidth')) + parseInt(ele.css('borderRightWidth')))
		}

		//Set this view's width to the width of the squares * the config.puzzleSize
		this.$el.append(dummyView.$el.css('visibility','hidden'));
		this.$el.width(((dummyView.$el.width() + calcBorderWidth(dummyView.$el)) * config.puzzleSize));
		this.$el.empty();

		//Create the correct number of square models and views
		for (; i < config.puzzleSize; i++) {
			var rowNum = i + 1;
			for (j = 0; j < config.puzzleSize; j++) {
				var colNum = j,
					square = new Square({'row': rowNum, 'col': colNum});
				//Check against the config is this is a dark or light square and set model accordingly
				this.isUsedSquare(square, config);
				//Attach View
				var squareView = new SquareView({'model': square});
				//Add all models to the upper level config collection
				config.allSquaresCollection.add(square);
				//Apply the views to the PuzzleView
				this.$el.append(squareView.$el)
			}
		}
	},
	
	isUsedSquare: function (square, config) {
		var rowVal = square.get('row'),
			colVal = square.get('col'),
			paintArray = config.clueArray,
			squarePosition = 1 + (rowVal * config.puzzleSize) + colVal;

		if (typeof rowVal == 'number' && typeof colVal == 'number') {
			if (paintArray[squarePosition] === 1) {
				square.set('isUsed', true);
			}
		}
	}
});
