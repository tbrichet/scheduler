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

    localStorage.setItem("tasks", JSON.stringify(text));

    auditTime();
    saveTasks();
});

// Save Button
$(".saveBtn").click(function () {
    alert("Item Saved");
    saveTasks();
});

//Save Tasks Function
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(text));
};

// Load Tasks Function
function loadTasks() {
    JSON.parse(localStorage.getItem("tasks"))
};
loadTasks();


// Define Audit Function
function auditTime() {
    // Determine value of current hour
    var m = moment().format('H');
    var currentHour = parseInt(m)
    
    // Audit 8:00
    var hourEight = document.getElementById("hourEight").textContent;
    var testHourEight = parseInt(hourEight);
    if (testHourEight === currentHour) {
        $("#eight").addClass("present");
    }
    else if (testHourEight > currentHour) {
        $("#eight").addClass("future");
    }
    else if (testHourEight < currentHour) {
        $("#eight").addClass("past");
    };

    // Audit 9:00
    var hourNine = document.getElementById("hourNine").textContent;
    var testHourNine = parseInt(hourNine);
    if (testHourNine === currentHour) {
        $("#nine").addClass("present");
    }
    else if (testHourEight > currentHour) {
        $("#nine").addClass("future");
    }
    else if (testHourNine < currentHour) {
        $("#nine").addClass("past");
    };

    // Audit 10:00
    var hourTen = document.getElementById("hourTen").textContent;
    var testHourTen = parseInt(hourTen);
    if (testHourTen === currentHour) {
        $("#ten").addClass("present");
    }
    else if (testHourTen > currentHour) {
        $("#ten").addClass("future");
    }
    else if (testHourTen < currentHour) {
        $("#ten").addClass("past");
    };

    // Audit 11:00
    var hourEleven = document.getElementById("hourEleven").textContent;
    var testHourEleven = parseInt(hourEleven);
    if (testHourEleven === currentHour) {
        $("#eleven").addClass("present");
    }
    else if (testHourEleven > currentHour) {
        $("#eleven").addClass("future");
    }
    else if (testHourEleven < currentHour) {
        $("#eleven").addClass("past");
    };

    // Audit 12:00
    var hourTwelve = document.getElementById("hourTwelve").textContent;
    var testHourTwelve = parseInt(hourTwelve);
    if (testHourTwelve === currentHour) {
        $("#twelve").addClass("present");
    }
    else if (testHourTwelve > currentHour) {
        $("#twelve").addClass("future");
    }
    else if (testHourTwelve < currentHour) {
        $("#twelve").addClass("past");
    };

    // Audit 13:00
    var hourThirteen = document.getElementById("hourThirteen").textContent;
    var testHourThirteen = parseInt(hourThirteen);
    if (testHourThirteen === currentHour) {
        $("#thirteen").addClass("present");
    }
    else if (testHourThirteen > currentHour) {
        $("#thirteen").addClass("future");
    }
    else if (testHourThirteen < currentHour) {
        $("#thirteen").addClass("past");
    };

    // Audit 14:00
    var hourFourteen = document.getElementById("hourFourteen").textContent;
    var testHourFourteen = parseInt(hourFourteen);
    if (testHourFourteen === currentHour) {
        $("#fourteen").addClass("present");
    }
    else if (testHourFourteen > currentHour) {
        $("#fourteen").addClass("future");
    }
    else if (testHourFourteen < currentHour) {
        $("#fourteen").addClass("past");
    };

    // Audit 15:00
    var hourFifteen = document.getElementById("hourFifteen").textContent;
    var testHourFifteen = parseInt(hourFifteen);
    if (testHourFifteen === currentHour) {
        $("#fifteen").addClass("present");
    }
    else if (testHourFifteen > currentHour) {
        $("#fifteen").addClass("future");
    }
    else if (testHourFifteen < currentHour) {
        $("#fifteen").addClass("past");
    };

    // Audit 16:00
    var hourSixteen = document.getElementById("hourSixteen").textContent;
    var testHourSixteen = parseInt(hourSixteen);
    if (testHourSixteen === currentHour) {
        $("#sixteen").addClass("present");
    }
    else if (testHourSixteen > currentHour) {
        $("#sixteen").addClass("future");
    }
    else if (testHourSixteen < currentHour) {
        $("#sixteen").addClass("past");
    };

    // Audit 17:00
    var hourSeventeen = document.getElementById("hourSeventeen").textContent;
    var testHourSeventeen = parseInt(hourSeventeen);
    if (testHourSeventeen === currentHour) {
        $("#seventeen").addClass("present");
    }
    else if (testHourSeventeen > currentHour) {
        $("#seventeen").addClass("future");
    }
    else if (testHourSeventeen < currentHour) {
        $("#seventeen").addClass("past");
    };
};
