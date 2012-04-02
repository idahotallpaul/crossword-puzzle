var Puzzle = Backbone.Collection.extend({
   model: Square
});
var Word = Backbone.Collection.extend({
    model: Square,
    answer: '',
    orientation: '',
    colNum: '',
    rowNum: '',
    gatherSelf: function () {
        if (this.orientation === 'across' && rowNum) {

        } else if (this.orientation === 'down' && colNum)
    }
});