document.getElementById('username').addEventListener('input', function(ev) {
	let usernameElement = ev.target;
	let username = usernameElement.value;
	var parts = /^[a-zA-Z]+$/;
	var partsNumb = /^[a-zA-Z]+[0-9]+$/;
	if(username.length >= 3 && (username.match(parts && partsNumb))) {
	    usernameElement.classList.add('valid-text');
	    usernameElement.classList.remove('invalid-text');
	} else {
	    usernameElement.classList.add('invalid-text');
	    usernameElement.classList.remove('valid-text');
	}
    });
document.getElementById('password').addEventListener('input', function(ev) {
	let passwordElement = ev.target;
	let password = passwordElement.value;
	var small = /[a-z]+$/g;
	var big = /[A-Z]+$/g;
	var num = /[0-9]+$/g;
	var char = /[\W]/g;
	console.log(small && big && num && char);
	if(password.length >= 8 && (password.match(small && big && num && char))) {
	    passwordElement.classList.add('valid-text');
	    passwordElement.classList.remove('invalid-text');
	} else {
	    passwordElement.classList.add('invalid-text');
	    passwordElement.classList.remove('valid-text');
	}
    });

document.getElementById('conpwd').addEventListener('input', function(ev) {
	let conpwdElement = ev.target;
	let conpwd = conpwdElement.value;
	let password = document.getElementById('password').value;
	if(conpwd == password) {
	    conpwdElement.classList.add('valid-text');
	    conpwdElement.classList.remove('invalid-text');
	} else {
	    conpwdElement.classList.add('invalid-text');
	    conpwdElement.classList.remove('valid-text');
	}
    });