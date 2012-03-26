$(function () {
    var CrosswordController = {
        init: function () {
            this.config = {
                'puzzleSize': 15,
                'allSquaresCollection': new Puzzle()
            };
            this.puzzleView = new PuzzleView(this.config);
            return this
        }
    }
    var controller = CrosswordController.init();
});