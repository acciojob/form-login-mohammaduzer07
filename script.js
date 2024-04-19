function getFormvalue() {
    //Write your code here
	let fname = document.querySelector('#fname');
	let lname = document.querySelector('#lname');
	let submit = document.querySelector('#submit');

	let first = fname.value;
	let last = lname.value;
	
	// submit.addEventListner("click", fullName);
	alert(first+" "+last);
		
	// let fullName = "";
	// for(let i=0; i<name.length; i++){
	// 	if(name.elements[i].value != 'Submit'){
	// 		fullName += name.elements[i].value;
	// 	}
	// }

}
