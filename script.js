$(document).ready(function(event){
    SetTableData();

    //jquery for dynamically created html
    $(document).on('click', '.delete-btn', function(){
        var characterID = $(this).attr('id');

        var postData = 'characterID=' + characterID;

        $.ajax({
            url: './php/deleteRow.php',
            type: 'POST',
            data: postData,
            success: function(data, status, xhr) {
                console.log(data);
                SetTableData();
                Notify('delete');
            },
            error: function(jqXHR, status, errorThrown) {
                console.log(status);
            }
        });
    });
    //===================================

    $('#btnSubmit').click(function(){
        var name = $('#txtName').val();
        var element = $('#ddElement').val();
        var region = $('#ddRegion').val();

        var postData = 'name=' + name + '&element=' + element + '&region=' + region;

        $.ajax({
            url: './php/insertRow.php',
            type: 'POST',
            data: postData,
            success: function(data, status, xhr) {
                console.log(data);
                ClearInputFields();
                SetTableData();
                Notify('insert');
            },
            error: function(jqXHR, status, errorThrown) {
                console.log(status);
            }
        });
    });

    $('#refresh-button').click(function(){
        SetTableData();
        Notify('refresh');
    });

    function SetTableData() {
        $.ajax({
            url: './php/retrieve.php',
            type: 'GET',
            dataType: 'html',
            success: function(data, status, xhr) {
                ClearTableData();
                $('#table-header').after(data);
            },
            error: function(jqXHR, status, errorThrown) {
                console.log(status);
            }
        });
    }

    function ClearTableData() {
        $("#genshin-table").find("tr:gt(0)").remove();
    }

    function ClearInputFields() {
        $('#txtName').val('');
        $('#ddElement').val('Anemo');
        $('#ddRegion').val('Monstadt');
    }

    function Notify($action) {
        if ($action === 'insert') {
            $('#notification').removeClass().addClass('notification-inserted').text('Insert success!');
            $('#notification').fadeIn('fast').delay(2000).fadeOut(500);
        } else if ($action === 'delete') {
            $('#notification').removeClass().addClass('notification-deleted').text('Delete success!');
            $('#notification').fadeIn('fast').delay(2000).fadeOut(500);
        } else if ($action === 'refresh') {
            $('#notification').removeClass().addClass('notification-refreshed').text('Table refreshed!');
            $('#notification').fadeIn('fast').delay(2000).fadeOut(500);
        }
    }
});