var Square = Backbone.Model.extend({
    defaults: function () {
        return {
            'value': '',
            'isUsed': false,
            'readOnly': true,
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


