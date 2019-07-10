// Form-Validation.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -

$(document).ready(function () {


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

    $('#frmMobile').bootstrapValidator({
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
            var emailto = "anhntt@tmsgroup.vn";
            var typeId = 1;
            var webdomain = "f5academy";
            var rederect = false;
            var dataJSON = { "name": name, "email": email, "phone": phone, "typeId": typeId, "emailto": emailto }
            showLoadingContactImage('content-mobile', 'formContentContactMobile');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TSMservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('formContentContactMobile', 'content-mobile');
                    rederect = true;
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtPhone").val('');
                    $('#txtEmail').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    if (rederect == true)
                        window.location.href = "http://tmsphucyen.com.vn/uu-dai/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmContact').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email_contact: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name_contact: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_contact: {
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

            var name = $('#txtNameContact').val();
            var phone = $('#txtPhoneContact').val();
            var email = $('#txtEmailContact').val();
            var emailto = "anhntt@tmsgroup.vn";
            var typeId = 2;
            var webdomain = "f5academy";
            var rederect = false;
            var dataJSON = { "name": name, "email": email, "phone": phone, "typeId": typeId, "emailto": emailto }
            showLoadingContactImage('content-contact', 'formContentContact');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TSMservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('formContentContact', 'content-contact');
                    rederect = true;
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-contact', 'formContentContact');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameContact').val('');
                    $("#txtPhoneContact").val('');
                    $('#txtEmailContact').val('');
                    $('#frmContact').bootstrapValidator('resetForm', true);
                    if (rederect == true)
                        window.location.href = "http://tmsphucyen.com.vn/uu-dai/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmRegModal').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email_modal: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name_modal: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_modal: {
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

            var name = $('#name_modal').val();
            var phone = $('#phone_modal').val();
            var email = $('#email_modal').val();
            var emailto = "anhntt@tmsgroup.vn";
            var typeId = 1;
            var webdomain = "f5academy";
            var rederect = false;
            var dataJSON = { "name": name, "email": email, "phone": phone, "typeId": typeId, "emailto": emailto }
            showLoadingContactImage('content-modal', 'frmContentModal');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TSMservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegModal').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('frmContentModal', 'content-modal');
                    rederect = true;
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-modal', 'frmContentModal');
                },
                complete: function (jqXHR, textStatus) {
                    $('#name_modal').val('');
                    $("#phone_modal").val('');
                    $('#email_modal').val('');
                    $('#frmRegModal').bootstrapValidator('resetForm', true);
                    if (rederect == true)
                        window.location.href = "http://tmsphucyen.com.vn/uu-dai/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmRegModalInfo').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email_modal_info: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name_modal_info: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_modal_info: {
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

            var name = $('#name_modal_info').val();
            var phone = $('#phone_modal_info').val();
            var email = $('#email_modal_info').val();
            var emailto = "anhntt@tmsgroup.vn";
            var typeId = 2;
            var webdomain = "f5academy";
            var rederect = false;
            var dataJSON = { "name": name, "email": email, "phone": phone, "typeId": typeId, "emailto": emailto }
            showLoadingContactImage('content-modal-info', 'frmContentModalInfo');
            $.ajax({
                url: "https://alpha.f5academy.net/api/TSMservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegModalInfo').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('frmContentModalInfo', 'content-modal-info');
                    rederect = true;
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-modal', 'frmContentModalInfo');
                },
                complete: function (jqXHR, textStatus) {
                    $('#name_modal_info').val('');
                    $("#phone_modal_info").val('');
                    $('#email_modal_info').val('');
                    $('#frmRegModalInfo').bootstrapValidator('resetForm', true);
                    if (rederect == true)
                        window.location.href = "http://tmsphucyen.com.vn/uu-dai/dang-ky-thanh-cong.html";
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
});