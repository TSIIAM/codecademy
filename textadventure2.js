var user = prompt("You are choosen to be the first man in Marth, you have to choose an item to take, a RADIO, a BOOK or GUITAR").toLowerCase();
switch(user){
    case "radio":
        var album = prompt("Do you have any clasic ALBUM? YES or NO").toLowerCase();
        var cassete = prompt("Do you have a CASSETE? YES or NO").toLowerCase();
        if(album === 'yes' || cassete === 'yes') {
      console.log("You only need one of the two! you can listen a lot of music!");
        }
        else {
      console.log("You dont have any album OR cassete ? Well,if you were smarter, you probably could choose a BOOK or a  GUITAR");
    }
        break;
    case "book":
        var history = prompt("Do you like history books? YES or NO").toLowerCase();
        var fiction = prompt("Do you like fiction books? YES or NO").toLowerCase();
        if(history === 'yes' && fiction === 'yes') {
      console.log("You have both! you can can  READ a lot!");
        } else {
      console.log("You dont like to read history or fiction? Well,if you were smarter, you probably could choose a RADIO or a  GUITAR");
        }
        break;
    case "guitar":
        var play = prompt("Do you know how the play the guitar? YES or NO").toLowerCase();
        var sing = prompt("Do you prefer to sing? YES or NO").toLowerCase();
        if(history === 'yes' || fiction === 'yes') {
      console.log("You only need one of the two! play the guitar a lot!");
        } else {
      console.log("You dont know how to play the guitar or sing? Well,if you were smarter, you probably could choose a RADIO or a  BOOK");
        }
        
        break;
    default:
    console.log("Nothing?");
    }
