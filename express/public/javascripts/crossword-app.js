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
                    'answer': 'AAAAAA',
                    'startingCoords': {
                        'row': 0,
                        'col': 0
                    }
                },
                {
                    'text': 'Clue 2',
                    'answer': 'AAA',
                    'startingCoords': {
                        'row': 0,
                        'col': 7
                    }
                }
            ],
            'down': [
                {
                    'text': 'Clue 1',
                    'answer': 'AAA',
                    'startingCoords': {
                        'row': 0,
                        'col': 0
                    }
                },
                {
                    'text': 'Clue 2',
                    'answer': 'AAAAAAAA',
                    'startingCoords': {
                        'row': 0,
                        'col': 1
                    }
                }
            ]
        }
    }
    Crossword = {};
    Crossword.config = config;
    Crossword.allSquares = new Puzzle();
    Crossword.viewObj = new PuzzleView();
    Crossword.acrossHintView = new acrossHintView({'el': '.acrossHints'});
    Crossword.downHintView = new downHintView({'el': '.downHints'});
});