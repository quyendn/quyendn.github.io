﻿$(document).ready(function () { function t() { $("#content-product").empty().append('<div id="loading-image" align="center"><img src="img/ajax-loader.gif" alt="Loading..." /></div>'), $("#frmContentProduct").hide() } function n() { $("#frmContentProduct").show(), $("#loading-image").remove() } var a = { valid: "fa fa-check-circle fa-lg text-success", invalid: "fa fa-times-circle fa-lg", validating: "fa fa-refresh" }; $("#frmRegProduct").bootstrapValidator({ message: "This value is not valid", excluded: [":disabled"], feedbackIcons: a, fields: { amount: { validators: { notEmpty: { message: "Số lượng không được để trống." }, digits: { message: "Chỉ nhận giá trị là chữ số." } } }, name: { validators: { notEmpty: { message: "Họ tên không được để trống." } } }, color: { validators: { notEmpty: { message: "Mầu sắc không được để trống." } } }, phone: { validators: { notEmpty: { message: "Điện thoại không được để trống." }, stringLength: { min: 10, max: 11, message: "Số điện thoại chỉ có thể là 10 hoặc 11 số." } } }, location: { validators: { notEmpty: { message: "Cần chọn Tỉnh/Thành phố." } } }, district: { validators: { notEmpty: { message: "Cần chọn Quận/Huyện." } } } }, onSuccess: function (a) { var o = $("#name").val(), e = $("#phone").val(), i = $("#amount").val(), c = $("#color").val(), r = $("#location").val(), s = { name: o, phone: e, number: i, color: c, location: r, district: $("#district").val(), emailto: "tiokid@mobifone.vn" }; r.href = "/cam-on.html", t(), $.ajax({ url: "https://alpha.f5academy.net/api/Mobifoneservice", type: "Post", async: !1, data: s, contentType: "application/json; charset=utf-8", dataType: "jsonp", success: function (t) { $("#frmRegProduct").bootstrapValidator("resetForm", !0), $("#popupRegister").modal("hide"), n() }, error: function (t) { toastr.error("Đã có lỗi trong quá trình đăng ký, mời bạn thử lại.", { timeOut: 5e3 }), n() }, complete: function (t, a) { return $("#name").val(""), $("#phone").val(""), $("#location").val(""), $("#amount").val(""), $("#color").val(""), $("#frmRegProduct").bootstrapValidator("resetForm", !0), toastr.success("Bạn đã đăng ký mua hàng thành công. Vui lòng liên hệ tổng đài tư vấn miễn cước 1900 0020 khi cần hỗ trợ nhanh.", { timeOut: 5e3 }), n(), $("#popupRegister").modal("hide"), window.location.href = "cam-on.html", !1 } }) } }).on("success.form.fv", function (t) { }) });