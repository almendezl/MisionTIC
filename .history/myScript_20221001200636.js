function getClients(){

    $.ajax({
        url:'https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        success: function(clients){
            console.log(clients);
            let cs= clients.items;
            $('#clientsList').append("<h2>Clients List</h2>");
            for(i = 0; i<cs.length; i++){
                $('#clientsList').append("<h2>"+cs[i].name+"</h2>");
                $('#clientsList').append("<h2>"+cs[i].email+"</h2>");
            }

        },
        error: function(xhr, status){
            alert("A problem has occurred");
        },
        complete: function(xhr, status){
            alert("Request made");
        }
    });

}

function setClient(){

    let clientId = $("#clientId").val();
    let clientName = $("#clientName").val();
    let clientEmail = $("#clientEmail").val();
    let clientAge = $("#clientAge").val();

    let data = {
        id: clientId,
        name: clientName,
        email: clientEmail,
        age: clientAge

    };

    let dataToSend = JSON.stringify(data);

    console.log(dataToSend);

    $.ajax({
        url:'https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);

        },
        error: function(xhr, status){
            //alert("A problem has occurred");
        },
        complete: function(xhr, status){
            //alert("Request made");
        }
    });

}