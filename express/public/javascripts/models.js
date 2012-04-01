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
    defaults: function () {
        return {
            'text': '',
            'clueNum': '',
            'orientation': 'across'
        }
    }
});


