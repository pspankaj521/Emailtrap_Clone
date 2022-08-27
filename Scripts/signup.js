function addData() {
    event.preventDefault();
    storeData();
}

function storeData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    // console.log(email, password);
    let msg = document.getElementById('Message');
    if (email !== '' && password !== '' && name !== '') {
        if (password.length < 7 || password.includes('1234567')) {
            msg.innerText = 'Password should be 8 digits long!';
            msg.style.color = 'red';
            msg.style.border = '1px solid'
            setTimeout(function () {
                document.getElementById('Message').innerHTML = null;
                msg.style.border = 'none';
            }, 5000);
        } 
        else {
            user = {
                email: email,
                password: password,
                name: name,
                checkedIn: false
            };
            localStorage.setItem('user', JSON.stringify(user));
            msg.innerText = 'Signed Up successfully';
            msg.style.color = 'green';
            msg.style.border = '1px solid';
            setTimeout(function () {
                window.location = './login.html';
            }, 2000);
        }
    }
    else {
        msg.innerText = 'Fields are empty!';
        msg.style.color = 'red';
        msg.style.border = '1px solid'
        setTimeout(function () {
            document.getElementById('Message').innerHTML = null;
            msg.style.border = 'none';
        }, 5000);
    }
}