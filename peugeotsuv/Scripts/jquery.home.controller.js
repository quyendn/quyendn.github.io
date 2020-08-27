var VEHICLE_TYPEID = {
    VEHICLE_5008: 1,
    VEHICLE_3008: 2
};
$(document).ready(function () {
    // FORM VALIDATION
    // =================================================================
    // Require Bootstrap Validator
    // http://bootstrapvalidator.com/
    // =================================================================
    // FORM VALIDATION FEEDBACK ICONS
    // =================================================================
    var faIcon = {
        valid: 'fa fa-check-circle fa-lg text-success',
        invalid: 'fa fa-times-circle fa-lg',
        validating: 'fa fa-refresh'
    }
    // FORM VALIDATION ON ACCORDION
    // =================================================================
    // FORM VALIDATION CUSTOM ERROR CONTAINER
    // =================================================================
    // Indicate where the error messages are shown.
    // Tooltip, Popover, Custom Container.
    // =================================================================

    $('#frmMobile').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        max: 11,
                        message: 'Số điện thoại chỉ có thể là 10 hoặc 11 số.'
                    }
                }
            },
            cmt: {
                validators: {
                    notEmpty: {
                        message: 'Số chứng minh thư không được để trống.'
                    }
                }
            }

        },
        onSuccess: function (e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var cmt = $('#txtCMT').val();
            var email = $('#txtEmail').val();
            var link = "";
            var emailto = "quyendn84@gmail.com";
            var color = $("#cboColor").val();
            var fontType = $("#cboFont").val();
            var Id = $("#hdImageId").val()
            var colorText = "0,0,0";
            if (isEmpty(color))
                colorText = "0,0,0";
            else
                colorText = color;
            var signature = $("#signature").val();
            var dataJSON = { "name": name, "email": email, "phone": phone, "fb": link, "cmt": cmt, "id": Id, "signature": signature, "color": colorText, "fontTypeName": fontType, "emailto": emailto }
            var signature = $('#signature').val();
            if (isEmpty(signature)) {
                toastr.warning('Vui lòng nhập chữ ký để tạo tác phẩm của bạn.', { timeOut: 5000 });
                $('#signature').focus();
            }
            else {
                showLoadingContactImage('content-mobile', 'formContentContactMobile');
                $.ajax({
                    url: "https://alpha.f5academy.net/api/Peugeotservice",
                    type: "Post",
                    async: false,
                    data: dataJSON,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'jsonp',
                    success: function (states) {
                        $('#frmMobile').bootstrapValidator('resetForm', true);
                        hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    },
                    error: function (ex) {
                        toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                        hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    },
                    complete: function (jqXHR, textStatus) {
                        $('#txtName').val('');
                        $("#txtPhone").val('');
                        $('#txtEmail').val('');
                        $('#txtLink').val('');
                        $('#frmMobile').bootstrapValidator('resetForm', true);
                        hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                        toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 });
                        location.href = "/dang-ky-thanh-cong";
                        //loadVehicleImageWatermarkerBackground(true);

                    }
                });
            }

        }
    }).on('success.form.fv', function (e) {

    });
    loadVehicleColor(VEHICLE_TYPEID.VEHICLE_3008);
    $("ul.vehicle-type li a").on("click", function () {
        $("#viewImageSlide").empty();
        $("ul.vehicle-type li a").removeClass("active");
        $(this).addClass("active");
        var typeId = $(this).attr("rel");
        loadVehicleColor(typeId);

    });
    $('body').delegate('ul.vehicle-color li a', 'click', function () {
        $("ul.vehicle-color li a").removeClass("active");
        $(this).addClass("active");
        var typeId = $(this).attr("rev");
        var colorId = $(this).attr("rel");
        loadVehicle(typeId, colorId);

    });
    $('body').delegate('ul.vehicle-stamp li a', 'click', function () {
        var vehicleId = $(this).attr("rel");
        loadVehicleImage(vehicleId);

    });
    $('body').delegate('ul.vehicle-image li a', 'click', function () {
        var vehicleId = $(this).attr("rel");
        var groupId = $(this).attr("rev");
        var Id = $(this).attr("vId");
        $("#hdImageId").val(Id);
        loadVehicleImageChange(Id, groupId, vehicleId);
    });
    $("#cboFont").change(function () {
        var fontType = $(this).val();
        var color = $("#cboColor").val();
        var Id = $("#hdImageId").val()
        var colorText = "0,0,0";
        if (isEmpty(color))
            colorText = "0,0,0";
        else
            colorText = color;
        var signature = $("#signature").val();
        if (isEmpty(signature)) {
            toastr.error('Bạn cần phải nhập chữ ký.', { timeOut: 5000 })
            $("#signature").focus();
            return false;
        }
        else
            loadVehicleImageWatermarker(true);
    });
    $("#cboColor").change(function () {
        var color = $(this).val();
        var fontType = $("#cboFont").val();
        var Id = $("#hdImageId").val()
        var colorText = "0,0,0";
        if (isEmpty(color))
            colorText = "0,0,0";
        else
            colorText = color;
        var signature = $("#signature").val();
        if (isEmpty(signature)) {
            toastr.error('Bạn cần phải nhập chữ ký.', { timeOut: 5000 })
            $("#signature").focus();
            return false;
        }
        else
            loadVehicleImageWatermarker(true);
    });
    $("#signature").keypress(function (e) {
        clearTimeout($.data(this, 'timer'));
        var pKeySearch = $(this).val();
        if (e.keyCode == 13)
            loadVehicleImageWatermarker(true);
        else
            $(this).data('timer', setTimeout(loadVehicleImageWatermarker, 2000));

    });
    $(function () {
        $(".signature").keyup(function () {
            var text = $(this).val();
            text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            text = text.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            text = text.replace(/đ/g, "d");
            text = text.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            text = text.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            text = text.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            text = text.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            text = text.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            text = text.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            text = text.replace(/Đ/g, "D");
            $('.signature').val(text);
        }).keyup();
    });
});
function isEmpty(item) {
    if (item) {
        return false;
    } else {
        return true;
    }
}
function loadVehicleImageWatermarker(force) {
    var color = $("#cboColor").val();
    var fontType = $("#cboFont").val();
    var Id = $("#hdImageId").val()
    var colorText = "0,0,0";
    var type = "picturefromtext";
    if (isEmpty(color))
        colorText = "0,0,0";
    else
        colorText = color;
    var signature = $("#signature").val();
    //if (isEmpty(signature)) {
    //    toastr.error('Bạn cần phải nhập chữ ký.', { timeOut: 5000 })
    //    $("#signature").focus();
    //    return false;
    //}
    if (!force && signature.length < 3) return; //wasn't enter, not > 2 char

    showLoadingContactImage("content-image-slide", "viewImageSlide");
    var url = "/api/vehicle/watermark?Id=" + Id + "&color=" + color + "&signature=" + signature + "&fontTypeName=" + fontType + "&type=" + type; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var image = "<img " + "src='" + "data:image/jpg;base64," + result.data + "'/>";
                $("#viewImageSlide").html(image);
                hideLoadingContactImage("content-image-slide", "viewImageSlide");
            }
        },
        error: function (x, e) {

        },
        complete: function () {


        }
    });
}
function checkWatermark() {
    var url = "/api/vehicle/watermark-check"; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                return result.data
            }
        },
        error: function (x, e) {
            return 0;
        }
    });
}
function loadVehicleImageWatermarkerBackground(force) {
    var url = "/api/vehicle/watermark-background"; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                //toastr.success(result.data, { timeOut: 5000 })
            }
        },
        error: function (x, e) {

        },
        complete: function () {
            location.href = "/dang-ky-thanh-cong";
        }
    });
}
function loadVehicleColor(typeId) {
    var url = "/api/vehicle/color?typeId=" + typeId; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var TypeId = data[i].TypeId;
                    var ColorName = data[i].ColorName;
                    var ImagePath = data[i].ImagePath;
                    if (i == 0)
                        loadVehicle(TypeId, Id);
                    textHTML = textHTML.concat('<li><a href="javascript:void(0);" rel="' + Id + '" rev="' + typeId + '" class="' + bdrlf + '"><img src="' + ImagePath + '"></a></li>');
                }
                $(".vehicle-color").html(textHTML);
            }
        },
        error: function (x, e) {

        }
    });
}
function loadVehicle(typeId, colorId) {
    var url = "/api/vehicle/stamp?typeId=" + typeId + "&colorId=" + colorId; //sorttime: asc, desc
    $(".vehicle-image").html("");
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var TypeId = data[i].TypeId
                    var ColorId = data[i].ColorId;
                    var Name = data[i].Name;
                    var ImagePath = data[i].ImagePath;
                    if (i == 0) {
                        loadVehicleImage(Id);
                        loadVehicleImageDefault(Id);
                    }
                    if (i == 5) {
                        textHTML = textHTML.concat(' <li class="clearfix" style="clear:left; width:100%; float:none"></li>');
                    }
                    textHTML = textHTML.concat('<li class="' + bdrlf + '"><a data-toggle="tab" rel ="' + Id + '" href="#styles-tab1">' + Name + '</a></li>');
                }
                $(".vehicle-stamp").html(textHTML);
            }
        },
        error: function (x, e) {

        },
        complete: function () {

        }
    });
}
function loadVehicleImage(vehicleId) {
    var url = "/api/vehicle/image?vehicleId=" + vehicleId; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var VehicleId = data[i].VehicleId
                    var ImagePath = data[i].ImagePath;
                    var GroupOrder = data[i].GroupOrder;
                    var SortOrder = data[i].SortOrder;
                    if (i == 0) {
                        $("#hdImageId").val(Id);
                    }
                    textHTML = textHTML.concat('<li><a rel="' + VehicleId + '" rev="' + GroupOrder + '" vId ="' + Id + '" href="javascript:void(0);"><img src="' + ImagePath + '"></a></li>');

                }
                $(".vehicle-image").html(textHTML);
            }
        },
        error: function (x, e) {

        },
        complete: function () {


        }
    });
}
function loadVehicleImageDefault(vehicleId) {
    $("#viewImageSlide").empty();
    var textHTML = "";
    var url = "/api/vehicle/imagedefault?vehicleId=" + vehicleId; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = '<div class="custom1 owl-carousel owl-theme">';
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var ImagePath = data[i].ImagePath;
                    textHTML = textHTML.concat('<div class="item"><img src="' + ImagePath + '"></div>');

                }
                textHTML = textHTML.concat('</div>');
                $("#viewImageSlide").html(textHTML).fadeIn(300);

            }
        },
        error: function (x, e) {

        },
        complete: function () {

            $('.custom1').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'flipInX',
                loop: true,
                items: 1,
                margin: 0,
                stagePadding: 0,
                smartSpeed: 0

            });

        }
    });
}

