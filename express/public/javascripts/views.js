var SquareView = Backbone.View.extend({
    tagName: 'input',
    className: 'square',
    model: Square,
    events: {
        'blur': 'updateSquareVal'
    },
    initialize: function () {
        this.paintSquare();
        this.$el.attr('maxLength', 1);
        this.$el.val(this.model.get('value'));
    },
    paintSquare: function () {
        if(this.model.get('isUsed') === false) {
            this.$el.addClass('notUsed');
            this.$el.attr('disabled','disabled');
        } else if (this.model.get('isUsed') === true) {
            this.$el.addClass('isUsed');
        }
    },
    updateSquareVal: function () {
        var currentVal = this.$el.val();
        if (currentVal && typeof currentVal === 'string') {
            this.model.set('value', currentVal.toUpperCase());
            //console.log(this.model.get('value'));
        }
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
        for (i = 0; i < config.puzzleSize; i++) {
            var rowNum = i;
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
            squarePosition = ((rowVal) * config.puzzleSize) + colVal;

        if (typeof rowVal == 'number' && typeof colVal == 'number') {
            if (paintArray[squarePosition] === 1) {
                square.set('isUsed', true);
                square.set('value', squarePosition);
            }
        }
    }
});