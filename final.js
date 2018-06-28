function formSubmit() {
    document.forms["myForm"].submit();
}


var library = { 
	title:"Horror Stories", 
	author: " by Mark Morris", 
	quantity: 10
}

for (var property1 in library) {
  // string1 = string1 + library[property1];
  var title = document.getElementById("title").innerHTML = library.title;
  var author = document.getElementById("author").innerHTML = library.author;
  var quantity = document.getElementById("quantity").innerHTML = library.quantity;
}

function checkOut(){
// target #quantity, make the number go down 1
	if(library.quantity <= 0){
		alert("There are no more books in the library to check out!!");
	} else{
		library.quantity -= 1;
		document.getElementById("quantity").innerHTML = parseInt(document.getElementById("quantity").innerHTML) - 1;
	}



}

function returnBook(){
	// target the #quantity, makr the number increase 
	if(library.quantity >= 10){
		alert("There are no more books for you to return to the library!!");
	} else{
		library.quantity += 1;
		document.getElementById("quantity").innerHTML = parseInt(document.getElementById("quantity").innerHTML) + 1;
	}


}
 




