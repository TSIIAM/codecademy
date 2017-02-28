var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName){
    contactsLength = contacts.length;
    for(var x = 0 ; x<contactsLength;x++){
        if(contacts[x].lastName === lastName){
            printPerson(contacts[x]);
            }
        
        };
    };
    
search("Jones");


function add(firstName,lastName,email,phoneNumber){
    var  newContact = new Object();
    contacts[contacts.length] = newContact;
    
    // all without this
    newContact.firstName = firstName; 
    newContact.lastName = lastName;
    newContact.email = email;
    newContact.phoneNumber = phoneNumber;
    

};

add("Alvaro","Mesa","alvaromesa19@gmail.com","(999)999-9999");
list();
