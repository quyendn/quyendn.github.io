﻿// Form-Validation.js
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
                        max: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            },
            cboLocation: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn khu vực đăng ký'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtNameDownload').val();
            var email = $('#txtEmailDownload').val();
            var phone = $('#txtPhoneDownload').val();
            var emailto = "linh.nth@mobifone.vn";
            var typeId = $('#cboLocation').val();
            var check = checkPhoneNumber();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "email": email,"typeId":typeId, "emailto": emailto };
            showLoadingContactImage('content-register', 'frmContentDownloadReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/MobifoneContactService",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentDownloadReg');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentDownloadReg');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtNameDownload').val('');
                    $("#txtEmailDownload").val('');
                    $('#txtPhoneDownload').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentDownloadReg');
                    window.location.href = "https://esms.mobifone.vn/smsbrandname/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegUserDownload').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            emaildownload: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            namedownload: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phonedownload: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            },
            cboLocation2: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn khu vực đăng ký'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtName').val();
            var email = $('#txtEmail').val();
            var phone = $('#txtPhone').val();
            var emailto = "linh.nth@mobifone.vn";
            var typeId = $('#cboLocation2').val();
            var check = checkPhoneNumber2();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "email": email,"typeId":typeId, "emailto": emailto };
            showLoadingContactImage('content-user-register', 'frmContentDownloadUserReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/MobifoneContactService",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-user-register', 'frmContentDownloadUserReg');
                    $("#formDownload").modal('hide');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentDownloadUserReg');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtEmail").val('');
                    $('#txtPhone').val('');
                    $('#frmRegUserDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-user-register', 'frmContentDownloadUserReg');
                    $("#formDownload").modal('hide');
                    window.location.href = "https://esms.mobifone.vn/smsbrandname/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });

    function showLoadingContactImage(contentLoading, frmContent) {

        $('#' + contentLoading).empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>');
        $('#' + frmContent).hide();
    }

    function hideLoadingContactImage(contentLoading, frmContent) {
        $('#' + frmContent).show();
        $('#loading-image').remove();
    }

    function checkPhoneNumber() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhoneDownload').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneDownload").focus();
                return false;

            } else {
                return true;
            }
        } else {
            toastr.error('Bạn chưa điền số điện thoại.', { timeOut: 5000 })
            return false;
        }
    }
    function checkPhoneNumber2() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhone').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhone").focus();
                return false;

            } else {
                return true;
            }
        } else {
            toastr.error('Bạn chưa điền số điện thoại.', { timeOut: 5000 })
            return false;
        }
    }

});