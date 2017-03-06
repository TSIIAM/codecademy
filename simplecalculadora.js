//al presionar suma
var sumInput = document.querySelector('#suma');
sumInput.addEventListener('click', suma);

var restaInput = document.querySelector('#resta');
restaInput.addEventListener('click', resta);

var multiInput = document.querySelector('#multi');
multiInput.addEventListener('click', multi);

var dividirInput = document.querySelector('#dividir');
dividirInput.addEventListener('click', dividir);


                function suma(){
                    
        //obtener valores
                  
        var x =  parseInt(document.getElementById("num1").value);
        var y =  parseInt(document.getElementById("num2").value);
                    //operar
                    var res = x+y;
                    //asignar resultado
          var resultado = " Tu resultado es: "+ res;
                    // mostrarlo en pantalla
        document.getElementById("resultado").innerHTML= resultado;
                  
    }
                function resta(){
                    
        
         var x =  parseInt(document.getElementById("num1").value);
        var y =  parseInt(document.getElementById("num2").value);
                    var res = x-y;
          var resultado = " Tu resultado es: "+res;
        document.getElementById("resultado").innerHTML= resultado;
                    
    }
       
                function multi(){
                   
        
                    
           var x =  Number(document.getElementById("num1").value);
        var y =  Number(document.getElementById("num2").value);
                    var res = x * y;
          var resultado = " Tu resultado es: " + res;
        document.getElementById("resultado").innerHTML= resultado;
                     
                    
                    
    }
       
                function dividir(){
                    
        
       var x =  Number(document.getElementById("num1").value);
        var y =  Number(document.getElementById("num2").value);
                    var res = x / y;
          var resultado = " Tu resultado es: " + res;
        document.getElementById("resultado").innerHTML= resultado;
               
    }
