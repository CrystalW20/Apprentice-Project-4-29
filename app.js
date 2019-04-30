

function drag() {
  $(".drag").draggable({
    drag: function( click, ui ) {}
  })
};

// Event Handler for createMagnetButton
$(".createMagnetButton").click(function(){
  magnetCreation();

});
  // Gather the value from the User input field

  function getUserInput(){
    return $( "input[type= text]").val().replace(/(?:\r\n|\r|\n)/g, ',').split(',');
  };

  // Create the <div> to store the new magnets value
  function magnetCreation(){
    $("div").add(`<div>${getUserInput()}</div>`).addClass("drag").appendTo(document.body)
  }
