var SquareView = Backbone.View.extend({
    tagName: 'input',
    className: 'square',
    model: Square,
    initialize: function () {
        if(this.model.get('isUsed') === false) {
            this.$el.addClass('notUsed');
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
        for (; i < config.puzzleSize; i++) {
            var rowNum = i + 1;
            for (j = 0; j < config.puzzleSize; j++) {
                var colNum = j + 1,
                    square = new Square({'row': rowNum, 'col': colNum}),
                    squareView = new SquareView({'model': square});
                //Add all models to the upper level config collection
                config.allSquaresCollection.add(square);
                //Apply the views to the PuzzleView
                this.$el.append(squareView.$el)
            }
        }
    }
});