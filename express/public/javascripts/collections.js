var Puzzle = Backbone.Collection.extend({
   model: Square,
   initialize: function () {
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

                //Add all models to the upper level puzzle collection
                this.add(square);
            }
        }
   }
});
var Word = Backbone.Collection.extend({
    model: Square,
    answer: '',
    orientation: '',
    colNum: '',
    rowNum: '',
    initialize: function () {

    },
    gatherSelf: function () {
        if (this.orientation && this.colNum && this.rowNum && Crossword.config) {
            if (this.orientation === 'across') {

            } else if (this.orientation === 'down' && this.colNum) {

            }
        }
    }
});
var acrossHintCollection = Backbone.Collection.extend({
    model: Hint,
    initialize: function () {
        var i = 0;
        for (; i < Crossword.config.hints.across.length; i++) {
            var aHint = {};
            aHint = new Hint({
                'text': Crossword.config.hints.across[i].text,
                'answer': Crossword.config.hints.across[i].answer,
                'startingCoords': Crossword.config.hints.across[i].startingCoords
            });
            this.add(aHint);
        }
    }
});
var downHintCollection = Backbone.Collection.extend({
    model: Hint,
    initialize: function () {
        var i = 0;
        for (; i < Crossword.config.hints.down.length; i++) {
            var aHint = {};
            aHint = new Hint({
                'text': Crossword.config.hints.down[i].text,
                'answer': Crossword.config.hints.down[i].answer,
                'startingCoords': Crossword.config.hints.down[i].startingCoords
            });
            this.add(aHint);
        }
    }
});