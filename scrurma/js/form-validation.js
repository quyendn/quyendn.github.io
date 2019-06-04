// Form-Validation.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -

$(document).ready(function() {

    $("#form-number").hide();
    $("#form-number-view").hide();

    $('#cboType').on('change', function () {
        var Id = $(this).val();
        if(Id =="Liệu trình khác")
            $("#form-number").show();
        else
            $("#form-number").hide();
    });
    $('#cboTypeScurma').on('change', function () {
        var Id = $(this).val();
        if (Id == "Liệu trình khác")
            $("#form-number-view").show();
        else
            $("#form-number-view").hide();
    });
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
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            },
            type: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn liệu trình'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ không được để trống.'
                    }
                }
            }

        },
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var type = $('#cboType').val();
            var address = $('#txtAdd').val();
            var total = $('#txtNumber').val();
            
            var emailto = "quyendn84@gmail.com";
            var check = checkPhoneNumber();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "address": address, "type": type, "total": total, "emailto": emailto }
            showLoadingContactImage('content-register', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Scurmaservice",
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
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentReg');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    location.href = "https://quyendn.github.io/scrurma/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });
    $('#frmRegScrumaDownload').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            nameScruma: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phoneScruma: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    },
                    stringLength: {
                        min: 10,
                        message: 'Số điện thoại chỉ có thể là 10 số.'
                    }
                }
            },
            TypeScurma: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn liệu trình'
                    }
                }
            },
            addressScruma: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ không được để trống.'
                    }
                }
            }

        },
        onSuccess: function (e) {

            var name = $('#txtNameScruma').val();
            var phone = $('#txtPhoneScruma').val();
            var type = $('#cboTypeScurma').val();
            var address = $('#txtAddScruma').val();
            var total = $('#txtNumberView').val();
            var emailto = "quyendn84@gmail.com";
            var check = checkPhoneNumber2();
            if (!check)
                return;
            var dataJSON = { "name": name, "phone": phone, "address": address, "type": type, "total": total, "emailto": emailto }
            showLoadingContactImage('content-register-scurma', 'frmContentScurmaReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/Scurmaservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register-scurma', 'frmContentScurmaReg');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-register-scurma', 'frmContentReg');
                    $("#formbuynow").modal("hide");
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameScruma').val('');
                    $("#txtPhoneScruma").val('');
                    $('#cboTypeScurma').val('');
                    $('#txtAddScruma').val('');
                    $('#frmRegDownload').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-register', 'frmContentScurmaReg');
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    $("#formbuynow").modal("hide");
                    location.href = "https://quyendn.github.io/scrurma/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

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
        var mobile = $('#txtPhoneScruma').val();
        if (mobile !== '') {
            if (vnf_regex.test(mobile) == false) {
                toastr.error('Số điện thoại của bạn không đúng định dạng.', { timeOut: 5000 })
                $("#txtPhoneScruma").focus();
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
});