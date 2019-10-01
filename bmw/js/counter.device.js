$(function() {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);

        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            var speed = $this.data('speed');
            setTimeout(function() {
                $this.data("isCounting", false);
                count($this);
            }, speed);
        }
    }

    function count2($this) {
        var current = parseInt($this.html(), 10);

        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            var speed = $this.data('speed');
            setTimeout(function() {
                $this.data("isCounting", false);
                count2($this);
            }, 1);
        }
    }
    $(".c-section4").each(function() {

        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);

    });
    $(".c-section5").each(function() {

        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);

    });

    function startCount() {
        $(".c-section4").each(function() {
            var speed = $(this).data('speed');
            $(this).data("speed", speed);
            count($(this), speed);
        });
        $(".c-section5").each(function() {
            var speed = $(this).data('speed');
            $(this).data("speed", speed);
            count2($(this), 500);
        });
    };

    $(window).scroll(function() {
        startCount();
    });

    startCount();
});