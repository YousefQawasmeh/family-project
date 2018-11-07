var usersDB = firebase.database().ref('users');

function dbBring() {
    var myTx = document.getElementById("myText");
    var dbRef = firebase.database().ref().chile();
}

function writeUserData() {
    var newUser = usersDB.push({
        name: document.getElementById('name').value,
        birth_date: document.getElementById('birth_date').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        type: document.getElementById('type').value
    }).then((snap) => { if (snap.key !== null) window.location.replace("registered.html"); });
}