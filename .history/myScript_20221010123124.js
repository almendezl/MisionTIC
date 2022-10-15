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
    // 
//     var settings = {
//         "url": "http://150.136.80.156:80/api/Category/save",
//         "method": "POST",
        
//         "data": {"name":"cat1","description":"test category"}
//       };
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//       if (response.auth) { 
//           console.log('on success');
//       } 
//   }).fail(function (jqXHR, exception) { 
//           var msg = '';
//           if (jqXHR.status === '(failed)net::ERR_INTERNET_DISCONNECTED') {
              
//                   msg = 'Uncaught Error.\n' + jqXHR.responseText; 
//           }
//           if (jqXHR.status === 0) {
//                   msg = 'Not connect.\n Verify Network.';
//           } else if (jqXHR.status == 413) {
//                   msg = 'Image size is too large.'; 
//           }  else if (jqXHR.status == 404) {
//                   msg = 'Requested page not found. [404]'; 
//           } else if (jqXHR.status == 405) {
//                   msg = 'Image size is too large.'; 
//           } else if (jqXHR.status == 500) {
//                   msg = 'Internal Server Error [500].'; 
//           } else if (exception === 'parsererror') {
//                   msg = 'Requested JSON parse failed.'; 
//           } else if (exception === 'timeout') {
//                   msg = 'Time out error.'; 
//           } else if (exception === 'abort') {
//                   msg = 'Ajax request aborted.'; 
//           } else {
//                   msg = 'Uncaught Error.\n' + jqXHR.responseText; 
//           }
//           console.log(msg);
//   });

    // GET request for remote image in node.js
