﻿// Form-Validation.js
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
   
    $('#frmDattiec').bootstrapValidator({
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
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'Ngày đặt tiệc không được để trống.'
                    }
                }
            }

        },
        onSuccess: function (e) {

            var name = $('#txtNameContact').val();
            var email = $('#txtMail').val();
            var phone = $('#txtPhoneContact').val();
            var location = '';
            var typeId = 1;
            var emailto = "quyendn84@gmail.com";
            var dataJSON = { "name": name, "phone": phone, "email": email, "location": location, "emailto": emailto };
            showLoadingContactImage('content-download', 'frmContentDownload');
            $.ajax({
                url: "https://alpha.f5academy.net/api/OOCservice",
                type: "Post",
                async: false,
                data: dataJSON,
                contentType: 'application/json; charset=utf-8',
                dataType: 'jsonp',
                success: function (states) {
                    $('#frmDattiec').bootstrapValidator('resetForm', true);
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                 },
                error: function (ex) {
                    toastr.error('Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
                },
                complete: function (jqXHR, textStatus) {
                    $('#txtNameContact').val('');
                    $("#txtMail").val('');
                    $('#txtPhoneContact').val('');
                    $('#cboLocation').val('');
                    $('#frmDattiec').bootstrapValidator('resetForm', true);
                    toastr.success('Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.', { timeOut: 5000 })
                    hideLoadingContactImage('content-download', 'frmContentDownload');
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