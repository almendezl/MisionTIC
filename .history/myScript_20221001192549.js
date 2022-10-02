function getClientes(){

    $.ajax({
        url:'https://gbc0751b79176df-fy68ude9ajgxmklv.adb.us-ashburn-1.oraclecloudapps.com',
        type: 'GET',
        dataType: 'json',

        success: function(json){
            

        },
        error: function(xhr, status){
alert("Ha sucedido un problema");
        },
        complete: function(xhr, status){

        }
    });

}