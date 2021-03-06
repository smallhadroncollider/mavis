(function ($) {
    var classes,

        keyup = function () {
            var input = $(this),
                val = input.val();

            $.each(classes, function(name, regex) {
                if (regex.test(val)) {
                    input.addClass(name);
                } else {
                    input.removeClass(name);
                }
            });
        };

    $.fn.mavis = function(c) {
        if (!c) { return; }

        var input = $(this);

        input.on('keyup', keyup);
        classes = c;

        return this;
    };
}(jQuery));