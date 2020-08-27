$(document).ready(function () {
    var faIcon = {
        valid: 'fa fa-check-circle fa-lg text-success',
        invalid: 'fa fa-times-circle fa-lg',
        validating: 'fa fa-refresh'
    };
    var nameValidators = {
        validators: {
            notEmpty: {
                message: 'Tên phòng ban không được để trống'
            }
        }
    },
        groupOrderValidators = {
            validators: {
                notEmpty: {
                    message: 'Nhóm không được để trống'
                },
                digits: {
                    message: 'Chỉ nhận giá trị là chữ số.'
                }
            }
        },
        sortOrderValidate = {
            validators: {
                notEmpty: {
                    message: 'Thứ tự hiện thị không được để trống'
                },
                digits: {
                    message: 'Chỉ nhận giá trị là chữ số.'
                }
            }
        };
    $("#btnDelete").on('click', function (e) {
        var Id = $('#hidId').val();
        var form = $('#frmDeleteDepartment');
        var formData = form.serialize();
        var url = '/Admin/DeleteVehicleImage';
        $.ajax({
            type: 'post',
            url: url,
            data: formData,
            success: function (data) {
                if (data == '1') {
                    toastr.success("Xóa nội dung thành công.", "Thành công");
                } else {
                    toastr.error("Xóa nội dung không thành công, mời bạn thử lại.", "Lỗi");
                }
                $('#myModal').dialog('close');
                var vehicleId = $("#cboVehicleStamp").val();
                loadDefaultData(vehicleId);
            }
        });
    });
    $('#frmCreateDepartment')
        .formValidation({
            excluded: [':disabled'],
            framework: 'bootstrap',
            feedbackIcons: faIcon,
            fields: {
                'GroupOrder': groupOrderValidators,
                'SortOrder': sortOrderValidate
            },
            onSuccess: function (e) {
                $("#frmCreateDepartment").on('submit', function (e) {
                    e.preventDefault();
                    var form = $('#frmCreateDepartment');
                    var formData = form.serialize();
                    var state = $("#btnSave").val();
                    var url = "/Admin/CreateNewVehicleImage";
                    var type = 'post';
                    if (state == 'update') {
                        type = 'put';
                        url = "/Admin/EditVehicleImage";
                    }
                    $.ajax({
                        type: type,
                        url: url,
                        data: formData,
                        success: function (data) {
                            if (state == 'save') {
                                toastr.success("Thêm mới dữ liệu thành công.", "Thành công");
                            } else {
                                toastr.success("Cập nhật dữ liệu thành công.", "Thành công");
                               
                            }
                            $("#frmCreateDepartment").trigger('reset');
                            $('#frmCreateDepartment').formValidation('resetForm', true);
                            $('#myModal').dialog('close');
                            var vehicleId = $("#cboVehicleStamp").val();
                            loadDefaultData(vehicleId);
                        }
                    });
                })
            }
        }).on('success.validator.fv', function (e, data) {

            if (data.field === 'code' &&
                data.validator === 'remote' &&
                (data.result.available === false || data.result.available === 'false')) {
                // The userName field passes the remote validator
                data.element // Get the field element
                    .closest('.form-group') // Get the field parent

                // Add has-warning class
                .removeClass('has-success')
                    .addClass('has-warning')

                // Show message
                .find('small[data-fv-validator="remote"][data-fv-for="userName"]')
                    .show();
            }
        })
        .on('err.validator.fv', function (e, data) {
            // We need to remove has-warning class
            // when the field doesn't pass any validator
            if (data.field === 'code') {
                data.element
                    .closest('.form-group')
                    .removeClass('has-warning');
            }
        });
});

function AllowNumberOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if ((charCode > 31) && (charCode < 48 || charCode > 57) && charCode != 8 && charCode != 37 && charCode != 39 && charCode != 45 && charCode != 46) {
        return false;
    }
    return true;
}