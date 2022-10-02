function getClients(){

    $.ajax({
        url:'https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        success: function(json){
            console.log(json);

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
    
}