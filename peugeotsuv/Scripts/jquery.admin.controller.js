var VEHICLE_TYPEID = {
    VEHICLE_5008: 1,
    VEHICLE_3008: 2
};
$(document).ready(function () {
    loadVehicleColor(VEHICLE_TYPEID.VEHICLE_5008);
    $("#cboVehicleType").on("change", function () {
        $("#cboVehicleColor").empty();
        $("#cboVehicleStamp").empty();
        var typeId = $(this).val();
        loadVehicleColor(typeId);
    });
    $("#cboVehicleColor").on("change", function () {
        $("#cboVehicleStamp").empty();
        var typeId = $("#cboVehicleType").val();
        var colorId = $(this).val();
        loadVehicle(typeId, colorId);
    });
    $("#cboVehicleStamp").on("change", function () {
        var vehicleId = $("#cboVehicleStamp").val();
        loadDefaultData(vehicleId);
    });
});

function loadVehicleColor(typeId) {
    var url = "/api/vehicle/color?typeId=" + typeId; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var TypeId = data[i].TypeId;
                    var ColorName = data[i].ColorName;
                    var ImagePath = data[i].ImagePath;
                    if (i == 0)
                        loadVehicle(TypeId, Id);
                    $("#cboVehicleColor").append('<option value="' + Id + '">' + ColorName + '</option>');
                }
            }
        },
        error: function (x, e) {
            $("#cboVehicleColor").append('<option value="0">Chọn mầu xe</option>');
        },
        complete: function (jqXHR, textStatus) {
            
        }
    });
}
function loadVehicle(typeId, colorId) {
    var url = "/api/vehicle/stamp?typeId=" + typeId + "&colorId=" + colorId; //sorttime: asc, desc
    $.ajax({
        type: 'GET',
        url: url,
        success: function (result) {
            if (result != null) {
                var data = result.data;
                var textHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var bdrlf = i == 0 ? "active" : "";
                    var Id = data[i].Id;
                    var TypeId = data[i].TypeId
                    var ColorId = data[i].ColorId;
                    var Name = data[i].Name;
                    var ImagePath = data[i].ImagePath;
                    if (i == 0)
                        loadDefaultData(Id);
                    $("#cboVehicleStamp").append('<option value="' + Id + '">' + Name + '</option>');
                }
            }
        },
        error: function (x, e) {

        },
        complete: function (jqXHR, textStatus) {

        }
    });
}
function loadDefaultData(vehicleId) {
    var table = $('#vehicle-table').DataTable();
    table.destroy();

    var url = "/Admin/LoadDataVehicleImage?vehicleId=" + vehicleId;
    var table = $('#vehicle-table').DataTable({
        processing: true,
        serverSide: true,
        "filter": true,
        "responsive": true,
        "language": {
            "url": "/Scripts/Vietnamese.json",
            "paginate": {
                "previous": '<i class="demo-psi-arrow-left"></i>',
                "next": '<i class="demo-psi-arrow-right"></i>'
            }
        },
        "columnDefs": [
           { "width": "20px", "targets": 0 },
           { "width": "40px", "targets": 1},
           { "width": "10px", "targets": 3},
           { "width": "10px", "targets": 4 },
           { "width": "10px", "targets": 5 }
        ],
        ajax: {
            url: url,
            type: "POST",
            datatype: "json"
        },
        columns: [{
            data: 'Id',
            name: 'Id'
        }, {
            data: 'VehicleName',
            name: 'Loại tem'
        },
            {
                data: null,
                render: function (data) {
                    var text = "<img src='" + data.ImagePath + "'>";
                    return text;
                },
                className: "text-center"
            },
            {
                data: 'GroupOrder',
                name: 'Group',
                className: "text-center"
            },
            {
                data: 'SortOrder',
                name: 'Thứ tự',
                className: "text-center"
            },
            {
                data: null,
                render: function (data) {
                    return '\n\
                        <a href="/Admin/EditVehicleImage?Id=' + data.Id + '" class="add-tooltip" data-modal="" title="Chỉnh sửa"><i class="fa fa-pencil-square fa-lg"></i></a>&nbsp;<a href="/Admin/DeleteVehicleImage?Id=' + data.Id + '"add-tooltip" data-modal="" title="Xóa"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></a>';
                },
                className: "text-center"
            }
        ],
        order: [
            [1, 'asc']
        ],
        rowCallback: function (row, data) {
            $(row).addClass('department_' + data.Id);
        }
    });
}