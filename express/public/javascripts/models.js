var Square = Backbone.Model.extend({
    defaults: function () {
        return {
            'value': '',
            'isUsed': false,
            'col': 0,
            'row': 0
        }
    }
});
var Hint = Backbone.Model.extend({
    'text': '',
    'answer': '',
    'startingCoords': {
        'row': 0,
        'col': 0
    }
});


