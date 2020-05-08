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
            cboNganhHoc: {
                validators: {
                    notEmpty: {
                        message: 'Cần lựa chọn ngành học.'
                    }
                }
            },cboLoaiHinh: {
                validators: {
                    notEmpty: {
                        message: 'Cần lựa chọn loại hình xét tuyển.'
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
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var email = $('#txtMail').val();
            var nganhhoc = $('#cboNganhHoc').val();
            var loaihinh = $('#cboLoaiHinh').val();
            var emailto = "quyendn84@gmail.com";
            var url_source = "lp_phenikaa";
            var source = getUrlParameter('utm_source');
            if (isEmpty(source))
                url_source = "lp_phenikaa";
            else
                url_source = source;
            var check = checkPhoneNumber();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "email": email,"nganhhoc":nganhhoc,"loaihinh":loaihinh,"source": url_source, "emailto": emailto,"typeId" :3 }
            showLoadingContactImage('content-register', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Phenikaaservice",
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
                    $("#txtPhone").val('');
                    $('#txtMail').val('');
                    $('#cboNganhHoc').val('');
                    $('#cboLoaiHinh').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentReg');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "http://ts2020.phenikaa-uni.edu.vn/khoahoc-kythuat-congnghe/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegDownload2').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            cboNganhHoc2: {
                validators: {
                    notEmpty: {
                        message: 'Cần lựa chọn ngành học.'
                    }
                }
            },cboLoaiHinh2: {
                validators: {
                    notEmpty: {
                        message: 'Cần lựa chọn loại hình xét tuyển.'
                    }
                }
            },
            name2: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone2: {
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
            },email2: {
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

            var name = $('#txtName2').val();
            var phone = $('#txtPhone2').val();
            var email = $('#txtMail2').val();
            var nganhhoc = $('#cboNganhHoc2').val();
            var loaihinh = $('#cboLoaiHinh2').val();
            var emailto = "quyendn84@gmail.com";
            var url_source = "lp_phenikaa";
            var source = getUrlParameter('utm_source');
            if (isEmpty(source))
                url_source = "lp_phenikaa";
            else
                url_source = source;
            var check = checkPhoneNumber2();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "email": email,"nganhhoc":nganhhoc,"loaihinh":loaihinh,"source": url_source, "emailto": emailto,"typeId" :3 }
            showLoadingContactImage('content-register2', 'frmContentReg2');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Phenikaaservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#frmRegDownload2').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register2', 'frmContentReg2');
                },
                error: function(ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register', 'frmContentReg');
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtName2').val('');
                    $("#txtPhone2").val('');
                    $('#txtMail2').val('');
                    $('#cboNganhHoc2').val('');
                    $('#cboLoaiHinh2').val('');
                    $('#frmRegDownload2').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register2', 'frmContentReg2');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "http://ts2020.phenikaa-uni.edu.vn/khoahoc-kythuat-congnghe/dang-ky-thanh-cong.html";
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
