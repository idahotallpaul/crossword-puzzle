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
        if (this.orientation && this.colNum && this.rowNum) {
            if (this.orientation === 'across') {

            } else if (this.orientation === 'down' && this.colNum) {

            }
        }
    }
});