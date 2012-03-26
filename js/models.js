var Square = Backbone.Model.extend({
    defaults: function () {
        return {
            'value': '',
            'color': 'black',
            'readOnly': true
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


