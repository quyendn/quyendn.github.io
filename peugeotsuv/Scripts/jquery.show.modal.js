$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $(document).delegate("a[data-modal]", "click", function () {
        var $url = $(this).attr('href');
        var $title = $(this).attr('title');
        var $dialog = $('#myModal');
        $dialog.empty();
        $dialog.load($url).dialog({
            autoOpen: false,
            resizable: false,
            show: { effect: 'fade', direction: "up", duration: 250 },
            modal: true,
            draggable: true,
            dialogClass: "noclose"
        });
        $dialog.dialog('open');
        return false;
    });
    
    $("a[data-modal]").on("click", function (e) {
        
        var $url = $(this).attr('href');
        var $title = $(this).attr('title');
        var $dialog = $('#myModal');
        $dialog.empty();
        $dialog.load($url).dialog({
            autoOpen: false,
            resizable: false,
            show: { effect: 'fade', direction: "up",duration:250 },
            modal: true,
            draggable: true,
            dialogClass: "noclose"
        });
        $dialog.dialog('open');
        return false;
    });
    $("#btn-addVehicle").on("click", function (e) {
        var vehicleId = $("#cboVehicleStamp").val();
        var $url = $(this).attr('href');
        $url = $url + "?vehicleId=" + vehicleId;
        var $title = $(this).attr('title');
        var $dialog = $('#myModal');
        $dialog.empty();
        $dialog.load($url).dialog({
            autoOpen: false,
            resizable: false,
            show: { effect: 'fade', direction: "up", duration: 250 },
            modal: true,
            draggable: true,
            dialogClass: "noclose"
        });
        $dialog.dialog('open');
        return false;
    });
    $(".btn-close").on("click", function (e) {
        $("#myModal").dialog('close');
    });
});