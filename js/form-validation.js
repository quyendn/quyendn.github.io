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
                        message: 'Cần đăng ký thời gian tư vấn.'
                    }
                }
            }
        },
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var phone = $('#txtPhone').val();
            var city = $('#address_city').val();
            var time = $('#cboTime').val();
            var emailto = "anh.phuthixuan@saint-gobain.com";
            var typeId =1;
            var webdomain = "http://vinhtuong.com";
            var dataJSON = { "city": city, "time": time, "name": name, "phone": phone, 'typeId': typeId, "emailto": emailto }
            showLoadingImage();
            $.ajax({
                url: "//report.f5academy.net/api/VinhTuongservice",
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
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Vĩnh Tường sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ tổng đài tư vấn miễn cước 1800 1218 khi cần hỗ trợ nhanh.', { timeOut: 5000 })
                    hideLoadingImage();
                    location.href = 'cam-on.html';
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
                        message: 'Cần đăng ký thời gian tư vấn.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#txtNameMobile').val();
            var phone = $('#txtPhoneMobile').val();
            var city = $('#address_city_mobile').val();
            var time = $('#cboTimeMobile').val();
            var emailto = "anh.phuthixuan@saint-gobain.com";
            var typeId = 1;
            var webdomain = "http://vinhtuong.com";
            var dataJSON = { "city": city, "time": time, "name": name, "phone": phone, 'typeId': typeId, "emailto": emailto }
            showLoadingContactImage('content-mobile','formContentContactMobile');
            $.ajax({
                url: "//report.f5academy.net/api/VinhTuongservice",
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
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Vĩnh Tường sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ tổng đài tư vấn miễn cước 1800 1218 khi cần hỗ trợ nhanh.', { timeOut: 5000 })
                    hideLoadingContactImage('content-mobile', 'formContentContactMobile');
                    location.href = '/cam-on.html';
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
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
            name_download: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_download: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    }
                }
            },
            address_city_download: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/Thành phố.'
                    }
                }
            },
            cbo_time_download_1: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn tư vấn giải pháp.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#name_download').val();
            var phone = $('#phone_download').val();
            var city = $('#address_city_download').val();
            var time = $('#cbo_time_download').val();
            var emailto = "anh.phuthixuan@saint-gobain.com";
            var typeId = 2;
            var webdomain = "http://vinhtuong.com";
            var dataJSON = { "city": city, "time": time, "name": name, "phone": phone, 'typeId': typeId, "emailto": emailto }
            showLoadingContactImage('content-download', 'frmContentDownload');
            $.ajax({
                url: "//report.f5academy.net/api/VinhTuongservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmMobile').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                    $('#downloadModal').modal('hide');
                 },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                },
                complete: function (jqXHR, textStatus) {
                    $('#downloadModal').modal('hide');
                    $('#name_download').val('');
                    $("#phone_download").val('');
                    $('#address_city_download').val('');
                    $('#cbo_time_download').val('');
                    $('#frmContentDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Vĩnh Tường sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ tổng đài tư vấn miễn cước 1800 1218 khi cần hỗ trợ nhanh', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                   
                    location.href = 'cam-on.html';
                }
            });
        }
    }).on('success.form.fv', function (e) {

    });
    $('#frmRegGift').bootstrapValidator({
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
            name_gift: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên không được để trống.'
                    }
                }
            },
            phone_gift: {
                validators: {
                    notEmpty: {
                        message: 'Điện thoại không được để trống.'
                    }
                }
            },
            address_city_gift: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn Tỉnh/Thành phố.'
                    }
                }
            },
            cbo_time_gift_1: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn tư vấn giải pháp.'
                    }
                }
            }
        },
        onSuccess: function (e) {

            var name = $('#name_gift').val();
            var phone = $('#phone_gift').val();
            var city = $('#address_city_gift').val();
            var time = $('#cbo_time_gift').val();
            var emailto = "anh.phuthixuan@saint-gobain.com";
            var typeId = 3;
            var webdomain = "http://vinhtuong.com";
            var dataJSON = { "city": city, "time": time, "name": name, "phone": phone, 'typeId': typeId, "emailto": emailto }
            showLoadingContactImage('content-gift', 'frmContentGift');
            $.ajax({
                url: "//report.f5academy.net/api/VinhTuongservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmRegGift').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-gift', 'frmContentGift');
                    $('#registerModal').modal('hide');
                },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-gift', 'frmContentGift');
                },
                complete: function (jqXHR, textStatus) {
                    $('#registerModal').modal('hide');
                    $('#name_gift').val('');
                    $("#phone_gift").val('');
                    $('#address_city_gift').val('');
                    $('#cbo_time_gift').val('');
                    $('#frmContentDownload').bootstrapValidator('resetForm', true);
                    toastr.success('Bạn đã đăng ký tư vấn thành công. Vĩnh Tường sẽ liên hệ lại bạn trong vòng 24 giờ làm việc. Vui lòng liên hệ tổng đài tư vấn miễn cước 1800 1218 khi cần hỗ trợ nhanh', { timeOut: 5000 })
                    hideLoadingContactImage('content-gift', 'frmContentGift');
                    location.href = '/cam-on.html';
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
