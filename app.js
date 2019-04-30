let magnets;

function drag() {
  $(".drag").draggable({
    drag: function( click, ui ) {}
  })
};

// Event Handler for createMagnetButton
$(" .createMagnetButton").click(function(){
  magnetCreation();
  $("textarea").val('')

});
  // Gather the value from the User input field

  function getUserInput(){
    let str;
    str =   $( "textarea").val().replace(/(?:\r\n|\r|\n)/g, ',');
    return magnets= str.split(',')
  };

  // Create the <div> to store the new magnets value
  function magnetCreation(){
    $("div").add(`<div>${getUserInput()}</div>`).addClass("drag").appendTo(document.body)
  }
