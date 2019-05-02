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
    magnets =   $( "textarea").val().split("\n")
    return magnets
  };

  // Create the <div> to store the new magnets value
  function magnetCreation(){
    getUserInput()
    $(magnets).each(function(i,e) {
      ($("div").add(`<div>${magnets[i]}</div>`).addClass("drag").appendTo(document.body))

    })

  }
