
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