function loadVehicleImageChange(Id, groupId, vehicleId) {
    var url = "/api/vehicle/loadimage?Id=" + Id + "&groupId=" + groupId + "&vehicleId=" + vehicleId; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = '<div class="custom1 owl-carousel owl-theme">';
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var ImagePath = data[i].ImagePath;
                    textHTML = textHTML.concat('<div class="item"><img src="' + ImagePath + '"></div>');

                }
                textHTML = textHTML.concat('</div>');
                $("#viewImageSlide").html(textHTML).fadeIn(300);

            }
        },
        error: function (x, e) {

        },
        complete: function () {
            // When AJAX call is complete, will fire upon success or when error is thrown
            loadVehicleImageWatermarker(false);
            $('.custom1').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'flipInX',
                loop: true,
                items: 1,
                margin: 0,
                stagePadding: 0,
                smartSpeed: 0
            });

        }
    });
}
function showLoadingContactImage(contentLoading, frmContent) {

    $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img style="min-width:32px" src="/img/loading_bar.gif" alt="Loading..." /></div>');
    $('#' + frmContent).hide();
}

function hideLoadingContactImage(contentLoading, frmContent) {
    $('#' + frmContent).show();
    $('#loading-image').remove();
}
function AllowNumberOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if ((charCode > 31) && (charCode < 48 || charCode > 57) && charCode != 8 && charCode != 37 && charCode != 39 && charCode != 45 && charCode != 46) {
        return false;
    }
    return true;
}