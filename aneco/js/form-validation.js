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
            address: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ không được để trống.'
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
            }
        },
        onSuccess: function (e) {

            var fullname = $('#fullname').val();
            var phone = $('#phone').val();
            var address = $('#address').val();
            var emailto = "quyendn84@gmail.com";
            var typeId = 0;
            var dataJSON = { "name": fullname, "address": address, "phone": phone,"typeId": typeId, "emailto": emailto }
            showLoadingContactImage('content-mobile','formContentContactMobile');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Anecoservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    if(states=="0")
                    {
                        toastr.error('Số điện thoại đã được đăng ký.', { timeOut: 5000 })
                        hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                        return false;
                    }
                    else
                    {
                        $('#frmMobile').bootstrapValidator('resetForm', true);
                        toastr.success('Cảm ơn bạn đã tham gia chương trình.', { timeOut: 5000 })
                        hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    }
                    
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile','formContentContactMobile');
                },
                complete: function (jqXHR, textStatus) {
                    $('#fullname').val('');
                    $("#phone").val('');
                    $('#address').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    window.location.href ="dang-ky-thanh-cong.html";
                    
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmMobile2').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            addressother: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ không được để trống.'
                    }
                }
            },
            fullnameother: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phoneother: {
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

            var fullname = $('#fullnameother').val();
            var phone = $('#phoneother').val();
            var address = $('#addressother').val();
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var dataJSON = { "name": fullname, "address": address, "phone": phone,"typeId": typeId, "emailto": emailto }
            showLoadingContactImage('content-mobile-other','formContentContactFooter');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Anecoservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    if(states=="0")
                    {
                        toastr.error('Số điện thoại đã được đăng ký.', { timeOut: 5000 })
                        hideLoadingContactImage('content-mobile-other', 'formContentContactFooter');
                        return false;
                    }
                    else
                    {
                        $('#frmMobile').bootstrapValidator('resetForm', true);
                        toastr.success('Cảm ơn bạn đã tham gia chương trình.', { timeOut: 5000 })
                        hideLoadingContactImage('content-mobile-other', 'formContentContactFooter');
                    }
                    
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile-other','formContentContactFooter');
                    
                },
                complete: function (jqXHR, textStatus) {
                    $('#fullnameother').val('');
                    $("#phoneother").val('');
                    $('#addressother').val('');
                    $('#frmMobile2').bootstrapValidator('resetForm', true);
                    window.location.href ="dang-ky-thanh-cong.html";
                    
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
   
    function showLoadingContactImage(contentLoading,frmContent) {

        $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#' + frmContent).hide();

    }

    function hideLoadingContactImage(contentLoading, frmContent) {
        $('#' + frmContent).show();
        $('#loading-image').remove();
    }
});