$(document).ready(function(event){
    SetTableData();

    //jquery for dynamically created html
    $(document).on('click', '.edit-btn', function(){
        $newInputTextForName = "<input type='text' class='newInputTextForName'/>";
        $newDDForElement = "<select name='element' class='newDDForElement'>\
                                <option value='Anemo' selected>Anemo</option>\
                                <option value='Geo'>Geo</option>\
                                <option value='Pyro'>Pyro</option>\
                                <option value='Electro'>Electro</option>\
                                <option value='Hydro'>Hydro</option>\
                                <option value='Cryo'>Cryo</option>\
                                <option value='Dendro'>Dendro</option>\
                            </select>";
        $newDDForRegion = "<select name='region' class='newDDForRegion'>\
                                <option value='Monstadt' selected>Monstadt</option>\
                                <option value='Liyue'>Liyue</option>\
                                <option value='Inazuma'>Inazuma</option>\
                                <option value='Sumeru'>Sumeru</option>\
                            </select>";
        $tempButtons = "<button type='button' class='save-btn'>Save</button>\
                        <button type='button' class='cancel-btn'>Cancel</button>";

        $(this).closest('tr').find('.td_name').html($newInputTextForName);
        $(this).closest('tr').find('.td_element').html($newDDForElement);
        $(this).closest('tr').find('.td_region').html($newDDForRegion);
        $(this).closest('tr').find('.td_buttons').html($tempButtons);
    });

    $(document).on('click', '.save-btn', function(){
        var characterID = $(this).closest('tr').find('.td_characterID').text();
        var newName = $(this).closest('tr').find('.newInputTextForName').val();
        var newElement = $(this).closest('tr').find('.newDDForElement').val();
        var newRegion = $(this).closest('tr').find('.newDDForRegion').val();

        var postData = 'characterID=' + characterID + '&name=' + newName + '&element=' + newElement + '&region=' + newRegion;

        $.ajax({
            url: './php/editRow.php',
            type: 'POST',
            data: postData,
            success: function(data, status, xhr) {
                console.log(data);
                SetTableData();
                Notify('edit');
            },
            error: function(jqXHR, status, errorThrown) {
                console.log(status);
            }
        });
    });

    $(document).on('click', '.cancel-btn', function(){
        SetTableData();
    });

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
        } else if ($action === 'edit') {
            $notification = "<h1 class='notification edited'>Row edited!</h1>";
        }
        $('#notifications-container').prepend($notification);
        $('#notifications-container h1:first-child').fadeIn(200).delay(2000).fadeOut('slow');
    }
});