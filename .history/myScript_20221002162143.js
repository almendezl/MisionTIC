let urlCinema = "https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cinema/cinema";
let urlClient = "https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client";
let urlMessage = "https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message";


/**
 * ----------------CINEMAS ---------------------
 */
function getCinemas(){

    $.ajax({
        url:  urlCinema,
        type: 'GET',
        dataType: 'json',

        success: function(cinemas){
            console.log(cinemas);
            let cs= cinemas.items;
            //$('#clientsList').append("<h2>Clients List</h2>");
            $('#cinemasList').empty();
            $("#editCinema").empty();
            $("#editCinema").append("<br>");
            if(cs.length > 0){
                
                $('#cinemasList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Owner</th><th scope='col'>Capacity</th><th scope='col'>Category Id</th> <th scope='col'>Name</th><th scope='col'>Options</th></tr></thead><tbody></tbody>");
                for(i = 0; i<cs.length; i++){
                    
                    $('#cinemasList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].owner+"</td><td>"+cs[i].capacity+"</td><td>"+cs[i].category_id+"</td><td>"+cs[i].name+"</td><td>"+"<button class='btn btn-secondary' onclick='editCinema("+JSON.stringify(cs[i])+")'>EDIT</button> <button class='btn btn-danger' onclick='deleteCinema("+cs[i].id+")'>DELETE</button></td></tr>");
                    
                }
            }else{
                $('#cinemasList').append("<h4 class='text-center'>No entries</h4>");
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
function editCinema(item){
    $("#editCinema").append(" <div class=' p-2 rounded border border-secondary' ><form action=''><div class='form-group'><h4 class='label label-default' >Id: </h4><input disabled class='form-control' type='number' id='cinemaIdEdit'></div><div class='form-group'><h4 class='label label-default' >Owner: </h4><input class='form-control' type='text' id='cinemaOwnerEdit'></div><div class='form-group'><h4 class='label label-default' >Capacity: </h4><input class='form-control' type='number' id='cinemaCapacityEdit' ></div><div class='form-group'><h4 class='label label-default' >Category Id: </h4><input class='form-control' type='number' id='cinemaCategoryEdit'></div><div class='form-group'><h4 class='label label-default' >Name: </h4><input class='form-control' type='text' id='cinemaNameEdit'><br></div></form></div><br><button class='btn btn-warning' onclick='updateCinema()'>UPDATE CINEMA</button><br><br>");
    console.log(item);
    $("#cinemaIdEdit").val(item.id);
    $("#cinemaOwnerEdit").val(item.owner);
    $("#cinemaCapacityEdit").val(item.capacity);
    $("#cinemaCategoryEdit").val(item.category_id);
    $("#cinemaNameEdit").val(item.name);


}

function setCinema(){

    let id = $("#cinemaId").val();
    let owner = $("#cinemaOwner").val();
    let capacity = $("#cinemaCapacity").val();
    let category = $("#cinemaCategory").val();
    let name = $("#cinemaName").val();

    $("#cinemaAlert").empty();
    if (id != "" && owner != "" && capacity != "" && category != "" && name != ""){
        let data = {
            id: id,
            owner: owner,
            capacity: capacity,
            category_id: category,
            name: name
    
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
                $("#cinemaId").val('');
                $("#cinemaOwner").val('');
                $("#cinemaCapacity").val('');
                $("#cinemaCategory").val('');
                $("#cinemaName").val('');
                getCinemas();
            },
            error: function(xhr, status){
                //alert("A problem has occurred");
               
            },
            complete: function(xhr, status){
                //alert("Request made");
                
            }
        });

    }else{
        $("#cinemaAlert").append("<div class='alert alert-danger' role='alert'>There can be no empty fields!</div>");
    }

}

function updateCinema(){
    let id = $("#cinemaIdEdit").val();
    let owner = $("#cinemaOwnerEdit").val();
    let capacity = $("#cinemaCapacityEdit").val();
    let category = $("#cinemaCategoryEdit").val();
    let name = $("#cinemaNameEdit").val();

    let data = {
        id: id,
        owner: owner,
        capacity: capacity,
        category_id: category,
        name: name

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
            $("#cinemaIdEdit").val('');
            $("#cinemaOwnerEdit").val('');
            $("#cinemaCapacityEdit").val('');
            $("#cinemaCategoryEdit").val('');
            $("#cinemaNameEdit").val('');
            getCinemas();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            $("#cinemaAlert").append("<div class='alert alert-success' role='alert'>Update successfull!</div>");
            
        }
    });
}

function deleteCinema(cinemaId){
    

    let data = {
        id: cinemaId

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
            $("#cinemaId").val('');
            $("#cinemaOwner").val('');
            $("#cinemaCapacity").val('');
            $("#cinemaCategory").val('');
            $("#cinemaName").val('');
            getCinemas();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            $("#cinemaAlert").append("<div class='alert alert-success' role='alert'>Delete successfull!</div>");
            
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
            if(cs.length > 0){
                $('#clientsList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Name</th><th scope='col'>Email</th><th scope='col'>Age</th> <th scope='col'>Option</th></tr></thead><tbody></tbody>");
                for(i = 0; i<cs.length; i++){
                    //$('#clientsList').append("<b>"+cs[i].id+" "+cs[i].name+" </b> "+cs[i].email+"   <button class='btn btn-danger'    onclick='deleteClient("+cs[i].id+")'>DELETE</button>"+"<br>");
                    $('#clientsList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].name+"</td><td>"+cs[i].email+"</td><td>" +cs[i].age+"</td><td>"+"<button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>DELETE</button></td></   tr>");

                }
            }else{
                $('#clientsList').append("<h4 class='text-center'>No entries</h4>");
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
    $("#clientAlert").empty();

    if(clientId != '' && clientName != '' && clientEmail != '' && clientAge != '' ){
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
    } else{
        $("#clientAlert").append("<div class='alert alert-danger' role='alert'>There can be no empty fields!</div>");
    }

}

function editClient(item){
    $("#editCinema").append(" <div class=' p-2 rounded border border-secondary' ><form action=''><div class='form-group'><h4 class='label label-default' >Id: </h4><input disabled class='form-control' type='number' id='cinemaIdEdit'></div><div class='form-group'><h4 class='label label-default' >Owner: </h4><input class='form-control' type='text' id='cinemaOwnerEdit'></div><div class='form-group'><h4 class='label label-default' >Capacity: </h4><input class='form-control' type='number' id='cinemaCapacityEdit' ></div><div class='form-group'><h4 class='label label-default' >Category Id: </h4><input class='form-control' type='number' id='cinemaCategoryEdit'></div><div class='form-group'><h4 class='label label-default' >Name: </h4><input class='form-control' type='text' id='cinemaNameEdit'><br></div></form></div><br><button class='btn btn-warning' onclick='updateCinema()'>UPDATE CINEMA</button><br><br>");
    //console.log(item);
    $("#clientId").val(item.id);
    $("#clientName").val(item.name);
    $("#clientEmail").val(item.email);
    $("#clientAge").val(item.age);
    


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

/**
 * ----------------MESSAGE ---------------------
 */

 function getMessages(){

    $.ajax({
        url: urlMessage,
        type: 'GET',
        dataType: 'json',

        success: function(clients){
            console.log(clients);
            let cs= clients.items;
            //$('#clientsList').append("<h2>Clients List</h2>");
            $('#messagesList').empty();
           if(cs.length > 0){
                $('#messagesList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Message text</th><th scope='col'>Option</th></tr></thead><tbody></tbody>");
                 for(i = 0; i<cs.length; i++){
                     
                     $('#messagesList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].messagetext+"</td><td>"+"<button       class='btn btn-danger' onclick='deleteMessage("+cs[i].id+")'>DELETE</button></td></tr>");

                 }
           }else{
            $('#messagesList').append("<h4 class='text-center'>No entries</h4>");
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

function setMessage(){
    let id = $("#messageId").val();
    let messageText = $("#messageText").val();
    $("#messageAlert").empty();

    if(id != '' && messageText != ''){
        let data = {
            id: id,
            messagetext: messageText,
    
        };
    
        let dataToSend = JSON.stringify(data);
    
        console.log(dataToSend);
    
        $.ajax({
            url: urlMessage,
            type: 'POST',
            //dataType: 'json',
            data: dataToSend,
             contentType: "application/json",
    
            success: function(json){
                console.log(json);
                //Clean the inputs
                $("#messageId").val('');
                $("#messageText").val('');
                getMessages();
            },
            error: function(xhr, status){
                //alert("A problem has occurred");
               
            },
            complete: function(xhr, status){
                //alert("Request made");
                
            }
        });
    
    } else{
        $("#messageAlert").append("<div class='alert alert-danger' role='alert'>There can be no empty fields!</div>");
    }

    

    
}

function updateMessage(){
    let id = $("#messageId").val();
    let messageText = $("#messageText").val();

    let data = {
        id: id,
        messagetext: messageText,

    };

    let dataToSend = JSON.stringify(data);

    console.log(dataToSend);

    $.ajax({
        url:urlMessage,
        type: 'PUT',
        //dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#messageId").val('');
            $("#messageText").val('');
            getMessages();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });
}

function deleteMessage(messageId){
    

    let data = {
        id: messageId

    };

    let dataToSend = JSON.stringify(data);

    console.log(dataToSend);

    $.ajax({
        url:urlMessage,
        type: 'DELETE',
        //dataType: 'json',
        data: dataToSend,
        contentType: "application/json",

        success: function(json){
            console.log(json);
            //Clean the inputs
            $("#messageId").val('');
            $("#messageText").val('');
            getMessages();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            
        }
    });
}