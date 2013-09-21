var FlowType = new Class({
    Implements: [Options],
    options: {
        maximum: 9999,
        minimum: 1,
        maxFont: 9999,
        minFont: 1,
        fontRatio: 35,
        lineRatio: 1.45
    },
    initialize: function(elements, options) {
        this.setOptions(options);
        var self = this;
        Array.from(elements).each(function(el) {
            self.changes(el);
            window.addEvent('resize', function() {
                self.changes(el);
            });
        });
    },
    changes: function(element) {
        var settings = this.options,
            elw = element.getSize().x,
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
        
         element.setStyles({
            'font-size': fontSize + 'px',
            'line-height': fontSize * settings.lineRatio + 'px'
         });
    }
});

Element.implement({
    flowtype: function(options) {
        return new FlowType(this, options);
    }
});