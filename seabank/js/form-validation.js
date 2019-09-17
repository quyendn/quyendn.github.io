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
            brith: {
                validators: {
                    notEmpty: {
                        message: 'Ngày sinh không được để trống.'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ không được để trống.'
                    }
                }
            },
            email: {
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

            var name = $('#txtName').val();
            var email = $('#txtEmail').val();
            var phone = $('#txtPhone').val();
            var birthdate = $("#txtBrith").val();
            var address = $('#txtAdd').val();
            var isSend = 0;
            var emailto = "quyendn84@gmail.com";
            var nguon1 = $("input[name='chk1[]']:checked").val();
            if (isEmpty(nguon1))
                nguon1 = "";
            var nguon2 = $("input[name='chk2[]']:checked").val();
            if (isEmpty(nguon2))
                nguon2 = "";
            var nguon3 = $("input[name='chk3[]']:checked").val();
            if (isEmpty(nguon3))
                nguon3 = "";
            var nguon4 = $("input[name='chk4[]']:checked").val();
            if (isEmpty(nguon4))
                nguon4 = "";
            var nguon5 = $("input[name='chk5[]']:checked").val();
            if (isEmpty(nguon5))
                nguon5 = "";
            var nguon6 = $("input[name='chk6[]']:checked").val();
            if (isEmpty(nguon6))
                nguon6 = "";
            var check = checkPhoneNumber();
            if (!check)
                return;
            var dataJSON = {
                "name": name,
                "birthdate": birthdate,
                "phone": phone,
                "email": email,
                "address": address,
                "info1": nguon1,
                "info2": nguon2,
                "info3": nguon3,
                "info4": nguon4,
                "info5": nguon5,
                "info6": nguon6,
                "emailto": emailto
            };
            showLoadingContactImage('content-download', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Seabankservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentReg');
                 },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentReg');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtEmail").val('');
                    $('#txtPhone').val('');
                    $('#txtDescription').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentReg');
                    window.location.href = "https://quyendn.github.io/seabank/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmRegPopupDownload').bootstrapValidator({
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
            phone_p: {
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
            brith: {
                validators: {
                    notEmpty: {
                        message: 'Ngày sinh không được để trống.'
                    }
                }
            },
            addess_p: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ không được để trống.'
                    }
                }
            },
            email_p: {
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

            var email = $('#txtEmailPopup').val();
            var phone = $('#txtPhonePopup').val();
            var address = $('#txtAddPopup').val();
            var isSend = 0;
            var emailto = "quyendn84@gmail.com";
            var check = checkPhoneNumber2();
            if (!check)
                return;
            var dataJSON = {
                "phone": phone,
                "email": email,
                "address": address,
                "emailto": emailto
            };
            showLoadingContactImage('content-popup-download', 'frmContent');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Seabankvoucher",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegPopupDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-popup-download', 'frmContent');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-popup-download', 'frmContent');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtEmail").val('');
                    $('#txtPhone').val('');
                    $('#txtDescription').val('');
                    $('#frmRegPopupDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-popup-download', 'frmContent');
                    $("#popup").hide();
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
    function isEmpty(item) {
        if (item) {
            return false;
        } else {
            return true;
        }
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
        var mobile = $('#txtPhonePopup').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhonePopup").focus();
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