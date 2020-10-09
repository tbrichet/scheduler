// Run Audit Function
auditTime();

//Add Today's Date to Top of Page
var currentDay = moment().format('dddd MMMM Do');

function dateRender() {
    document.getElementById("currentDay").innerHTML = currentDay;
};

dateRender();

// Allow User to Edit Task Description
$(".description").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("textarea")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// User Clicks out of Test Area
$(".description").on("blur", "textarea", function() {
    var text = $(this)
        .val()
        .trim();
    
    var taskP = $("<p>")
        .text(text);

    $(this).replaceWith(taskP);


    auditTime();
    //saveTasks();
});


// Define Audit Function
function auditTime() {

    // Helper Array
    var helperArray = [
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17"
    ]
    // Determine value of current hour
    var m = moment().format('H');
    var currentHour = parseInt(m)
    console.log(currentHour);

    //Identify container where rows will be created
    var parent = document.getElementById("container")

    for (i=0; i<9; i++) { 

        console.log(helperArray[i]);
        // Pull from array and convert to number
        var testHour = parseInt(helperArray[i]);
        var hourString = helperArray[i];
        console.log(typeof testHour);
        console.log(typeof hourString);

        //Create Rows with vanilla Javascript
        var row = document.createElement("div");
        row.setAttribute("class", "row");

        // Hour Display
        var divOne = document.createElement("div");
        divOne.setAttribute("class", "col-2 hour");
        var hourSpan = document.createElement("span");
        hourSpan.textContent = hourString + ":00";

        //User Input for Tasks
        var taskDescriptionDiv = document.createElement("div");
        taskDescriptionDiv.setAttribute("class", "col-9 description");
        var taskInput = document.createElement("input");
        taskInput.setAttribute("placeholder", "Add task description here");
        taskInput.setAttribute("id", ("userInput" + hourString));
    

        //Blue Save Button
        var saveButtonDiv = document.createElement("div");
        saveButtonDiv.setAttribute("class", "col-1 saveBtn");
        saveButtonDiv.setAttribute("id", ("saveButton" + hourString));
        var saveIconSpan = document.createElement("span");
        saveIconSpan.setAttribute("class", "oi oi-briefcase icon");
        

        // If row exists, audit time and assign a class (conditional)
        if (testHour === currentHour) {
            taskDescriptionDiv.setAttribute("class", "present");
        }
        else if (testHour > currentHour) {    
            taskDescriptionDiv.setAttribute("class", "future");
        } 
        else if (testHour < currentHour) {
            taskDescriptionDiv.setAttribute("class", "past");
        }

        // Append Hour Span to Hour Div and row
        divOne.appendChild(hourSpan);
        row.appendChild(divOne);

        //Append user input text to div and row
        taskDescriptionDiv.appendChild(taskInput);
        row.appendChild(taskDescriptionDiv);

        //Append save button to div and row
        saveButtonDiv.appendChild(saveIconSpan);
        row.appendChild(saveButtonDiv);

        //Append row to container
        parent.appendChild(row);
    }
}

// Function to Save Tasks into Local Storage
var saveTask = function(event) {
    var tgt = event.target;
    var presSib = tgt.previousSibling;
    var textBox = presSib.firstChild;
    var id = textBox.id;
    var userInput = textBox.value;
    console.log(id);
    console.log(typeof id);
    

// PICK UP HERE NEXT WEEK
    //var storageItems = {id, userInput}
    //localStorage.setItem("WorkDayScheduler", JSON.stringify(storageItems));
    localStorage.setItem(id, userInput);


}

// Function to Retrieve Tasks from Local Storage and Display to Page
var retrieveTask = function() {
    localStorage.getItem()
}
console.log(localStorage.getItem("userInput8"));
document.getElementById("userInput8").value = localStorage.getItem("userInput8");


// Event Listener for Save Button
$(document).on("click", ".saveBtn", saveTask)

//Run Retrive Task Function on page load
//retrieveTask();
