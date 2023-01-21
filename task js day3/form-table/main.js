var table = document.getElementsByTagName("table")[0];
var inputs = document.querySelectorAll(".form-input input,.form-input select")

function createRow() {
    var newRow = document.createElement("tr");  
    for (let index = 0; index < inputs.length; index++) {
        var td = document.createElement("td");
        var element = inputs[index];
        var elementValue = element.value;
        
        if (element.name == "name" && (elementValue =="" ||!(/^[A-Za-z]+$/.test(elementValue))) ) {
            alert("name must be a valid name and not empty")
            return 
        }
        if (element.name == "age" && (elementValue ==""||!(/^[0-9]*$/.test(elementValue)) )) {
            alert("age must be a valid name and not empty")
            return 
        }
        if (element.name == "grade" && (elementValue ==""||!(/^[0-9]*$/.test(elementValue))) ) {
            alert("grade must be a valid name and not empty")
            return 
        }
        td.innerText = elementValue;
        newRow.append(td);

        
    }

    var td1 = document.createElement("td");
    newRow.append(td1);
    td1.innerHTML='<button onclick="" class="red-btn">delete</button>'
    
    var td2 = document.createElement("td");
    newRow.append(td2);
    td2.innerHTML='<button onclick="" class="yellow-btn">edit</button>'

    table.append(newRow);
    
}