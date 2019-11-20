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
                url: "https://alpha.f5academy.net/api/TheManorservice",
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
                    window.location.href = "https://quyendn.github.io/manor/dang-ky-thanh-cong.html";
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
            var email = $('#txtEmailSub').val();
            var phone = $('#txtPhoneSub').val();
            var description = '';
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var check = checkPhoneNumber2();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone,  "email": email,"description": description, "emailto": emailto, "typeId": typeId };
            showLoadingContactImage('content-register-sub', 'frmContentRegSub');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TheManorservice",
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
                    window.location.href = "https://quyendn.github.io/manor/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegContact').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            emailcontact: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            namecontact: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phonecontact: {
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

            var name = $('#txtNameContact').val();
            var email = $('#txtEmailContact').val();
            var phone = $('#txtPhoneContact').val();
            var description = '';
            var emailto = "quyendn84@gmail.com";
            var typeId = 1;
            var check = checkPhoneNumber3();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone,  "email": email,"description": description, "emailto": emailto, "typeId": typeId };
            showLoadingContactImage('content-register-contact', 'frmContentRegContact');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TheManorservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegContact').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register-contact', 'frmContentRegContact');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register-contact', 'frmContentRegContact');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtNameSub').val('');
                    $("#txtEmailSub").val('');
                    $('#txtPhoneSub').val('');
                    $('#frmRegContact').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register-contact', 'frmContentRegContact');
                    window.location.href = "https://quyendn.github.io/manor/dang-ky-thanh-cong.html";
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
    function checkPhoneNumber3() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhoneContact').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneContact").focus();
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