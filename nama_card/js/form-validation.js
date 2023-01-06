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
    
    $('#frmMobile').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email không được để trống.'
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Email không đúng định dạng'
                    }
                }
            },
            fullname: {
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
            province: {
                validators: {
                    notEmpty: {
                        message: 'Cần phải chọn tỉnh thành'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var fullname = $('#fullname').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var province = $('#province').val();
            var rederect = false;
            var dataJSON = { "Name": fullname, "Email": email, "Phone": phone,"Province": province}
            showLoadingContactImage('content-mobile','formContentContactMobile');
            $.ajax({
                url: "https://music.epochcconverter.com/api/YoutubeSearch/CreateSheet",
                type: "GET",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    alert(states);
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    toastr.success('Đăng ký tư vấn mở thẻ thành công </br>Cảm ơn bạn đã tham gia chương trình.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                },
                error: function (ex) {
                    toastr.success('Đăng ký tư vấn mở thẻ thành công </br>Cảm ơn bạn đã tham gia chương trình.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile','formContentContactMobile');
                    $('#fullname').val('');
                    $("#phone").val('');
                    $('#email').val('');
                    $('#province').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                },
                complete: function (jqXHR, textStatus) {
                    $('#fullname').val('');
                    $("#phone").val('');
                    $('#email').val('');
                    $('#province').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    
    function showLoadingImage() {

        $('#content').empty().append('<div id="loading-image" align="center"><img src="imgs/ajax-loader.gif" alt="Loading..." /></div>');
        $('#formContentContact').hide();

    }

    function hideLoadingImage() {
        $('#formContentContact').show();
        $('#loading-image').remove();
    }
   
    function showLoadingContactImage(contentLoading,frmContent) {

        $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img src="imgs/ajax-loader.gif" alt="Loading..." /></div>');
        $('#' + frmContent).hide();

    }

    function hideLoadingContactImage(contentLoading, frmContent) {
        $('#' + frmContent).show();
        $('#loading-image').remove();
    }
});