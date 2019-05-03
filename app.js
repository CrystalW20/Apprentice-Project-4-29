let magnets;

let index_highest = 0;
// Allow magnet divs to be draggable
function drag() {
  $(".drag").draggable({
    containment: ".fridge",
    scroll: false,
    start: meFirst
  });
}
// Update the Z index so the selected Div is on top
function meFirst() {
  $(".drag").each(function() {
    let indexCurrent = parseInt($(this).css("zIndex"), 10);
    if (indexCurrent >= index_highest) {
      index_highest = indexCurrent;
    }
  });
  $(this).css({
    "z-index": index_highest + 1
  });
}

// Event Handler for createMagnetButton
$(" .createMagnetButton").click(function() {
  magnetCreation();
  $("textarea").val("");
  drag();
});
// Gather the value from the User input field

function getUserInput() {
  magnets = $("textarea")
    .val()
    .split("\n")
    .filter(function(x) {
      return x.trim() != "";
    });
  return magnets;
}

// Create the <div> to store the new magnets value
function magnetCreation() {
  getUserInput();
  $(magnets).each(function(i, e) {
    const magnet = $(`<div>${magnets[i]}</div>`);
    magnet
      .addClass("drag")
      .appendTo($(".fridge"))
      .css({
        left: Math.random() * ($(".fridge").width() - magnet.width()),
        top: Math.random() * ($(".fridge").height() - magnet.height())
      });
  });
}

// Reset fridge and textarea
$(".reset").click(function Reset() {
  $("textarea").val("");
  $(".drag").remove();
});
