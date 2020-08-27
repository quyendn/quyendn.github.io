var MSG_STATUS = {
    FORBIDDEN_FILE_TYPE: 1,
    FILE_SIZE_LIMIT_EXCEEDED: 2

};
$(function () {
    $('#uploadify').uploadifive({
        'uploadScript': '/apifile/files/upload',
        'auto': true,
        'multi': true,
        'fileSizeLimit': 1024*1024*2,
        'fileDesc': 'Image Files',
        'fileExt': '*.jpg;*.jpeg;*.gif;*.png',
        'onUploadComplete': function (file, data) {
            if (data == MSG_STATUS.FORBIDDEN_FILE_TYPE) {
                toastr.error('File chỉ hỗ trợ định dạng *.jpg,*.jpeg,*.gif,*.png', "Lỗi");
                $('#uploadify').uploadifive('clearQueue');
                return;
            }
            else if (data == MSG_STATUS.FILE_SIZE_LIMIT_EXCEEDED) {
                toastr.error('File chỉ hỗ trợ dung lượng 2M', "Lỗi");
                $('#uploadify').uploadifive('clearQueue');
                return;
            }
            else {
                var param = { "PathImage": data };

                $.ajax({
                    type: "POST",
                    data: param,
                    url: '/apifile/files/makesession',
                    success: function (result) {
                    },
                    error: function (err, scnd) {
                    }
                });
                $("#input_file_avatar").val(data);
                var oImg = document.createElement("img");
                oImg.setAttribute('src', data);
                oImg.setAttribute('width', '50px');
                var dvContent = document.getElementById("view_img_1");
                dvContent.appendChild(oImg);
            }
        },
        'onFallback': function () {
            toastr.warning('HTML5 is not supported in this browser.', "Lỗi")
        }
    });

});