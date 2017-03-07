
                function suma(){
                    
        //obtener valores
                  //al presionar suma


                  
        var x =  parseInt(document.getElementById("num1").value);
        var y =  parseInt(document.getElementById("num2").value);
                    //operar
                    var res = x+y;
                    //asignar resultado
          var resultado = " Tu resultado es: "+ res;
                    // mostrarlo en pantalla
        document.getElementById("resultado").innerHTML= resultado;
                  
    };
                function resta(){
                    
             
        
         var x =  parseInt(document.getElementById("num1").value);
        var y =  parseInt(document.getElementById("num2").value);
                    var res = x-y;
          var resultado = " Tu resultado es: "+res;
        document.getElementById("resultado").innerHTML= resultado;
                    
    };
       
                function multi(){
                   
 
                    
           var x =  Number(document.getElementById("num1").value);
        var y =  Number(document.getElementById("num2").value);
                    var res = x * y;
          var resultado = " Tu resultado es: " + res;
        document.getElementById("resultado").innerHTML= resultado;
                     
                    
                    
    };
       
                function dividir(){
              
        
       var x =  Number(document.getElementById("num1").value);
        var y =  Number(document.getElementById("num2").value);
                    var res = x / y;
          var resultado = " Tu resultado es: " + res;
        document.getElementById("resultado").innerHTML= resultado;
               
    };

