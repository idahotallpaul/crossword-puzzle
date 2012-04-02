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

        //Loop through all squares in this Puzzle Collection and attach views
        for (i = 0; i < Crossword.allSquares.length; i++) {
            //Attach View to the square
            var squareView = new SquareView({'model': Crossword.allSquares.models[i]});

            //Apply the views to the PuzzleView
            this.$el.append(squareView.$el)
        }
    }
});