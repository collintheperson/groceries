$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var things = ["thing1", "thing2", "thing3", "thing4"];
    var objects =[];
    things.forEach(function(thing) {
//      alert(thing);
      var newOb = $("input#" + thing).val();
      objects = objects.concat(newOb);
//      alert(userInput);
    });

    objects.sort();
    objects.forEach(function(object){
      $("ul").append("<li>" + object);
    });


    event.preventDefault();
  });
});
