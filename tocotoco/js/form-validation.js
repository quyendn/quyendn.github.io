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
            }
        },
        onSuccess: function (e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var email = $('#txtEmail').val();
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var webdomain = "tocotoco";
            var dataJSON = { "name": name, "email": email, "phone": phone, "emailto": emailto }
            showLoadingContactImage('content-mobile','formContentContactMobile');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TocoTocoservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('formContentContactMobile', 'content-mobile');
                    toastr.success('Cảm ơn bạn đã đăng ký tham gia.', { timeOut: 5000 });
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 });
                    hideLoadingContactImage('content-mobile','formContentContactMobile');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtPhone").val('');
                    $('#txtEmail').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    window.location.href = "https://quyendn.github.io/tocotoco/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

        });
    $('#frmMobileFooter').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            emailfooter: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            namefooter: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phonefooter: {
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

            var name = $('#txtNameFooter').val();
            var phone = $('#txtPhoneFooter').val();
            var email = $('#txtEmailFooter').val();
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var webdomain = "tocotoco";
            var dataJSON = { "name": name, "email": email, "phone": phone, "emailto": emailto }
            showLoadingContactImage('content-mobile', 'formContentContactFooter');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TocoTocoservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobileFooter').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('formContentContactFooter', 'content-mobile-footer');
                    toastr.success('Cảm ơn bạn đã đăng ký tham gia.', { timeOut: 5000 });
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactFooter');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtPhone").val('');
                    $('#txtEmail').val('');
                    $('#frmMobileFooter').bootstrapValidator('resetForm', true);
                    window.location.href = "https://quyendn.github.io/tocotoco/dang-ky-thanh-cong.html";
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