
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => displayUsers(json));

function displayUsers(users) {
    
    users.forEach(user => {
        var newRow = document.createElement("tr");
        var nameTd = document.createElement("td");
     var emailTd = document.createElement("td");
    usersTable.append(newRow); 
    nameTd.innerText = user.name;
        emailTd.innerText = user.email;
        var showUserTd = document.createElement("td");
        showUserTd.innerHTML=`<input type="button" value="show user" id="showUser" onclick="showUser(${user.id})" >`
        newRow.append(nameTd, emailTd,showUserTd);
        
    });
}

function showUser(id) {
    location.href="/showuser.html"+"?id="+ id
}