// axios({
//     method: 'get',
//     url: 'http://150.136.80.156:80/api/Category/all',headers: {
//         'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*', 
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
//     }
//     //responseType: 'stream'
//   })
//     .then(function (response) {
//         console.log(response);
//     //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

    var settings = {
        "url": "http://150.136.80.156:80/api/Cinema/save",
        "method": "POST",
        "timeout": 0,
        
        "data": JSON.stringify({
          "name": "cat1",
          "description": "test category"
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });


    // var headers = {
    //     'Content-Type': 'application/json'
    //   };
    //   var request = http.Request('POST', Uri.parse('http://150.136.80.156:80/api/Cinema/save'));
    //   request.body = json.encode({
    //     "name": "cat1",
    //     "description": "test category"
    //   });
    //   request.headers.addAll(headers);
      
    //   http.StreamedResponse response = await request.send();
      
    //   if (response.statusCode == 200) {
    //     print(await response.stream.bytesToString());
    //   }
    //   else {
    //     print(response.reasonPhrase);
    //   }

    // let id = $("#cinemaId").val();
    // let owner = $("#cinemaOwner").val();
    // let capacity = $("#cinemaCapacity").val();
    // let category = $("#cinemaCategory").val();
    // let name = $("#cinemaName").val();

    // $("#cinemaAlert").empty();
    // if (id != "" && owner != "" && capacity != "" && category != "" && name != ""){
    //     let data = {
    //         id: id,
    //         owner: owner,
    //         capacity: capacity,
    //         category_id: category,
    //         name: name
    
    //     };
    
    //     let dataToSend = JSON.stringify(data);
    
    //     console.log(dataToSend);
    
        // $.ajax({
        //     url: "http://150.136.80.156:80/api/Cinema/save",
        //     type: 'POST',
        //     dataType: 'json',
        //     data: {"name":"cat1","description":"test category"},
        //      contentType: "application/json",
    
        //     success: function(json){
        //         console.log(json);
        //         //Clean the inputs
        //         // $("#cinemaId").val('');
        //         // $("#cinemaOwner").val('');
        //         // $("#cinemaCapacity").val('');
        //         // $("#cinemaCategory").val('');
        //         // $("#cinemaName").val('');
        //         // getCinemas();
        //     },
        //     error: function(xhr, status){
        //         //alert("A problem has occurred");
               
        //     },
        //     complete: function(xhr, status){
        //         //alert("Request made");
                
        //     }
        // });

    // }else{
    //     $("#cinemaAlert").append("<div class='alert alert-danger' role='alert'>There can be no empty fields!</div>");
    // }

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
            $("#editClient").empty();
            $("#editClient").append("<br>");
            if(cs.length > 0){
                $('#clientsList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Name</th><th scope='col'>Email</th><th scope='col'>Age</th> <th scope='col'>Option</th></tr></thead><tbody></tbody>");
                for(i = 0; i<cs.length; i++){
                    //$('#clientsList').append("<b>"+cs[i].id+" "+cs[i].name+" </b> "+cs[i].email+"   <button class='btn btn-danger'    onclick='deleteClient("+cs[i].id+")'>DELETE</button>"+"<br>");
                    $('#clientsList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].name+"</td><td>"+cs[i].email+"</td><td>" +cs[i].age+"</td><td>"+"<button class='btn btn-secondary' onclick='editClient("+JSON.stringify(cs[i])+")'>EDIT</button>  <button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>DELETE</button></td></   tr>");

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
    $("#editClient").append(" <div class=' p-2 rounded border border-secondary' ><form action=''><div class='form-group'><h4 class='label label-default' >Id: </h4><input disabled class='form-control' type='number' id='clientIdEdit'></div><div class='form-group'><h4 class='label label-default' >Name: </h4><input class='form-control' type='text' id='clientNameEdit'></div><div class='form-group'><h4 class='label label-default' >Email: </h4><input class='form-control' type='text' id='clientEmailEdit' ></div><div class='form-group'><h4 class='label label-default' >Age: </h4><input class='form-control' type='number' id='clientAgeEdit'></div></form></div><br><button class='btn btn-warning' onclick='updateClient()'>UPDATE CLIENT</button><br><br><br><br>");
    //console.log(item);
    $("#clientIdEdit").val(item.id);
    $("#clientNameEdit").val(item.name);
    $("#clientEmailEdit").val(item.email);
    $("#clientAgeEdit").val(item.age);
    

}

function updateClient(){
    let clientId = $("#clientIdEdit").val();
    let clientName = $("#clientNameEdit").val();
    let clientEmail = $("#clientEmailEdit").val();
    let clientAge = $("#clientAgeEdit").val();

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
            $("#clientIdEdit").val('');
            $("#clientNameEdit").val('');
            $("#clientEmailEdit").val('');
            $("#clientAgeEdit").val('');
            getClients();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            $("#clientAlert").append("<div class='alert alert-success' role='alert'>Update successfull!</div>");
            
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
            $("#clientAlert").append("<div class='alert alert-success' role='alert'>Delete successfull!</div>");
            
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
            $("#editMessage").empty();
            $("#editMessage").append("<br>");
           if(cs.length > 0){
                $('#messagesList').append("<thead><tr><th scope='col'>Id</th><th scope='col'>Message text</th><th scope='col'>Option</th></tr></thead><tbody></tbody>");
                 for(i = 0; i<cs.length; i++){
                     
                     $('#messagesList').append("<tr><th scope='row'>"+cs[i].id+"</th><td>"+cs[i].messagetext+"</td><td>"+"<button class='btn btn-secondary' onclick='editMessage("+JSON.stringify(cs[i])+")'>EDIT</button>   <button class='btn btn-danger' onclick='deleteMessage("+cs[i].id+")'>DELETE</button></td></tr>");

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

function editMessage(item){
    $("#editMessage").append(" <div class=' p-2 rounded border border-secondary' ><form action=''><div class='form-group'><h4 class='label label-default' >Id: </h4><input disabled class='form-control' type='number' id='messageIdEdit'></div><div class='form-group'><h4 class='label label-default' >Message Text: </h4><input class='form-control' type='text' id='messageTextEdit'></div></form></div><br><button class='btn btn-warning' onclick='updateMessage()'>UPDATE MESSAGE</button><br><br><br><br>");
    //console.log(item);
    $("#messageIdEdit").val(item.id);
    $("#messageTextEdit").val(item.messagetext);
    

}

function updateMessage(){
    let id = $("#messageIdEdit").val();
    let messageText = $("#messageTextEdit").val();

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
            $("#messageIdEdit").val('');
            $("#messageTextEdit").val('');
            getMessages();
        },
        error: function(xhr, status){
            //alert("A problem has occurred");
           
        },
        complete: function(xhr, status){
            //alert("Request made");
            $("#messageAlert").append("<div class='alert alert-success' role='alert'>Update successfull!</div>");
            
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
            $("#messageAlert").append("<div class='alert alert-success' role='alert'>Delete successfull!</div>");
            
        }
    });
}