$(document).ready(function () {
   
  var addressPer;
  $.get('/getAccounts', function (response) {
    $('#response').text(response); 
     
  })

  $('#submit').click(function () {
    addressPerCon= $('#addressPerCon').val();
    console.log(addressPer);
    $.post('/getDeclaration', { addressPerCon : addressPerCon}, function (response) {   
      $('#response').text(response); 
    })
  })

  $('#send').click(function () { 
    let addressPer = $('#addressPer').val();
    let rfc = $('#rfc').val();
    let declaracion = $('#declaracion').val();
    let ano = $('#ano').val();
    let tipo = $('#tipo').val();
    let hashDoc = $('#hashDoc').val(); 
    $.post('/setDeclaration', { addressPer : addressPer, rfc : rfc, declaracion : declaracion, ano : ano, tipo : tipo, hashDoc : hashDoc}, function (response) {
      $('#response').text(response); 
    })
  });
})