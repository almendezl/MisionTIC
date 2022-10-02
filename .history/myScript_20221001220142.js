let urlCinema = "https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cinema/cinema";
let urlClient = "https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client";

/**
 * ----------------CINEMAS ---------------------
 */
function getCinemas(){

    $.ajax({
        url:  urlCinema,
        type: 'GET',
        dataType: 'json',

        success: function(clients){
            console.log(clients);
            let cs= clients.items;
            //$('#clientsList').append("<h2>Clients List</h2>");
            $('#clientsList').empty();
            $('#clientsList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Name</th><th scope='col'>Email</th><th scope='col'>Age</th> <th scope='col'>Option</th></tr></thead><tbody></tbody>");
            for(i = 0; i<cs.length; i++){
                //$('#clientsList').append("<b>"+cs[i].id+" "+cs[i].name+" </b> "+cs[i].email+"   <button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>DELETE</button>"+"<br>");
                $('#clientsList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].name+"</td><td>"+cs[i].email+"</td><td>"+cs[i].age+"</td><td>"+"<button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>DELETE</button></td></tr>");
                
            }

        },
        error: function(xhr, status){
            alert("A problem has occurred");
        },
        complete: function(xhr, status){
            //alert("Request made");
        }
    });

}

function setCinema(){

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
        url: urlCinema,
        type: 'POST',
        //dataType: 'json',
        data: dataToSend,
         contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#clientId").val('');
            $("#clientName").val('');
            $("#clientEmail").val('');
            $("#clientAge").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });

}

function updateCinema(){
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
        url: urlCinema,
        type: 'PUT',
        //dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#clientId").val('');
            $("#clientName").val('');
            $("#clientEmail").val('');
            $("#clientAge").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });
}

function deleteCinema(clientId){
    

    let data = {
        id: clientId

    };

    let dataToSend = JSON.stringify(data);

    console.log(dataToSend);

    $.ajax({
        url: urlCinema,
        type: 'DELETE',
        //dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#clientId").val('');
            $("#clientName").val('');
            $("#clientEmail").val('');
            $("#clientAge").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });
}

/**
 * ----------------CLIENTS ---------------------
 */

function getClients(){

    $.ajax({
        url: urlClient,
        type: 'GET',
        dataType: 'json',

        success: function(clients){
            console.log(clients);
            let cs= clients.items;
            //$('#clientsList').append("<h2>Clients List</h2>");
            $('#clientsList').empty();
            $('#clientsList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Name</th><th scope='col'>Email</th><th scope='col'>Age</th> <th scope='col'>Option</th></tr></thead><tbody></tbody>");
            for(i = 0; i<cs.length; i++){
                //$('#clientsList').append("<b>"+cs[i].id+" "+cs[i].name+" </b> "+cs[i].email+"   <button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>DELETE</button>"+"<br>");
                $('#clientsList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].name+"</td><td>"+cs[i].email+"</td><td>"+cs[i].age+"</td><td>"+"<button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>DELETE</button></td></tr>");
                
            }

        },
        error: function(xhr, status){
            alert("A problem has occurred");
        },
        complete: function(xhr, status){
            //alert("Request made");
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
        url: urlClient,
        type: 'POST',
        //dataType: 'json',
        data: dataToSend,
         contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#clientId").val('');
            $("#clientName").val('');
            $("#clientEmail").val('');
            $("#clientAge").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });

}

function updateClient(){
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
        url:urlClient,
        type: 'PUT',
        //dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#clientId").val('');
            $("#clientName").val('');
            $("#clientEmail").val('');
            $("#clientAge").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });
}

function deleteClient(clientId){
    

    let data = {
        id: clientId

    };

    let dataToSend = JSON.stringify(data);

    console.log(dataToSend);

    $.ajax({
        url:urlClient,
        type: 'DELETE',
        //dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#clientId").val('');
            $("#clientName").val('');
            $("#clientEmail").val('');
            $("#clientAge").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });
}