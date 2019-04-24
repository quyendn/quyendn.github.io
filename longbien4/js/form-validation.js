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
    $('#frmDattiec').bootstrapValidator({
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
            date: {
                validators: {
                    notEmpty: {
                        message: 'Ngày đặt tiệc không được để trống.'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtNameContact').val();
            var email = $('#txtMail').val();
            var phone = $('#txtPhoneContact').val();
            var datecreate = $('#txtDate').val();
            var description = $('#txtDescription').val();
            var typeId = 7;
            var emailto = "baogiahn@longbiengolf.vn";
            var dataJSON = { "name": name, "email": email, "phone": phone, "datecreate": datecreate, "description": description, 'typeId': typeId, "emailto": emailto };
            showLoadingContactImage('content-download', 'frmContentDownload');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Longbienservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmDattiec').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtNameContact').val('');
                    $("#txtMail").val('');
                    $('#txtPhoneContact').val('');
                    $('#txtDate').val('');
                    $('#txtDescription').val('');
                    $('#frmDattiec').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                    location.href = "/cam-on.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegPromotion').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email_pro: {
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
        onSuccess: function(e) {
            var name = '';
            var email = $('#txtEmailPromotion').val();
            var phone = '';
            var datecreate = '';
            var description = '';
            var typeId = 9;
            var emailto = "baogiahn@longbiengolf.vn";
            var dataJSON = { "name": name, "email": email, "phone": phone, "datecreate": datecreate, "description": description, 'typeId': typeId, "emailto": emailto };
            showLoadingContactImage('content-promotion', 'frmContentPromotion');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Longbienservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegPromotion').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-promotion', 'frmContentPromotion');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-promotion', 'frmContentPromotion');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtEmailPromotion').val('');
                    $('#frmRegPromotion').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-promotion', 'frmContentPromotion');
                    location.href = "/cam-on.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegDownload').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            name_rg: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_rg: {
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
        onSuccess: function(e) {

            var name = $('#txtNameRG').val();
            var email = '';
            var phone = $('#txtPhoneRG').val();
            var datecreate = '';
            var description = '';
            var typeId = 8;
            var emailto = "baogiahn@longbiengolf.vn";
            var dataJSON = { "name": name, "email": email, "phone": phone, "datecreate": datecreate, "description": description, 'typeId': typeId, "emailto": emailto };
            showLoadingContactImage('content-register', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Longbienservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentReg');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentReg');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtNameContact').val('');
                    $('#txtPhoneContact').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentReg');
                    location.href = "/cam-on.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });

    function showLoadingImage() {

        $('#content').empty().append('<div id="loading-image" align="center"><img style="min-width:32px" src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#formContentContact').hide();
    }

    function hideLoadingImage() {
        $('#formContentContact').show();
        $('#loading-image').remove();
    }

    function showLoadingContactImage(contentLoading, frmContent) {

        $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img style="min-width:32px" src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#' + frmContent).hide();
    }

    function hideLoadingContactImage(contentLoading, frmContent) {
        $('#' + frmContent).show();
        $('#loading-image').remove();
    }
});