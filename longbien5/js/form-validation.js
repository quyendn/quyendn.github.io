﻿$(document).ready(function () { var t = { valid: "fa fa-check-circle fa-lg text-success", invalid: "fa fa-times-circle fa-lg", validating: "fa fa-refresh" }; function o(t, n) { $("#" + t).empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" style="min-width:32px" alt="Loading..." /></div>'), $("#" + n).hide() } function e(t, n) { $("#" + n).show(), $("#loading-image").remove() } $("#frmDattiec").bootstrapValidator({ message: "This value is not valid", excluded: [":disabled"], feedbackIcons: t, fields: { email: { container: "popover", validators: { notEmpty: { message: "Địa chỉ email không được để trống." }, emailAddress: { message: "Không đúng định dạng email" } } }, name: { container: "popover", validators: { notEmpty: { message: "Họ tên không được để trống." } } }, phone: { container: "popover", validators: { notEmpty: { message: "Điện thoại không được để trống." }, stringLength: { min: 10, max: 11, message: "Số điện thoại chỉ có thể là 10 hoặc 11 số." } } } }, onSuccess: function (t) { var n = { name: $("#txtNameContact").val(), email: $("#txtMail").val(), phone: $("#txtPhoneContact").val(), datecreate: $("#txtDate").val(), description: $("#txtDescription").val(), typeId: 4, emailto: "baogiahn@longbiengolf.vn" }; o("content-download", "frmContentDownload"), $.ajax({ url: "https://alpha.f5academy.net/api/Longbienservice", type: "Post", async: !1, data: n, contentType: "application/json; charset=utf-8", dataType: "jsonp", success: function (t) { $("#frmDattiec").bootstrapValidator("resetForm", !0), e("content-download", "frmContentDownload") }, error: function (t) { toastr.error("Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.", { timeOut: 5e3 }), e("content-download", "frmContentDownload") }, complete: function (t, n) { $("#txtNameContact").val(""), $("#txtMail").val(""), $("#txtPhoneContact").val(""), $("#txtDate").val(""), $("#txtDescription").val(""), $("#frmDattiec").bootstrapValidator("resetForm", !0), toastr.success("Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.", { timeOut: 5e3 }), e("content-download", "frmContentDownload"), location.href = "/cam-on.html" } }) } }).on("success.form.fv", function (t) { }), $("#frmRegPromotion").bootstrapValidator({ message: "This value is not valid", excluded: [":disabled"], feedbackIcons: t, fields: { email_pro: { validators: { notEmpty: { message: "Địa chỉ email không được để trống." }, emailAddress: { message: "Không đúng định dạng email" } } } }, onSuccess: function (t) { var n = { name: "", email: $("#txtEmailPromotion").val(), phone: "", datecreate: "", description: "", typeId: 6, emailto: "baogiahn@longbiengolf.vn" }; o("content-promotion", "frmContentPromotion"), $.ajax({ url: "https://alpha.f5academy.net/api/Longbienservice", type: "Post", async: !1, data: n, contentType: "application/json; charset=utf-8", dataType: "jsonp", success: function (t) { $("#frmRegPromotion").bootstrapValidator("resetForm", !0), e("content-promotion", "frmContentPromotion") }, error: function (t) { toastr.error("Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.", { timeOut: 5e3 }), e("content-promotion", "frmContentPromotion") }, complete: function (t, n) { $("#txtEmailPromotion").val(""), $("#frmRegPromotion").bootstrapValidator("resetForm", !0), toastr.success("Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.", { timeOut: 5e3 }), e("content-promotion", "frmContentPromotion"), location.href = "/cam-on.html" } }) } }).on("success.form.fv", function (t) { }), $("#frmRegDownload").bootstrapValidator({ message: "This value is not valid", excluded: [":disabled"], feedbackIcons: t, fields: { name_rg: { validators: { notEmpty: { message: "Họ tên không được để trống." } } }, phone_rg: { validators: { notEmpty: { message: "Điện thoại không được để trống." }, stringLength: { min: 10, max: 11, message: "Số điện thoại chỉ có thể là 10 hoặc 11 số." } } } }, onSuccess: function (t) { var n = { name: $("#txtNameRG").val(), email: "", phone: $("#txtPhoneRG").val(), datecreate: "", description: "", typeId: 5, emailto: "baogiahn@longbiengolf.vn" }; o("content-register", "frmContentReg"), $.ajax({ url: "https://alpha.f5academy.net/api/Longbienservice", type: "Post", async: !1, data: n, contentType: "application/json; charset=utf-8", dataType: "jsonp", success: function (t) { $("#frmRegDownload").bootstrapValidator("resetForm", !0), e("content-register", "frmContentReg") }, error: function (t) { toastr.error("Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.", { timeOut: 5e3 }), e("content-register", "frmContentReg") }, complete: function (t, n) { $("#txtNameContact").val(""), $("#txtPhoneContact").val(""), $("#frmRegDownload").bootstrapValidator("resetForm", !0), toastr.success("Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên lạc sớm nhất khi nhận thông tin.", { timeOut: 5e3 }), e("content-register", "frmContentReg"), location.href = "/cam-on.html" } }) } }).on("success.form.fv", function (t) { }) });