var Puzzle = Backbone.Collection.extend({
   model: Square
});
var Row = Puzzle.extend({
   model: Square
});
var Column = Puzzle.extend({
   model: Square
});