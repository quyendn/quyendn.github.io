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
    $('#formContact').bootstrapValidator({
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
                    }
                }
            },
            address_city: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/Thành phố.'
                    }
                }
            },
            time: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn thời gian tư vấn.'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var city = $('#address_city').val();
            var time = $('#cboTime').val();
            var emailto = "quyendn84@gmail.com";
            var typeId =1;
            var webdomain = "http://vinhtuong.com";
            var dataJSON = { "city": city, "time": time, "name": name, "phone": phone, 'typeId': typeId, "emailto": emailto }
            showLoadingImage();
            $.ajax({
                url: "http://123.30.181.161:8025/api/VinhTuongservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function(states) {
                    $('#formContact').bootstrapValidator('resetForm', true);
                    hideLoadingImage();
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingImage();
                },
                complete: function(jqXHR, textStatus) {
                    $('#txtName').val('');
                    $("#txtPhone").val('');
                    $('#address_city').val('');
                    $('#cboTime').val('');
                    $('#formContact').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingImage();
                    location.href = '/cam-on.html';
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
            email_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    }
                }
            },
            address_city_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/Thành phố.'
                    }
                }
            },
            time_mobile: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn thời gian tư vấn.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtNameMobile').val();
            var phone = $('#txtPhoneMobile').val();
            var email = $('#txtEmailMobile').val();
            var emailto = "hotro@firstreal.com.vn";
            var webdomain = "reverview";
            var address = "";
            var dataJSON = { "fullname": name, "phone": phone, "email": email, "address": address, 'webdomain': webdomain, "emailto": emailto }
            showLoadingContactImage('content-mobile','formContentContactMobile');
            $.ajax({
                url: "https://alpha.f5academy.net/api/RiverViewservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('formContentContactMobile', 'content-mobile');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile','formContentContactMobile');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameMobile').val('');
                    $("#txtPhoneMobile").val('');
                    $('#address_city_mobile').val('');
                    $('#cboTimeMobile').val('');
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    location.href = '/loi-cam-on.html';
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmContactFooter').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email_footer: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name_footer: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_footer: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtNameFooter').val();
            var phone = $('#txtPhoneFooter').val();
            var email = $('#txtEmailFooter').val();
            var emailto = "quyendn84@gmail.com";
            var webdomain = "tammy";
            var address = "";
            var dataJSON = { "fullname": name, "phone": phone, "email": email, "address": address, 'webdomain': webdomain, "emailto": emailto }
            showLoadingContactImage('contact-footer', 'formContentContactFooter');
            $.ajax({
                url: "https://alpha.f5academy.net/api/RiverViewservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('contact-footer', 'formContentContactFooter');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('contact-footer', 'formContentContactFooter');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameFooter').val('');
                    $("#txtPhoneFooter").val('');
                    $('#txtEmailFooter').val('');
                    $('#frmContactFooter').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('contact-footer', 'formContentContactFooter');
                    
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmContactCenter').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            email_center: {
                validators: {
                    notEmpty: {
                        message: 'Địa chỉ email không được để trống.'
                    },
                    emailAddress: {
                        message: 'Không đúng định dạng email'
                    }
                }
            },
            name_center: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_center: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtNameCenter').val();
            var phone = $('#txtPhoneCenter').val();
            var email = $('#txtEmailCenter').val();
            var emailto = "hotro@firstreal.com.vn";
            var webdomain = "reverview";
            var address = "";
            var dataJSON = { "fullname": name, "phone": phone, "email": email, "address": address, 'webdomain': webdomain, "emailto": emailto }
            showLoadingContactImage('content-center', 'formContentContactCenter');
            $.ajax({
                url: "https://alpha.f5academy.net/api/RiverViewservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-center', 'formContentContactCenter');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-center', 'formContentContactCenter');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameFooter').val('');
                    $("#txtPhoneFooter").val('');
                    $('#txtEmailFooter').val('');
                    $('#frmContactFooter').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-center', 'formContentContactCenter');
                    location.href = '/loi-cam-on.html';
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
});