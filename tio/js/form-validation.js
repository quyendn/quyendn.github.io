// Form-Validation.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -

$(document).ready(function() {


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
    $('#frmRegProduct').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            amount: {
                validators: {
                    notEmpty: {
                        message: 'Số lượng không được để trống.'
                    },
                    digits: {
                        message: 'Chỉ nhận giá trị là chữ số.'
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
            color: {
                validators: {
                    notEmpty: {
                        message: 'Mầu sắc không được để trống.'
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
            address_city: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/Thành phố.'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#name').val();
            var phone = $('#phone').val();
            var number = $('#amount').val();
            var color = $('#color').val();
            var location = $('#location').val();;
            var emailto = "quyendn84@gmail.com";
            var webdomain = "vinaphone.com.vn";
            var dataJSON = { "name": name, "phone": phone, "number": number, "color": color, 'location': location, "emailto": emailto }
            location.href = '/cam-on.html';
            showLoadingImage();
            $.ajax({
                url: "https://alpha.f5academy.net/api/Vinaphoneservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegProduct').bootstrapValidator('resetForm', true);
                    $('#popupRegister').modal('hide');
                    hideLoadingImage();
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingImage();
                },
                complete: function(jqXHR, textStatus) {
                    $('#name').val('');
                    $("#phone").val('');
                    $('#location').val('');
                    $('#amount').val('');
                    $('#color').val('');
                    $('#frmRegProduct').bootstrapValidator('resetForm', true);
                    toastr.success('Bạn đã đăng ký mua hàng thành công. Vui lòng liên hệ tổng đài tư vấn miễn cước 1900 0020 khi cần hỗ trợ nhanh.', { timeOut: 5000 })
                    hideLoadingImage();
                    $('#popupRegister').modal('hide');
                    window.location.href = 'cam-on.html';
                    return false;
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    function showLoadingImage() {

        $('#content-product').empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#frmContentProduct').hide();

    }

    function hideLoadingImage() {
        $('#frmContentProduct').show();
        $('#loading-image').remove();
    }
   
    function showLoadingContactImage(contentLoading,frmContent) {

        $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#' + frmContent).hide();

    }

    function hideLoadingContactImage(contentLoading, frmContent) {
        $('#' + frmContent).show();
        $('#loading-image').remove();
    }
    
});