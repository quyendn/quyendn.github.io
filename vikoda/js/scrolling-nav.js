$(function() {
    $('a.navbar1').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $(".more-text").click(function () {

        $header = $(this);
        //getting the next element
        //$content = $header.prev(".content");
        $content = $(this).parent().prev();
        
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {
           
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $header.html(function () {
                //change text based on condition
                return $content.is(":visible") ? "<img src='img/btn_thugon.jpg'>" : "<img src='img/btn_xemthem.jpg'>";
            });
        });

    });
   
});
