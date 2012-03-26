$(function () {
    var CrosswordController = {
        init: function () {
            console.log('creating obj');
            this.puzzleView = new PuzzleView();
            console.log(this);
            return this
        }
    }
    var controller = CrosswordController.init();
});