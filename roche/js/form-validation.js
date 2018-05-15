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
    
    $('#frmRegDownload').bootstrapValidator({
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
            var address = "";
            var description = $('#txtContent').val();
            var emailto = "quyendn@gmail.com";
            var webdomain = "roche.vn";
            var dataJSON = { "fullname": name, "phone": phone, "email": email, "address": address, "description": description, 'webdomain': webdomain, "emailto": emailto }
            showLoadingContactImage('content-download', 'frmContentDownload');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Goldenservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                 },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                },
                complete: function (jqXHR, textStatus) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Roche sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ số điện thoại 18001597 khi cần hỗ trợ nhanh', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                    //location.href = 'cam-on.html';
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmMobile').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            
            name_top: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_top: {
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

            var name = $('#txtNameTop').val();
            var phone = $('#txtPhoneTop').val();
            var email = '';
            var address = '';
            var description ='';
            var emailto = "minhhien125814@gmail.com";
            var webdomain = "GoldenHills.vn";
            var dataJSON = { "fullname": name, "phone": phone, "email": email, "address": address, "description": description, 'webdomain': webdomain, "emailto": emailto }
            showLoadingContactImage('content-top-reg', 'formContentContactMobile');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Goldenservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-top-reg', 'formContentContactMobile');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-top-reg', 'formContentContactMobile');
                },
                complete: function (jqXHR, textStatus) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Golden Hills sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ số điện thoại 0929333888 khi cần hỗ trợ nhanh', { timeOut: 5000 })
                    hideLoadingContactImage('content-top-reg', 'formContentContactMobile');
                    //location.href = 'cam-on.html';
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmMobileBottom').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {

            name_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_mobile: {
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
            email_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtNameMobile').val();
            var phone = $('#txtPhoneMobile').val();
            var email = $('#txtEmailMobile').val();
            var address = '';
            var description = '';
            var emailto = "minhhien125814@gmail.com";
            var webdomain = "GoldenHills.vn";
            var dataJSON = { "fullname": name, "phone": phone, "email": email, "address": address, "description": description, 'webdomain': webdomain, "emailto": emailto }
            showLoadingContactImage('content-mobile-bottom-reg', 'formContentContactMobileBottom');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Goldenservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobileBottom').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-mobile-bottom-reg', 'formContentContactMobileBottom');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile-bottom-reg', 'formContentContactMobileBottom');
                },
                complete: function (jqXHR, textStatus) {
                    $('#frmMobileBottom').bootstrapValidator('resetForm', true);
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Golden Hills sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ số điện thoại 0929333888 khi cần hỗ trợ nhanh', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile-bottom-reg', 'formContentContactMobileBottom');
                    //location.href = 'cam-on.html';
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