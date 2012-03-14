$(function () {
    window.Square = Backbone.Model.extend({
        defaults: function () {
            return {
                 'value': '',
                 'color': 'black',
                 'readOnly': true
            }           
        }
    });
    
    window.SquareView = Backbone.View.extend({
        tagName: 'input',
        className: 'square',
        initialize: function () {
            this.model.on('change', this.darken, this)
        },
        events: {
            'click': 'darken'
        },
        darken: function () {
            console.log('Darkened the input');
            this.$el.css('background-color','#CCC');
        },
        initialize: function () {
            this.model.bind('change', this.render, this)
        },
        render: function () {
            this.$el.css('color','red');
        }
    });
    
    //The high level app view
    window.CrosswordApp = Backbone.View.extend({
        el: $('.crossword'),
        
        events: {
            'click': 'testEvent'
        },
        
        testEvent: function () {
            console.log('We bound an event! This is a controller');
        },
        createSquare: function () {
            var square = new Square();
            var view = new SquareView({model: square});
            $('.crossword').append(view.$el);
        },
        createRedSquare: function () {
            var square = new Square();
            var view = new SquareView({model: square});
            $('.crossword').append(view.$el);
            square.set('color','red');
        },
        initialize: function () {
            var button = $('<input type="button" value="Make Squares!" ></input>');
            var changeButton = button.clone();
            changeButton.attr('value', 'Make Red Squares, Mao!');
            button.on('click', this.createSquare);
            changeButton.on('click', this.createRedSquare);
            $('body').append(button, changeButton);
        }
        
    });
    
    window.App = new CrosswordApp();
});

