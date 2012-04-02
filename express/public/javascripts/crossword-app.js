$(function () {
    var config = {
        'puzzleSize': 15,
        'boardArray': [
            1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,
            0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,
            1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,
            1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,
            1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
            0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,
            1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,
            1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,
            1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,
            0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,
            1,1,1,1,0,1,1,1,0,1,1,1,1,1,0
        ],
        'hints': {
            'across': [
                {
                    'text': 'Clue 1',
                    'answer': 'Answer',
                    'startingCoords': {
                        'row': 0,
                        'col': 0
                    }
                }
            ],
            'down': [
                {
                    'text': 'Clue 6',
                    'answer': 'Answer66',
                    'startingCoords': {
                        'row': 0,
                        'col': 2
                    }
                }
            ]
        }
    }
    Crossword = {};
    Crossword.config = config;
    Crossword.allSquares = new Puzzle();
    Crossword.viewObj = new PuzzleView();
});