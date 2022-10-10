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

    $('#refresh-button').click(function(){
        SetTableData();
        Notify('refresh');
    });

    function ClearTableData() {
        $("#genshin-table").find("tr:gt(0)").remove();
    }

    function ClearInputFields() {
        $('#txtName').val('');
        $('#ddElement').val('Anemo');
        $('#ddRegion').val('Monstadt');
    }

    function Notify($action) {
        $notification = '';
        if ($action === 'insert') {
            $notification = "<h1 class='notification inserted'>Insert success!</h1>";
        } else if ($action === 'delete') {
            $notification = "<h1 class='notification deleted'>Delete success!</h1>";
        } else if ($action === 'refresh') {
            $notification = "<h1 class='notification refreshed'>Table refreshed!</h1>";
        }
        $('#notifications-container').prepend($notification);
        $('#notifications-container h1:first-child').fadeIn(200).delay(2000).fadeOut('slow');
    }
});