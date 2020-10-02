var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["medicine"] = document.getElementById("medicine").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table =  document.getElementById("customerlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.medicine;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.country;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`; 

}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("medicine").value = "";
    document.getElementById("country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("medicine").value = selectedRow.cells[3].innerHTML;
    document.getElementById("country").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.mail;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.medicine;
    selectedRow.cells[4].innerHTML = formData.country;
}

function onDelete(td) {
    if(confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("customerlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() { 
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullnameValidationError").classList.contains("hide"))
            document.getElementById("fullnameValidationError").classList.add("hide");
    }
    return isValid;
} 