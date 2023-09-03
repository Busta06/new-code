var user1 = {
    id : 1,
    firstname : "Ethan",
    lastname : "Davies",
    emailid : "etahndavies@gmail.com",
    age : 14
}

var user2 = {
    id : 2,
    firstname : "Matty",
    lastname : "Busta",
    emailid : "matthewbusta@gmail.com",
    age : 17
}

var users = [user1, user2];

console.log('before removing object from an array ->' + JSON.stringify(users));

var removeIndex = users.map(function(item) { return item.id; }).indexOf(37);
