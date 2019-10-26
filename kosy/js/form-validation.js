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
                        message: 'Số điện thoại chỉ có thể là 10số.'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var email = $('#txtEmail').val();
            var address = $('#txtAdd').val();
            var emailto = "phongtruyenthong@kosy.vn";
            var url_source = "lp_kosy";
            var source = getUrlParameter('utm_source');
            if (isEmpty(source))
                url_source = "lp_kosy";
            else
                url_source = source;
            var check = checkPhoneNumber();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "address": address, "email": email, "source": url_source, "emailto": emailto }
            showLoadingContactImage('content-register', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Kosyservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentReg');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentReg');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtPhone").val('');
                    $('#txtMail').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentReg');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmSaleOff').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
           
            nameoff: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
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

            var name = $('#txtNameOff').val();
            var phone = $('#txtPhoneOff').val();
            var email = $('#txtEmailOff').val();
            var address = $('#txtAddOff').val();
            var emailto = "phongtruyenthong@kosy.vn";
            var url_source = "lp_kosy";
            var source = getUrlParameter('utm_source');
            if (isEmpty(source))
                url_source = "lp_kosy";
            else
                url_source = source;
            var dataJSON = { "name": name, "phone": phone, "address": address, "email": email, "source": url_source, "emailto": emailto }
            var check = checkPhoneNumber2();
            if (!check)
                return;
            showLoadingContactImage('content-loading', 'frmContentRegSaleOff');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Kosyservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmSaleOff').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-loading', 'frmContentRegSaleOff');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-loading', 'frmContentRegSaleOff');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtNameOff').val('');
                    $("#txtPhoneOff").val('');
                    $('#txtEmailOff').val('');
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
            var emailto = "phongtruyenthong@kosy.vn";
            var url_source = "lp_kosy";
            var source = getUrlParameter('utm_source');
            if (isEmpty(source))
                url_source = "lp_kosy";
            else
                url_source = source;
            var dataJSON = { "name": name, "phone": phone, "address": address, "email": email, "source": url_source, "emailto": emailto }
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
                    location.href = "/file/tai_lieu.zip";
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
    function isEmpty(item) {
        if (item) {
            return false;
        } else {
            return true;
        }
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
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
});