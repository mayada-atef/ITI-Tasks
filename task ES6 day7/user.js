var id = location.search.split("=")[1]
// console.log(id);
fetch('https://jsonplaceholder.typicode.com/users/' + id)
  .then((response) => response.json())
    .then((user) => {
        console.log(user);
        userRow= document.createElement("tr");
        var nameTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var phoneTd = document.createElement("td");
        var cityTd = document.createElement("td");
        var zipCodeTd=document.createElement("td");
        userTable.append(userRow); 
        userRow.append(nameTd, emailTd,phoneTd,cityTd,zipCodeTd);
        nameTd.innerText = user.name
        emailTd.innerText = user.email
        phoneTd.innerText = user.phone
        cityTd.innerText = user.address.city
        zipCodeTd.innerText=user.address.geo.lat
    });
    



