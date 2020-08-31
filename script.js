
//Add Today's Date to Top of Page

var currentDay = moment().format('dddd MMMM Do');

function dateRender() {
    document.getElementById("currentDay").innerHTML = currentDay;
};

dateRender();

// Allow user to edit task description
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

// Compare Times to Current Hour and Change Style Accordingly

function auditTime() {
    // Determine value of current hour
    var m = moment().format('H');
    var currentHour = parseInt(m)
    
    // Audit 8:00
    var hourEight = document.getElementById("hourEight").textContent;
    var testHourEight = parseInt(hourEight);
    if (testHourEight === currentHour) {
        $("#eight").find("p").addClass("present");
    }
    else if (testHourEight > currentHour) {
        $("#eight").find("p").addClass("future");
    }
    else if (testHourEight < currentHour) {
        $("#eight").find("p").addClass("past");
    };

    // Audit 9:00
    var hourNine = document.getElementById("hourNine").textContent;
    var testHourNine = parseInt(hourNine);
    if (testHourNine === currentHour) {
        $("#nine").find("p").addClass("present");
    }
    else if (testHourEight > currentHour) {
        $("#nine").find("p").addClass("future");
    }
    else if (testHourNine < currentHour) {
        $("#nine").find("p").addClass("past");
    };

    // Audit 10:00
    var hourTen = document.getElementById("hourTen").textContent;
    var testHourTen = parseInt(hourTen);
    if (testHourTen === currentHour) {
        $("#ten").find("p").addClass("present");
    }
    else if (testHourTen > currentHour) {
        $("#ten").find("p").addClass("future");
    }
    else if (testHourTen < currentHour) {
        $("#ten").find("p").addClass("past");
    };

    // Audit 11:00
    var hourEleven = document.getElementById("hourEleven").textContent;
    var testHourEleven = parseInt(hourEleven);
    if (testHourEleven === currentHour) {
        $("#eleven").find("p").addClass("present");
    }
    else if (testHourEleven > currentHour) {
        $("#eleven").find("p").addClass("future");
    }
    else if (testHourEleven < currentHour) {
        $("#eleven").find("p").addClass("past");
    };

    // Audit 12:00
    var hourTwelve = document.getElementById("hourTwelve").textContent;
    var testHourTwelve = parseInt(hourTwelve);
    if (testHourTwelve === currentHour) {
        $("#twelve").find("p").addClass("present");
    }
    else if (testHourTwelve > currentHour) {
        $("#twelve").find("p").addClass("future");
    }
    else if (testHourTwelve < currentHour) {
        $("#twelve").find("p").addClass("past");
    };

    // Audit 13:00
    var hourThirteen = document.getElementById("hourThirteen").textContent;
    var testHourThirteen = parseInt(hourThirteen);
    if (testHourThirteen === currentHour) {
        $("#thirteen").find("p").addClass("present");
    }
    else if (testHourThirteen > currentHour) {
        $("#thirteen").find("p").addClass("future");
    }
    else if (testHourThirteen < currentHour) {
        $("#thirteen").find("p").addClass("past");
    };

    // Audit 14:00
    var hourFourteen = document.getElementById("hourFourteen").textContent;
    var testHourFourteen = parseInt(hourFourteen);
    if (testHourFourteen === currentHour) {
        $("#fourteen").find("p").addClass("present");
    }
    else if (testHourFourteen > currentHour) {
        $("#fourteen").find("p").addClass("future");
    }
    else if (testHourFourteen < currentHour) {
        $("#fourteen").find("p").addClass("past");
    };

    // Audit 15:00
    var hourFifteen = document.getElementById("hourFifteen").textContent;
    var testHourFifteen = parseInt(hourFifteen);
    if (testHourFifteen === currentHour) {
        $("#fifteen").find("p").addClass("present");
    }
    else if (testHourFifteen > currentHour) {
        $("#fifteen").find("p").addClass("future");
    }
    else if (testHourFifteen < currentHour) {
        $("#fifteen").find("p").addClass("past");
    };

    // Audit 16:00
    var hourSixteen = document.getElementById("hourSixteen").textContent;
    var testHourSixteen = parseInt(hourSixteen);
    if (testHourSixteen === currentHour) {
        $("#sixteen").find("p").addClass("present");
    }
    else if (testHourSixteen > currentHour) {
        $("#sixteen").find("p").addClass("future");
    }
    else if (testHourSixteen < currentHour) {
        $("#sixteen").find("p").addClass("past");
    };

    // Audit 17:00
    var hourSeventeen = document.getElementById("hourSeventeen").textContent;
    var testHourSeventeen = parseInt(hourSeventeen);
    if (testHourSeventeen === currentHour) {
        $("#seventeen").find("p").addClass("present");
    }
    else if (testHourSeventeen > currentHour) {
        $("#seventeen").find("p").addClass("future");
    }
    else if (testHourSeventeen < currentHour) {
        $("#seventeen").find("p").addClass("past");
    };
};

auditTime();