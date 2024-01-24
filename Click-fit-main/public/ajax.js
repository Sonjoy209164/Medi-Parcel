// ajax call for the api
$(function () {
    $.get("http://numbersapi.com/1/30/date?json", function(data, status){
        if(status === 'success') {
            $("#api-text").text(data.text);
            $("#type").text(data.type);
            $("#date").text(data.year);
            $("#day").text(data.number);
        } else {
            $("#api-text").text('No quotes found');
        }
    });
})

$(function () {
    $('.quote-button').click(function () {
        $.get("http://numbersapi.com/1/30/date?json", function(data, status){
        if(status === 'success') {
            $("#api-text").text(data.text);
            $("#type").text(data.type);
            $("#date").text(data.year);
            $("#day").text(data.number);
        } else {
            $("#api-text").text('No quotes found');
        }
        });
    })
})

// dropingzone
Dropzone.autoDiscover = false;
$(function () {
    $("#my-dropzone").dropzone({
        url: '/uploadImages',
        maxFilesize: 5, // MB
        maxFiles: 10,
        addRemoveLinks: true,
        uploadMultiple: true,
        autoProcessQueue: false,
        paramName: () => 'images',
        method: 'post',
        parallelUploads: 10,
        init: function () {
            var wrapperThis = this;
            $('#formData').submit(function (e) {
                e.preventDefault();
                e.stopPropagation();
                wrapperThis.processQueue();
            })
        },
        success: function (files, status) {
            console.log(status);
            if (status.message === 'upload successful') {
                document.getElementById('formData').reset()
            }
        }
    });
})
