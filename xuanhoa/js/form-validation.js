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
                        max: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            },
            cboCity: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/thành phố'
                    }
                }
            },
            cboPartner: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Showroom/Đại lý'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var email = $('#txtEmail').val();
            var phone = $('#txtPhone').val();
            var description = '';
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var check = checkPhoneNumber();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone,  "email": email,"description": description, "emailto": emailto, "typeId": typeId };
            showLoadingContactImage('content-register', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Xuanhoaservice",
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
                    $('#txtName').val('');
                    $("#txtEmail").val('');
                    $('#txtPhone').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentReg');
                    window.location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegDownloadSub').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            emailsub: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            namesub: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phonesub: {
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
            cboSubCity: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/thành phố'
                    }
                }
            },
            cboSubPartner: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Showroom/Đại lý'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtNameSub').val();
            var email = '';
            var phone = $('#txtPhoneSub').val();
            var description = $('#txtDescription').val();
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var check = checkPhoneNumber2();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone,  "email": email,"description": description, "emailto": emailto, "typeId": typeId };
            showLoadingContactImage('content-register-sub', 'frmContentRegSub');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Xuanhoaservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegDownloadSub').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register-sub', 'frmContentRegSub');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register-sub', 'frmContentRegSub');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtNameSub').val('');
                    $("#txtEmailSub").val('');
                    $('#txtPhoneSub').val('');
                    $('#frmRegDownloadSub').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register-sub', 'frmContentRegSub');
                    window.location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmMobile').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            emailBrochure: {
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
            var email = $('#txtEmailBrochure').val();
            var emailto = "quyendn84@gmail.com";
            var typeId = 2;
            var dataJSON = { "city": "", "partner": "", "name": "", "phone": "", "email": email, "emailto": emailto, "typeId": typeId };
            showLoadingContactImage('content-mobile', 'formContentContactMobile');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Mazdaservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'frmContentReg');
                },
                complete: function(jqXHR, textStatus) {
                    $("#txtEmailBrochure").val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    window.location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

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

    function checkPhoneNumber() {
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

    function checkPhoneNumber2() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhoneSub').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneSub").focus();
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