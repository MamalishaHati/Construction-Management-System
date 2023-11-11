// create , read , update , delete
// Global Variables

var row = null;

function Addproperty() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if (dataEntered == false) {
        msg.innerHTML = "Please Enter Data!!"
    }
    else {
        if (row == null) {
            insert(readData);
            msg.innerHTML = "Data Inserted!!"
        }
        else {
            update();
            msg.innerHTML = "Data Updated!!"
        }
    }


}


//CREATE
function retrieveData() {
    var name1 = document.getElementById("name").value;
    var picture = document.getElementById("upload");
    var location = document.getElementById("loc").value;
    var price = document.getElementById("pri").value;
    var description = document.getElementById("desc").value;


    var arr = [name1, picture, location, price, description];
    if (arr.includes("")) {
        return false
    }
    else {
        return arr;
    }

}


// READ 

//Data in localstorage
function readingDataFromLocalStorage(dataEntered) {
    //storing data in local storage
    var n = localStorage.setItem("Name", dataEntered[0]);
    var p = localStorage.setItem("picture", dataEntered[1]);
    var l = localStorage.setItem("Location", dataEntered[2]);
    var v = localStorage.setItem("Price", dataEntered[3]);
    var d = localStorage.setItem("Desc", dataEntered[4]);


    // Getting data from local to table
    var n1 = localStorage.getItem("Name", n);
    var p1 = localStorage.getItem("picture", p);
    var l1 = localStorage.getItem("Location", l);
    var v1 = localStorage.getItem("Price", v);
    var d1 = localStorage.getItem("Desc", d)


    var arr = [n1, p1, l1, v1, d1]
    return arr;
}

//INSERT THE DATA

function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    row.insertCell(4).innerHTML = readData[4];
    row.insertCell(5).innerHTML = `<button onclick = edit(this)>Edit<button>
                                <button onclick = remove(this)>Delete</button>`;
}


// EDIT FUNCTION 

function edit(td) { // here td is parameters
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("upload").value = row.cells[1].innerHTML;
    document.getElementById("loc").value = row.cells[2].innerHTML;
    document.getElementById("pri").value = row.cells[3].innerHTML;
    document.getElementById("desc").value = row.cells[4].innerHTML;
}


// UPDATE the data

function update() {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("upload").value;
    row.cells[2].innerHTML = document.getElementById("loc").value;
    row.cells[3].innerHTML = document.getElementById("pri").value;
    row.cells[4].innerHTML = document.getElementById("desc").value;
    row = null;
}


// DELETE FUNCTION
function remove(td) {
    var ans = confirm("Are u sure want to delte this ")
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex)

    }

    //document.getElementById("table").remove() // delete all row
}


// Validation the form