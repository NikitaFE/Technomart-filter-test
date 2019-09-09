$( function() {
  $( "#range" ).slider({
    range: true,
    min: 0,
    max: 30000,
    values: [ 0, 30000 ],
    slide: function( event, ui ) {
      $( "#min" ).val(ui.values[0]);
      $( "#max" ).val(ui.values[1]);
    }
  });
  $( "#min" ).val($( "#range" ).slider( "values", 0));
  $( "#max" ).val($( "#range" ).slider( "values", 1));
});