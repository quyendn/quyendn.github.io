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
            name_parent: {
                validators: {
                    notEmpty: {
                        message: 'Họ tên Cha/Mẹ/Người bảo hộ thí sinh không được để trống.'
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
            brith: {
                validators: {
                    notEmpty: {
                        message: 'ngày sinh không được để trống.'
                    }
                }
            },
            cboLocation: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn địa điểm đăng ký.'
                    }
                }
            },
            cboHinhThuc: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn hình thức tham gia.'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'Cần nhập nơi ở.'
                    }
                }
            },
            cboVitri: {
                validators: {
                    notEmpty: {
                        message: 'Cần chọn vị trí mong muốn.'
                    }
                }
            }

        },
        onSuccess: function(e) {

            var name = $('#txtName').val();
            var birthdate = $("#txtBrith").val();
            var hinhThuc = $("#cboHinhThuc").val();
            var city = $("#txtCity").val();
            var suckhoe = $("input[name='group1[]']:checked").val();
            var name_parent = $('#name_parent').val();
            var phone = $('#txtPhone').val();

            var email = $('#txtEmail').val();

            var location = $("#cboLocation").val();
            var viTri = $("#cboVitri").val();
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
            var emailto = "quyendn84@gmail.com";
            var dataJSON = {
                "name": name,
                "birthdate": birthdate,
                "hinhThuc": hinhThuc,
                "city": city,
                "suckhoe": suckhoe,
                "name_parent": name_parent,
                "phone": phone,
                "email": email,
                "location": location,
                "viTri": viTri,
                "nguon1": nguon1,
                "nguon2": nguon2,
                "nguon3": nguon3,
                "nguon4": nguon4,
                "nguon5": nguon5,
                "nguon6": nguon6,
                "emailto": emailto
            };
            var check = checkPhoneNumber();
            if (!check)
                return;
            showLoadingContactImage('content-register', 'frmContentReg');
            $.ajax({
                url: "https://alpha.f5academy.net/api/ToyotaV2service",
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
                    $("#modal_dangky").modal("hide");
                    window.location.href = "http://www.toyotavn.com.vn/vi/dong-gop-xa-hoi/van-hoa-xa-hoi/trai-he-bong-da/dang-ky-thanh-cong.html";
                }
            });
        }
    }).on('success.form.fv', function(e) {

    });

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