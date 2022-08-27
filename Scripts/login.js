let us = JSON.parse(localStorage.getItem('user'));


function login() {
    event.preventDefault();
    checkData();
}

function checkData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let checkedIn = document.getElementById('checkedIn');
    // console.log(email, password, checkedIn.checked);
    if (email === us.email && password === us.password) {
        us.checkedIn = checkedIn.checked;
        localStorage.setItem('user', JSON.stringify(us));
        let msg = document.getElementById('Message');
        msg.innerText = 'Logged in Successfully!';
        msg.style.color = 'green';
        msg.style.border = '1px solid';
        setTimeout(function () {
            // document.getElementById('Message').innerHTML = null;
            // msg.style.border = 'none';
            window.location = './index.html';
        }, 2000);
    }
    else {
        let msg = document.getElementById('Message');
        msg.innerText = `User doesn't exists!`;
        msg.style.color = 'red';
        msg.style.border = '1px solid';
        setTimeout(function () {
            document.getElementById('Message').innerHTML = null;
            msg.style.border = 'none';
        }, 5000);
    }
}


function showPassword() {
    event.preventDefault();
    checkEm();
}

function checkEm() {
    let email = document.getElementById('email').value;
    if (email === us.email) {
        alert(us.password);
    }
}