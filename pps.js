$(document).ready(function(){
  var usuario =0;
  var pc = 0;
 
  
  $("#tijera").on('click', function(){
    var result = compare("tijera", computerChoice());

    $("#resultados").html(result);
     $("#usuario").html(usuario);
   $("#pc").html(pc);
    
 });
    $("#papel").on('click', function(){
    var result = compare("papel", computerChoice());
  
    $("#resultados").html(result);
       $("#usuario").html(usuario);
   $("#pc").html(pc);
    
 });
  $("#piedra").on('click', function(){
    var result = compare("piedra", computerChoice());
    $("#resultados").html(result);
     $("#usuario").html(usuario);
   $("#pc").html(pc);
    
 });

  var compare = function(me, opponent){
    if(me ==="piedra"){
      if(opponent === 'piedra') {
          return 'Empate!!';
      } else if (opponent === 'papel') {
        pc++;
        return 'Mi piedra pierde contra el papel de la PC!! ';
      } else if (opponent === 'tijera') {
        usuario++;
        return 'Mi piedra gana contra la tijera de la PC!! ';
      }
    
  } else if (me === 'papel') {
    
      if(opponent === 'papel') {
        return 'Empate!!';
      } else if (opponent === 'piedra') {
        usuario++;
        return 'Mi papel gana a la piedra de la PC!! ';
      } else if (opponent === 'tijera') {
        pc++;
        return 'Mi papel pierde contra la tijera de la PC!!';
    }
  } else if (me === 'tijera') {
    
      if(opponent === 'tijera') {
        return 'Empate!!';
      } else if (opponent === 'papel') {
        usuario++;
        return 'Mi tijera le gana al papel de la PC!! ';
      } else if (opponent === 'piedra') {
        pc++;
        return 'Mi tijera pierde contra la piedra de la PC!!';
    }
  } else {
    return "Eso no tiene sentido!"
  }
};
      
      
   var computerChoice = function() {
        var random = Math.random();
        if (random < 0.333) {
	      return  'piedra';
        } else if(random < 0.67777) {
	      return 'papel';
        } else {
	      return 'tijera';
        } 
}; 
  
  

});


