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
    model: function () {
        return Crossword.config.puzzle
    },
    initialize: function () {
        var dummy = new Square(),
            dummyView = new SquareView({model: dummy}),
            dummyViewWidth = '',
            littleSquareWidth = '',
            i = 0,
            j = 0;

        //Set this view's width to the width of the squares * the Crossword.config.puzzleSize
        this.$el.append(dummyView.$el.css('visibility','hidden'));
        dummyViewWidth = dummyView.$el.width();
        littleSquareWidth = parseInt(dummyView.$el.css('borderLeftWidth')) + parseInt(dummyView.$el.css('borderRightWidth'));
        this.$el.width(((dummyViewWidth + littleSquareWidth) * Crossword.config.puzzleSize));
        this.$el.empty();

        //Create the correct number of square models and views
        for (i = 0; i < Crossword.config.puzzleSize; i++) {
            var rowNum = i;
            for (j = 0; j < Crossword.config.puzzleSize; j++) {
                var colNum = j,
                    square = new Square({'row': rowNum, 'col': colNum}),
                    squarePosition = ((rowNum) * Crossword.config.puzzleSize) + colNum;

                //Check against the Crossword.config.boardArray is this is a dark or light square and set model accordingly
                if (Crossword.config.boardArray[squarePosition] === 1) {
                    square.set('isUsed', true);
                    //square.set('value', square.get('row'));
                }

                //Attach View to the square
                var squareView = new SquareView({'model': square});

                //Add all models to the upper level puzzle collection
                Crossword.allSquares.add(square);

                //Apply the views to the PuzzleView
                this.$el.append(squareView.$el)
            }
        }
    }
});