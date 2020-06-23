// Form-Validation.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -

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
            }
        },
        onSuccess: function (e) {

            var fullname = $('#fullname').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var emailto = "maipham108@gmail.com";
            var descripton = $('#txtContent').val();
            var rederect = false;
            var dataJSON = { "name": fullname, "email": email, "phone": phone, "description": descripton, "emailto": emailto }
            showLoadingContactImage('content-mobile', 'formContentContactMobile');
            $.ajax({
                url: "http://alpha.f5academy.net/api/Pjicoservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ý tư vấn.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    rederect = true;

                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                },
                complete: function (jqXHR, textStatus) {
                    $('#fullname').val('');
                    $("#phone").val('');
                    $('#address').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    if (rederect == true)
                        window.location.href = "https://ipjico.vn/uu-dai-bao-hiem-vat-chat-xe-o-to/dang-ky-thanh-cong.html";

                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    
    function showLoadingImage() {

        $('#content').empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#formContentContact').hide();

    }

    function hideLoadingImage() {
        $('#formContentContact').show();
        $('#loading-image').remove();
    }

    function showLoadingContactImage(contentLoading, frmContent) {

        $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#' + frmContent).hide();

    }

    function hideLoadingContactImage(contentLoading, frmContent) {
        $('#' + frmContent).show();
        $('#loading-image').remove();
    }
});