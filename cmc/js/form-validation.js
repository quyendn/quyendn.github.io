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
    $('#frmSaleOffDauSo').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            phone2: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            }
        },
        onSuccess: function (e) {
            var phone = $('#txtPhone2').val();
            var typeId = 2;
            var isSend = 0;
            var emailto = "quyendn84@gmail.com";
            var dataJSON = { "phone": phone, "typeId": typeId, "isSend": isSend, "emailto": emailto }
            var check = checkPhoneNumber4();
            if (!check)
                return;
            showLoadingContactImage('content-loading-off-content', 'frmContentRegSaleOffDauSo');
            $.ajax({
                url: "https://alpha.f5academy.net/api/CMCservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmSaleOffDauSo').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off-content', 'frmContentRegSaleOffDauSo');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-loading-off-content', 'frmContentRegSaleOffDauSo');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtPhoneOffRight').val('');
                    $('#frmSaleOffDauSo').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off-content', 'frmContentRegSaleOffDauSo');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmSaleOffLeft').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            }
        },
        onSuccess: function (e) {
            var phone = $('#txtPhone').val();
            var typeId = 2;
            var isSend = 0;
            var emailto = "quyendn84@gmail.com";
            var dataJSON = { "phone": phone, "typeId": typeId, "isSend": isSend, "emailto": emailto }
            var check = checkPhoneNumber3();
            if (!check)
                return;
            showLoadingContactImage('content-loading-off-left', 'frmContentRegSaleOffLeft');
            $.ajax({
                url: "https://alpha.f5academy.net/api/CMCservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmSaleOffRight').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off-left', 'frmContentRegSaleOffLeft');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-loading-off-left', 'frmContentRegSaleOffLeft');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtPhoneOffRight').val('');
                    $('#frmSaleOffRight').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off-left', 'frmContentRegSaleOffLeft');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmSaleOffRight').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            phoneoffright: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            }
        },
        onSuccess: function (e) {
            var phone = $('#txtPhoneOffRight').val();
            var typeId = 1;
            var isSend = 0;
            var emailto = "quyendn84@gmail.com";
            var dataJSON = { "phone": phone, "typeId": typeId, "isSend": isSend, "emailto": emailto }
            var check = checkPhoneNumber();
            if (!check)
                return;
            showLoadingContactImage('content-loading-off-right', 'frmContentRegSaleOffRight');
            $.ajax({
                url: "https://alpha.f5academy.net/api/CMCservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmSaleOffRight').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off-right', 'frmContentRegSaleOffRight');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-loading-off-right', 'frmContentRegSaleOffRight');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtPhoneOffRight').val('');
                    $('#frmSaleOffRight').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off-right', 'frmContentRegSaleOffRight');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmSaleOff').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            phoneoff: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            }
        },
        onSuccess: function(e) {

    
            var phone = $('#txtPhoneOff').val();
            var typeId = 1;
            var isSend = 0;
            var emailto = "quyendn84@gmail.com";
            var dataJSON = { "phone": phone, "typeId": typeId, "isSend": isSend, "emailto": emailto }
            var check = checkPhoneNumber6();
            if (!check)
                return;
            showLoadingContactImage('content-loading-off', 'frmContentRegSaleOff');
            $.ajax({
                url: "https://alpha.f5academy.net/api/CMCservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmSaleOff').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off', 'frmContentRegSaleOff');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-loading-off', 'frmContentRegSaleOff');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtPhoneOff').val('');
                    $('#frmSaleOff').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading-off', 'frmContentRegSaleOff');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegContentDownload').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {

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
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtNameDownload').val();
            var phone = $('#txtPhoneDownload').val();
            var email = $('#txtEmailDownload').val();
            var address = "";
            var emailto = "quyendn@gmail.com";
            var dataJSON = { "name": name, "phone": phone, "address": address, "email": email, "emailto": emailto }
            var check = checkPhoneNumber3();
            if (!check)
                return;
            showLoadingContactImage('content-download', 'frmContentDownloadReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Kosyservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegContentDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentDownloadReg');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownloadReg');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameOff').val('');
                    $("#txtPhoneOff").val('');
                    $('#txtEmailOff').val('');
                    $('#frmRegContentDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentDownloadReg');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    $('#formDownload').modal('hide');
                    location.href = "https://quyendn.github.io/kosy/file/tai_lieu.zip";
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
    function checkPhoneNumber6() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhoneOff').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneOff").focus();
                return false;

            } else {
                return true;
            }
        } else {
            toastr.error('Bạn chưa điền số điện thoại.', { timeOut: 5000 })
            return false;
        }
    }
    function checkPhoneNumber() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhoneOffRight').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneOffRight").focus();
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
        var mobile = $('#txtPhoneOff').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneOff").focus();
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
    function checkPhoneNumber4() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var mobile = $('#txtPhone2').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhone2").focus();
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