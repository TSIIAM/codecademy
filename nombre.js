var text = "Hola, Como estas Adrian ? Mi nombre es Alvaro.\
Un gusto en conocerte Adrian. De donde eres?\
Tu nombre es de origen portugues?";
var myName = "Alvaro";
hits = [];

for(var i=0; i < text.length; i++ ){
    if (text[i] === myName[0]) 
        for (var j=i; j< i + myName.length && j < text.length; j++ ) 
            hits.push(text[j]);
}

if ( hits.length === 0 ) "Your name wasn't found!";
else console.log(hits);

var hits = text.match(/Alvaro/g);


if ( hits.length === 0 ) "Your name wasn't found!";
else console.log(hits);
